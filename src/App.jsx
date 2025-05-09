import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ElectricBike from './pages/ElectricBike'


const App = () => {
  console.log("redering app")
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/ElectricBike" element={<ElectricBike />} />
    </Routes>
  )
}

export default App
