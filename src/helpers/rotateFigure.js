import { FIGURES_ROTATE } from "./../constants";
import { moveCell } from "./";

export const rotateFigure = (field, figure) => {
  const { name, rotate } = figure;

  let newPoints = figure.points.map((point, pointIndex) => {
    const rowDelta = FIGURES_ROTATE[name]["r" + ((rotate + 1) % 4)][pointIndex][0];
    const colDelta = FIGURES_ROTATE[name]["r" + ((rotate + 1) % 4)][pointIndex][1];
    return moveCell(field, point, rowDelta, colDelta);
  });

  if (newPoints.includes(false)) {
    return figure;
  }

  return {
    ...figure,
    rotate: rotate + 1,
    points: newPoints
  };
};
