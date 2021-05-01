import './CountryInfo.css';
import {
  travelFlight,
  travelLand,
  travelSea,
} from '../../assets/icons/icons.js';
import { TRAVEL, TRAVELTYPE, TRANSLATIONS } from './constant';
import Legends from './Legends';
const TransportDetails = (props) => {
  let { t, i18n } = props;
  return (
    <>
      <br />
      <br />
      <Legends dark={props.dark} t={t} i18n={i18n} tab="mobility" />
      <h2 className="ld-font-subheader last transport">
        {/* Transport Restrictions Text */}
        {t('tdo.tabs.mobility.subtitle')}
      </h2>
      <dl>
        <div className="ld-travel">
          <dt></dt>
          <div className="ld-travel--values">
            <dd className="ld-travel--val-icon">{travelLand}</dd>
            <dd className="ld-travel--val-icon">{travelFlight}</dd>
            <dd className="ld-travel--val-icon">{travelSea}</dd>
          </div>
        </div>
        {Object.keys(TRANSLATIONS).map((key, index) => {
          return (
            <div className="ld-travel" key={index}>
              <dt>{t(`tdo.tabs.mobility.measures.${TRANSLATIONS[key].id}`)}</dt>
              <div className="ld-travel--values">
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
          );
        })}
      </dl>
    </>
  );
};

export default TransportDetails;
