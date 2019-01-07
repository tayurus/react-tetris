export const drawFigure = (figureName = "line", row = 0, col = 0) => {
  switch (figureName) {
    case "line":
      return {
        name: "line",
        points: [[row, col], [row + 1, col], [row + 2, col]],
        rotate: 0
      };
  }
};
