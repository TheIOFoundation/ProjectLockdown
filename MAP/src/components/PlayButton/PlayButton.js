import pause from '../../assets/icons/pause.svg';
import play from '../../assets/icons/play.svg';

const states = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
};

const height = '40px';

const { PLAYING, PAUSED } = states;

const PlayButton = ({ state, toggleState }) => {
  const playing = () => (
    <img
      style={{ height, cursor: 'pointer' }}
      src={pause}
      alt="Pause button"
      onClick={() => toggleState(PAUSED)}
    />
  );

  const paused = () => (
    <img
      style={{ height, cursor: 'pointer' }}
      src={play}
      alt="Play button"
      onClick={() => toggleState(PLAYING)}
    />
  );
  return (
    <div style={{ position: 'absolute', left: '2.5vw', bottom: '50px' }}>
      {state === PLAYING ? playing() : paused()}
    </div>
  );
};

export default PlayButton;
