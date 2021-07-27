import React from "react";
import styles from "./Zoom.module.scss";
import { plus, minus } from '../../assets/icons/icons.js';

const MapControl = () => {
    return (
        <div className={styles.zoom}>
            <div className={styles.zoomButton}>
                <div className={styles.zoomIn}>
                    {plus}
                </div>
            </div>
            <div className={styles.zoomDividerLm} />
            <div className={styles.zoomButton}>
                <div className={styles.zoomOut}>
                    {minus}
                </div>
            </div>
        </div>
    );
};

export default MapControl;
