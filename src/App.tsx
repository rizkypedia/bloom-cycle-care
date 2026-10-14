
import './App.css'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import OvulationCalculator from './components/ovulation/Calculator'
import { translations, type LanguageCode } from './lang/lang'

const STORAGE_KEY = 'bloom-language'

function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
    return savedLanguage && savedLanguage in translations ? (savedLanguage as LanguageCode) : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  return (
    <div className='app'>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        brand={translations[language].brand}
      />
      <main className='content'>
        <OvulationCalculator language={language} translations={translations[language]} />
      </main>
      <Footer text={translations[language].footer} />
    </div>
  )
}

export default App
