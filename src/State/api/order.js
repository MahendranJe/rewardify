import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rewardify.dotcod.in/api", 
  headers: {
    "Content-Type": "application/json",
  },
});
export const listOrders = async () => {
  try {
    const response = await axiosInstance.post(" /v1/store-user/order/list", {
        limit: 10,
        pageNo: 1,
    });
    return response.data; 
  } catch (error) {
    console.error("Error List Orders:", error);
    throw error.response?.data || error; 
  }
};
