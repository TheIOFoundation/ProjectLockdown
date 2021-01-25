import { useState, useEffect } from 'react';
import { addPwaUpdateListener } from '../../utils/addPwaUpdateListener.js';
import { setFavIcon } from '../../utils/setFavIcon.js';
import '../pwa-update-available';
import './Settings.scss';

export function Settings({ onClose, locale }) {
  const [pwaUpdateAvailable, setPwaUpdateAvailable] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkmode() {
    if (document.getElementsByTagName('html')[0].classList.contains('dark')) {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
      setFavIcon(false);
      setDarkMode(false);
      onClose();
    } else {
      document.getElementsByTagName('html')[0].classList.add('dark');
      localStorage.setItem('darkmode', 'true');
      setFavIcon(true);
      setDarkMode(true);
      onClose();
    }
  }

  useEffect(() => {
    async function addListener() {
      addPwaUpdateListener(updateAvailable => {
        setPwaUpdateAvailable(updateAvailable);
      });
      let dark = localStorage.getItem('darkmode');
      dark = dark !== 'false' && dark !== null;
      setDarkMode(dark);
    }
    addListener();
  }, []);

  return (
    <div className="settings">
      <button onClick={toggleDarkmode} className="ld-button">
        {locale.t('menu.userPreferenceSection.theme.action')}
        {darkMode
          ? locale.t('menu.userPreferenceSection.theme.light')
          : locale.t('menu.userPreferenceSection.theme.dark')}
      </button>

      {pwaUpdateAvailable ? (
        <pwa-update-available>
          <button onClick={() => onClose()} className="ld-button">
            {locale.t('menu.userPreferenceSection.app.update')}
          </button>
        </pwa-update-available>
      ) : (
        ''
      )}
    </div>
  );
}
