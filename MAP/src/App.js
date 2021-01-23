import './App.css';
import { useEffect, useState } from 'react';
import { Map } from './components/Map/Map';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { Legend } from './components/Legend/Legend';

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
      <Legend dark={isDark} />
    </>
  );
}

export default App;
