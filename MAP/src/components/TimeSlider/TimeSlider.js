import React from "react";
import styles from "./TimeSlider.module.scss";

const TimeSlider = () => {
    return (
        <div className={styles.timeSlider}>
            <div className={styles.flexWrapperOne}>
                <img
                    alt=""
                    className={styles.datePickerIcon}
                    src="https://static.overlay-tech.com/assets/53d9e98d-ce49-4b5c-84a2-5614cdf3bb77.svg"
                />
                <p className={styles.date}>22, Dec, 2020</p>
            </div>
            <img
                alt=""
                className={styles.playButton}
                src="https://static.overlay-tech.com/assets/5d72df22-8c92-4b4f-aa56-8bd61ba293cc.svg"
            />
            <div className={styles.relativeWrapperOne}>
                <div className={styles.timeline} />
                <div className={styles.sliderButton} />
            </div>
        </div>
    );
};

export default TimeSlider;
