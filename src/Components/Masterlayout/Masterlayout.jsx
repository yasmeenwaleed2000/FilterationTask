import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Testymonials from '../Testymonials/Testymonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Masterlayout() {
  return (
    <>
    <Home/>
    <About/>
    <Services/>
    <Testymonials/>
    <Contact/>
    <Footer/>
    </>
  )
}
