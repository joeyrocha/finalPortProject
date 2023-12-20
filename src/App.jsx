import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Experience from './components/Experience';


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      
      
      <ContactMe />

    </div>
  )
}
