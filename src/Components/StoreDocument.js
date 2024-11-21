import React from 'react';
import ContactHeader from './ContactHeader';
import Storesidepannel from './Storesidepannel';
import 'react-time-picker/dist/TimePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function StoreDocumentInfo() {

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
                            <h5>Enter PAN & GSTIN details</h5>
                            <div className="mb-3">
                                <label htmlFor="ownerName" className="form-label">Store/Owner PAN</label>
                                <input type="text" className="form-control" placeholder="Enter yourStore/Owner PAN" id="ownerName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="shopName" className="form-label">GSTIN</label>
                                <input type="email" className="form-control" placeholder="Enter GSTIN" id="shopName" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDifferent" />
                                <label className="form-check-label" htmlFor="flexCheckDifferent">
                                    I don't have GSTIN
                                </label>
                            </div>
                        </form>
                        <form className="storeinfocard mb-4 p-3">
                            <h5>Bank Details</h5>
                            <div className="mb-3">
                                <label htmlFor="storeName" className="form-label">Bank Name</label>
                                <input type="text" className="form-control" placeholder="Enter your Bank name" id="storeName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="storeAddress" className="form-label">Bank Account number</label>
                                <input type="text" className="form-control" placeholder="Enter your Bank account number" id="storeAddress" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="storeContact" className="form-label">Bank IFSC code</label>
                                <input type="text" className="form-control" placeholder="Enter your Bank IFSC code" id="storeContact" />
                            </div>
                        </form>
                        <form className="storeinfocard mb-4 p-3">
                            <h5>Scan Store QR Code </h5>
                            <p>Scan the store’s QR Code. It will help the customer to make the payments easy and faster.</p>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreDocumentInfo;
