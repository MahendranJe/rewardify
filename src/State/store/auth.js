import { create } from "zustand";
import { generateOTP } from "../api/authApi";

const useAuthStore = create((set) => ({
  loading: false,
  error: null,
  sendOTP: async (contactNo) => {
    set({ loading: true, error: null });
    try {
      const response = await generateOTP(contactNo);
      set({ loading: false });
      return response;
    } catch (error) {
      set({ loading: false, error });
      throw error;
    }
  },
}));

export default useAuthStore;
