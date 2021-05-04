import Legends from './Legends';
import { MEASURES } from './constant';

const CountryDetails = (props) => {
  let { i18n, t } = props;
  let { coronaData, country, date, dark } = props;

  return (
    <div
      style={{
        color: `${dark ? 'white' : 'black'}`,
        backgroundColor: `${dark ? '#333333 !important' : '#e0e0e0'}`,
      }}
    >
      <h2 className="ld-font-subheader">
        <span>{country}</span>
        <span>{date}</span>
      </h2>
      <dl className="data">
        <div className="data-entry is-half">
          <dt>{t('tdo.tabs.dailyLife.stats.population')}</dt>
          <dd className="data-value">1,352,617,328</dd>
        </div>
        <div className="data-entry is-half">
          <dt>{t('tdo.tabs.dailyLife.stats.max_assembly')}</dt>
          <dd className="data-value">N/A</dd>
        </div>
        <div className="data-entry is-third">
          <dt>{t('tdo.tabs.dailyLife.stats.cases')}</dt>
          <dd className="data-value">10,747,091</dd>
        </div>
        <div className="data-entry is-third">
          <dt>{t('tdo.tabs.dailyLife.stats.recoveries')}</dt>
          <dd className="data-value">10,423,125</dd>
        </div>
        <div className="data-entry is-third">
          <dt>{t('tdo.tabs.dailyLife.stats.deaths')}</dt>
          <dd className="data-value">{coronaData?.total_deaths}</dd>
        </div>
      </dl>
      <Legends dark={props.dark} t={t} i18n={i18n} tab="dailyLife" />
      <>
        <h2 className="ld-font-subheader last">
          {t('tdo.tabs.dailyLife.subtitle')}
        </h2>
        <ul className="measures">
          {MEASURES.map((m) => (
            <li key={m.id}>
              <div className="measure-wrapper">
                <div
                  aria-labelledby={`measure-label-${m.id}`}
                  className={`measure measure-${m.value ? m.value : null}`}
                  aria-label={`${m.value && m.value.toLowerCase()}`}
                >
                  {m.icon}
                </div>
                <span id={`measure-label-${m.id}`} className="measure-label">
                  {t(`tdo.tabs.dailyLife.measures.${m.translationKey}`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};
export default CountryDetails;
