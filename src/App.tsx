
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import OvulationCalculator from './components/ovulation/Calculator'

function App() {

  return (
    <>
    <div className='app'>
      <Header/>
      <main className='content'>
        <OvulationCalculator/>
      </main>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
