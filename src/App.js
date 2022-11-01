import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import About from './components/About'
import Team from './components/Team'
import Gallery from './components/Gallery'
const App = () => {
  return (
    <>
     {/* Header */}
    <Header/>
     {/* Slider */}
     <Slider/>
     {/* About */}
     <About/>
     {/* team section */}
     <Team/>
     {/* gallery */}
     <Gallery/>
     {/* contact */}
    </>
  )
}

export default App
