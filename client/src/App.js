//  COMPONENT imports
import Navbar from "./components/Navbar/Navbar";
import About from "./AppSections/About/About";
import Projects from "./AppSections/Projects/Projects";

import './App.css';

function App() {
  return (
    <main className="App" id="scroll-top">
          <Navbar />
          <header className="App-header">
              <h1 className="container">
                  Hey, I'm <span className="hero-name">Brendan Leighton!</span> Web Developer
              </h1>
          </header>
          
          <About />
          <Projects />
    </main>
  );
}

export default App;
