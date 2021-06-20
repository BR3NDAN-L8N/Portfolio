import React from 'react'
//  COMPONENT imports
import Hero from './AppSections/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from "./AppSections/Projects/Projects"
import About from "./AppSections/About/About"
import Contact from "./AppSections/Contact/Contact"
import Footer from './AppSections/Footer/Footer'



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
