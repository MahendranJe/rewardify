import React from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { FaUser, FaCoins, FaBell, FaGift } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-2">
      <Container fluid>
        {/* Left side - Logo */}
        <Row className="align-items-center w-100">
          <Col xs={4} md={3}>
            <Navbar.Brand className="text-success fw-bold">QUIZ</Navbar.Brand>
          </Col>

          {/* Center - Welcome Message */}
          <Col xs={4} md={5} className="text-center">
            <span className="fw-bold">Welcome, Rajesh</span> <span role="img" aria-label="wave">👋</span>
          </Col>

          {/* Right side - Coins, Notifications, Profile */}
          <Col xs={4} md={4} className="d-flex justify-content-end align-items-center">
            {/* XCoins Section */}
            <Button variant="light" className="me-3" style={{ backgroundColor: '#f4f8e7', borderRadius: '20px' }}>
              <FaCoins className="text-warning me-1" /> XCoins: 300
            </Button>

            {/* Icons Section */}
            <div className="icon-btn me-2">
              <FaGift size={20} />
            </div>
            <div className="icon-btn me-2">
              <FaBell size={20} />
            </div>
            <div className="icon-btn">
              <FaUser size={20} />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
