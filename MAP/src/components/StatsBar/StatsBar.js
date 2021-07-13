import React from "react";
import styles from "./StatsBar.module.scss";

const StatsBar = () => {
    return (
        <div className={styles.statsBar}>
            <img
                alt=""
                className={styles.lockdownLogo}
                src="https://static.overlay-tech.com/assets/adc4b570-4848-4d7b-bc31-47c82f61d9df.svg"
            />
            <div className={styles.relativeWrapperOne}>
                <p className={styles.territoriesInLockdown}>
                    Territories in Lockdown
                </p>
                <p className={styles.num056}>056</p>
            </div>
            <div className={styles.relativeWrapperTwo}>
                <p className={styles.num4700000000}>
                    4,700,000,000
                </p>
                <p className={styles.territoriesInLockdown}>
                    People Affected
                </p>
            </div>
            <div className={styles.flexWrapperOne}>
                <img
                    alt=""
                    className={styles.vector}
                    src="https://static.overlay-tech.com/assets/bd11c467-2866-4f7b-bac5-e85946ad774d.svg"
                />
            </div>
        </div>
    );
};

export default StatsBar;