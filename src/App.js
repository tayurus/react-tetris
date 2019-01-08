import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { generateNewField, drawFigure, rotateFigure, moveFigure } from "./helpers";
import { Field } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: [],
      figure: {
        points: []
      }
    };

    this.updateFigureOnField = this.updateFigureOnField.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        field: generateNewField()
      },
      () => this.setState({ figure: drawFigure("line", 0, 4) })
    );

    document.onkeydown = e => {
      let direction = "bottom";
      switch (e.which) {
        case 37: // left
          direction = "left";
          break;
        case 38: // up
          this.setState({ figure: rotateFigure(this.state.field, this.state.figure) }, () =>
            this.updateFigureOnField()
          );
          break;
        case 39: // right
          direction = "right";
          break;
        case 40: // down
          direction = "down";
          break;
      }
      this.setState({ figure: moveFigure(this.state.field, this.state.figure, direction) }, () =>
        this.updateFigureOnField()
      );
    };
  }

  updateFigureOnField() {
    let newField = _.clone(this.state.field);
    //remove prev figure
    newField = newField.map(row => row.map(col => (col === 1 ? 0 : col)));
    //draw
    this.state.figure.points.forEach(point => (newField[point[0]][point[1]] = 1));
    this.setState({ field: newField });
  }

  render() {
    return (
      <div className="App">
        <Field className="mx-auto" field={this.state.field} />
      </div>
    );
  }
}

export default App;
