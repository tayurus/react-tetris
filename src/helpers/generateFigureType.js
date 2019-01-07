import _ from "lodash";
import { FIGURES } from "./../constants";
export const generateFigureType = () => FIGURES[_.random(1, FIGURES.length - 1)];
