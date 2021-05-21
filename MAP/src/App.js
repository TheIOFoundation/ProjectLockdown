import React, {useState, useEffect, useCallback} from 'react';
import { Map } from './components/Map/Map';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { Legend } from './components/Legend/Legend';
import Totals from './components/Totals/Totals';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import './App.scss';
import { TabMenu } from './components/TabMenu/TabMenu';
import ThemeContext from './contexts/ThemeContext';
import AppContext from './contexts/AppContext';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import TimeSlider from './components/TimeSlider/TimeSlider';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Watermark from './components/Watermark/Watermark';
import { UIComponent } from './utils/constant';
//import LocalStorage Functions
import * as router from './router';
import { fetchEnvironments } from './api';

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

const App = () => {
  
  const [environment, setEnvironment] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState("false");
  const [playerState, setPlayerState] = useState(PAUSED);
  const [days, setDays] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState({t: (text) => text});
  const [selectedDate, setSelectedDate] = useState(toJsonString(addDays(new Date(), startingPoint)));
  const [startDate, setStartDate] = useState(addDays(new Date(), startingPoint));
  const [endDate, setEndDate] = useState(addDays(new Date(), startingPoint + daysRange));
  const [dialog, setDialog] = useState({
    opened: false,
    template: '',
    title: '',
    iso2: '',
    country: '',
  });
  const [isLegendVisible, setIsLegendVisible] = useState(false);
  const [isTimeSliderVisible, setIsTimeSliderVisible] = useState(false);
  const [isCountrySearchVisible, setIsCountrySearchVisible] = useState(false);

   const getEnvData = useCallback( async () =>{
        const data = await fetchEnvironments();
        if(data && data.environment) {
          const envt  = data.environment;
          const {components} = envt;
          setEnvironment(envt)
          setIsLegendVisible(_find(components,UIComponent.Legend).is_visible || false);
          setIsTimeSliderVisible(_find(components, UIComponent.TimeSlider).is_visible || false);
          setIsCountrySearchVisible(_find(components, UIComponent.CountriesSearcher).is_visible || false)
        }
   }, []);

  const setNewDays = useCallback(
    () => {
        let date = startDate;
        const newDays = [...days];
        for (let i = 0; i <= daysRange; i++) {
          newDays.push(format(date, 'yyyy-MM-dd'));
          date = addDays(date, 1);
        }
        setDays((oldDays) => [...oldDays, newDays]);
    },
    [days,startDate],
  ) 

  /**
   * 
   * const setSelectedDate = useCallback(
      () => {
        (newDate) => {
          this.setState({
            ...this.state,
            selectedDate: newDate,
          });
        };
      },
      [input],
    ) 

    const setStartDate =  useCallback(
      () => {
        (startDate) => {
          this.setState({
            ...this.state,
            startDate,
          });
        };
      },
      [input],
    ) 

    const setEndDate = useCallback(
      () => {
        (endDate) => {
          this.setState({
            ...this.state,
            endDate,
          });
        };
      },
      [input],
    ) 
   */
  

  const pausePlayerState =  useCallback(
    () => {
        const formattedSelectedDate = new Date(selectedDate);
        if (
          formattedSelectedDate.getDate() === endDate.getDate() &&
          formattedSelectedDate.getMonth() === endDate.getMonth() &&
          formattedSelectedDate.getFullYear() === endDate.getFullYear()
        ) {
          alert('Ended');
          
          setPlayerState(PAUSED);
          setSelectedDate(format(startDate, 'yyyy-MM-dd'))
        }
    },
    [endDate,selectedDate,startDate],
  ) 

  const toggleState = useCallback(
    (newState) => {
        setPlayerState(newState)
    },
    [],
  ) 

  const updatePlayerState = useCallback(
    () => {
        const formattedSelectedDate = new Date(selectedDate);
        let loop = null;
        if (playerState === PLAYING) {
          loop = setInterval(() => {
            if (playerState === PAUSED || formattedSelectedDate === endDate) {
              console.log('Stopped');
              clearInterval(loop);
            } else {
              console.log('Still looping');
              setSelectedDate(format(
                addDays(formattedSelectedDate, 1),
                'yyyy-MM-dd',
              ))
            }
          }, playSpeed);
        }
    
        return () => clearInterval(loop);
    },
    [selectedDate,endDate,playerState],
  ) 

  const updateIsDark = useCallback(
    () => {
        const darkModePreference = window.localStorage.getItem('darkmode');
    
        if (!darkModePreference) {
          const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setIsDark(isDarkTheme.toString());
          document.getElementsByTagName('html')[0].classList.add('dark');
          window.localStorage.setItem('darkmode', 'true');
        }
        if (darkModePreference === 'true') {
          document.getElementsByTagName('html')[0].classList.add('dark');
          setIsDark("true");
        } else if (darkModePreference === 'false') {
          setIsDark("false");
        }
    },
    [],
  ) 


  const closeDialog = useCallback(
    () => {
        setDialog(prevState => ({
          ...prevState,
          opened: false, template: '', title: '' 
          }));
    },
    [],
  ) 

  const openDialog = useCallback(
    (props) => {
        setDialog(prevState => ({
          ...prevState,
          opened: true,
          template: '',
          title: '',
          iso2: props.iso2,
          country: props.country,
        }
      ));
    },
    [],
  );

  useEffect(() =>{
    getEnvData();
   },[getEnvData])
 

  useEffect(() => {
    setNewDays();
    pausePlayerState();
    router.resetLocalStorage();
    updatePlayerState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    const _find = (arr, param) => arr.find(value => value.name === param);
    
    return (
      <div
        onKeyUp={(e) => {
          if (e.key === ' ') {
            const newState = playerState === PAUSED ? PLAYING : PAUSED;

            toggleState(newState);
          }
        }}
      >
        <AppContext.Provider value={{environment, setEnvironment}} >
        <ThemeContext.Provider value={{ isDark }}>
          <LoadingAnimation isLoading={loading} />
          <Map
            dark={isDark}
            selectedDate={selectedDate}
            startDate={startDate}
            endDate={endDate}
            onOpen={openDialog}
            setIsLoading={setIsLoading}
            daysRange={daysRange}
            isCountrySearchVisible={isCountrySearchVisible}
          />
          <TabMenu darkMode={isDark} setDarkMode={updateIsDark} />
          <Totals dark={isDark} />
          {isLegendVisible && <Legend dark={isDark} />}
          {/* <CountriesSearcher i18n={{ locale: 'en, en-US' }} /> */}
          <LanguageSelector
            languageChangeHandler={setCurrentLanguage}
            dark={isDark}
          />
          <Watermark dark={isDark} fontsize={watermarkSize} />
          {startDate && endDate && selectedDate && isTimeSliderVisible && (
            <TimeSlider
              playerState={playerState}
              onPlayerStateToggle={toggleState}
              dark={isDark}
              days={days}
              i18n={{ locale: 'en, en-US' }}
              onChange={(CurrentSelectedDate) => {
                setSelectedDate(CurrentSelectedDate);
              }}
              currentSelectedDay={selectedDate}
              selectedDate={selectedDate}
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
        </AppContext.Provider>
      </div>
    );
}

export default App;
