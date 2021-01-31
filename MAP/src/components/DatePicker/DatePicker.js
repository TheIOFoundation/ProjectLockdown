import React, { useState, useEffect, useCallback } from 'react';
import css from 'csz';
import { arrowLeft, arrowRight } from '../../assets/icons/icons.js';

const styles = css`
  & {
    @media (max-width: 960px) {
      max-width: 200px;
    }
    max-width: 300px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 999999;
    background-color: white;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.37);
    border-radius: 9px;
    overflow: hidden;
    padding-top: 1.5%;
    padding-bottom: 3%;
    &.show {
      display: block !important;
    }
    & > .calendar {
      padding: 3% 7%;
      &.header {
        background-color: rgb(250, 250, 250);
        display: flex;
        & .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% / 7);
          height: 20px;
        }
      }
      &.actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h3 {
          margin: 0px;
          color: rgb(43, 42, 47);
          font-size: 0.9rem;
        }
        & svg {
          &:active {
            color: rgb(85, 170, 173);
          }
          transition: 0.3s;
          color: rgb(70, 168, 171);
          width: 30px;
        }
      }
    }
    & .week {
      display: flex;
      & .day {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 7);
        padding-top: calc(100% / 7);
        //height: 20px;
        position: relative;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          &::before {
            content: ' ';
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgb(202, 201, 201, 0.2);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
          }
        }
        &.selected {
          &::before {
            content: ' ';
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgb(34, 182, 184);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
          }
          & span {
            color: white;
          }
        }
        & span {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(82, 82, 82);
        }
        &.empty::before {
          content: ' ';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: rgb(228, 228, 228);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;

const overlay = css`
  & {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 99998;
    top: 0px;
    left: 0px;
    background-color: rgba(40, 40, 40, 0.8);
    display: none;
    &.show {
      display: block;
    }
  }
`;

const daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentYear = 2020;

const DatePicker = props => {
  const { startDate } = props;

  const [days, setDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(startDate.getMonth());
  const [lastSelection, setLastSelection] = useState(false);
  const [allMonthsDate, setAllMonthsDate] = useState(new Array(12));
  const [enableArrows, setEnableArrows] = useState(false);

  const onPressKey = useCallback(
    e => {
      if (e.code === 'Escape' && props.show) {
        props.close();
      }
    },
    [props]
  );

  const getMonthData = useCallback((firstDay, month) => {
    let totalDays = month.getDate();
    let numberOfDay = firstDay.getDay();
    let completedWeek = 7 - (numberOfDay + 1);
    let totalOfWeeks = totalDays + completedWeek;
    let roundWeeks = totalOfWeeks / 7;
    let excedentDays = 0;
    if (totalOfWeeks % 7 > 0) {
      excedentDays = 7 - (totalOfWeeks % 7);
      totalOfWeeks += 7 - (totalOfWeeks % 7);
      roundWeeks = totalOfWeeks / 7;
    }
    let monthDaysArray = [];
    let days = 0;
    for (let i = 0; i < roundWeeks; i++) {
      monthDaysArray.push([]);
      for (let e = 0; e < 7; e++) {
        if (i === 0 && e < completedWeek) {
          monthDaysArray[i].push({ day: null, label: daysOfTheWeek[e] });
        } else if (
          i === roundWeeks - 1 &&
          excedentDays > 0 &&
          e > 7 - excedentDays - 1
        ) {
          monthDaysArray[i].push({ day: null, label: daysOfTheWeek[e] });
        } else {
          days++;
          monthDaysArray[i].push({ day: days, label: daysOfTheWeek[e] });
        }
      }
    }
    return monthDaysArray;
  }, []);

  const fillAllMonths = useCallback(() => {
    let prevMonths = allMonthsDate;
    let firstDay, month;
    for (let i = 0; i < 12; i++) {
      if (i !== currentMonth) {
        firstDay = new Date(2020, i, 1);
        month = new Date(2020, i + 1, 0);
        let days = getMonthData(firstDay, month);
        prevMonths[i] = days;
      }
    }
    setAllMonthsDate(prevMonths);
    setEnableArrows(true);
  }, [allMonthsDate, currentMonth, getMonthData]);
  const chooseDay = (dayData, week, day) => {
    let prevData = days;
    if (lastSelection !== false) {
      prevData[lastSelection[0]][lastSelection[1]].selected = false;
    }
    dayData.selected = true;
    prevData[week][day] = dayData;
    props.onSelect(new Date(currentYear, currentMonth, dayData.day));
    setDays(prevData);
    setLastSelection([week, day]);
  };
  const changeMonth = plus => {
    if (enableArrows) {
      let newDays, newMonth;
      if ((currentMonth > 0 || plus) && (currentMonth < 11 || !plus)) {
        if (plus) {
          newMonth = currentMonth + 1;
          newDays = allMonthsDate[newMonth];
        } else {
          newMonth = currentMonth - 1;
          newDays = allMonthsDate[newMonth];
        }
        setDays(newDays);
        setCurrentMonth(newMonth);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onPressKey);
    let firstDay = new Date(2021, currentMonth, 1);
    let month = new Date(2021, currentMonth + 1, 0);
    let days = getMonthData(firstDay, month);
    let prevMonths = allMonthsDate;
    prevMonths[currentMonth] = days;
    setDays(days);
    setAllMonthsDate(prevMonths);
    fillAllMonths();

    // setState({ days, allMonthsDate: prevMonths }, fillAllMonths);
    return () => window.removeEventListener('keydown', onPressKey);
  }, [allMonthsDate, currentMonth, fillAllMonths, getMonthData, onPressKey]);
  return (
    <>
      <div
        // height: 600px;
        className={`overlay ${overlay} ${props.show ? 'shw' : ''}`}
        onClick={props.close}
      ></div>
      <div
        className={`calendar ${styles} ${props.show ? 'show' : ''} ${
          props.customClass
        }`}
      >
        <div class="calendar actions">
          <span onClick={() => changeMonth(false)}> {arrowLeft} </span>
          <h3>
            {monthsNames[currentMonth]} {currentYear}
          </h3>
          <span onClick={() => changeMonth(true)}> {arrowRight} </span>
        </div>
        <div class="calendar header">
          {daysOfTheWeek.map(dayL => (
            <div class="header item">{dayL}</div>
          ))}
        </div>
        <div class="calendar container">
          {days.map((week, i) => (
            <div class="week">
              {week.map((day, e) => (
                <div
                  onClick={() => chooseDay(day, i, e)}
                  class={`day ${day.day === null ? 'empty' : ''} ${
                    day.selected ? 'selected' : ''
                  }`}
                >
                  <span>{day.day}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DatePicker;
