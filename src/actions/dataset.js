import api from "../api";

export const search = param => () => api.dataset.search(param);
export const searchSetChildren = param => () =>
  api.dataset.searchSetChildren(param);
export const save = param => () => api.dataset.save(param);
export const searchSetInfo = param => () => api.dataset.searchSetInfo(param);
