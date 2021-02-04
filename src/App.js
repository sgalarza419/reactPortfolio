import React from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Index";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route , HashRouter} from "react-router-dom";
import "./App.css"

function App() {
  return (

    <Router>
    <div className="background">
      <Navbar />
      <HashRouter>
        <Route exact path={["/reactPortfolio", "/about"]}>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </HashRouter>
    </div>
  </Router>
  );
}

export default App;
