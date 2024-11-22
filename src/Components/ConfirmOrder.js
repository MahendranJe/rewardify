import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const orders = [
  {
    id: "12345",
    date: "Apr 09, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    address: "R S Puram, Coimbatore",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12346",
    date: "Apr 10, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    selfPickup: true,
    selfPickupTime: "30 Mar 2024, 10AM - 12PM",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12345",
    date: "Apr 09, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    address: "R S Puram, Coimbatore",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12346",
    date: "Apr 10, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    selfPickup: true,
    selfPickupTime: "30 Mar 2024, 10AM - 12PM",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12345",
    date: "Apr 09, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    address: "R S Puram, Coimbatore",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12346",
    date: "Apr 10, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    selfPickup: true,
    selfPickupTime: "30 Mar 2024, 10AM - 12PM",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12345",
    date: "Apr 09, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    address: "R S Puram, Coimbatore",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
  {
    id: "12346",
    date: "Apr 10, 2024",
    customerName: "Rajesh Kannan",
    contact: "+918526547512",
    selfPickup: true,
    selfPickupTime: "30 Mar 2024, 10AM - 12PM",
    items: [
      { name: "Ooty apple", quantity: 1, price: 100 },
      { name: "White Egg", quantity: 5, price: 50 },
    ],
    total: 150,
    status: "Confirmation",
  },
];

const OrderCard = ({ order }) => (
  <Card className="mb-4 shadow-sm border-0">
    <Card.Header className="d-flex justify-content-between align-items-center">
      <span className="text-success fw-bold">Order Id: {order.id}</span>
      <span className="text-muted">Date: {order.date}</span>
    </Card.Header>
    <Card.Body>
      <div className="mb-3">
        <h6 className="fw-bold">Order for:</h6>
        <p className="mb-0">{order.customerName}</p>
        <Row className="align-items-center mt-2">
          <Col xs="auto">
            <Button variant="outline-success" size="sm" className="rounded-circle">
              <i className="bi bi-telephone-fill"></i>
            </Button>
          </Col>
          <Col>{order.contact}</Col>
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
        <span>₹{order.total}</span>
      </div>
      <Row>
        <Col>
          <Button variant="success2" className="w-100">
            Reject Order
          </Button>
        </Col>
        <Col>
          <Button variant="success" className="w-100">
            Confirm Order
          </Button>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const ConfirmationOrders = () => {
  const confirmationOrders = orders.filter(order => order.status === "Confirmation");

  return (
    <Row>
      {confirmationOrders.map((order, index) => (
        <Col sm={12} md={6} lg={6} key={index}>
          <OrderCard order={order} />
        </Col>
      ))}
    </Row>
  );
};

export default ConfirmationOrders;
