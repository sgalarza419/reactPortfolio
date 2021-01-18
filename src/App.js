import React from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Index";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (

    <Router>
    <div className="background">
      <Navbar />
      <Wrapper>
        <Route exact path={["/", "/about"]}>
          <Home />
        </Route>
        <Route exact path={["/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/contact"]}>
          <Contact />
        </Route>
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;
