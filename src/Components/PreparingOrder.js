import React, { useState } from "react";
import { Card, Row, Col, ListGroup, Button, Modal, Form } from "react-bootstrap";

const PrepareOrdersList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const orders = [
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },  {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
    {
      id: "12345",
      date: "Apr 10, 2024",
      name: "Rajesh Kannan",
      number: "+918526547512",
      address: "R S Puram, Coimbatore",
      items: [
        { name: "Ooty apple", price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      method: "UPI",
    },
  ];

  const handleVerifyClick = (order) => {
    setSelectedOrder(order);
    setCheckedItems(new Array(order.items.length).fill(false));
    setShowModal(true);
  };

  const handleCheckboxChange = (index) => {
    const updatedChecks = [...checkedItems];
    updatedChecks[index] = !updatedChecks[index];
    setCheckedItems(updatedChecks);
  };

  const handleReadyClick = () => {
    if (checkedItems.every((item) => item)) {
      setIsReady(true);
      setShowModal(false);
    } else {
      alert("Please verify all items to proceed.");
    }
  };

  return (
    <div className="table-responsive mt-3">
      <Row>
        {orders.map((order, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="mb-4 shadow-sm border-0">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span className="text-success fw-bold">Order Id: {order.id}</span>
                <span className="text-muted">Date: {order.date}</span>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <h6 className="fw-bold">Order for:</h6>
                  <p className="mb-0">{order.name}</p>
                  <Row className="align-items-center mt-2">
                    <Col xs="auto">
                      <Button variant="outline-success" size="sm" className="rounded-circle">
                        <i className="bi bi-telephone-fill"></i>
                      </Button>
                    </Col>
                    <Col>{order.number}</Col>
                  </Row>
                  <p className="mt-2">
                    <i className="bi bi-geo-alt-fill text-muted"></i> {order.address}
                  </p>
                </div>
                <ListGroup variant="flush">
                  {order.items.map((item, i) => (
                    <ListGroup.Item className="d-flex justify-content-between" key={i}>
                      <span>
                        {item.quantity ? `${item.quantity} x ${item.name}` : `1 x ${item.name}`}
                      </span>
                      <span>₹{item.price}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>Total Bill Amount</h6>
                  <span>
                    ₹{order.total} <span className="badge bg-success ms-2">{order.method}</span>
                  </span>
                </div>
                <Row>
                  <Col>
                    <Button
                      variant={isReady ? "success" : "secondary"}
                      className="w-100"
                      onClick={() => handleVerifyClick(order)}
                    >
                      {isReady ? "Order Ready" : "Verify & Pack Items"}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedOrder && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Order Id: {selectedOrder.id}</h6>
            <p>Date: {selectedOrder.date}</p>
            <p>Order for: {selectedOrder.name}</p>
            <p>
              <i className="bi bi-geo-alt-fill text-muted"></i> {selectedOrder.address}
            </p>
            <h6>Verify all the items:</h6>
            <ListGroup variant="flush">
              {selectedOrder.items.map((item, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  <Form.Check
                    type="checkbox"
                    label={`${item.quantity ? `${item.quantity} x` : "1 x"} ${item.name} - ₹${item.price}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleReadyClick}>
              Ready for Delivery
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default PrepareOrdersList;
