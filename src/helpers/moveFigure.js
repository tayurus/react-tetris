import _ from "lodash";

import { moveCell } from "./";
export const moveFigure = (field, figure, direction) => {
  let rowDelta = 0,
    colDelta = 0;
  switch (direction) {
    case "left":
      colDelta = -1;
      break;
    case "right":
      colDelta = 1;
      break;
    case "down":
      rowDelta = 1;
      break;
  }
  let newPoints = _.clone(figure.points);
  newPoints = newPoints.map(point => moveCell(field, point, rowDelta, colDelta));
  if (newPoints.includes(false)) {
    return figure;
  } else {
    return { ...figure, points: newPoints };
  }
};
