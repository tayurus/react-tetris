export const drawFigure = (figureName = "line", row = 0, col = 0) => {
  switch (figureName) {
    case "line":
      return {
        name: "line",
        points: [[row, col], [row + 1, col], [row + 2, col], [row + 3, col]],
        rotate: 0
      };
    case "zipper":
      return {
        name: "zipper",
        points: [[row, col], [row + 1, col], [row + 1, col - 1], [row + 2, col - 1]],
        rotate: 0
      };
    case "cube":
      return {
        name: "cube",
        points: [[row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1]],
        rotate: 0
      };
    case "hook":
      return {
        name: "hook",
        points: [[row, col], [row + 1, col], [row + 2, col], [row + 2, col - 1]],
        rotate: 0
      };
  }
};
