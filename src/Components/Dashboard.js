import React, { useState } from 'react';
import { Row, Col, Card, Button, Nav } from 'react-bootstrap';
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';
import QuickActionsCarousel from './QuicAction';

const Dashboard = () => {
    const [showAllTransaction, setShowAllTransaction] = useState(true);
    const [showSettlement, setShowSettlement] = useState(null);
    const [showOrderConfirmation, setShowOrderConfirmation] = useState(true);

    const handleOnchange = () => {
        setShowAllTransaction(true);
        setShowSettlement(null);
    };
    const handleOnchangeSettlement = () => {
        setShowAllTransaction(null);
        setShowSettlement(true);
    };
    const handleShowOrderConfirmation = () => {
        setShowOrderConfirmation(true);
    };

    const payments = [
        { id: 1, number: '+919856598562', amount: '₹500.00', method: 'QR Scan', date: 'Apr 11, 2024', time: '4:30PM' },
        { id: 2, number: '+919856598562', amount: '₹800.00', method: 'Online Payment(UPI)', date: 'Apr 11, 2024', time: '4:30PM' },
        { id: 3, number: '+919856598562', amount: '₹100.00', method: 'Online Payment(UPI)', date: 'Apr 11, 2024', time: '4:30PM' },
    ];

    const orders = [
        { id: 123244, number: '+919856598562', orderitem: '1 * ooty apple', amount: '₹500.00', date: 'Apr 11, 2024', name: 'Mahendran', address: 'Bengaluru' },
        { id: 239832, number: '+919856598562', orderitem: '1 * orange', amount: '₹989.00', date: 'Apr 11, 2024', name: 'Krishna', address: 'Tenkasi' },
    ];

    return (
        <div>
            <Header />
            <div className="d-flex flex-column flex-md-row">
                <Sidebar />
                <div className="dashboardcontainer flex-grow-1 px-3">
                    <Row className="gy-4">                      
                        <Col lg={6} md={12}>
                            <Card className="quickAccessCard mb-4">
                                <Card.Body>
                                    <QuickActionsCarousel />
                                </Card.Body>
                            </Card>
                            <Card className="quickAccessCard mb-4">
                                <Card.Body>
                                    <h5>Recent Transactions</h5>
                                    <p>Last Update at: June 02, 2024 | 11:25 PM</p>
                                    <Nav variant="tabs" defaultActiveKey="all-transactions">
                                        <Nav.Item>
                                            <Nav.Link onClick={handleOnchange} eventKey="all-transactions">
                                                All Transactions
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link onClick={handleOnchangeSettlement} eventKey="settlement">
                                                Settlement
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="table-responsive mt-3">
                                        <table className="table table-hover">
                                            <tbody>
                                                {(showAllTransaction ? payments : payments.slice(1)).map((payment) => (
                                                    <tr key={payment.id}>
                                                        <td className='tdBorder'>
                                                            <i className="bi bi-person-circle"></i>
                                                            <span className="ms-2">{payment.number} sent a Payment</span>
                                                            <br />
                                                            <span className="text-muted">Paid on {payment.date} at {payment.time}</span>
                                                            <br />
                                                            <span className={`text-${showAllTransaction ? 'success' : 'danger'}`}>{payment.amount}</span>
                                                            <br />
                                                            <span className="text-info">Paid via {payment.method}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card className="quickAccessCard mb-4">
                                <Card.Body>
                                    <h5>My Orders</h5>
                                    <p>Last Update at: June 02, 2024 | 11:25 PM</p>
                                    <Nav variant="tabs" defaultActiveKey="confirmation">
                                        <Nav.Item>
                                            <Nav.Link onClick={handleShowOrderConfirmation} eventKey="confirmation">
                                                Confirmation
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="preparing">Preparing</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="placed-orders">Placed Orders</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    {showOrderConfirmation && (
                                        <div className="table-responsive mt-3">
                                            <table className="table table-hover">
                                                <tbody>
                                                    {orders.map((order) => (
                                                        <tr key={order.id}>
                                                            <td className='tdBorder'>
                                                                <div className="d-flex justify-content-between">
                                                                    <span className="text-muted">Order ID: {order.id}</span>
                                                                    <span className="text-muted">{order.date}</span>
                                                                </div>
                                                                <div>
                                                                    <strong>Order For:</strong>
                                                                    <div>
                                                                        {order.name}, {order.number}, {order.address}
                                                                    </div>
                                                                </div>

                                                                <div >
                                                                    <strong>Items:</strong>
                                                                    <div className="d-flex justify-content-between">
                                                                        {order.orderitem}
                                                                        <div>{order.amount}</div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        {order.orderitem}
                                                                        <div>{order.amount}</div>
                                                                    </div>

                                                                </div>
                                                                <div className="d-flex justify-content-between">
                                                                    {"Total Amount"}
                                                                    <div>{order.amount}</div>
                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <button className="btn-success2">
                                                                        Reject Order
                                                                    </button>
                                                                    <Button className='btn-success1'>
                                                                        Confirm Order
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
