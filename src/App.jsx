
import Header from './components/Header'
import { AuroraHero } from './components/AuroraHero'
import CustomCursor from './components/CustomCursor'
// import { RevealLinks } from './components/RevealLinks'
// import Trippy from './components/TrippyScroll'
import About from './pages/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <>
       <Header/>
      
      <AuroraHero/>
      
      
      <CustomCursor/>
      <About />
      {/* <RevealLinks />
      <Trippy /> */}
      
    </>
   
     
      

      
    
  )
}

export default App
