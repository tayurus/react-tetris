import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { generateNewField, drawFigure, rotateFigure, moveFigure, moveCell } from "./helpers";
import { FIELD_HEIGHT, FIELD_WIDTH } from "./constants";
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
  }

  componentDidMount() {
    this.setState(
      {
        field: generateNewField()
      },
      () => {
        this.drawNewFigure();
        setInterval(() => this.tetrisMove("down"), 1000);
      }
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

      this.tetrisMove(direction);
    };
  }

  tetrisMove(direction) {
    const oldFigure = _.clone(this.state.figure);
    const newFigure = moveFigure(this.state.field, this.state.figure, direction);
    if (_.isEqual(oldFigure, newFigure) && direction === "down") {
      this.fixFigure();
      this.removeFullRows();
      this.drawNewFigure();
    } else {
      this.setState({ figure: moveFigure(this.state.field, this.state.figure, direction) }, () =>
        this.updateFigureOnField()
      );
    }
  }

  updateFigureOnField() {
    let newField = _.clone(this.state.field);
    //remove prev figure
    newField = newField.map(row => row.map(col => (col === 1 ? 0 : col)));
    //draw
    this.state.figure.points.forEach(point => (newField[point[0]][point[1]] = 1));
    this.setState({ field: newField });
  }

  fixFigure() {
    let newField = _.clone(this.state.field);
    newField = newField.map(row => row.map(col => (col === 1 ? 2 : col)));
    this.setState({ field: newField });
  }

  drawNewFigure() {
    this.setState({ figure: drawFigure("line", 0, 4) });
  }

  removeFullRows() {
    let newField = _.clone(this.state.field);
    let rowRemovedCount = 0;

    //remove rows
    newField = newField.map(row => {
      if (row.every(item => item === 2)) {
        rowRemovedCount++;
        return row.map(item => 0);
      } else {
        return row;
      }
    });

    //drop other fixed cells on empty space
    for (let row = FIELD_HEIGHT - 2; row >= 0; row--) {
      for (let col = 0; col < FIELD_WIDTH; col++) {
        if (newField[row + 1][col] === 0 && newField[row][col] === 2) {
          newField[row + 1][col] = 2;
          newField[row][col] = 0;
        }
      }
    }

    this.setState({ field: newField });
  }

  render() {
    return (
      <div className="App">
        <Field className="mx-auto my-5" field={this.state.field} />
      </div>
    );
  }
}

export default App;
