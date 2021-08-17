import { reports } from './CountryInfo.styles.js';

const Reports = (props) => {
  const { t } = props;
  return (
    <div
      className={`${reports}`}
    >
      <h3>{t('tdo.tabs.reports.subtitle')}</h3>
      <div className="placeholder" />
    </div>
  );
};

export default Reports;
