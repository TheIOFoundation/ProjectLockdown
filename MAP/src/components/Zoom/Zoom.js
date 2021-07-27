import React from "react";
import styles from "./Zoom.module.scss";

const MapControl = () => {
    return (
        <div className={styles.zoom}>
            <img
                alt=""
                className={styles.zoomIn}
                src="https://static.overlay-tech.com/assets/b9155c78-e032-4122-84b6-97703d62e821.svg"
            />
            <div className={styles.zoomDividerLm} />
            <img
                alt=""
                className={styles.zoomOut}
                src="https://static.overlay-tech.com/assets/d92c7347-d765-4dc2-9128-8297adb7a923.svg"
            />
        </div>
    );
};

export default MapControl;
