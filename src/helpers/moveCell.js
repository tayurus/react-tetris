import { FIELD_WIDTH, FIELD_HEIGHT } from "./../constants";

export const moveCell = (field, point, rowDelta, colDelta) => {
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
