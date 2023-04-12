import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Header from './Header.js';
import PopUps from './pages/PopUps.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Faqs from './pages/Faqs.js';

import Footer from './Footer.js';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popups" element={<PopUps />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </div>
  );
}
