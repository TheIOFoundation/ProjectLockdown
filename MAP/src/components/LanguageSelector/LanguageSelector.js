import React, { useState } from 'react'
import { world } from '../../assets/icons/world'
import './LanguageSelector.css'

const LanguageSelector = ({dark}) => {
  const [showLanguages, setShowLanguages] = useState(false)

  const [selectedLang, setSelectedLang] = useState('en')

  const languages = ['ar', 'en', 'es', 'it', 'pt', 'ru', 'zhcn', 'zhhk']

  const toggleShowLanguages = () => {
    setShowLanguages((prevState) => !prevState)
  }
  return (
    <div 
    // className={`${dark ? 'dark' : ''}`} 
    onClick={toggleShowLanguages}>
      <div className={`${dark ? 'dark SelectedLang' : 'SelectedLang'}`} >
        {selectedLang.toUpperCase()}
        <div className={`${dark ? 'dark CircleBtn' : 'CircleBtn'}`}>{world}</div>
      </div>
      <div className={`LangOptions ${showLanguages && 'show'}`}>
        {languages.map((language) => {
          return (
            <div
            // style={{color: `${dark ? 'white' : '#333333'}`}}
              className={`LangOpt ${language === selectedLang ? 'active' : ''} ${dark ? 'dark ' : ''}`}
              onClick={() => setSelectedLang(language)}
            >
              {language.toUpperCase().replace('-', '\n')}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageSelector
