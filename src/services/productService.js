import axios from "axios";
import { url } from "../constants/urls";

export const getData = async ({ limit, skip }) => {
  try {
    const response = await axios.get(`${url}/?limit=${limit}&skip=${skip}`);
    if (response.data.products) {
      return {
        ...response?.data,
      };
    }
  } catch (error) {
    console.log("err", error);
    return { success: false, message: error?.response?.data?.message };
  }
};
