import React, { useEffect, useState } from "react";
import styles from "./StatsBar.module.scss";
import { logoSimple, triangleArrow } from "../../assets/icons/icons.js";
import { useTranslation } from "react-i18next";
import { fetchTotals } from "../../services";

const separateNumber = (number, format) => {
    const nfObject = new Intl.NumberFormat(format);
    return nfObject.format(+number);
};

const StatsBar = ({
                      startDate,
                      endDate,
                      selectedDate = '2021-01-01',
                      daysRange = 10
                  }) => {
    const [totalsData, setTotalsData] = useState({
        lockdown: 0,
        affected: 0,
    });
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleStatsBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        fetchTotals(startDate, endDate, selectedDate, daysRange)
            .then((res) => {
                setTotalsData(res);
            })
            .catch((e) => console.log(e));
    }, [startDate, endDate, selectedDate, daysRange]);

    return (
        <div className={`${isOpen ? null : styles.closed} ${styles.statsBar}`}>
            <div
                className={styles.lockdownLogo}
            >
                {logoSimple}
            </div>
            {isOpen && <div className={styles.relativeWrapperOne}>
                    <p className={styles.territoriesInLockdown}>
                        {t('header.totals.territoriesLockdown')}
                    </p>
                    <p className={styles.numLockdown}>
                        {separateNumber(totalsData.lockdown, t('languageId'))}
                    </p>
                </div>}
            {isOpen && <div className={styles.relativeWrapperTwo}>
                    <p className={styles.numAffected}>
                        {separateNumber(totalsData.affected, t('languageId'))}
                    </p>
                    <p className={styles.territoriesInLockdown}>
                        {t('header.totals.peopleAffected')}
                    </p>
                </div>}
            <div
                className={styles.flexWrapperOne}
                onClick={toggleStatsBar}>
                <div
                    className={`${isOpen ? null : styles.flip} ${styles.vector}`}
                >
                    {triangleArrow}
                </div>
            </div>
        </div>
    );
};

export default StatsBar;