import React from 'react';
import { Map } from './components/Map/Map';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { Legend } from './components/Legend/Legend';
import Totals from './components/Totals/Totals';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import './App.scss';
import { TabMenu } from './components/TabMenu/TabMenu';
import ThemeContext from './context/ThemeContext';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import TimeSlider from './components/TimeSlider/TimeSlider';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Watermark from './components/Watermark/Watermark'

//import LocalStorage Functions
import * as router from './router';

// FIX: Selected date is formatted (yyyy-mm-dd) while start and end dates are in normal formats (new Date()).

// TODO: Reset selectedDate to startDate once endDate is reached.

function toJsonString(date) {
  return format(date, 'yyyy-MM-dd');
}

const daysRange = 70;

const startingPoint = -300;

const playSpeed = 200;
// i.e. delay between skipping to the next date (in ms)

const watermarkSize = 2;

const playerStates = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
};

const getDaysDiff = (date1, date2) => {
  var formattedDate1 = new Date(date1);
  var formattedDate2 = new Date(date2);
  return (
    (formattedDate2.getTime() - formattedDate1.getTime()) / (1000 * 3600 * 24)
  );
};
const { PLAYING, PAUSED } = playerStates;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isDark: false,
      playerState: PAUSED,
      days: [],
      currentLanguage: {
        t: (text) => text,
      },
      selectedDate: toJsonString(addDays(new Date(), startingPoint)),
      startDate: addDays(new Date(), startingPoint),
      endDate: addDays(new Date(), startingPoint + daysRange),
      dialog: {
        opened: false,
        template: '',
        title: '',
        iso2: '',
        country: '',
      },
    };
  }

  componentDidMount() {
    this.setNewDays();
    router.resetLocalStorage();
    this.pausePlayerState();
    this.setPlayerState();
    this.setIsDark();
  }
  setNewDays = () => {
    const { startDate, days } = this.state;
    let date = startDate;
    const newDays = [...days];

    for (let i = 0; i <= daysRange; i++) {
      newDays.push(format(date, 'yyyy-MM-dd'));
      date = addDays(date, 1);
    }
    this.setState({
      ...this.state,
      days: newDays,
    });
  };

  setSelectedDate = (newDate) => {
    this.setState({
      ...this.state,
      selectedDate: newDate,
    });
  };

  setStartDate = (startDate) => {
    this.setState({
      ...this.state,
      startDate,
    });
  };

  setEndDate = (endDate) => {
    this.setState({
      ...this.state,
      endDate,
    });
  };

  pausePlayerState = () => {
    const { endDate, selectedDate, startDate } = this.state;
    const formattedSelectedDate = new Date(selectedDate);
    if (
      formattedSelectedDate.getDate() === endDate.getDate() &&
      formattedSelectedDate.getMonth() === endDate.getMonth() &&
      formattedSelectedDate.getFullYear() === endDate.getFullYear()
    ) {
      alert('Ended');
      this.setState({
        ...this.state,
        playerStates: PAUSED,
        selectedDate: format(startDate, 'yyyy-MM-dd'),
      });
    }
  };

  toggleState = (newState) => {
    this.setState({
      ...this.state,
      playerState: newState,
    });
  };

  setPlayerState = () => {
    const { selectedDate, endDate, playerState } = this.state;
    const formattedSelectedDate = new Date(selectedDate);
    let loop = null;
    if (playerState === PLAYING) {
      loop = setInterval(() => {
        if (playerState === PAUSED || formattedSelectedDate === endDate) {
          console.log('Stopped');
          clearInterval(loop);
        } else {
          console.log('Still looping');
          this.setState({
            ...this.state,
            selectedDate: format(
              addDays(formattedSelectedDate, 1),
              'yyyy-MM-dd',
            ),
          });
        }
      }, playSpeed);
    }

    return () => clearInterval(loop);
  };

  setIsDark = () => {
    let darkModePreference = window.localStorage.getItem('darkmode');

    if (!darkModePreference) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setState({
        ...this.state,
        isDark: isDarkMode,
      });
      if (isDarkMode) {
        darkModePreference = 'true';
        window.localStorage.setItem('darkmode', 'true');
      } else {
        darkModePreference = 'false';
      }
    }

    if (darkModePreference === 'true') {
      document.getElementsByTagName('html')[0].classList.add('dark');
      this.setState({
        ...this.state,
        isDark: true,
      });
    } else if (darkModePreference === 'false') {
      this.setState({
        ...this.state,
        isDark: false,
      });
    }
  };
  closeDialog = () => {
    const dialog = { opened: false, template: '', title: '' };
    this.setState((prevState) => ({
      ...prevState.dialog,
      dialog,
    }));
  };

  openDialog = (props) => {
    const dialog = {
      opened: true,
      template: '',
      title: '',
      iso2: props.iso2,
      country: props.country,
    };
    this.setState((prevState) => ({
      ...prevState,
      dialog,
    }));
  };

  setCurrentLanguage = () => {
    console.log('TODO: to be addressed letter');
  };
  setIsLoading = (value) => {
    this.setState({
      ...this.state,
      isLoading: value,
    });
  };
  render() {
    const {
      isDark,
      playerState,
      isLoading,
      selectedDate,
      startDate,
      endDate,
      days,
      dialog,
      currentLanguage,
    } = this.state;
    return (
      <div
        onKeyUp={(e) => {
          if (e.key === ' ') {
            const newState = playerState === PAUSED ? PLAYING : PAUSED;

            this.toggleState(newState);
          }
        }}
      >
        <ThemeContext.Provider value={{ isDark }}>
          <LoadingAnimation isLoading={isLoading} />
          <Map
            dark={isDark}
            selectedDate={selectedDate}
            startDate={startDate}
            endDate={endDate}
            onOpen={this.openDialog}
            setIsLoading={this.setIsLoading}
            daysRange={daysRange}
          />
          <TabMenu isDark={isDark} setDarkMode={this.setIsDark} />
          <Totals dark={isDark} />
          <Legend dark={isDark} />
          {/* <CountriesSearcher i18n={{ locale: 'en, en-US' }} /> */}
          <LanguageSelector
            languageChangeHandler={this.setCurrentLanguage}
            dark={isDark}
          />
          <Watermark dark={isDark} fontsize={watermarkSize} />
          {startDate && endDate && selectedDate && (
            <TimeSlider
              playerState={playerState}
              onPlayerStateToggle={this.toggleState}
              dark={isDark}
              days={days}
              i18n={{ locale: 'en, en-US' }}
              onChange={(CurrentSelectedDate) => {
                this.setSelectedDate(CurrentSelectedDate);
              }}
              currentSelectedDay={selectedDate}
              selectedDate={selectedDate}
              sliderValue={getDaysDiff(startDate, endDate)}
              setCurrentSelectedDay={this.setSelectedDate}
              firstDay={format(new Date(startDate), 'yyyy-MM-dd')}
              setFirstDay={this.setStartDate}
              lastDay={format(new Date(endDate), 'yyyy-MM-dd')}
              setLastDay={this.setEndDate}
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
                  onClose={this.closeDialog}
                  onOpen={this.openDialog}
                />
              ) : (
                ''
              )}
            </TimeSlider>
          )}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
