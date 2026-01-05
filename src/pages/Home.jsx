import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// import RegistrationCall from '../components/RegistrationCall'; // Uncomment when Registrations open
import HeroSection from '../components/HeroSection';
import Events from '../components/Events';
import WhatWeOffer from '../components/WhatWeOffer';
import Highlights from '../components/Highlights';
import GeneralInfo from '../components/GeneralInfo';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else if (location.pathname === '/') {
      // Only reset scroll when arriving at Home without a hash
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8">
        {/* <RegistrationCall /> Uncomment when Registrations open */}

        <HeroSection />
        <Highlights />
        <WhatWeOffer />
        <GeneralInfo />
        <Events />
        <Footer />
      </div>
    </motion.div>
  );
}
