import { createSelector } from "reselect";
import { SETS_FETCHED, SET_CREATED } from "../types";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    case SETS_FETCHED:
    case SET_CREATED:
      return { ...state, ...action.data };
    // return { ...state, ...action.data.entities.sets };
    default:
      return state;
  }
}

//SELECTORS

export const setsSelector = state => state.sets;

export const allSetsSelector = createSelector(setsSelector, setsHash =>
  Object.values(setsHash)
);
