import React from 'react'
// import RegistrationCall from '../components/RegistrationCall'//Uncomment when Registrations open 
import HeroSection from '../components/HeroSection'
import Events from '../components/Events'
import Highlights from '../components/Highlights' 
import GeneralInfo from '../components/GeneralInfo'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8">
        {/* <RegistrationCall /> Uncomment when Registrations open */}

        <HeroSection />
        <Highlights />
        <GeneralInfo />
        <Events />
        <Footer />
      </div>
    </div>
  )
}