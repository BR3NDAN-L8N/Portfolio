import React from 'react';
//  COMPONENT imports
import About from "./AppSections/About/About";
import Projects from "./AppSections/Projects/Projects";
import Contact from "./AppSections/Contact/Contact";
import Footer from './AppSections/Footer/Footer';
import Hero from './AppSections/Hero/Hero';
import Navbar from './components/Navbar/Navbar'



import './App.css';

function App() {
    return (
        <div className="App" id="scroll-top">
            <Hero />
            <Navbar />
            <main>
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
