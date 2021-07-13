import React, { useEffect, useState } from "react";
import styles from "./StatsBar.module.scss";
import { logoSimple, triangleArrow } from "../../assets/icons/icons.js";
import { toBool } from "../../utils/utils";
import { useTranslation } from "react-i18next/src";
import { fetchTotals } from "../../services";

const separateNumber = (number, format) => {
    const nfObject = new Intl.NumberFormat(format);
    return nfObject.format(+number);
};

const StatsBar = ({
                      dark,
                      startDate,
                      endDate,
                      selectedDate = '2021-01-01',
                      daysRange = 10
                  }) => {
    const [totalsData, setTotalsData] = useState({
        lockdown: 0,
        affected: 0,
    });
    dark = toBool(dark);
    const { t } = useTranslation();

    useEffect(() => {
        fetchTotals(startDate, endDate, selectedDate, daysRange)
            .then((res) => {
                setTotalsData(res);
            })
            .catch((e) => console.log(e));
    }, [startDate, endDate, selectedDate, daysRange]);

    return (
        <div className={styles.statsBar}>
            <div
                className={styles.lockdownLogo}
            >
                {logoSimple}
            </div>
            <div className={styles.relativeWrapperOne}>
                <p className={styles.territoriesInLockdown}>
                    {t('header.totals.territoriesLockdown')}
                </p>
                <p className={styles.num056}>
                    {totalsData.lockdown}
                    {/*{separateNumber(totalsData.lockdown, t('languageId'))}*/}
                </p>
            </div>
            <div className={styles.relativeWrapperTwo}>
                <p className={styles.num4700000000}>
                    {totalsData.affected}
                    {/*{separateNumber(totalsData.affected, t('languageId'))}*/}
                </p>
                <p className={styles.territoriesInLockdown}>
                    {t('header.totals.peopleAffected')}
                </p>
            </div>
            <div className={styles.flexWrapperOne}>
                <div
                    className={styles.vector}
                >
                    {triangleArrow}
                </div>
            </div>
        </div>
    );
};

export default StatsBar;