import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css'
import logo from '../Components/Images/companylogo.png'
import storeimage from '../Components/Images/store.png'
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import {generateOtpAction} from "../redux/action/loginAction"


function Login() {
  const [visibleCard, setVisibleCard] = useState(1);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
    const { loading, otpResponse, error } = useSelector((state) => state.otp);

  const handleShowCard = (cardNumber) => {
    setVisibleCard(cardNumber);
  }; 

 
    
  
    const handleGenerateOtp = () => {
      const userData = { "contactNo": "9999999999" , "dialCode":"91" }; // Example data
      dispatch(generateOtpAction(userData));
      handleShowCard(3)
    };
  
  
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClickContactus = () => {
    navigate('/ContactForm'); 
  };
  const handleclickDashboard = () => {
    navigate('/dashboard'); 
  };
  return (
   <div className='background-container '>
     {visibleCard === 1 && 
      <div className="card login-page">
        <div className='login-logo'><img src={logo} alt ='logo'></img> </div>
        <div className="card-body">
          <h5 className="card-title">Grow your Business Exponentially!</h5>
          <p className="card-text">Pay less on each transaction you make with our App.</p>
          <button type="button"  onClick={() => handleShowCard(2)} class="btn btn-success">Login</button>
          <button type="button" onClick={()=> handleClickContactus()} class="btn btn-light">Contact Us</button>
          <p className="card-text" style={{marginTop:'1rem'}}>By clicking, you agree to our Terms & Conditions and Privacy Policy.</p>
        </div>
      </div>}
      {visibleCard === 2 && <div className="card login-page">
        <div className='login-logo'><img src={logo} alt ='logo'></img> </div>
        <div className="card-body">
          <h5 className="card-title">Get started with REWARDIFY</h5>
          <p className="card-text">Enter your mobile number or Shop ID to get started</p>
          <input type="tel" class="form-control margin-bottom" id="inputPhoneNumber" placeholder="Enter your phone number" />
          <button type="button"onClick={() => handleGenerateOtp()} class="btn btn-success">Send OTP</button>
          <p className="card-text">By clicking, you agree to our Terms & Conditions and Privacy Policy.</p>
        </div>
      </div>}
      {visibleCard === 3 && <div className="card login-page">
        <div className='login-logo'><img src={logo} alt ='logo'></img> </div>
        <div className="card-body">
          <h5 className="card-title">Verify your details</h5>
          <p className="card-text">Enter OTP number below</p>      
          <div className="otp-inputs ">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>         
          <button type="button" onClick={() => handleclickDashboard()} class="btn btn-success">Verify and Continue</button>
          <p className="card-text">Didn’t receive OTP?  Resend in 0:55</p>
        </div>
      </div>}
      {visibleCard === 4 &&
      <div className="card login-page">
        <div className='storelogo'><img src={storeimage} alt ='logo'></img> </div>
        <div className="card-body">
          <h5 className="card-title">No stores are linked to this account</h5>
          <p className="card-text">Enter your account details correctly or register your store with us</p>
          <button type="button" onClick={()=>handleClickContactus()} class="btn btn-success">Register your store with us</button>
          <button type="button" class="btn btn-light">Login with different account</button>
        </div>
      </div>}
      {visibleCard === 5 &&
      <div className="card login-page">       
        <div className="card-body">
          <h5 className="card-title">Select Your Store</h5>
          <p className="card-text">Your Number is connect with 2 stores</p>
          <button type="button"  class="btn btn-success">Register your store with us</button>
          <button type="button" class="btn btn-light">Login with different account</button>
        </div>
      </div>
}
    </div>
  );
}

export default Login;
