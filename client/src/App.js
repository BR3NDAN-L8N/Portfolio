import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Email from "./components/email/index";
// import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={About} />
          {/*<Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} /> */}
        </Switch>
        <Email />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
