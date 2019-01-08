import _ from "lodash";

import { FIELD_WIDTH, FIELD_HEIGHT } from "./../constants";

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

const moveCell = (field, point, rowDelta, colDelta) => {
  const rowCollisionWidthField = point[0] + rowDelta < 0 || point[0] + rowDelta >= FIELD_HEIGHT;
  const colCollisionWithField = point[1] + colDelta < 0 || point[1] + colDelta >= FIELD_WIDTH;

  if (rowCollisionWidthField || colCollisionWithField) {
    return false;
  } else {
    const collisionWithOtherFigures = field[point[0] + rowDelta][point[1] + colDelta] == 2;
    if (collisionWithOtherFigures) {
      return false;
    }
    return [point[0] + rowDelta, point[1] + colDelta];
  }
};
