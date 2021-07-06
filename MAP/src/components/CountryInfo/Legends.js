import './CountryInfo.css';

const Legends = (props) => {
  const { t, dark } = props;
  return (
    <div
      style={{
        color: `${dark ? 'white' : 'black'}`
      }}
      className="legend ld-font-legend"
    >
      <dl>
        <div className="legend-item">
          <dt className="legend-green" aria-label="green" />
          <dd>{t('tdo.tabs.dailyLife.measureValues.1')}</dd>
        </div>
        <div className="legend-item">
          <dt className="legend-yellow" aria-label="yellow" />
          <dd>{t('tdo.tabs.dailyLife.measureValues.2')}</dd>
        </div>
        <div className="legend-item">
          <dt className="legend-red" aria-label="red" />
          <dd>{t('tdo.tabs.dailyLife.measureValues.3')}</dd>
        </div>
        <div className="legend-item">
          <dt className="legend-gray" aria-label="gray" />
          <dd>{t('tdo.tabs.dailyLife.measureValues.4')}</dd>
        </div>
      </dl>
    </div>
  );
};

export default Legends;
