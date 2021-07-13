import React from "react";
import styles from "./StatsBar.module.scss";
import { logoSimple, triangleArrow } from "../../assets/icons/icons.js";

const StatsBar = () => {
    return (
        <div className={styles.statsBar}>
            <div
                className={styles.lockdownLogo}
            >
                {logoSimple}
            </div>
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