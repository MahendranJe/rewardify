import React, { useState } from 'react';
import ContactHeader from './ContactHeader';
import { useNavigate } from 'react-router-dom';


function ContactForm() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsPopupOpen(true); 
  };

  const closePopup = () => {
    setIsPopupOpen(false); 
  };
  const handleClickStore = () => {
    navigate('/storeBaseinfo'); 
  };

  return (
    <div>
      <ContactHeader />
      <div className='form-container'>
        <div className='form-subcontainer'>
          <form>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Owner Name</label>
              <input type="text" className="form-control" placeholder='Enter your owner name' id="ownerName" />
            </div>
            <div className="mb-3">
              <label htmlFor="shopName" className="form-label">Shop Name</label>
              <input type="text" className="form-control" placeholder='Enter your shop name' id="shopName" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" placeholder='Enter your location' id="location" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" placeholder='Enter your phone number' id="phoneNumber" />
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className='form-container'>
        <div className='form-subcontainer2'>
          <div className='form-headerdetails'>
            <h2>Enter Store Detail</h2>
            <p>Enter details manually to get started into REWARDIFY</p>
          </div>
          <div className="mb-3">
            <button type="button" onClick={()=> handleClickStore()} className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thanks for submiting the contact form</h2>
            <p>We will get back you shortly</p>
            <button className="btn-success" onClick={closePopup}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
