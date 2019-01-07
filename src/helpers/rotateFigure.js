import { FIGURES_ROTATE } from "./../constants";

export const rotateFigure = figure => {
  const name = figure.name;
  const r = figure.rotate;
  return figure.points.map((point, pointIndex) => {
    console.log("FIGURES_ROTATE[name] = ", FIGURES_ROTATE[name]["r" + (r + 1)][pointIndex][0]);
    return [
      point[0] + FIGURES_ROTATE[name]["r" + ((r + 1) % 4)][pointIndex][0],
      point[1] + FIGURES_ROTATE[name]["r" + ((r + 1) % 4)][pointIndex][1]
    ];
  });
};
