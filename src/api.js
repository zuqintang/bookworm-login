import axios from "axios";
import qs from "qs";

export default {
  user: {
    login: credentials =>
      axios.post("/auth/login", credentials).then(res => res.data.rows),
    signup: user => axios.post("/auth/users", user).then(res => res.data.rows)
  },
  set: {
    fetchSets: param =>
      axios.post("/set/fetchSets", param).then(res => res.data),
    fetchSetChildren: param =>
      axios
        .post("/set/fetchSetChildren", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    saveSet: param =>
      axios
        .post("/set/saveSet", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    fetchSet: param =>
      axios
        .post("/set/fetchSet", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    fetchFimaly: () =>
      axios.post("/statistic/fetchFimaly").then(res => res.data.rows),
    createSet: sets => axios.post("/api/books", sets).then(res => res.data.rows)
  }
};
