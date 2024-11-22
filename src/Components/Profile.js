import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Nav } from "react-bootstrap";
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';

const MyProfile = () => {
    const [activePage, setActivePage] = useState("profile");

    const [profileData, setProfileData] = useState({
    });

    const [shopData, setShopData] = useState({
        workingDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        selectedDays: ["Monday", "Tuesday"],
        openingTime: "09:00 AM",
        closingTime: "06:00 PM",
        storeImage: null,
    });

    const [walletData, setWalletData] = useState({
    });

    const handleChange = (e, dataSetter) => {
        dataSetter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckboxChange = (day) => {
        setShopData((prev) => {
            const { selectedDays } = prev;
            return {
                ...prev,
                selectedDays: selectedDays.includes(day)
                    ? selectedDays.filter((d) => d !== day)
                    : [...selectedDays, day],
            };
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setShopData((prev) => ({ ...prev, storeImage: file }));
        }
    };

    const handleSave = () => {
        if (activePage === "profile") {
            console.log("Profile Data Saved:", profileData);
        } else if (activePage === "shop") {
            console.log("Shop Data Saved:", shopData);
            if (shopData.storeImage) {
                console.log("Uploaded Image:", shopData.storeImage.name);
            }
        } else if (activePage === "wallet") {
            console.log("Wallet Data Saved:", walletData);
        }
    };

    const renderProfileForm = () => (
        <Form>
            <h5>Profile Details</h5>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={(e) => handleChange(e, setProfileData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={(e) => handleChange(e, setProfileData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={(e) => handleChange(e, setProfileData)}
                />
            </Form.Group>

            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
        </Form>
    );

    const renderShopDetailsForm = () => (
        <Form>
            <h5>Shop Details</h5>
            <Form.Group className="mb-3">
                <Form.Label>Shop Name</Form.Label>
                <Form.Control
                    type="text"
                    name="shopName"
                    value={shopData.shopName}
                    onChange={(e) => handleChange(e, setShopData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={shopData.address}
                    onChange={(e) => handleChange(e, setShopData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={shopData.phone}
                    onChange={(e) => handleChange(e, setShopData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Working Days</Form.Label>
                <Row>
                    <Col md={6}>
                        {shopData.workingDays.slice(0, 4).map((day) => (
                            <Form.Check
                                key={day}
                                label={day}
                                type="checkbox"
                                checked={shopData.selectedDays.includes(day)}
                                onChange={() => handleCheckboxChange(day)}
                            />
                        ))}
                    </Col>
                    <Col md={6}>
                        {shopData.workingDays.slice(4).map((day) => (
                            <Form.Check
                                key={day}
                                label={day}
                                type="checkbox"
                                checked={shopData.selectedDays.includes(day)}
                                onChange={() => handleCheckboxChange(day)}
                            />
                        ))}
                    </Col>
                </Row>
            </Form.Group>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Opening Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="openingTime"
                            value={shopData.openingTime}
                            onChange={(e) => handleChange(e, setShopData)}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Closing Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="closingTime"
                            value={shopData.closingTime}
                            onChange={(e) => handleChange(e, setShopData)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Upload Store Image</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
                {shopData.storeImage && (
                    <div className="mt-2">
                        <strong>Selected Image:</strong> {shopData.storeImage.name}
                    </div>
                )}
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
        </Form>
    );

    const renderWalletForm = () => (
        <Form>
            <h5>My Wallet</h5>
            <Form.Group className="mb-3">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                    type="text"
                    name="bankName"
                    value={walletData.bankName}
                    onChange={(e) => handleChange(e, setWalletData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                    type="text"
                    name="accountNumber"
                    value={walletData.accountNumber}
                    onChange={(e) => handleChange(e, setWalletData)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                    type="text"
                    name="ifscCode"
                    value={walletData.ifscCode}
                    onChange={(e) => handleChange(e, setWalletData)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <h6>Link UPI</h6>
                <ul className="list-unstyled">
                    <li>
                        <i className="bi bi-google"></i> G Pay{" "}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => alert("Link G Pay")}
                        >
                            Link UPI
                        </button>
                    </li>
                    <li>
                        <i className="bi bi-phone"></i> PhonePe{" "}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => alert("Link PhonePe")}
                        >
                            Link UPI
                        </button>
                    </li>
                    <li>
                        <i className="bi bi-wallet2"></i> Paytm{" "}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => alert("Link Paytm")}
                        >
                            Link UPI
                        </button>
                    </li>
                </ul>
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
        </Form>
    );

    return (
        <div>
        <Header />
        <div className="d-flex flex-column flex-md-row">
            <Sidebar />
            <div className="dashboardcontainer flex-grow-1 px-3">
        <Row>
            <Col md={3} className="bg-white vh-100 p-3">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link active={activePage === "profile"} onClick={() => setActivePage("profile")}>
                            Profile Details
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={activePage === "shop"} onClick={() => setActivePage("shop")}>
                            Shop Details
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={activePage === "wallet"} onClick={() => setActivePage("wallet")}>
                            My Wallet
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>

            <Col md={9} className="p-4 bg-white">
                <Card className="p-4">
                    {activePage === "profile" && renderProfileForm()}
                    {activePage === "shop" && renderShopDetailsForm()}
                    {activePage === "wallet" && renderWalletForm()}
                </Card>
            </Col>
        </Row>
        </div>
        </div>
        </div>
    );
};

export default MyProfile;
