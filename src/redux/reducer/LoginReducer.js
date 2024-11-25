const initialState = {
    loading: false,
    otpResponse: null,
    error: null,
  };
  
  const otpReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GENERATE_OTP_REQUEST":
        return { ...state, loading: true, error: null };
      case "GENERATE_OTP_SUCCESS":
        return { ...state, loading: false, otpResponse: action.payload };
      case "GENERATE_OTP_FAILURE":
        return { ...state, loading: false, error: action.payload };
        case "VERIFY_OTP_REQUEST":
        return { ...state, loading: true, error: null };
      case "VERIFY_OTP_SUCCESS":
        return { ...state, loading: false, otpResponse: action.payload };
      case "VERIFY_OTP_FAILURE":
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };
  
  export default otpReducer;
  