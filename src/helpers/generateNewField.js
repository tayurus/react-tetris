import { FIELD_WIDTH, FIELD_HEIGHT } from "./../constants";

export const generateNewField = () =>
  Array(FIELD_HEIGHT)
    .fill(0)
    .map(() => Array(FIELD_WIDTH).fill(0));
