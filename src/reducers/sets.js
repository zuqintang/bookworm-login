import { createSelector } from "reselect";
import {
  SETS_FETCHED,
  SET_CREATED,
  SET_SELECTED,
  SET_FETCHED,
  SET_CANCELSELECTED
} from "../types";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    case SET_CREATED:
    case SET_SELECTED:
      return { ...state, ...action.data };
    case SETS_FETCHED:
      return action.data;
    case SET_FETCHED:
      return { ...state, activeRowData: action.data };
    case SET_CANCELSELECTED:
      return { ...state, activeRowData: null, activeRow: 0 };
    default:
      return state;
  }
}

//  SELECTORS

export const setsSelector = state => state.sets;

export const allSetsSelector = createSelector(setsSelector, setsHash =>
  Object.values(setsHash)
);
