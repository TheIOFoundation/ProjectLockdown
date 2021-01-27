import { useEffect, useState } from 'react';
import { Map } from './components/Map/Map';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { Legend } from './components/Legend/Legend';
import Totals from './components/Totals/Totals';
import Header from './components/Header/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import './App.scss';
import { TabMenu } from './components/TabMenu/TabMenu';
import ThemeContext from './context/ThemeContext';
import format from 'date-fns/format';

function toJsonString(date) {
  return format(date, 'yyyy-MM-dd');
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModePreference = window.localStorage.getItem('darkmode');

    if (!darkModePreference) {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.getElementsByTagName('html')[0].classList.add('dark');
      window.localStorage.setItem('darkmode', 'true');
    }

    if (darkModePreference === 'true') {
      document.getElementsByTagName('html')[0].classList.add('dark');
      setIsDark(true);
    } else if (darkModePreference === 'false') {
      setIsDark(false);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <LoadingAnimation isLoading={isLoading} />
      <Map
        selectedDate={toJsonString(new Date())}
        startDate={false}
        endDate={false}
        setIsLoading={setIsLoading}
        daysRange={20}
      ></Map>
      <TabMenu />
      <Header dark={isDark} />
      <Totals dark={isDark} />
      <Legend dark={isDark} />
      <LanguageSelector dark={isDark} />
    </ThemeContext.Provider>
  );
}

export default App;
