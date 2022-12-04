import axios from "axios";

const API_URL = "http://localhost:9000"

const signup = (name, email, password) => {
  return axios.post(API_URL + "/users", {
    name,
    email,
    password
  });
}

const login = (email, password) => {
  return axios
    .post(API_URL + "/users/login", {
      email,
      password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      console.log(response.data)
      return response.data;
    });
}

const logout = () => {
  localStorage.removeItem("user");
}

export default {
  signup,
  login,
  logout
};