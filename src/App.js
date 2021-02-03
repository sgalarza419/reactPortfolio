import React from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Index";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "./App.css"

function App() {
  return (

    <Router>
    <div className="background">
      <Navbar />
      <Switch>
        <Route exact path={["/reactPortfolio", "/about"]}>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
