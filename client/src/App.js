import React from 'react';
//  COMPONENT imports
import Navbar from "./components/Navbar/Navbar";
import About from "./AppSections/About/About";
import Projects from "./AppSections/Projects/Projects";
import Contact from "./AppSections/Contact/Contact";
import Footer from './AppSections/Footer/Footer';

import './App.css';

function App() {
    return (
        <div className="App" id="scroll-top">
            <Navbar />
            <header className="App-header">
                <h1 className="container">
                    Hey, I'm <span className="hero-name">Brendan Leighton!</span> Web Developer
              </h1>
            </header>
            <main>
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
