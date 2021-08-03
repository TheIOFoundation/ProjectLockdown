import React, { useState, useEffect } from 'react';
import styles from './DataDisplay.module.scss';
import { useTranslation } from "react-i18next";

const separateNumber = (number, format) => {
    const nfObject = new Intl.NumberFormat(format);
    return nfObject.format(+number);
};

const DataDisplay = ({ totalsData, width }) => {
    const { t } = useTranslation();
    const [totals, setTotals] = useState('');

    useEffect(() => {
        let fullTotals = separateNumber(totalsData.affected, t('languageId'));
        if (width <= 780) {
            fullTotals = fullTotals.replace(' ','.')
                .replace(',','.');
            const cutoffDigit = fullTotals.indexOf('.') + 2;
            fullTotals = fullTotals.substring(0, cutoffDigit);
            if (totalsData.affected >= 1000000000) {
                fullTotals += " B";
            } else if (totalsData.affected >= 1000000) {
                fullTotals += " M";
            } else if (totalsData.affected >= 1000) {
                fullTotals += " K";
            }
        }
        setTotals(() => fullTotals);
    }, [t, totalsData.affected, width]);

    return (
        <div className={styles.relativeWrapper}>
            <p className={styles.territoriesInLockdown}
               style={{fontSize: width > 780 ? '100%' : '70%'}}>
                {t('header.totals.territoriesLockdown')}
            </p>
            <p className={styles.nums}>
                {separateNumber(totalsData.lockdown, t('languageId'))}
            </p>
            <p className={styles.peopleAffected}
               style={{fontSize: width > 780 ? '100%' : '70%'}}>
                {t('header.totals.peopleAffected')}
            </p>
            <p className={styles.nums}>
                {totals}
            </p>
        </div>
    );
}

export default DataDisplay;
