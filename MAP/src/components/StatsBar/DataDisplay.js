import React from 'react';
import styles from './DataDisplay.module.scss';
import { useTranslation } from "react-i18next";

const separateNumber = (number, format) => {
    const nfObject = new Intl.NumberFormat(format);
    return nfObject.format(+number);
};

const DataDisplay = ({ totalsData }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.relativeWrapper}>
            <p className={styles.territoriesInLockdown}>
                {t('header.totals.territoriesLockdown')}
            </p>
            <p className={styles.numLockdown}>
                {separateNumber(totalsData.lockdown, t('languageId'))}
            </p>
            <p className={styles.peopleAffected}>
                {t('header.totals.peopleAffected')}
            </p>
            <p className={styles.numAffected}>
                {separateNumber(totalsData.affected, t('languageId'))}
            </p>
        </div>
    );
}

export default DataDisplay;
