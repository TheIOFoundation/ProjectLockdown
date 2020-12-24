import './App.css';
import {useState} from 'react';
import {Map} from "./components/Map/Map";
import {LoadingAnimation} from './components/LoadingAnimation/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingAnimation isLoading={isLoading}/>
      <Map setIsLoading={setIsLoading}></Map>
    </>
  );
}

export default App;
