//  COMPONENT imports
import About from "./AppSections/About/About";

import './App.css';

function App() {
  return (
    <main className="App">
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
