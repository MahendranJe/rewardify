import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Cash, Wallet, Clock, CardText } from "react-bootstrap-icons";

const QuickActionsCarousel = () => {
  const actions = [
    { id: 1, icon: <Cash size={32} />, text: "Make Payment" },
    { id: 2, icon: <Wallet size={32} />, text: "Settlements" },
    { id: 3, icon: <Clock size={32} />, text: "Transaction History" },
    { id: 4, icon: <CardText size={32} />, text: "Gift Cards" },
    { id: 5, icon: <Cash size={32} />, text: "Refunds" },
    { id: 6, icon: <Wallet size={32} />, text: "Reports" },
    { id: 7, icon: <Clock size={32} />, text: "Analytics" },
    { id: 8, icon: <CardText size={32} />, text: "Settings" },
  ];

  // Define how many items to show at once
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < actions.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Slice the visible items
  const visibleActions = actions.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <h5>Quick Actions</h5>
      <Row className="align-items-center">
        <Col xs="auto">
          <Button
            variant="outline-secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </Button>
        </Col>
        <Col>
          <Row className="g-3">
            {visibleActions.map((action) => (
              <Col key={action.id} xs={3} className="text-center">
                <div className="dashboardOpt">
                  {action.icon}
                  <p class="xx-small">{action.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-secondary"
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= actions.length}
          >
            &gt;
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default QuickActionsCarousel;
