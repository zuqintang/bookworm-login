import { createSelector } from "reselect";
import {
  ELEMENTS_FETCHED,
  ELEMENT_CREATED,
  ELEMENT_SELECTED,
  ELEMENT_FETCHED,
  ELEMENT_CANCELSELECTED,
  ELEMENT_SAVED
} from "../types";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    case ELEMENT_CREATED:
    case ELEMENT_SELECTED:
      return { ...state, ...action.data };
    case ELEMENTS_FETCHED:
      return { ...state, ...action.data };
    case ELEMENT_FETCHED:
      return { ...state, activeRowData: action.data };
    case ELEMENT_CANCELSELECTED:
      return { ...state, activeRowData: null, activeRow: 0 };
    case ELEMENT_SAVED:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
