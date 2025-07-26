
import Header from './components/Header'
import { AuroraHero } from './components/AuroraHero'
import CustomCursor from './components/CustomCursor'
// import { RevealLinks } from './components/RevealLinks'
// import Trippy from './components/TrippyScroll'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Header/>
      
      <AuroraHero/>
      
      
      <CustomCursor/>
      <About />
      {/* <RevealLinks />
      <Trippy /> */}
      
      {/* Additional components can be added here */}
    </>
  )
}

export default App
