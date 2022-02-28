import React from 'react';
import Hero from '../components/Hero.js';
import Banner from '../components/Banner.js';
import { Link } from 'react-router-dom';
//import './App.css';

function AboutUs() {
  return <Hero hero="roomsHero">
     <Banner title="About Us" subtitle="">
      <Link to="/" className="btn-primary">Return Home</Link>
    </Banner>
    </Hero>
}

export default AboutUs;
