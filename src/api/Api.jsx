import axios from "axios";
axios.defaults.baseURL = "https://64555fddf803f345764185d1.mockapi.io";

export const getUsers = async ({ page, check }) => {
  if (check === "") {
    const response = await axios.get(`/users/?page=${page}&limit=3`);
    return response.data;
  } else {
    const response = await axios.get(
      `/users/?page=${page}&limit=3&check=${check}`
    );
    // console.log(response.data);
    return response.data;
  }
};

export const updateUsersData = async (id, { check, followers }) => {
  const response = await axios.put(`users/${id}`, { check, followers });
  return response.data;
};
