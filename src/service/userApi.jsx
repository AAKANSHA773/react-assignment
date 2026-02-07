import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

// GET all users
export const getUsers = async () => {
  return await axios.get(BASE_URL);
};

// ADD user
export const addUserApi = async (user) => {
  return await axios.post(BASE_URL, user);
};

// DELETE user
export const deleteUserApi = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

// UPDATE user
export const updateUserApi = async (id, user) => {
  return await axios.put(`${BASE_URL}/${id}`, user);
};
