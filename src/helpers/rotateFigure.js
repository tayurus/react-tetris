import { FIGURES_ROTATE } from "./../constants";

export const rotateFigure = figure => {
  const { name, rotate } = figure;
  return {
    ...figure,
    rotate: rotate + 1,
    points: figure.points.map((point, pointIndex) => {
      return [
        point[0] + FIGURES_ROTATE[name]["r" + ((rotate + 1) % 4)][pointIndex][0],
        point[1] + FIGURES_ROTATE[name]["r" + ((rotate + 1) % 4)][pointIndex][1]
      ];
    })
  };
};
