import React from "react";
import "semantic-ui-css/semantic.min.css";
import Header from "./main/header/Header";
import Home from "./main/home/Home";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <br />
        <Home />
      </Router>
    </div>
  );
}

export default App;
