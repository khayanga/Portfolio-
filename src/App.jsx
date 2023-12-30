import { useState } from 'react'

import {Navbar} from './components'
import { Work,Testimonials,Header,Skills, Footer,About } from './container'
import './App.scss'
function App() {
  

  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
