import React, { Component } from "react";
import "./App.css";

import { generateNewField, drawFigure, rotateFigure } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: []
    };
  }

  componentDidMount() {
    this.setState(
      {
        field: generateNewField()
      },
      () =>
        this.setState({ figure: drawFigure("line", 0, 4) }, () => {
          console.log(rotateFigure(this.state.figure));
        })
    );
  }

  render() {
    console.log(this.state);
    return <div className="App" />;
  }
}

export default App;
