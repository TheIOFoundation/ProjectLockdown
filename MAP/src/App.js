import { useEffect, useState } from 'react'
import { Map } from './components/Map/Map'
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation'
import { Legend } from './components/Legend/Legend'
import Totals from './components/Totals/Totals'
import Header from './components/Header/Header'
import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import './App.scss'
import { TabMenu } from './components/TabMenu/TabMenu'
import ThemeContext from './context/ThemeContext'
import format from 'date-fns/format'
import PlayButton from './components/PlayButton/PlayButton'
import { addDays } from 'date-fns'
import TimeSlider from './components/TimeSlider/TimeSlider'
import CountryInfo from './components/CountryInfo/CountryInfo'

//import LocalStorage Functions
import * as router from "./router";

// FIX: Selected date is formatted (yyyy-mm-dd) while start and end dates are in normal formats (new Date()).

// TODO: Reset selectedDate to startDate once endDate is reached.

function toJsonString(date) {
  return format(date, 'yyyy-MM-dd')
}

const daysRange = 70

const startingPoint = -300

const playSpeed = 200
// i.e. delay between skipping to the next date (in ms)

const playerStates = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
}

const getDaysDiff = (date1, date2) => {
  var formattedDate1 = new Date(date1)
  var formattedDate2 = new Date(date2)

  // To calculate the time difference of two dates
  var Difference_In_Time = formattedDate2.getTime() - formattedDate1.getTime()

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
  return Difference_In_Days
}
const { PLAYING, PAUSED } = playerStates

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)
  const [playerState, setPlayerState] = useState(PAUSED)
  const [days, setDays] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState({ t: (text) => text })

  // selectedDate -> the date for which the datapoints are being displayed. defaults to todays' date.
  // Currently using 4th April 2020 as a starting date, and end date 50 days away from it. This will be handled once the timeslider is done.
  const [selectedDate, setSelectedDate] = useState(
    toJsonString(addDays(new Date(), startingPoint))
  )

  // For later, when we integrate the timeslider
  const [startDate, setStartDate] = useState(addDays(new Date(), startingPoint))
  const [endDate, setEndDate] = useState(
    addDays(new Date(), startingPoint + daysRange)
  )
  const [dialog, setDialog] = useState({
    opened: false,
    template: '',
    title: '',
    iso2: '',
    country: ''
  })
  const toggleState = (newState) => {
    setPlayerState(newState)
  }

  useEffect(() => {
    const formattedSelectedDate = new Date(selectedDate)

    console.log('End date', new Date(endDate))
    console.log('Selected date v', new Date(formattedSelectedDate))

    if (
      formattedSelectedDate.getDate() === endDate.getDate() &&
      formattedSelectedDate.getMonth() === endDate.getMonth() &&
      formattedSelectedDate.getFullYear() === endDate.getFullYear()
    ) {
      alert('Ended')
      setPlayerState(PAUSED)
      setSelectedDate(format(startDate, 'yyyy-MM-dd'))
    }
  }, [selectedDate, endDate, startDate])

  useEffect(() => {
    console.log('Selected date', selectedDate)
  }, [selectedDate])

  useEffect(() => {
    console.log('Player state', playerState)
  }, [playerState])

  useEffect(() => {
    const formattedSelectedDate = new Date(selectedDate)

    if (playerState === PLAYING) {
      var loop = setInterval(() => {
        if (playerState === PAUSED || formattedSelectedDate === endDate) {
          console.log('Stopped')
          clearInterval(loop)
        } else {
          console.log('Still looping')
          setSelectedDate(
            format(addDays(formattedSelectedDate, 1), 'yyyy-MM-dd')
          )
        }
      }, playSpeed)
    }

    return () => clearInterval(loop)
  }, [playerState, selectedDate, endDate])

  useEffect(() => {
    const darkModePreference = window.localStorage.getItem('darkmode')

    if (!darkModePreference) {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.getElementsByTagName('html')[0].classList.add('dark')
      window.localStorage.setItem('darkmode', 'true')
    }

    if (darkModePreference === 'true') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      setIsDark(true)
    } else if (darkModePreference === 'false') {
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    let date = startDate

    const newDays = [...days]

    for (let i = 0; i <= daysRange; i++) {
      newDays.push(format(date, 'yyyy-MM-dd'))
      date = addDays(date, 1)
    }

    setDays(newDays)
  }, [startDate, days])

  useEffect(() => {
    const formattedSelectedDate = new Date(selectedDate)

    console.log('End date', format(endDate, 'yyyy-MM-dd'))
    console.log('Selected date v', format(formattedSelectedDate, 'yyyy-MM-dd'))

    if (
      format(endDate, 'yyyy-MM-dd') ===
      format(formattedSelectedDate, 'yyyy-MM-dd')
    ) {
      if (playerState === PLAYING) {
        alert('Ended')
        setPlayerState(PAUSED)
        setSelectedDate(format(startDate, 'yyyy-MM-dd'))
      }
    }
  }, [selectedDate, endDate, startDate, playerState])

  useEffect(() => {
    console.log('Selected date', selectedDate)
  }, [selectedDate])

  useEffect(() => {
    console.log('Player state', playerState)
  }, [playerState])

  useEffect(() => {
    const formattedSelectedDate = new Date(selectedDate)

    if (playerState === PLAYING) {
      var loop = setInterval(() => {
        if (playerState === PAUSED || formattedSelectedDate === endDate) {
          console.log('Stopped')
          clearInterval(loop)
        } else {
          console.log('Still looping')
          setSelectedDate(
            format(addDays(formattedSelectedDate, 1), 'yyyy-MM-dd')
          )
        }
      }, playSpeed)
    }

    return () => clearInterval(loop)
  }, [playerState, selectedDate, endDate])

  useEffect(() => {
    const darkModePreference = window.localStorage.getItem('darkmode')

    if (!darkModePreference) {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.getElementsByTagName('html')[0].classList.add('dark')
      window.localStorage.setItem('darkmode', 'true')
    }

    if (darkModePreference === 'true') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      setIsDark(true)
    } else if (darkModePreference === 'false') {
      setIsDark(false)
    }
  }, [])

  const closeDialog = () => {
    setDialog({ opened: false, template: '', title: '' })
    // debouncedCloseDialog();
    // this.__closeCountryInfo();
  }

  const openDialog = (props) => {
    setDialog({ 
      opened: true, 
      template: "",
      title: "" ,
      iso2: props.iso2,
      country: props.country
  });
    // debouncedCloseDialog();
    // this.__closeCountryInfo();
  }

  useEffect(() => {
    router.resetLocalStorage();
  }, []);

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);
  return (
    <div
      onKeyUp={(e) => {
        if (e.key === ' ') {
          const newState = playerState === PAUSED ? PLAYING : PAUSED

          toggleState(newState)
        }
      }}
    >
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <LoadingAnimation isLoading={isLoading} />
        <Map
          dark={isDark}
          selectedDate={selectedDate}
          startDate={startDate}
          endDate={endDate}
          onOpen={openDialog}
          setIsLoading={setIsLoading}
          daysRange={daysRange}
        ></Map>
        <TabMenu darkMode={isDark} setDarkMode={setIsDark} />
        <Header dark={isDark} />
        <Totals dark={isDark} />
        <Legend dark={isDark} />
        {/* <CountriesSearcher i18n={{ locale: 'en, en-US' }} /> */}
        <PlayButton state={playerState} toggleState={toggleState} />
        <LanguageSelector
          languageChangeHandler={setCurrentLanguage}
          dark={isDark}
        />
        {startDate && endDate && selectedDate && (
          <TimeSlider
            dark={isDark}
            days={days}
            i18n={{ locale: 'en, en-US' }}
            onChange={(selectedDate, startDate, endDate) => {
              console.log('date selected')
              console.log('Selected date changed', selectedDate)
              console.log(startDate)
              console.log(endDate)
              setSelectedDate(selectedDate)
            }}
            currentSelectedDay={selectedDate}
            // selectedDate={selectedDate}
            sliderValue={getDaysDiff(startDate, endDate)}
            setCurrentSelectedDay={setSelectedDate}
            firstDay={format(new Date(startDate), 'yyyy-MM-dd')}
            setFirstDay={setStartDate}
            lastDay={format(new Date(endDate), 'yyyy-MM-dd')}
            setLastDay={setEndDate}
          >
            {dialog.opened ? (
              <CountryInfo 
                dark={isDark}
                country={dialog.country}
                iso2={dialog.iso2}
                wikidata=""
                date={selectedDate || new Date()}
                i18n={currentLanguage}
                startDate={startDate}
                endDate={endDate}
                daysRange={daysRange}
                onClose={closeDialog}
                onOpen={openDialog}
              />
            ) : (
              ''
            )}
          </TimeSlider>
        )}
      </ThemeContext.Provider>
    </div>
  )
}

export default App
