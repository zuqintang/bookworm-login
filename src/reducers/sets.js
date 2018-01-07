import { createSelector } from "reselect";

export default function sets(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

//SELECTORS

export const setsSelector = state => state.sets;

export const allSetsSelector = createSelector(setsSelector, setsHash =>
  Object.values(setsHash)
);
