import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    category: "",
    preferredDate: "",
    couponCode: "",
    referral: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center mb-4">
            <h2>SpellBytes International Olympiad 2024</h2>
            <h4 className="text-danger">Register</h4>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password *
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone *
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="[+country code][mobile number]"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Re-enter Password *
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="address" className="form-label">
                  Address *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">
                  Select Category *
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="preferredDate" className="form-label">
                  Select Preferred Date *
                </label>
                <select
                  id="preferredDate"
                  name="preferredDate"
                  className="form-select"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Preferred Date</option>
                  <option value="2024-01-01">1st Jan 2024</option>
                  <option value="2024-01-15">15th Jan 2024</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="couponCode" className="form-label">
                Apply Coupon Code (if any)
              </label>
              <input
                type="text"
                className="form-control"
                id="couponCode"
                name="couponCode"
                placeholder="Enter coupon code"
                value={formData.couponCode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="referral" className="form-label">
                How did you come to know about us?
              </label>
              <select
                id="referral"
                name="referral"
                className="form-select"
                value={formData.referral}
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="social_media">Social Media</option>
                <option value="friends">Friends</option>
                <option value="ads">Advertisements</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="captcha"
                required
              />
              <label className="form-check-label" htmlFor="captcha">
                I'm not a robot
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-danger fw-bold">₹ 1700.00</p>
              <button type="submit" className="btn btn-danger">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
