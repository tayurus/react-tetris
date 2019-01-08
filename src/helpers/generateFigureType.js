import _ from "lodash";
import { FIGURES } from "./../constants";
export const generateFigureType = () => FIGURES[_.random(0, FIGURES.length - 1)];
