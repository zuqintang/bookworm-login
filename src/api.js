import axios from "axios";
export default {
  user: {
    login: credentials =>
      axios.post("/auth/login", credentials).then(res => res.data.rows),
    signup: user => axios.post("/auth/users", user).then(res => res.data.rows)
  }
};
