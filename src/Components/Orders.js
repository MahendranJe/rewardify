import React, { useState } from 'react';
import { Row, Col, Card, Button, Nav, ListGroup } from 'react-bootstrap';
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';
import PrepareOrdersList from './PreparingOrder';

const Orders = () => {

    const [showAllTransaction, setShowAllTransaction] = useState(true);
    const [showSettlemnt, setShowSettlement] = useState(null);


    const handleOnchange = () => {
        setShowAllTransaction(true)
        setShowSettlement(null)
    }
    const handleOnchangeSettelement = () => {
        setShowAllTransaction(null)
        setShowSettlement(true)
    }
   
  

    const orders = [
        {
            id: 123244,
            number: '+919856598562',
            orderitem: '2 x Ooty Apple',
            amount: '₹200.00',
            method: 'QR Scan',
            date: 'Apr 11, 2024',
            time: '4:30 PM',
            name: 'Mahendran',
            address: 'Bengaluru'
        },
        {
            id: 123245,
            number: '+918756489302',
            orderitem: '1 x Green Mango',
            amount: '₹150.00',
            method: 'UPI Payment',
            date: 'Apr 12, 2024',
            time: '5:15 PM',
            name: 'Suresh Kumar',
            address: 'Chennai'
        },
        {
            id: 123246,
            number: '+919876543210',
            orderitem: '3 x Red Grapes',
            amount: '₹300.00',
            method: 'Card Payment',
            date: 'Apr 10, 2024',
            time: '12:45 PM',
            name: 'Anjali Devi',
            address: 'Hyderabad'
        },
        {
            id: 123247,
            number: '+917856432109',
            orderitem: '5 x White Eggs',
            amount: '₹50.00',
            method: 'QR Scan',
            date: 'Apr 09, 2024',
            time: '2:30 PM',
            name: 'Vikram Singh',
            address: 'Mumbai'
        },
        {
            id: 123248,
            number: '+916754321908',
            orderitem: '1 x Watermelon',
            amount: '₹120.00',
            method: 'Cash on Delivery',
            date: 'Apr 08, 2024',
            time: '3:00 PM',
            name: 'Ravi Kumar',
            address: 'Delhi'
        },
        {
            id: 123249,
            number: '+918745632198',
            orderitem: '6 x Bananas',
            amount: '₹80.00',
            method: 'UPI Payment',
            date: 'Apr 13, 2024',
            time: '11:00 AM',
            name: 'Divya Raj',
            address: 'Kolkata'
        },
        {
            id: 123250,
            number: '+919998887766',
            orderitem: '1 x Pineapple',
            amount: '₹180.00',
            method: 'QR Scan',
            date: 'Apr 10, 2024',
            time: '6:30 PM',
            name: 'Krishna',
            address: 'Coimbatore'
        },
        {
            id: 123251,
            number: '+919887765544',
            orderitem: '4 x Oranges',
            amount: '₹160.00',
            method: 'Card Payment',
            date: 'Apr 14, 2024',
            time: '9:45 AM',
            name: 'Arun Kumar',
            address: 'Madurai'
        },
        {
            id: 123252,
            number: '+918554332211',
            orderitem: '2 x Dragon Fruit',
            amount: '₹220.00',
            method: 'UPI Payment',
            date: 'Apr 12, 2024',
            time: '8:30 PM',
            name: 'Priya Sharma',
            address: 'Tenkasi'
        }
    ];
    return (
        <div>
            <Header />
            <div className="d-flex">
                <Sidebar />
                <div className='dashboardcontainer flex-grow-1'>

                    <Card className='ordersCard mb-4'>
                        <Card.Body>
                            <h5>Recent Transaction</h5>
                            <p>Last Update at: June 02, 2024 | 11:25 PM</p>
                            <Nav variant="tabs" defaultActiveKey="all-transactions">
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleOnchange()} eventKey="all-transactions">Confirmation (6)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleOnchangeSettelement()} eventKey="settlement">Preparing (2)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  eventKey="settlement">Completed (2)</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {showAllTransaction && (
                                <div className="table-responsive mt-3">
                                    <Row>
                                        {orders.map((order, index) => (
                                            <Col key={index} md={6} className="mb-4">
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
                                                            <ListGroup.Item className="d-flex justify-content-between">
                                                                <span>{order.orderitem}</span>
                                                                <span>{order.amount}</span>
                                                            </ListGroup.Item>
                                                        </ListGroup>

                                                        <hr />
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h6>Total Bill Amount</h6>
                                                            <span>
                                                                {order.amount} <span className="badge bg-success ms-2">{order.method}</span>
                                                            </span>
                                                        </div>
                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-danger" className="w-100">Reject Order</Button>
                                                            </Col>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Confirm Order</Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}



                             {showSettlemnt && (
                              <PrepareOrdersList/>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Orders;
