import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rewardify.dotcod.in/api", 
  headers: {
    "Content-Type": "application/json",
  },
});
export const generateOTP = async (contactNo) => {
  try {
    const response = await axiosInstance.post("/v1/store-user/auth/generate-otp", {
      dialCode: 91,
      contactNo: contactNo,
    });
    return response.data; 
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw error.response?.data || error; 
  }
};
