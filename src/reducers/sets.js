import { createSelector } from "reselect";
import {
  SETS_FETCHED,
  SET_CREATED,
  SET_SELECTED,
  SET_FETCHED,
  SET_CANCELSELECTED,
  SET_CHILDREN_FETCHED,
  SET_SAVED,
  FIMALY_FETCHED
} from "../types";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    case SET_CREATED:
    case SET_SELECTED:
      return { ...state, ...action.data };
    case SETS_FETCHED:
      return { ...state, ...action.data };
    case SET_FETCHED:
      return { ...state, activeRowData: action.data };
    case SET_CANCELSELECTED:
      return { ...state, activeRowData: null, activeRow: 0 };
    case SET_CHILDREN_FETCHED:
      return { ...state, ...action.data };
    case SET_SAVED:
      return { ...state, ...action.data };
    case FIMALY_FETCHED:
      return action.data;
    default:
      return state;
  }
}

//  SELECTORS

export const setsSelector = state => state.sets;

export const allSetsSelector = createSelector(setsSelector, setsHash =>
  Object.values(setsHash)
);
