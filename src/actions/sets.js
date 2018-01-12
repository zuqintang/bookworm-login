import { normalize } from "normalizr";
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
import api from "../api";
import { setSchema } from "../schemas";

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

const SetChildrenFetched = data => ({
  type: SET_CHILDREN_FETCHED,
  data
});
const setSaved = data => ({
  type: SET_SAVED,
  data
});
const fimalyFetched = data => ({
  type: FIMALY_FETCHED,
  data
});

// 根据参数param（分页条件）获取所有sets结果
export const fetchSets = param => dispatch =>
  api.set.fetchSets(param).then(sets => dispatch(setsFetched(sets)));

// 根据参数param（分页条件）某一set下的所有 数据组 和 数据元 结果
export const fetchSetChildren = param => dispatch =>
  api.set
    .fetchSetChildren(param)
    .then(children => dispatch(SetChildrenFetched(children)));

// 根据参数param（set对象）保存 某一 set
export const saveSet = data => dispatch =>
  api.set.saveSet(data).then(set => dispatch(setSaved(set)));

// 根据参数param（set对象的ID） 获取 某一 set 结果
export const fetchSet = param => dispatch =>
  api.set.fetchSet(param).then(set => dispatch(setFetched(set)));

// 获取数据集, 数据组, 数据元 的国标（flag=0），企标（flag=1），未审核(flag=0)，已审核(flag=1)数量（数量0不在结果中）
export const fetchFimaly = param => dispatch =>
  api.set.fetchFimaly(param).then(sets => dispatch(fimalyFetched(sets)));

// 新增数据集，并序列化存入state.sets中。
export const createSet = data => dispatch =>
  api.set
    .createSet(data)
    .then(set => dispatch(setCreated(normalize(set, setSchema))));

// 在SetPage中选择中一行，保存activeRow至state.sets
export const selectSet = data => dispatch => dispatch(setSelected(data));

// 在SetPage中取消选中，将state.sets.activeRow设置为null
export const cancelSelectSet = () => dispatch => dispatch(setCancelSelected());
