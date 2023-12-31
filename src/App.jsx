import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutMe2 from './components/AboutMe2';


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe2 />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />

    </div>
  )
}
