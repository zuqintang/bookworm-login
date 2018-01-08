import { createSelector } from "reselect";
import { SETS_FETCHED } from "../types";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    case SETS_FETCHED:
      return action.data;
    default:
      return state;
  }
}

//SELECTORS

export const setsSelector = state => state.sets;

export const allSetsSelector = createSelector(setsSelector, setsHash =>
  Object.values(setsHash)
);
