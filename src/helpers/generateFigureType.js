import _ from "lodash";
import { FIGURES_COUNT } from "./../constants";
export const generateFigureType = () => _.random(1, FIGURES_COUNT);
