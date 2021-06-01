import { useState, useEffect } from 'react';
import { addPwaUpdateListener } from '../../utils/addPwaUpdateListener.js';
import { setFavIcon } from '../../utils/setFavIcon.js';
import '../pwa-update-available';
import './Settings.scss';

import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
export function Settings({ onClose, isDark, setDarkMode }) {
  const [pwaUpdateAvailable, setPwaUpdateAvailable] = useState(false);

  const {
    t,
    // i18n
  } = useTranslation();

  const toggleDarkmode = () => {
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
  };

  useEffect(() => {
    async function addListener() {
      addPwaUpdateListener((updateAvailable) => {
        setPwaUpdateAvailable(updateAvailable);
      });
      let dark = localStorage.getItem('darkmode');
      dark = dark !== "false" && dark !== null;
      setDarkMode(dark);
    }
    addListener();
  }, [setDarkMode]);

  return (
    <div className="settings">
      <button onClick={toggleDarkmode} className="ld-button">
        {t('menu.userPreferenceSection.theme.action')}
        {isDark
          ? t('menu.userPreferenceSection.theme.light')
          : t('menu.userPreferenceSection.theme.dark')}
      </button>

      {pwaUpdateAvailable ? (
        <pwa-update-available>
          <button onClick={() => onClose()} className="ld-button">
            {t('menu.userPreferenceSection.app.update')}
          </button>
        </pwa-update-available>
      ) : (
        ''
      )}
    </div>
  );
}
