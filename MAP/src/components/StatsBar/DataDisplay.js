import React from 'react';
import styles from './DataDisplay.module.scss';
import { useTranslation } from "react-i18next";

const separateNumber = (number, format) => {
    const nfObject = new Intl.NumberFormat(format);
    return nfObject.format(+number);
};

const DataDisplay = ({ totalsData, width }) => {
    const { t } = useTranslation();

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
                {separateNumber(totalsData.affected, t('languageId'))}
            </p>
        </div>
    );
}

export default DataDisplay;
