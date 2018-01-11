import { normalize } from "normalizr";
import {
  SETS_FETCHED,
  SET_CREATED,
  SET_SELECTED,
  SET_FETCHED,
  SET_CANCELSELECTED
} from "../types";
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

const setSelected = data => ({
  type: SET_SELECTED,
  data
});
const setFetched = data => ({
  type: SET_FETCHED,
  data: data.rows[0]
});

const setCancelSelected = () => ({
  type: SET_CANCELSELECTED
});

export const fetchDataFimaly = param => dispatch =>
  api.sets.fetchDataFimaly(param).then(sets => dispatch(setsFetched(sets)));

export const fetchSet = param => dispatch =>
  api.dataset.searchSetInfo(param).then(set => dispatch(setFetched(set)));

export const createSet = data => dispatch =>
  api.sets
    .create(data)
    .then(set => dispatch(setCreated(normalize(set, setSchema))));

export const selectSet = data => dispatch => dispatch(setSelected(data));

export const cancelSelectSet = () => dispatch => dispatch(setCancelSelected());
