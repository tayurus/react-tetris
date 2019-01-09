import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { generateNewField, drawFigure, rotateFigure, moveFigure, moveCell, generateFigureType } from "./helpers";
import { FIELD_HEIGHT, FIELD_WIDTH } from "./constants";
import { Field } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: [],
      figure: {
        points: []
    },
    toggleMove: true
    };
  }

  componentDidMount() {
    this.setState(
      {
        field: generateNewField()
      },
      () => {
        this.drawNewFigure();
        this.startInterval()
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

  startInterval = () => {
      this.moveInterval = setInterval(() => this.tetrisMove("down"), 1000)
  }

  toggleMove = () => {
      this.setState((state) => ({
        toggleMove: !state.toggleMove
    }), () => this.state.toggleMove ? this.startInterval() : clearInterval(this.moveInterval))
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
    this.setState({ figure: drawFigure(generateFigureType(), 0, 4) });
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
    for (let i = 0; i < rowRemovedCount; i++) {
      for (let row = FIELD_HEIGHT - 2; row >= 0; row--) {
        if (newField[row + 1].every(item => item === 0)) {
          newField[row + 1] = _.clone(newField[row]);
          newField[row] = newField[row].map(item => (item = 0));
        }
      }
    }

    this.setState({ field: newField });
  }

  render() {
    const text = this.state.toggleMove ? 'Pause' : 'Start'
    return (
      <div className="App">
        <button type="button" className="btn btn-primary mt-5 mx-auto d-block" onClick={this.toggleMove}>{text}</button>
        <Field className="mx-auto my-5" field={this.state.field} />
      </div>
    );
  }
}

export default App;
