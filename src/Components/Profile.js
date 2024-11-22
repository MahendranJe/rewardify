import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Nav ,Accordion} from "react-bootstrap";
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';
import { FaUser, FaShoppingCart, FaWallet, FaCheckCircle }from "react-icons/fa";

const MyProfile = () => {
    const [activePage, setActivePage] = useState("profile");
    const [activeKey, setActiveKey] = useState(null);

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
    const toggleCategory = (key) => {
        setActiveKey(activeKey === key ? null : key); 
      };
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setShopData((prev) => ({ ...prev, storeImage: file }));
        }
    };

    const data = [
        {
          category: "about us",
          value:"Department stores are large retail establishments that offer a wide range of products across various categories, such as clothing, household items, and electronics, all under one roof. Originating in the 19th century, they revolutionized shopping by providing diverse goods in a single location. Notable examples include Macy's, Marshall Field's, and Hudson's. These stores often serve as community hubs, offering services like personal shopping and special events. They are known for their visually appealing window displays and have a long history of shaping consumer culture through innovative marketing. Today, they continue to be influential in retail, adapting to changing shopping trends and challenges posed by online commerce."
        },
        {
            category: "Tearm and Condition",
            value:"Department stores are large retail establishments that offer a wide range of products across various categories, such as clothing, household items, and electronics, all under one roof. Originating in the 19th century, they revolutionized shopping by providing diverse goods in a single location. Notable examples include Macy's, Marshall Field's, and Hudson's. These stores often serve as community hubs, offering services like personal shopping and special events. They are known for their visually appealing window displays and have a long history of shaping consumer culture through innovative marketing. Today, they continue to be influential in retail, adapting to changing shopping trends and challenges posed by online commerce."
          },
          {
            category: "Privacy Policy",
            value:"Department stores are large retail establishments that offer a wide range of products across various categories, such as clothing, household items, and electronics, all under one roof. Originating in the 19th century, they revolutionized shopping by providing diverse goods in a single location. Notable examples include Macy's, Marshall Field's, and Hudson's. These stores often serve as community hubs, offering services like personal shopping and special events. They are known for their visually appealing window displays and have a long history of shaping consumer culture through innovative marketing. Today, they continue to be influential in retail, adapting to changing shopping trends and challenges posed by online commerce."
          },
      ];
    

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

            <Button className="btn-success" onClick={handleSave}>
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
            <Button className="btn-success" onClick={handleSave}>
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
            <Button className="btn-success" onClick={handleSave}>
                Save Changes
            </Button>
        </Form>
    );

    const renderProducts = () => (
        <Accordion activeKey={activeKey}>
            {data.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header onClick={() => toggleCategory(index)}>
                        {item.category}
                    </Accordion.Header>
                    <Accordion.Body>
                       
                            <p>{item.value}</p>
                       
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
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
          <FaUser /> Profile Details
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={activePage === "shop"} onClick={() => setActivePage("shop")}>
          <FaShoppingCart /> Shop Details
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={activePage === "wallet"} onClick={() => setActivePage("wallet")}>
          <FaWallet /> My Wallet
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={activePage === "agree"} onClick={() => setActivePage("agree")}>
          <FaCheckCircle /> About Rewardify
        </Nav.Link>
      </Nav.Item>
    </Nav>
            </Col>

            <Col md={9} className="p-4 bg-white">
                <Card className="p-4">
                    {activePage === "profile" && renderProfileForm()}
                    {activePage === "shop" && renderShopDetailsForm()}
                    {activePage === "wallet" && renderWalletForm()}
                    {activePage === 'agree' && renderProducts()}
                </Card>
            </Col>
        </Row>
        </div>
        </div>
        </div>
    );
};

export default MyProfile;
