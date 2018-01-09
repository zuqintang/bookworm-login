import { normalize } from "normalizr";
import { SETS_FETCHED, SET_CREATED } from "../types";
import api from "../api";
import { setSchema } from "../schemas";

// data.entities.books
const setsFetched = data => ({
  type: SETS_FETCHED,
  data
});

const setCreated = data => ({
  type: SET_CREATED,
  data
});

export const fetchSets = param => dispatch =>
  api.sets
    .fetchAll(param)
    .then(sets => dispatch(setsFetched(normalize(sets, [setSchema]))));

export const createSet = data => dispatch =>
  api.sets
    .create(data)
    .then(set => dispatch(setCreated(normalize(set, setSchema))));
