import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GetApp from './GetApp'
import NewFeatures from './NewFeatures'
import ElectricBike from './ElectricBike'
import GettingAround from './GettingAround'

function Home() {
  return (
    <div>
      <Navbar signin={{label: 'Sign in'}} signup={"Sign up"} help={"Help"}/>
      <Hero />
      <GetApp />
      <NewFeatures />
      <ElectricBike />
      <GettingAround />
    </div>
  )
}

export default Home
