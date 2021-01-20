import '../App.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { HeroData } from '../Data/HeroData';
import React, {useState} from 'react';

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero slides={HeroData} />
    </>
  );
}

export default Home;
