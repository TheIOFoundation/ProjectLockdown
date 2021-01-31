import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";
import css from "csz";

import {
  coronaTrackerService,
  // populationService,
  countryDetailService,
} from "../../services/services";
import _ from "lodash";

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
} from "../../assets/icons/icons.js";
import {
  offline,
  loading,
  travelFlight,
  travelLand,
  travelSea,
} from "../../assets/icons/icons.js";
import { offlineStyles, loadingStyles } from "../../style/shared.styles.scss";
import { countryInfoStyles, tabStyles, reports } from "./CountryInfo.styles.js";

// ? Wrappers

// import "./tool-tip.js";
// TODO: Change the api to give us that data
import CountriesDataList from "../../data/territoriesData";
import { useState } from "react";
import { parseWithOptions } from "date-fns/fp";

const TRAVEL = {
  1: "YES",
  2: "PARTIALLY",
  3: "NO",
  4: "UNCLEAR",
  5: "NA",
};

const MEASURE_VALUES = {
  1: "YES",
  2: "PARTIAL",
  3: "NO",
  4: "UNCLEAR",
};

const TRAVELTYPE = ["Land", "Flight", "Sea"];

const TRANSLATIONS = {
  commerce: {
    text: "Commerce",
  },
  foreigners_inbound: {
    text: "Foreigners Inbound",
  },
  foreigners_outbound: {
    text: "Foreigners Outbound",
  },
  local: {
    text: "Local",
  },
  nationals_inbound: {
    text: "Nationals Inbound",
  },
  nationals_outbound: {
    text: "Nationals Outbound",
  },
  stopovers: {
    text: "Stopovers",
  },
  cross_border_workers: {
    text: "Cross-border Workers",
  },
};

const MEASURES = [
  {
    id: "lockdown_status",
    label: "Stay Home",
    translationKey: "home",
    icon: home,
    value: "PARTIAL",
  },
  {
    id: "going_to_shops",
    label: "Shopping",
    translationKey: "shopping",
    icon: shops,
    value: "PARTIAL",
  },
  {
    id: "city_movement_restriction",
    label: "Outdoors",
    translationKey: "outdoors",
    icon: citymovement,
    value: "PARTIAL",
  },
  {
    id: "military_not_deployed",
    label: "Military",
    translationKey: "military",
    icon: military,
    value: "UNCLEAR",
  },
  {
    id: "attending_religious_sites",
    label: "Religious Sites",
    translationKey: "religious",
    icon: religion,
    value: "UNCLEAR",
  },
  {
    id: "electricity_nominal",
    label: "Electricity",
    translationKey: "electricity",
    icon: electricity,
    value: "UNCLEAR",
  },
  {
    id: "going_to_work",
    label: "Go to Work",
    translationKey: "work",
    icon: work,
    value: "PARTIAL",
  },
  {
    id: "water_nominal",
    label: "Water ensured",
    translationKey: "water",
    icon: water,
    value: "UNCLEAR",
  },
  {
    id: "academia_allowed",
    label: "Go to Schools",
    translationKey: "schools",
    icon: academia,
    value: "YES",
  },
  {
    id: "internet_nominal",
    label: "Telecom ensured",
    translationKey: "internet",
    icon: internet,
    value: "UNCLEAR",
  },
];

const tabs = [
  {
    id: 1,
    name: "Daily Life",
  },
  {
    id: 2,
    name: "Mobility",
  },
  {
    id: 3,
    name: "Reports",
  },
];

function createMeasures(apiMeasures) {
  // return MEASURES.map((measure) => {
  //   const apiData = apiMeasures?.find((m) => m.label === measure.id);

  //   return {
  //     ...measure,
  //     value: MEASURE_VALUES[apiData.value] ?? MEASURE_VALUES[4],
  //   };
  console.log("createMeasures function");
  // });
}

// flight: Array(8)
// 0: {label: "local", value: null, name: "flight.local", #npi+num+flight+local: null}
// 1: {label: "nationals_inbound", value: null, name: "flight.nationals_inbound", #npi+num+flight+nationals+inbound: null}
// 2: {label: "nationals_outbound", value: null, name: "flight.nationals_outbound", #npi+num+flight+nationals+outbound: null}
// 3: {label: "foreigners_inbound", value: null, name: "flight.foreigners_inbound", #npi+num+flight+foreigners+inbound: null}
// 4: {label: "foreigners_outbound", value: null, name: "flight.foreigners_outbound", #npi+num+flight+foreigners+outbound: null}
// 5: {label: "cross_border_workers", value: null, name: "flight.cross_border_workers", #npi+num+flight+cross+border_workers: null}
// 6: {label: "commerce", value: null, name: "flight.commerce", #npi+num+flight+commerce: null}
// 7: {label: "stopovers", value: null, name: "flight.stopovers", #npi+num+flight+stopovers: null}
// length: 8
// __proto__: Array(0)
// iso: "EN"
// land: Array(8)
// 0: {label: "local", value: null, name: "land.local", #npi+num+land+local: null}
// 1: {label: "nationals_inbound", value: null, name: "land.nationals_inbound", #npi+num+land+nationals+inbound: null}
// 2: {label: "nationals_outbound", value: null, name: "land.nationals_outbound", #npi+num+land+nationals+outbound: null}
// 3: {label: "foreigners_inbound", value: null, name: "land.foreigners_inbound", #npi+num+land+foreigners+inbound: null}
// 4: {label: "foreigners_outbound", value: null, name: "land.foreigners_outbound", #npi+num+land+foreigners+outbound: null}
// 5: {label: "cross_border_workers", value: null, name: "land.cross_border_workers", #npi+num+land+cross+border_workers: null}
// 6: {label: "commerce", value: null, name: "land.commerce", #npi+num+land+commerce: null}
// 7: {label: "stopovers", value: null, name: "land.stopovers", #npi+num+land+stopovers: null}
// length: 8
// __proto__: Array(0)
// max_gathering: Array(1)
// 0: {label: "max_gathering", value: null, name: "max_gathering", #npi+num+max+gathering: null}
// length: 1
// __proto__: Array(0)
// measure: Array(10)
// 0: {label: "lockdown_status", value: null, name: "measure.lockdown_status", #npi+num+measure+lockdown+status: null}
// 1: {label: "city_movement_restriction", value: null, name: "measure.city_movement_restriction", #npi+num+measure+city+movement_restriction: null}
// 2: {label: "attending_religious_sites", value: null, name: "measure.attending_religious_sites", #npi+num+measure+attending+religious_sites: null}
// 3: {label: "going_to_work", value: null, name: "measure.going_to_work", #npi+num+measure+going+to_work: null}
// 4: {label: "military_not_deployed", value: null, name: "measure.military_not_deployed", #npi+num+measure+military+not_deployed: null}
// 5: {label: "academia_allowed", value: null, name: "measure.academia_allowed", #npi+num+measure+academia+allowed: null}
// 6: {label: "going_to_shops", value: null, name: "measure.going_to_shops", #npi+num+measure+going+to_shops: null}
// 7: {label: "electricity_nominal", value: null, name: "measure.electricity_nominal", #npi+num+measure+electricity+nominal: null}
// 8: {label: "water_nominal", value: null, name: "measure.water_nominal", #npi+num+measure+water+nominal: null}
// 9: {label: "internet_nominal", value: null, name: "measure.internet_nominal", #npi+num+measure+internet+nominal: null}
// length: 10
// __proto__: Array(0)
// sea: Array(8)
// 0: {label: "local", value: null, name: "sea.local", #npi+num+sea+local: null}
// 1: {label: "nationals_inbound", value: null, name: "sea.nationals_inbound", #npi+num+sea+nationals+inbound: null}
// 2: {label: "nationals_outbound", value: null, name: "sea.nationals_outbound", #npi+num+sea+nationals+outbound: null}
// 3: {label: "foreigners_inbound", value: null, name: "sea.foreigners_inbound", #npi+num+sea+foreigners+inbound: null}
// 4: {label: "foreigners_outbound", value: null, name: "sea.foreigners_outbound", #npi+num+sea+foreigners+outbound: null}
// 5: {label: "cross_border_workers", value: null, name: "sea.cross_border_workers", #npi+num+sea+cross+border_workers: null}
// 6: {label: "commerce", value: null, name: "sea.commerce", #npi+num+sea+commerce: null}
// 7: {label: "stopovers", value: null, name: "sea.stopovers", #npi+num+sea+stopovers: null}

const CountryInfo = (props) => {
  const [currentTab, setCurrentTab] = useState(1);
  const { i18n } = props;
  const [coronaData, setCoronaData] = useState(
    coronaTrackerService.getCountry({
      iso2: props.iso2,
      date: props.date,
      startDate: props.startDate,
      endDate: props.endDate,
    })
  );
  const [countryDetails, setCountryDetails] = useState({
    iso2: props.iso2,
    date: props.date,
    startDate: props.date,
    endDate: props.endDate,
    daysRange: props.dayRange,
  });
  const [populationData, setPopulationData] = useState(
    // countryDetailService.getDetails({
    {
      iso2: props.iso2,
      date: props.date,
      startDate: props.startDate,
      endDate: props.endDate,
      daysRange: props.daysRange,
    }
    // })
  );
  // async componentDidUpdate(prevProps) {
  //     if (this.props.date !== prevProps.date) {
  //       const { startDate, endDate, daysRange } = this.props;
  //       this.setState({
  //         coronaData: await coronaTrackerService.getCountry({
  //           iso2: this.props.iso2,
  //           date: this.props.date,createMeasures
  //           startDate,
  //           endDate,
  //         }),
  //         countryDetails: await countryDetailService.getDetails({
  //           iso2: this.props.iso2,
  //           date: this.props.date,
  //           startDate,
  //           endDate,
  //           daysRange,
  //         }),
  //       });
  //     }
  //   }

  //   async componentWillMount() {
  //     const { startDate, endDate, daysRange } = this.props;
  //     this.setState({
  //       coronaData: await coronaTrackerService.getCountry({
  //         iso2: this.props.iso2,
  //         date: this.props.date,
  //         startDate,
  //         endDate,
  //       }),
  //       populationData: await populationService.getPopulation(),
  //       countryDetails: await countryDetailService.getDetails({
  //         iso2: this.props.iso2,
  //         date: this.props.date,
  //         startDate,
  //         endDate,
  //         daysRange,
  //       }),
  // });
  //   }

  const changeTab = (newTab) => {
    setCurrentTab(newTab);
  };

  let territoryData = CountriesDataList[props.wikidata];
  /** If the user is offline, and theres no response, or the response has failed */
  // if (!navigator.onLine) {
  //   if (
  //     coronaData?.status !== "success" ||
  //     populationData?.data?.status !== "success" ||
  //     countryDetails?.status !== "success"
  //   ) {
  //     return (
  //       <div className={`countryInfo ${offlineStyles}`}>
  //         {" "}
  //         {offline}
  //         <b>You are not connected to the internet</b>
  //         <p>
  //           Information for this country can't be displayed because you are
  //           currently offline. Please check your internet connection.
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  /** If there is no data available but the user is online, show loading state */
  // if (!coronaData && !populationData && !countryDetails && navigator.onLine) {
  //   return (
  //     <div className={`countryInfo loader ${loadingStyles}`}>${loading}</div>
  //   );
  // }

  /** On error & on succes, continue to render */

  return (
    <>
      <div className={tabStyles}>
        {tabs.map((tab) => (
          <div
            onClick={() => changeTab(tab.id)}
            class={`tab ${currentTab === tab.id ? "active" : ""}`}
          >
            {/* tdo.tabs.{tab.name}.name */}
            {tab.name}

            {/* {i18n.t(`tdo.tabs.${tab.name}.name`)} */}
          </div>
        ))}
        <button onClick={props.onClose}>{closeIcon}</button>
      </div>
      <div class={`countryInfo ${countryInfoStyles}`}>
        {currentTab === 1 ? (
          <CountryDetails
            date={props.date}
            country={props.country}
            coronaData={coronaData.data?.find((corona) =>
              isSameDay(new Date(corona.last_updated), props.date)
            )}
            // populationData={populationData?.data[props.iso2]}
            countryDetails={countryDetails}
            i18n={i18n}
          />
        ) : currentTab === 2 ? (
          <TransportDetails i18n={i18n} countryDetails={countryDetails} />
        ) : (
          <>
            <Reports i18n={i18n} />
            <div class="link-container">
              <a
                class="ld-link"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  territoryData
                    ? `https://docs.google.com/a/theiofoundation.org/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid=${territoryData.id}`
                    : "tiof.click/LockdownData"
                }
                target="_blank"
              >
                {/* {_.i18n.t(`tdo.contributionLinks.firstLink`)} */}
              </a>
              <a
                class="ld-link"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform?entry.333088473=${
                  territoryData ? territoryData.region : "REGION"
                }&entry.1690056710=${
                  territoryData ? territoryData.territory : "TERRITORY"
                }`}
                target="_blank"
              >
                {i18n.t(`tdo.contributionLinks.secondLink`)}
              </a>
              {/* <!-- <a class="ld-link" target="_blank" rel="noopener noreferrer" href="#" target="_blank">
            ${_.i18n.t(`tdo.contributionLinks.thirdLink`)}
          </a> --> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const CountryDetails = (props) => {
  let { i18n } = props;
  let { coronaData, populationData, countryDetails, country, date } = props;
  return (
    <>
      <h2 class="ld-font-subheader">
        <span>India</span> <span>{format(date, "dd/MM/yyyy")}</span>
      </h2>
      <dl class="data">
        <div class="data-entry is-half">
          <dt>{i18n.t("Population")}</dt>
          <dd class="data-value">
          1,352,617,328
            {/* {!isNaN(Number(populationData?.Population))
              ? Number(populationData?.Population).toLocaleString() ?? "Error"
              : i18n.t("tdo.tabs.dailyLife.noResults")} */}
          </dd>
        </div>
        <div class="data-entry is-half">
          <dt>{i18n.t("Maximum assembly")}</dt>
          <dd class="data-value">
          N/A
            {/* {countryDetails?.max_gathering ??
              i18n.t("tdo.tabs.dailyLife.noResults")} */}
          </dd>
        </div>
        <div class="data-entry is-third">
          <dt>{i18n.t("Cases")}</dt>
          <dd class="data-value">
          10,747,091
            {/* {coronaData?.total_confirmed
              ? Number(coronaData?.total_confirmed).toLocaleString()
              : i18n.t("tdo.tabs.dailyLife.noResults")} */}
          </dd>
        </div>
        <div class="data-entry is-third">
          <dt>{i18n.t("Recoveries")}</dt>
          <dd class="data-value">
          10,423,125
            {/* {coronaData?.total_recovered
              ? Number(coronaData?.total_recovered).toLocaleString()
              : i18n.t("tdo.tabs.dailyLife.noResults")} */}
          </dd>
        </div>
        <div class="data-entry is-third">
          <dt>{i18n.t("Deaths")}</dt>
          <dd class="data-value">
          154,312
            {/* {coronaData?.total_deaths
              ? Number(coronaData?.total_deaths).toLocaleString()
              : i18n.t("tdo.tabs.dailyLife.noResults")} */}
          </dd>
        </div>
      </dl>
      <Legends i18n={i18n} tab="dailyLife" />
      {/* {countryDetails.status === "success" ? ( */}
      <>
        <h2 class="ld-font-subheader last">
          {i18n.t("Daily life (restrictions)")}
        </h2>
        <ul class="measures">
          {MEASURES.map((m) => (
            <li>
              <div class="measure-wrapper">
                <div
                  aria-labelledby={`measure-label-${m.id}`}
                  class={`measure measure-${m.value ? m.value : null}`}
                  aria-label={`${m.value && m.value.toLowerCase()}`}
                >
                  {m.icon}
                </div>
                <span id={`measure-label-${m.id}`} class="measure-label">
                  {/* {i18n.t(`tdo.tabs.dailyLife.measures.${m.translationKey}`)} */}

                  {i18n.t(`${m.label}`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
      {/* ) : (
        <div class="dialog">
          <h2>Measures</h2>
          Failed to get data for this country.
        </div>
      )} */}
    </>
  );
};
const TransportDetails = (props) => {
  let { countryDetails, i18n } = props;
  return (
    <>
      {/* hey  */}
      {/* {countryDetails.status === "success" ? ( */}
      {/* <> */}
      <br />
      <br />
      <Legends i18n={i18n} tab="mobility" />
      <h2 class="ld-font-subheader last transport">
        {/* {i18n.t("tdo.tabs.mobility.subtitle")}
         */}
        Transport Restrictions
      </h2>
      <dl>
        <div class="ld-travel">
          <dt></dt>
          <div class="ld-travel--values">
            <dd class="ld-travel--val-icon">{travelLand}</dd>
            <dd class="ld-travel--val-icon">{travelFlight}</dd>
            <dd class="ld-travel--val-icon">{travelSea}</dd>
          </div>
        </div>
        {Object.keys(TRANSLATIONS).map((key, j) => {
          console.log(key)
          return (
            <div class="ld-travel">
              <dt>
                {/* {i18n.t(
                      `tdo.tabs.mobility.measures.${TRANSLATIONS[key].text}`
                    )} */}
                {/* {i18n.t( */}
                {TRANSLATIONS[key].text}
                {/* )} */}
              </dt>
              <div class="ld-travel--values">
                {Object.keys(TRANSLATIONS[key]).map((val, i) =>  (
                  <dd
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
          );
        })}
      </dl>
      {/* </> */}
      {/* ) : ( */}
      {/* <div class="dialog">
          <h2>Measures</h2>
          Failed to get data for this country.
        </div> */}
      {/* ) */}
      {/* } */}
    </>
  );
};

const Legends = (props) => {
  console.log(props);
  let { i18n, tab } = props;
  return (
    <div class="legend ld-font-legend">
      <dl>
        <div class="legend-item">
          <dt class="legend-green" aria-label="green"></dt>
          <dd>{i18n.t(MEASURE_VALUES[1])}</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-yellow" aria-label="yellow"></dt>
          <dd>{i18n.t(MEASURE_VALUES[2])}</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-red" aria-label="red"></dt>
          <dd>{i18n.t(MEASURE_VALUES[3])}</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-gray" aria-label="gray"></dt>
          <dd>{i18n.t(MEASURE_VALUES[4])}</dd>
        </div>
      </dl>
    </div>
  );
};

const Reports = (props) => {
  // let { i18n } = _;
  return (
    <div className={`${reports}`}>
      <h3>{props.i18n.t(`Coming Soon `)}</h3>
      <div className="placeholder"></div>
    </div>
  );
};

export default CountryInfo;
