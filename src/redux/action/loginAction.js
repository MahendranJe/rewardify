import { generateOTP , verfifyOtp } from "../Services/api";

export const generateOtpAction = (userData) => async (dispatch) => {
  dispatch({ type: "GENERATE_OTP_REQUEST" });

  try {
    const result = await generateOTP(userData);
    dispatch({ type: "GENERATE_OTP_SUCCESS", payload: result });
  } catch (error) {
    dispatch({ type: "GENERATE_OTP_FAILURE", payload: error.message });
  }
};

export const verifyOtpAction = (userData) => async (dispatch) =>{
    dispatch({type:"VERIFY_OTP_REQUEST"});

    try{
        const result = await verfifyOtp (userData);
        dispatch({type:"VERIFY_OTP_SUCCESS" , payload:result})
    } catch (error){
        dispatch({type:"VERIFY_OTP_FAILURE" , payload:error.message})
    }
}
