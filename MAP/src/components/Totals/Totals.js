import React, { useEffect, useState } from 'react'
import { fetchTotals } from '../../services'
import { useTranslation } from 'react-i18next';
import './Totals.css'

const separateNumber = (number) => {
  let nfObject = new Intl.NumberFormat('en-US')
  let output = nfObject.format(+number)
  return output
}
const Totals = ({
  dark,
  startDate,
  endDate,
  selectedDate = '2021-01-01',
  daysRange = 10,
}) => {
  const [totalsData, setTotalsData] = useState({
    lockdown: 0,
    affected: 0,
  })

  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchTotals(startDate, endDate, selectedDate, daysRange)
      .then((res) => {
        const { affected } = res
        res.affected = separateNumber(affected)
        setTotalsData(res)
        console.log(res[Object.keys(res)[0]])
      })
      .catch((e) => console.log(e))
  }, [startDate, endDate, selectedDate, daysRange])
  return (
    <div
      style={{
        backgroundColor: `${dark ? '#333333' : 'white'}`,
        marginTop: '3vh',
      }}
      className={`Totals ${dark && 'dark'}`}
    >
      <div className='LeftDiv'>
        <div className='label'>{t("header.totals.territoriesLockdown")}</div>
        {/* <div className='data'>{totalsData[Object.keys(totalsData)[0]].lockdown}</div> */}
        <div className='data'>{totalsData.lockdown}</div>
      </div>
      <div>
        <div className='label'>{t("header.totals.peopleAffected")}</div>
        {/* <div className='data'>{totalsData[Object.keys(totalsData)[0]].affected}</div> */}
        <div className='data'>{totalsData.affected}</div>
      </div>
    </div>
  )
}

export default Totals
