import { useEffect, useState , useContext } from 'react';
import isSameDay from 'date-fns/isSameDay';
import './CountryInfo.css';
import { useTranslation } from 'react-i18next';
import CountryDetails from './CountryDetails';
import TransportDetails from './TransportDetails';
import Reports from './Reports';
import { close as closeIcon } from '../../assets/icons/icons.js';
import { countryInfoStyles, tabStyles } from './CountryInfo.styles.js';
import {
  getCoronaData,
  getCoronaDetailService,
} from '../../services/coronaTrackerService';
import AppContext from '../../contexts/AppContext';
import { toBool } from '../../utils/utils';

const CountryInfo = (props) => {
  const dark =  toBool(props.dark)  || false;
  const environment = useContext(AppContext)
  const [currentTab, setCurrentTab] = useState(1);
  const { i18n } = props;
  const [coronaData, setCoronaData] = useState();
  const [tabs, setTabs] = useState([])
  const [
    countryDetails,
    // setCountryDetails
  ] = useState();
  const { t } = useTranslation();
  const changeTab = (newTab) => {
    setCurrentTab(newTab);
  };

  let territoryData = '';

  useEffect(() => {
    const { startDate, endDate } = props;

    const {overlay = {}} = environment['environment'];
    const  allTab=  overlay.tabs || []
    const allTabs = allTab.map(tab => { 
      return {
        id: tab.id,
        name: tab.title,
        isVisible: tab.is_visible || false
      }
    })
    setTabs([...allTabs]);


    getCoronaData(props.iso2, startDate, endDate)
      .then((response) => {
        console.log(response);
        setCoronaData(response);
      })
      .catch((e) => console.log(e));

    getCoronaDetailService(props.iso2, startDate, endDate)
      .then((response) => response)
      .catch((e) => console.log(e));
  }, [environment, props]);

  let firstLink = territoryData
    ? `https://docs.google.com/a/theiofoundation.org/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid=${territoryData.id}`
    : 'tiof.click/LockdownData';
  let region = territoryData ? territoryData.region : 'REGION';
  let territory = territoryData ? territoryData.territory : 'TERRITORY';

  return (
    <div className={`container ${dark ? 'dark' : ''} CountryInfo`}>
      <div
        style={{
          color: `${dark ? 'white' : 'black'}`
        }}
        className={tabStyles}
      >
        {tabs.map((tab) => (
          tab.isVisible && <div
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
        style={{minHeight: 'inherit'}}
        className={`countryInfo ${countryInfoStyles} ${
          dark ? 'dark' : ''
        }`}
      >
        {currentTab === 1 ? (
          <CountryDetails
            dark={dark}
            date={props.date}
            country={props.country}
            t={t}
            coronaData={coronaData?.data?.find((corona) =>
              isSameDay(new Date(corona.last_updated), props.date),
            )}
            countryDetails={countryDetails}
            i18n={i18n}
          />
        ) : currentTab === 2 ? (
          <TransportDetails
            t={t}
            dark={dark}
            i18n={i18n}
            countryDetails={countryDetails}
          />
        ) : (
          <>
            <Reports t={t} i18n={i18n} dark={dark} />
            <div className="link-container">
              <a
                className="ld-link"
                target="_blank"
                rel="noopener noreferrer"
                href={firstLink}
              >
               {t(`tdo.contributionLinks.firstLink`)}</a>

              <a
                className="ld-link"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform?entry.333088473=${region}&entry.1690056710=${territory}`}
              >
                {t(`tdo.contributionLinks.secondLink`)}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
