import React, { useState } from 'react';
import '../Style.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // To get the current route
  const [activeItem, setActiveItem] = useState(location.pathname); // Initialize with current path

  const handleItemClick = (item) => {
    setActiveItem(item); // Update the active item state
  };

  return (
    <div className="d-flex flex-column sidebar bg-light" style={{ minHeight: '100vh', width: '250px' }}>
      <div className="text-center p-3">
        <h5 className="mt-2">Kannan Departmental</h5>
        <p>Shop ID: 123456789</p>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/dashboard"
            className={`nav-link ${activeItem === '/dashboard' ? 'active' : ''}`}
            onClick={() => handleItemClick('/dashboard')}
          >
            <i className="bi bi-grid-fill me-2"></i>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/orders"
            className={`nav-link ${activeItem === '/orders' ? 'active' : ''}`}
            onClick={() => handleItemClick('/orders')}
          >
            <i className="bi bi-truck me-2"></i>
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/productList"
            className={`nav-link ${activeItem === '/productList' ? 'active' : ''}`}
            onClick={() => handleItemClick('/productList')}
          >
            <i className="bi bi-cart-fill me-2"></i>
            My Products
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/myProfile"
            className={`nav-link ${activeItem === '/myProfile' ? 'active' : ''}`}
            onClick={() => handleItemClick('/myProfile')}
          >
            <i className="bi bi-person-fill me-2"></i>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
