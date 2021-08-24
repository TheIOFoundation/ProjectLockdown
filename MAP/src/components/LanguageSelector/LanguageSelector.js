import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { world } from '../../assets/icons/world';
import { toBool } from '../../utils/utils';
import * as classes from './LanguageSelector.module.css';

const LanguageSelector = ({ dark }) => {
  dark = toBool(dark);

  const { t, i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(t('languageId').replace('-',''));

  const languages = ['ar', 'en', 'es', 'it', 'pt', 'ru', 'zh CN', 'zh HK'];

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  return (
    <div
      className={`${classes.LangSelector} ${dark && classes.dark}`}
    >
      <div className={`${classes.SelectedLang} ${dark && classes.dark}`}>
        {selectedLang.toUpperCase()}
        <div className={`${classes.CircleBtn} ${dark ? classes.dark : ''}`}>
          {world}
        </div>
      </div>
      <div
        className={`${classes.LangOptions} ${classes.show}`}
      >
        {languages.map((language, idx) => (
          <div
            key={idx}
            style={{ color: `${dark ? 'white' : '#333333'}` }}
            className={`${classes.LangOpt} ${
              language === selectedLang && classes.active
            } ${dark && classes.dark}`}
            onClick={() => setSelectedLang(language.replace(/\s+/g, ''))}
          >
            {language.toUpperCase().replace('-', '\n')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
