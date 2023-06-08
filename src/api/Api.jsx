import axios from "axios";
axios.defaults.baseURL = "https://64555fddf803f345764185d1.mockapi.io";

export const getUsers = async (page) => {
  const response = await axios.get(`/users/?page=${page}&limit=3`);
  return response.data;
};

export const updateUsersData = async (id, { check, followers }) => {
  const response = await axios.put(`users/${id}`, { check, followers });
  return response.data;
};

// export const getSelect = async (check) => {
//   const response = await axios.get(`users`, { params: { check } });
//   return response.data;
// };
