import _ from "lodash";

export const moveFigure = (figure, direction) => {
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
  newPoints = newPoints.map(point => [(point[0] += rowDelta), (point[1] += colDelta)]);
  return { ...figure, points: newPoints };
};
