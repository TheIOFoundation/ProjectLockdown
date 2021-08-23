import React from "react";
import styles from "./TimeSlider.module.scss";
import { calendarBoxes, pause, play } from "../../assets/icons/icons.js"

const TimeSlider = () => {
    return (
        <div className={styles.timeSlider}>
            <div className={styles.flexWrapperOne}>
                <div className={styles.datePickerIcon}>
                    {calendarBoxes}
                </div>
                <p className={styles.date}>22, Dec, 2020</p>
            </div>
            <div className={styles.playButton}>
                {play}
            </div>
            <div className={styles.relativeWrapperOne}>
                <div className={styles.timeline} />
                <div className={styles.sliderButton} />
            </div>
        </div>
    );
};

export default TimeSlider;
