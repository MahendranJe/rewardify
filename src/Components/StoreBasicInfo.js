import React, { useState } from 'react';
import ContactHeader from './ContactHeader';
import Storesidepannel from './Storesidepannel';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"; 

function StoreBasicInfo() {
    const [openingTime, setOpeningTime] = useState('00:00');
    const [closingTime, setClosingTime] = useState('12:00');
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleClickContinue = () => {
        navigate('/storeDocument'); 
      };

    return (
        <div>
            <ContactHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <Storesidepannel />
                    </div>
                    <div className="col-md-8 col-12">
                        <form className="storeinfocard mb-4 p-3">
                            <h5>Owner Information</h5>
                            <div className="mb-3">
                                <label htmlFor="ownerName" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" placeholder="Enter your owner name" id="ownerName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="shopName" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter your email address" id="shopName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Phone number</label>
                                <input type="text" className="form-control" placeholder="Enter your phone number" id="location" />
                            </div>
                            <p>By providing your Whatsapp Number to get updates on payments, order confirmation etc</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    My WhatsApp number is the same as above
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDifferent" />
                                <label className="form-check-label" htmlFor="flexCheckDifferent">
                                    I have a different WhatsApp number
                                </label>
                            </div>
                        </form>

                        <form className="storeinfocard mb-4 p-3">
                            <h5>Store Information</h5>
                            <div className="mb-3">
                                <label htmlFor="storeName" className="form-label">Store Name</label>
                                <input type="text" className="form-control" placeholder="Enter your store name" id="storeName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="storeAddress" className="form-label">Store Full Address</label>
                                <input type="text" className="form-control" placeholder="Enter your store full address" id="storeAddress" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="storeContact" className="form-label">Store Contact Number</label>
                                <input type="text" className="form-control" placeholder="Enter your store contact number" id="storeContact" />
                            </div>
                            <button type="button" className="btn btn-success w-100">Add Store Location</button>
                        </form>
                        <form className="storeinfocard mb-4 p-3">
                            <h5>Working Days</h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="sunday" />
                                        <label className="form-check-label" htmlFor="sunday">Sunday</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="monday" />
                                        <label className="form-check-label" htmlFor="monday">Monday</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="tuesday" />
                                        <label className="form-check-label" htmlFor="tuesday">Tuesday</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="wednesday" />
                                        <label className="form-check-label" htmlFor="wednesday">Wednesday</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="thursday" />
                                        <label className="form-check-label" htmlFor="thursday">Thursday</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="friday" />
                                        <label className="form-check-label" htmlFor="friday">Friday</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="saturday" />
                                        <label className="form-check-label" htmlFor="saturday">Saturday</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="storeinfocard p-3">
                            <h5>Working Time</h5>
                            <p className="text-muted mb-3">Select the Opening & Closing Time</p>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="opening-time">Opening Time</label>
                                    <TimePicker
                                        id="opening-time"
                                        onChange={setOpeningTime}
                                        value={openingTime}
                                        format="h:mm a"
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="closing-time">Closing Time</label>
                                    <TimePicker
                                        id="closing-time"
                                        onChange={setClosingTime}
                                        value={closingTime}
                                        format="h:mm a"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="storeinfocard p-3">
                            <h5>Upload Store Image</h5>
                            <p className="card-subtitle mb-3 text-muted">
                                Uploading image will help customers to easily recognize your store.
                            </p>

                            <div className="upload-area text-center">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Store Preview"
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'cover', borderRadius: '10px' }}
                                    />
                                ) : (
                                    <div className="upload-placeholder d-flex justify-content-center align-items-center">
                                        <i className="bi bi-cloud-upload" style={{ fontSize: '3rem', color: '#d3d3d3' }}></i>
                                    </div>
                                )}

                                <label
                                    htmlFor="fileUpload"
                                    className="btn btn-outline-success mt-3"
                                    style={{ cursor: 'pointer', fontSize: '1rem' }}
                                >
                                    Add Profile Image
                                </label>
                                <input
                                    type="file"
                                    id="fileUpload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                                <p className="text-muted mt-2">
                                    Browse your gallery or take a picture from the phone camera to upload.
                                </p>
                            </div>
                        </div>

                        <div className="storeinfocard p-3">
                            <button type="button" onClick={()=>handleClickContinue()} className="btn btn-success w-100">CONTIUE </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreBasicInfo;
