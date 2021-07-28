import React, { useEffect, useState } from "react";
import styles from "./StatsBar.module.scss";
import { logoSimple, triangleArrow } from "../../assets/icons/icons.js";
import { fetchTotals } from "../../services";
import DataDisplay from "./DataDisplay.js";

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
            {isOpen && <DataDisplay totalsData={totalsData}/>}
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