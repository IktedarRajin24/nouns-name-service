/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header></Header>
      <Homepage/>
      <Footer></Footer>
    </div>
  )
}

export default App
