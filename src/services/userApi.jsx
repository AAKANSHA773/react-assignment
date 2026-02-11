import axios from "axios";

const BASE_URL = "https://react-assignment-json.onrender.com/users";


export const getUsers = () => axios.get(BASE_URL);

export const addUserApi = (user) =>
  axios.post(BASE_URL, user);

export const deleteUserApi = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

export const updateUserApi = (id, user) =>
  axios.put(`${BASE_URL}/${id}`, user);
