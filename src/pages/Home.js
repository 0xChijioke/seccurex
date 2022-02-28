import React from 'react';
import Hero from '../components/Hero.js';
import Banner from '../components/Banner.js';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";
//import './App.css';

function Home() {
  return (
  <>
  <Hero>  
    <Banner title="Secure Stay" subtitle="Crypto Zen">
      <Link to="/Rooms" className="btn-primary">Explore</Link>
    </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </>
  )
}

export default Home;
