import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9000";

const getHabits = () => {
  return axios.get(API_URL + "/habits", { headers: authHeader() });
}

const createHabit = (habit) => {
  return axios.post(API_URL + "/habits", habit, { headers: authHeader() });
}

const updateHabit = (id, update) => {
  return axios.patch(API_URL + "/habits/" + id, { update }
  , { headers: authHeader() });
}

const deleteHabit = (id) => {
  return axios.delete(API_URL + "/habits/" + id, { headers: authHeader() });
}

export default {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit
}