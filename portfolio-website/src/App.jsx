import {BrowserRouter} from 'react-router-dom'
import About from './components/components/About'
import Contacts from './components/components/Contact'
import Experience from './components/components/Experience'
import Feedbacks from './components/components/Feedbacks'
import Hero from './components/components/Hero'
import Navbar from './components/components/Navbar'
import Works from './components/components/Works'
import Stars from './components/components/canvas/Stars'
import Tech from './components/components/Tech'

const App = () => { 
  return (
   <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contacts />
          <Stars />
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App
