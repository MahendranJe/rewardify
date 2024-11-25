import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; 
import otpReducer from "../reducer/LoginReducer"; 


const rootReducer = combineReducers({
  otp: otpReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
