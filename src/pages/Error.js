import React from 'react';
import Hero from '../components/Hero.js';
import Banner from '../components/Banner.js';
import { Link } from 'react-router-dom';
//import './App.css';

function Error() {
  return <Hero>
    <Banner title="404" subtitle="page not found">
      <Link to="/" className="btn-primary">Return Home</Link>
    </Banner>
    </Hero>
}

export default Error;
  