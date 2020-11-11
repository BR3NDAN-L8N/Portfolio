// 
// REACT imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 
// CUSTOM imports
import About from "./pages/about";
import Projects from './pages/projects';
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Email from "./components/email/index";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Email />
        <Footer />
      </div>
    </Router>
  );
}