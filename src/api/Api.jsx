import axios from "axios";
axios.defaults.baseURL = "https://64555fddf803f345764185d1.mockapi.io";

export const getUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};
