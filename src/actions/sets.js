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

export const fetchDataFimaly = param => dispatch =>
  api.sets.fetchDataFimaly(param).then(sets => dispatch(setsFetched(sets)));

export const createSet = data => dispatch =>
  api.sets
    .create(data)
    .then(set => dispatch(setCreated(normalize(set, setSchema))));
