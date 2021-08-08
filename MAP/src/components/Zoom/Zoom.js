import React from "react";
import styles from "./Zoom.module.scss";
import { plus, minus } from '../../assets/icons/icons.js';

const MapControl = ({ map, width, mobileWidth }) => {
    return (
        <div className={styles.zoom}
            style={{bottom: width > mobileWidth ? '40px' : '120px'}}>
            <div className={styles.zoomButton} onClick={map.zoomIn}>
                <div className={styles.zoomIn}>
                    {plus}
                </div>
            </div>
            <div className={styles.zoomDividerLm} />
            <div className={styles.zoomButton} onClick={map.zoomOut}>
                <div className={styles.zoomOut}>
                    {minus}
                </div>
            </div>
        </div>
    );
};

export default MapControl;
