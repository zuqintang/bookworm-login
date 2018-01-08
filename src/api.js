import axios from "axios";
import qs from "qs";

export default {
  user: {
    login: credentials =>
      axios.post("/auth/login", credentials).then(res => res.data.rows),
    signup: user => axios.post("/auth/users", user).then(res => res.data.rows)
  },
  dataset: {
    search: param =>
      axios.post("/Dataset/search", qs.stringify(param)).then(res => res.data),
    searchSetChildren: param =>
      axios
        .post("/Dataset/searchSetChildren", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    save: param =>
      axios
        .post("/Dataset/addSet", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    searchSetInfo: param =>
      axios
        .post("/Dataset/searchSetInfo", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data)
  },
  sets: {
    fetchAll: () =>
      axios
        .post("/Dataset/search?standard=0&stduy=0&limit=-1&offset=-1&keyword=")
        .then(res => res.data.rows),
    create: sets => axios.post("/api/books", sets).then(res => res.data.rows)
  }
};
