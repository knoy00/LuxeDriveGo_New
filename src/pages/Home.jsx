import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GetApp from './GetApp'
import NewFeatures from './NewFeatures'
import IntroBike from './IntroBike'
import GettingAround from './GettingAround'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar signin={ 'Sign in'} signup={"Sign up"} help={"Help"}/>
      <Hero />
      <GetApp />
      <NewFeatures />
      <IntroBike />
      <GettingAround />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home
