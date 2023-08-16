/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import BannerScroll from './components/BannerScroll/BannerScroll'
import Footer from './components/Footer/Footer'
import SectionOne from './components/SectionOne/SectionOne'
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation'
import SectionFour from './components/SectionFour/SectionFour'
import SectionThree from './components/SectionThree/SectionThree'
import SectionTwo from './components/SectionTwo/SectionTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header></Header>
      <Banner></Banner>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <Footer></Footer>
    </div>
  )
}

export default App
