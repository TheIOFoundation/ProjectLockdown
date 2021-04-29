import './CountryInfo.css'
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

  export default Legends;