// main app page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com

// import statements
import React from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => (
  <div className="bg-navy text-gray-400 leading-relaxed">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default App;