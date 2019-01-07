import React, { Component } from "react";
import "./App.css";

import { generateFigureType } from "./helpers";

class App extends Component {
  render() {
    console.log(generateFigureType());
    return <div className="App" />;
  }
}

export default App;
