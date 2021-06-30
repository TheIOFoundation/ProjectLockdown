import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchTotals } from '../../services';
import './StatsBox.css';
import { toBool } from '../../utils/utils';

const separateNumber = (number, format) => {
  const nfObject = new Intl.NumberFormat(format);
  return nfObject.format(+number);
};
const StatsBox = ({
  dark,
  startDate,
  endDate,
  selectedDate = '2021-01-01',
  daysRange = 10,
  locale = 'en-US'
}) => {
  const [totalsData, setTotalsData] = useState({
    lockdown: 0,
    affected: 0,
  });
  dark = toBool(dark)

  const {
    t,
    // ,i18n
  } = useTranslation();

  useEffect(() => {
    fetchTotals(startDate, endDate, selectedDate, daysRange)
      .then((res) => {
        const { affected } = res;
        res.affected = separateNumber(affected, locale);
        setTotalsData(res);
      })
      .catch((e) => console.log(e));
  }, [startDate, endDate, selectedDate, daysRange, locale]);
  return (
    <div
      style={{
        backgroundColor: `${dark ? '#333333' : 'white'}`,
        marginTop: '3vh',
      }}
      className={`Totals ${dark && 'dark'}`}
    >
      <div className="LeftDiv">
        <div className="label">{t('header.totals.territoriesLockdown')}</div>
        {/* <div className='data'>{totalsData[Object.keys(totalsData)[0]].lockdown}</div> */}
        <div className="data">{totalsData.lockdown}</div>
      </div>
      <div>
        <div className="label">{t('header.totals.peopleAffected')}</div>
        {/* <div className='data'>{totalsData[Object.keys(totalsData)[0]].affected}</div> */}
        <div className="data">{totalsData.affected}</div>
      </div>
    </div>
  );
};

export default StatsBox;
