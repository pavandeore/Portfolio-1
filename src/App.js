import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App=()=> {
  return (
      <>
        <Header/> 
         <Home />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer/>
      </>
  );
}

export default App;
