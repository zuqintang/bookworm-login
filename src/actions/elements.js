import {
  ELEMENTS_FETCHED,
  ELEMENT_SELECTED,
  ELEMENT_FETCHED,
  ELEMENT_CANCELSELECTED,
  ELEMENT_SAVED,
  FIMALY_FETCHED,
  FIELDCODE_FETCHED,
  OPTION_FETCHED
} from "../types";
import api from "../api";

const elementsFetched = data => ({
  type: ELEMENTS_FETCHED,
  data
});

const elementSelected = data => ({
  type: ELEMENT_SELECTED,
  data
});
const elementFetched = data => ({
  type: ELEMENT_FETCHED,
  data: data.rows[0]
});

const elementCancelSelected = () => ({
  type: ELEMENT_CANCELSELECTED
});

const fieldcodeFetched = data => ({
  type: FIELDCODE_FETCHED,
  data
});
const optionFetched = data => ({
  type: OPTION_FETCHED,
  data
});

const elementSaved = data => ({
  type: ELEMENT_SAVED,
  data
});
const fimalyFetched = data => ({
  type: FIMALY_FETCHED,
  data
});

// 根据参数param（分页条件）获取所有ELEMENTs结果
export const fetchElements = param => dispatch =>
  api.metadata
    .fetchElements(param)
    .then(({ rows, total }) => dispatch(elementsFetched({ rows, total })));

// 根据参数param（分页条件）某一Element下的所有 值域
export const fetchFieldcode = param => dispatch =>
  api.metadata
    .fetchFieldcode(param)
    .then(({ rows, total }) => dispatch(fieldcodeFetched({ rows, total })));

// 根据参数param（分页条件）某一Element下的所有 值域项 结果
export const fetchOption = param => dispatch =>
  api.metadata
    .fetchOption(param)
    .then(({ rows, total }) => dispatch(optionFetched({ rows, total })));

// 根据参数param（ELEMENT对象）保存 某一 ELEMENT
export const saveElement = data => dispatch =>
  api.metadata
    .saveELEMENT(data)
    .then(ELEMENT => dispatch(elementSaved(ELEMENT)));

// 根据参数param（ELEMENT对象的ID） 获取 某一 ELEMENT 结果
export const fetchElement = param => dispatch =>
  api.metadata.fetchELEMENT(param).then(ELEMENT => {
    dispatch(elementFetched(ELEMENT));
  });

// 获取数据集, 数据组, 数据元 的国标（flag=0），企标（flag=1），未审核(flag=0)，已审核(flag=1)数量（数量0不在结果中）
export const fetchFimaly = param => dispatch =>
  api.metadata
    .fetchFimaly(param)
    .then(ELEMENTs => dispatch(fimalyFetched(ELEMENTs)));

// 新增数据集，并序列化存入state.ELEMENTs中。
// export const createELEMENT = data => dispatch =>
//   api.metadata
//     .createELEMENT(data)
//     .then(ELEMENT =>
//       dispatch(ELEMENTCreated(normalize(ELEMENT, ELEMENTSchema)))
//     );

// 在ELEMENTPage中选择中一行，保存activeRow至state.ELEMENTs
export const selectElement = data => dispatch =>
  dispatch(elementSelected(data));

// 在ELEMENTPage中取消选中，将state.ELEMENTs.activeRow设置为null
export const cancelSelectElement = () => dispatch =>
  dispatch(elementCancelSelected());
