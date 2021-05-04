import { reports } from './CountryInfo.styles.js';

const Reports = (props) => {
  const { t } = props;
  return (
    <div
      style={{
        color: `${props.dark ? 'white' : 'black'}`,
        backgroundColor: `${props.dark ? '#333333' : '#e0e0e0'}`,
      }}
      className={`${reports}`}
    >
      <h3>{t('tdo.tabs.reports.subtitle')}</h3>
      <div className="placeholder" />
    </div>
  );
};

export default Reports;
