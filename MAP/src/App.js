import './App.css';
import { useEffect, useState } from 'react';
import { Map } from './components/Map/Map';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { Legend } from './components/Legend/Legend';
import Totals from './components/Totals/Totals';
import Header from './components/Header/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <>
      <LoadingAnimation isLoading={isLoading} />
      <Map setIsLoading={setIsLoading}></Map>
      <Header dark={isDark} />
      <Totals dark={isDark} />
      <Legend dark={isDark} />
      <LanguageSelector dark={isDark} />
    </>
  );
}

export default App;
