import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Navbar() {
  //   const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar">
      <a className="navbar-brand" href="index.html">
        Brendan Leighton
            </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
        aria-label="Toggle for navigation bar. Open to access the navigation buttons.">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/"><span className="nav-bar-link">About</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects"><span className="nav-bar-link">Portfolio</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#social-media"><span className="nav-bar-link">Social Media</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;