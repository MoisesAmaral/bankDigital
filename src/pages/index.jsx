import React, {useState} from 'react'
import {homeObjOne, homeObjThree, homeObjTwo} from '../data/Data'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSectionOne from '../components/InfoSection/InfoSectionOne'
import InfoSectionTwo from '../components/InfoSection/InfoSectionTwo'
import InfoSectionThree from '../components/InfoSection/InfoSectionThree'
import Services from '../components/Services'
import Footer from '../components/Footer'



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSectionOne {...homeObjOne}/>
        <InfoSectionTwo {...homeObjTwo}/>
        <Services />
        <InfoSectionThree {...homeObjThree}/>
        <Footer />
    </>
  )
}

export default Home