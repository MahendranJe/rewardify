import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';
import { Nav, Tab } from 'react-bootstrap';
import PrepareOrdersList from "./PreparingOrder";
import ConfirmationOrders from "./ConfirmOrder";

const OrderPacked = () => (
  <div>
    <h5>Packed Orders</h5>
    <p>Content for the Packed Orders tab...</p>
  </div>
);

const OrderCompleted = () => (
  <div>
    <h5>Completed Orders</h5>
    <p>Content for the Completed tab...</p>
  </div>
);

const OrdersComponent = () => {
  const [selectedTab, setSelectedTab] = useState("confirmation"); 

  return (
    <div>
      <Header />
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <div className="dashboardcontainer flex-grow-1 px-3">
          <h3 className="text-center mb-4">My Orders</h3>
          <div className="text-muted mb-3 text-center">
            Last Update: June 02, 2024 | 11:25 PM
          </div>
          <Tab.Container activeKey={selectedTab} onSelect={setSelectedTab}>
            <Nav variant="tabs" className="mb-3 justify-content-start">
              <Nav.Item>
                <Nav.Link eventKey="confirmation" className="fw-bold">Confirmation</Nav.Link> 
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="preparing" className="fw-bold">Preparing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="packed-orders" className="fw-bold">Packed Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="completed" className="fw-bold">Completed</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="confirmation">
                <ConfirmationOrders />
              </Tab.Pane>

              <Tab.Pane eventKey="preparing">
                <PrepareOrdersList />
              </Tab.Pane>

              <Tab.Pane eventKey="packed-orders">
                <OrderPacked />
              </Tab.Pane>

              <Tab.Pane eventKey="completed">
                <OrderCompleted />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
