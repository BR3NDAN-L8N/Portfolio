//  COMPONENT imports
import About from "./AppSections/About/About";
import Navbar from "./components/Navbar/Navbar";

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
    </main>
  );
}

export default App;
