import React, {useEffect, useRef, useState} from "react";
import styles from "./TimeSlider.module.scss";
import { calendarBoxes, pause, play } from "../../assets/icons/icons.js"
import {toBool} from "../../utils/utils";
import {addDays, format} from "date-fns";
import {enUS} from "date-fns/locale";

const firstDayDefaultOffset = 7 * 5;
const mobileRange = 70;
const languages = false;

const TimeSlider = (props) => {
    const [currentDateValue, setCurrentDateValue] = useState(
        firstDayDefaultOffset,
    );

    const {
        currentSelectedDay,
        setCurrentSelectedDay,
        firstDay,
        lastDay,
        days,
        playerState,
        onPlayerStateToggle
    } = props;
    const [datePickerPosition, setDatePickerPosition] = useState('left');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [currentSliderRange, setCurrentSliderRange] = useState([]);

    const currentRange = mobileRange;

    const dateRef = useRef();
    const range = useRef();
    const container = useRef();

    const toSliderString = (date, currentLanguage) => {
        let isoLanguage = 'enUS';
        if (currentLanguage) {
            isoLanguage = currentLanguage.replace('-', '');
            if (isoLanguage === 'ar') {
                isoLanguage = 'arSA';
            } else if (isoLanguage === 'zhHK') {
                isoLanguage = 'zhTW';
            }
        }
        if (
            languages[isoLanguage] === undefined ||
            languages[isoLanguage] === null
        ) {
            isoLanguage = currentLanguage.split('-')[0];
            if (
                languages[isoLanguage] === undefined ||
                languages[isoLanguage] === null
            ) {
                isoLanguage = 'enUS';
            }
        }
        return format(date, 'yyyy-MM-dd', {
            locale: languages ? languages[isoLanguage] : enUS,
        });
    };



    useEffect(() => {
        setCurrentSliderRange(days);
    }, [days]);
    const onSliderChange = (e) => {
        const sliderDOM = dateRef.current;
        const rangeDOM = range.current;
        const containerDOM = container.current;
        const newValue = e.target.value;
        const basicWidth = containerDOM.offsetWidth - rangeDOM.offsetWidth;
        const finalWidth = basicWidth / 2 - sliderDOM.offsetWidth / 4;
        const stepsWidth = rangeDOM.offsetWidth / currentRange;
        sliderDOM.style.left = `${finalWidth + stepsWidth * newValue}px`;
        setCurrentDateValue(newValue);
        const currentRangeDate =  new Date(currentSliderRange[0][parseInt(newValue)]);
        setCurrentSelectedDay(
            toSliderString(
                currentRangeDate,
                props.i18n.locale,
            ),
        );
        submitChanges();
    };
    const onBtnClick = (newRange) => {
        setShowDatePicker((prevState) => !prevState);
        setDatePickerPosition(newRange);
    };
    const onChooseDate = (date) => {
        props.setCurrentSelectedDay(date);
        props.onChange(date);
        props.setFirstDay(addDays(new Date(), -300));
        const sliderDOM = dateRef.current;
        const rangeDOM = range.current;
        const containerDOM = container.current;
        const basicWidth = containerDOM.offsetWidth - rangeDOM.offsetWidth;
        const finalWidth = basicWidth / 2 - sliderDOM.offsetWidth / 4;
        const stepsWidth = rangeDOM.offsetWidth / currentRange;
        sliderDOM.style.left = `${
            finalWidth +
            stepsWidth *
            ((datePickerPosition === 'left' ? 0 : currentRange - 1) + 0.5)
        }px`;
        calendarWillClose();

        if (datePickerPosition === 'left') {
            let plusDays = 1;
            days.push(date);
            for (let i = 2; i <= currentRange; i++) {
                days.push(rangePreProcces(date, plusDays));
                plusDays++;
            }
        } else {
            let lessDays = currentRange - 1;
            for (let i = 1; i < currentRange; i++) {
                days.push(rangePreProcces(date, -1 * lessDays));
                lessDays--;
            }
            days.push(date);
        }
        setCurrentSliderRange(days);
        setCurrentSelectedDay(toSliderString(date, props.i18n.locale));
        submitChanges();
        setCurrentDateValue(datePickerPosition === 'left' ? 0 : currentRange - 1);
        submitChanges();
    };

    const calendarWillClose = () => {
        setDatePickerPosition(`${datePickerPosition} hide`);
        return () => setTimeout(() => closeDatePicker(), 400);
    };
    const closeDatePicker = () => {
        setShowDatePicker(false);
        setDatePickerPosition(datePickerPosition.replace(' hide', ''));
    };

    const rangePreProcces = (date, numDays) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + numDays);
        return newDate;
    };

    const submitChanges = () => {
        props.onChange(
            currentSliderRange[0][parseInt(currentDateValue, 10)],
            currentSliderRange[0],
            currentSliderRange[currentSliderRange.length - 1],
        );
    };

    return (
        <div className={styles.timeSlider}
             style={{maxWidth: `${props.mobileWidth - 140}px`}}>
            <div className={styles.dateWrapper}>
                <div className={styles.datePicker}>
                    {calendarBoxes}
                </div>
                <p className={styles.date}>22, Dec, 2020</p>
            </div>
            <div className={styles.playButton}>
                {play}
            </div>
            <div className={styles.timelineWrapper}>
                <div className={styles.timeline} />
                <div className={styles.slider} />
            </div>
        </div>
    );
};

export default TimeSlider;
