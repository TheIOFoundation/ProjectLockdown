import React, { useEffect, useState } from 'react'
import isSameDay from 'date-fns/isSameDay'
import './CountryInfo.css'
import { useTranslation } from 'react-i18next'
import {
  home,
  citymovement,
  religion,
  work,
  military,
  academia,
  shops,
  electricity,
  water,
  internet,
  close as closeIcon,
} from '../../assets/icons/icons.js'
import {
  travelFlight,
  travelLand,
  travelSea,
} from '../../assets/icons/icons.js'
import { countryInfoStyles, tabStyles, reports } from './CountryInfo.styles.js'

import { getCoronaData, getCoronaDetailService } from '../../services/coronaTrackerService'


const TRAVEL = {
  1: 'YES',
  2: 'PARTIALLY',
  3: 'NO',
  4: 'UNCLEAR',
  5: 'NA',
}

const TRAVELTYPE = ['Land', 'Flight', 'Sea']

const TRANSLATIONS = {
  commerce: {
    id: 'commerce',
    text: 'Commerce',
  },
  foreigners_inbound: {
    id: 'foreignersInbound',
    text: 'Foreigners Inbound',
  },
  foreigners_outbound: {
    id: 'foreignersOutbound',
    text: 'Foreigners Outbound',
  },
  local: {
    id: 'local',
    text: 'Local',
  },
  nationals_inbound: {
    id: 'nationalsInbound',
    text: 'Nationals Inbound',
  },
  nationals_outbound: {
    id: 'nationalsOutbound',
    text: 'Nationals Outbound',
  },
  stopovers: {
    id: 'stopovers',
    text: 'Stopovers',
  },
  cross_border_workers: {
    id: 'crossBorderWorkers',
    text: 'Cross-border Workers',
  },
}

const MEASURES = [
  {
    id: 'lockdown_status',
    label: 'Stay Home',
    translationKey: 'home',
    icon: home,
    value: 'PARTIAL',
  },
  {
    id: 'going_to_shops',
    label: 'Shopping',
    translationKey: 'shopping',
    icon: shops,
    value: 'PARTIAL',
  },
  {
    id: 'city_movement_restriction',
    label: 'Outdoors',
    translationKey: 'outdoors',
    icon: citymovement,
    value: 'PARTIAL',
  },
  {
    id: 'military_not_deployed',
    label: 'Military',
    translationKey: 'military',
    icon: military,
    value: 'UNCLEAR',
  },
  {
    id: 'attending_religious_sites',
    label: 'Religious Sites',
    translationKey: 'religious',
    icon: religion,
    value: 'UNCLEAR',
  },
  {
    id: 'electricity_nominal',
    label: 'Electricity',
    translationKey: 'electricity',
    icon: electricity,
    value: 'UNCLEAR',
  },
  {
    id: 'going_to_work',
    label: 'Go to Work',
    translationKey: 'work',
    icon: work,
    value: 'PARTIAL',
  },
  {
    id: 'water_nominal',
    label: 'Water ensured',
    translationKey: 'water',
    icon: water,
    value: 'UNCLEAR',
  },
  {
    id: 'academia_allowed',
    label: 'Go to Schools',
    translationKey: 'schools',
    icon: academia,
    value: 'YES',
  },
  {
    id: 'internet_nominal',
    label: 'Telecom ensured',
    translationKey: 'internet',
    icon: internet,
    value: 'UNCLEAR',
  },
]

const tabs = [
  {
    id: 1,
    name: 'Daily Life',
  },
  {
    id: 2,
    name: 'Mobility',
  },
  {
    id: 3,
    name: 'Reports',
  },
]


const CountryInfo = (props) => {
  const [currentTab, setCurrentTab] = useState(1)
  const { i18n } = props
  const [coronaData, setCoronaData] = useState()
  const [countryDetails, 
    // setCountryDetails
  ] = useState()
  const { t } = useTranslation()

  

  const changeTab = (newTab) => {
    setCurrentTab(newTab)
  }

  let territoryData = ''

  useEffect(() => {
    const { startDate, endDate } = props

    getCoronaData(props.iso2, startDate, endDate)
      .then((response) => {console.log(response)
      setCoronaData(response)})
      .catch((e) => console.log(e))

      getCoronaDetailService(props.iso2, startDate, endDate).then(response => response).catch(e => console.log(e))
    
  }, [props])

  let firstLink = territoryData
      ? `https://docs.google.com/a/theiofoundation.org/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid=${territoryData.id}`
      : 'tiof.click/LockdownData'
  let region = territoryData ? territoryData.region : 'REGION'
  let territory = territoryData ? territoryData.territory : 'TERRITORY'

  return (
    <div className={`${props.dark ? 'dark' : ''} CountryInfo`}>
      <div
        style={{
          color: `${props.dark ? 'white' : 'black'}`,
          backgroundColor: `${props.dark ? '#333333' : '#e0e0e0'}`,
        }}
        className={tabStyles}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`tab ${currentTab === tab.id ? 'active' : ''}`}
          >
            {tab.name}
          </div>
        ))}
        <button onClick={props.onClose}>{closeIcon}</button>
      </div>
      <div
        style={{
          color: `${props.dark ? 'white' : 'black'}`,
          backgroundColor: `${props.dark ? '#333333!important' : '#e0e0e0'}`,
        }}
        className={`countryInfo ${countryInfoStyles} ${
          props.dark ? 'dark' : ''
        }`}
      >
        {currentTab === 1 ? (
          <CountryDetails
            dark={props.dark}
            date={props.date}
            country={props.country}
            t={t}
            coronaData={coronaData?.data?.find((corona) =>
              isSameDay(new Date(corona.last_updated), props.date)
            )}
            countryDetails={countryDetails}
            i18n={i18n}
          />
        ) : currentTab === 2 ? (
          <TransportDetails
            t={t}
            dark={props.dark}
            i18n={i18n}
            countryDetails={countryDetails}
          />
        ) : (
          <>
            <Reports t={t} i18n={i18n} dark={props.dark} />
            <div className='link-container'>
              <a
                className='ld-link'
                target='_blank'
                rel='noopener noreferrer'
                href={firstLink}
              >
              </a>
              <a
                className='ld-link'
                target='_blank'
                rel='noopener noreferrer'
                href={`https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform?entry.333088473=${region}&entry.1690056710=${territory}`}
              >
                {t(`tdo.contributionLinks.secondLink`)}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const CountryDetails = (props) => {
  let { i18n, t } = props
  let { coronaData, country, date, dark } = props

  return (
    <div
      style={{
        color: `${dark ? 'white' : 'black'}`,
        backgroundColor: `${dark ? '#333333 !important' : '#e0e0e0'}`,
      }}
    >
      <h2 class='ld-font-subheader'>
        <span>{country}</span>
        <span>{date}</span>
      </h2>
      <dl className='data'>
        <div className='data-entry is-half'>
          <dt>{t('tdo.tabs.dailyLife.stats.population')}</dt>
          <dd className='data-value'>
            1,352,617,328
          </dd>
        </div>
        <div className='data-entry is-half'>
          <dt>{t('tdo.tabs.dailyLife.stats.max_assembly')}</dt>
          <dd className='data-value'>
            N/A
          </dd>
        </div>
        <div className='data-entry is-third'>
          <dt>{t('tdo.tabs.dailyLife.stats.cases')}</dt>
          <dd className='data-value'>
            10,747,091
          </dd>
        </div>
        <div className='data-entry is-third'>
          <dt>{t('tdo.tabs.dailyLife.stats.recoveries')}</dt>
          <dd className='data-value'>
            10,423,125
          </dd>
        </div>
        <div className='data-entry is-third'>
          <dt>{t('tdo.tabs.dailyLife.stats.deaths')}</dt>
          <dd class='data-value'>
            {coronaData?.total_deaths}
          </dd>
        </div>
      </dl>
      <Legends dark={props.dark} t={t} i18n={i18n} tab='dailyLife' />
      <>
        <h2 className='ld-font-subheader last'>
          {t('tdo.tabs.dailyLife.subtitle')}
        </h2>
        <ul className='measures'>
          {MEASURES.map((m) => (
            <li key={m.id}>
              <div className='measure-wrapper'>
                <div
                  aria-labelledby={`measure-label-${m.id}`}
                  className={`measure measure-${m.value ? m.value : null}`}
                  aria-label={`${m.value && m.value.toLowerCase()}`}
                >
                  {m.icon}
                </div>
                <span id={`measure-label-${m.id}`} className='measure-label'>
                  {t(`tdo.tabs.dailyLife.measures.${m.translationKey}`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  )
}
const TransportDetails = (props) => {
  let { t, i18n } = props
  return (
    <>
      <br />
      <br />
      <Legends dark={props.dark} t={t} i18n={i18n} tab='mobility' />
      <h2 className='ld-font-subheader last transport'>
        {/* Transport Restrictions Text */}
        {t('tdo.tabs.mobility.subtitle')}
      </h2>
      <dl>
        <div className='ld-travel'>
          <dt></dt>
          <div className='ld-travel--values'>
            <dd className='ld-travel--val-icon'>{travelLand}</dd>
            <dd className='ld-travel--val-icon'>{travelFlight}</dd>
            <dd className='ld-travel--val-icon'>{travelSea}</dd>
          </div>
        </div>
        {Object.keys(TRANSLATIONS).map((key, index) => {
          return (
            <div className='ld-travel' key={index}>
              <dt>
                {t(`tdo.tabs.mobility.measures.${TRANSLATIONS[key].id}`)}
              </dt>
              <div className='ld-travel--values'>
                {Object.keys(TRANSLATIONS[key]).map((val, i) => (
                  <dd
                    key={i}
                    aria-label={`${TRAVELTYPE[i]}: ${
                      TRAVEL[val]?.toLowerCase() ?? TRAVEL[4].toLowerCase()
                    }`}
                    data-tooltip={`${
                      TRAVEL[val]?.toLowerCase() ?? TRAVEL[4].toLowerCase()
                    }`}
                    className={`ld-travel--symbol ld-travel--val-${
                      TRAVEL[val] ?? TRAVEL[5]
                    }`}
                  ></dd>
                ))}
              </div>
            </div>
          )
        })}
      </dl>
    </>
  )
}

const Legends = (props) => {
  let { t, dark } = props
  return (
    <div
      style={{
        color: `${dark ? 'white' : 'black'}`,
        backgroundColor: `${dark ? '#333333' : '#e0e0e0'}`,
      }}
      className='legend ld-font-legend'
    >
      <dl>
        <div className='legend-item'>
          <dt className='legend-green' aria-label='green'></dt>
          <dd>{t('tdo.tabs.dailyLife.measureValues.1')}</dd>
        </div>
        <div className='legend-item'>
          <dt className='legend-yellow' aria-label='yellow'></dt>
          <dd>{t('tdo.tabs.dailyLife.measureValues.2')}</dd>
        </div>
        <div className='legend-item'>
          <dt className='legend-red' aria-label='red'></dt>
          <dd>{t('tdo.tabs.dailyLife.measureValues.3')}</dd>
        </div>
        <div className='legend-item'>
          <dt className='legend-gray' aria-label='gray'></dt>
          <dd>{t('tdo.tabs.dailyLife.measureValues.4')}</dd>
        </div>
      </dl>
    </div>
  )
}

const Reports = (props) => {
  let { t } = props
  return (
    <div
      style={{
        color: `${props.dark ? 'white' : 'black'}`,
        backgroundColor: `${props.dark ? '#333333' : '#e0e0e0'}`,
      }}
      className={`${reports}`}
    >
      <h3>{t('tdo.tabs.reports.subtitle')}</h3>
      <div className='placeholder'></div>
    </div>
  )
}

export default CountryInfo
