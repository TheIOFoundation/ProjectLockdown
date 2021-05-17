import React, { useState, useRef, useEffect } from 'react';
import css from 'csz';
import format from 'date-fns/format';
import { enUS } from 'date-fns/locale';
import { addDays } from 'date-fns';
import { calendar } from '../../assets/icons/icons.js';
import DatePicker from '../DatePicker/DatePicker';
import PlayButton from '../PlayButton/PlayButton';

const sliderWrapper = css`
  & {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 720px;
    z-index: 1000;
    height: fit-content;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 4px 11px 3px rgba(0, 0, 0, 0.39);
    border-radius: 25px;
    transition: max-height 0.25s ease-out;
    max-height: 70px;
    &.open {
      max-height: calc(100vh - 110px);
      height: 600px;
      transition: max-height 0.25s ease-in;
      @media (max-width: 960px) {
        /*max-height: calc(100vh - 45px);*/
        max-height: 90%;
      }
    }
    /*padding: 0px 6%;*/
    @media (max-width: 960px) {
      /*bottom: 30px;*/
      bottom: 5%;
      left: 0;
      right: 0;
      width: 90vw;
      max-width: 450px;
    }
    & > div.countryInfo {
      z-index: 10;
      height: 100%;
      @media (max-width: 960px) {
        /*height: calc(100vh - 150px);
        max-height: calc(100vh - 150px);*/
      }
    }
  }
`;

const selectStyles = css`
  @keyframes fadeOutLeft {
    from {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .dark & {
    background-color: #333333;
  }
  & {
    height: 50px;
    padding: 0px 177px;
    @media (max-width: 960px) {
      padding: 0px 85px;
    }
    border-radius: 25px;
    background-color: white;
    display: flex;
    // width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    &.open {
      border-top: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    @media (max-width: 960px) {
      & {
        padding: 0 85px;
      }
    }
    & > .overlay {
      height: 100vh;
      @media (max-width: 960px) {
        top: calc(-100vh + 100% + 20px);
        left: -6%;
      }
      top: calc(-100vh + 100% + 65px);
      left: calc((100% - 100vw) / 2);
    }
    & > .calendar {
      bottom: 60px;
      width: 300px;
      height: fit-content;
      display: none;
      tansition: 0.3s;
      &.left {
        left: 0;
        &.hide {
          animation: fadeOutLeft 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInLeft 0.3s;
          display: table;
        }
      }
      &.right {
        right: 0;
        &.hide {
          animation: fadeOutRight 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInRight 0.3s;
        }
      }
    }
  }
`;
const rangeStyles = css`
  input {
    background: transparent;
  }
  input[type='range'] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
    bottom: 0;
    color: #e0e0e0;
    .dark & {
      color: #4f4f4f;
    }
  }
  input[type='range']:focus {
    outline: none;
    box-shadow: 0 0 0px 0px var(--ld-focus) !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    &::before {
      content: 'Say Cheese';
      color: red;
    }
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #bdbdbd;
    .dark & {
      background: #828282;
    }
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-moz-range-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #bcbcbc;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-fill-upper {
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #d6d6d6;
  }
`;
const tooltipCss = css`
  .dark & {
    color: white;
  }
  & {
    font-weight: 600;
    font-size: 12px;
    color: #333333;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: auto;
    & span:first-child {
      margin-right: 5px;
    }
    & svg {
      height: 18px;
    }
    &:hover {
      cursor: pointer;
    }
    &.last {
      /*top: 17px !important;*/
    }
    @media (max-width: 960px) {
      top: 0;
      &.first {
        left: 17px !important;
      }
      &.last {
        right: 38px !important;
      }
    }
    &.first {
      left: 30px;
    }
    &.last {
      right: 50px;
    }
  }
`;
const sliderSelector = css`
  .dark & span {
    color: white;
    background: #333333;
    &::after {
      background-color: #333333;
    }
  }
  & {
    position: absolute;
    @media (max-width: 960px) {
      top: -33px;
      padding: 0;
    }
    top: -33px;
    left: 47%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: transparent;
    font-size: 1rem;
    padding: 0;
    width: max-content;
    & span {
      border: 0px solid #8c8c8c;
      border-radius: 30px;
      position: relative;
      background: #ffffff;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-right: 0px solid #8c8c8c;
        border-bottom: 0px solid #8c8c8c;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
const popBtn = css`
  & {
    content: '';
    position: absolute;
    height: 25px;
    width: 25px;
    outline: none;
    border: 0px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9;
    bottom: 18px;
    display:none;
    @media (max-width: 960px) {
      bottom: 11px;
    }
    @media (max-width: 960px) and (min-width: 576px) {
      bottom: 11px);
      &.first {
        left: calc(12% + 11px) !important;
      }
      &.last {
        right: calc(12% + 11px) !important;
      }
    }
    &.first {
      @media (max-width: 960px) {
        left: calc(12% + 4px);
      }
      left: calc(0% + 38px);
    }
    &.last {
      @media (max-width: 960px) {
        right: calc(12% + 4px);
      }
      right: calc(0% + 38px);
    }
    &:active {
      background-color: rgb(199, 198, 198);
      outline: none;
    }
  }
`;
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
    return format(date, 'dd-MMMM-yyyy', {
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
    setCurrentSelectedDay(
      toSliderString(
        new Date(currentSliderRange[parseInt(newValue)]),
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
      for (let i = 1; i <= currentRange; i++) {
        if (i === 1) {
          days.push(date);
        } else {
          days.push(rangePreProcces(date, plusDays));
          plusDays++;
        }
      }
    } else {
      let lessDays = currentRange - 1;
      for (let i = 1; i <= currentRange; i++) {
        if (i === currentRange) {
          days.push(date);
        } else {
          days.push(rangePreProcces(date, -1 * lessDays));
          lessDays--;
        }
      }
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

  const rangePreProcces = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  };

  const submitChanges = () => {
    props.onChange(
      currentSliderRange[currentDateValue],
      currentSliderRange[0],
      currentSliderRange[currentSliderRange.length - 1],
    );
  };
  return (
    <div
      className={`sliderWrapper ${sliderWrapper} ${
        props.children !== '' ? 'open' : ''
      }`}
      ref={container}
    >
      <PlayButton state={playerState} toggleState={onPlayerStateToggle} />
      {props.children}
      <div
        className={`${selectStyles} ${rangeStyles} ${
          props.children !== '' ? 'open' : ''
        }`}
      >
        <DatePicker
          startDate={new Date(firstDay)}
          close={calendarWillClose}
          onSelect={onChooseDate}
          show={showDatePicker}
          customClass={datePickerPosition}
        />
        <div className={`${sliderSelector}`} ref={dateRef}>
          <span>{currentSelectedDay?.toString()}</span>
        </div>
        <span
          title="Select Start Date"
          className={`first ${tooltipCss}`}
          onClick={(e) => onBtnClick('left')}
        >
          <IconBtn /> {toSliderString(new Date(currentSelectedDay? currentSelectedDay : null), 'en')}
        </span>
        <button
          onClick={(e) => onBtnClick('left')}
          className={`first ${popBtn}`}
        />
        <input
          ref={range}
          onInput={onSliderChange}
          type="range"
          min="0"
          max={currentRange - 1}
          step="1"
          value={currentDateValue}
        />
        <span title="Select End Date" className={`last ${tooltipCss}`}>
          {toSliderString(new Date(lastDay? lastDay : null), 'en')}
        </span>
      </div>
    </div>
  );
};

const IconBtn = () => <span>{calendar}</span>;

export default TimeSlider;
