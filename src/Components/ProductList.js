import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidepannel';
import Header from './DashboardHeader';
import AddProduct from "./AddProduct";

const ProductListing = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false); // State to toggle views

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((cat) => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const data = [
    {
      category: "Fruits & Vegetables",
      products: [
        { name: "Ooty Apple", price: "₹100", quantity: "5 (0.5 kg)", available: true },
        { name: "Dove Natural Soap", price: "₹100", quantity: "5 (0.5 kg)", available: true },
      ],
    },
    {
      category: "Dairy, Bread and Eggs",
      products: [],
    },
    {
      category: "Snacks and Biscuits",
      products: [],
    },
    {
      category: "Atta, Dal and Rice",
      products: [],
    },
  ];

  // Filter categories and products based on search
  const filteredData = data
    .filter((category) =>
      category.category.toLowerCase().includes(searchTerm) ||
      category.products.some((product) =>
        product.name.toLowerCase().includes(searchTerm)
      )
    )
    .map((category) => ({
      ...category,
      products: category.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      ),
    }));

  return (
    <div>
      <Header />
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <div className="dashboardcontainer flex-grow-1 px-3">
          <div className="productbg-white">
            <h3 className="mb-3">My Product Listing</h3>
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Add Product and Back Buttons */}
              <div>
                {!isAddingProduct && (
                  <button
                    className="btn btn-success me-2"
                    onClick={() => setIsAddingProduct(true)}
                  >
                    + Add a Product
                  </button>
                )}
                {isAddingProduct && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setIsAddingProduct(false)} // Back to list view
                  >
                    Back
                  </button>
                )}
              </div>

              {/* Search Input */}
              <div className="input-group" style={{ maxWidth: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search categories or products..."
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-secondary">Search</button>
              </div>
            </div>

            {/* Conditional rendering for AddProduct component */}
            {isAddingProduct ? (
              <AddProduct />
            ) : (
              <>
                {filteredData.length > 0 ? (
                  filteredData.map((category, index) => (
                    <div className="card product-card" key={index}>
                      <div
                        className="card-header d-flex justify-content-between align-items-center"
                        onClick={() => toggleCategory(category.category)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="fw-bold">{category.category}</span>
                        <span>
                          {expandedCategories.includes(category.category) ? "▲" : "▼"}
                        </span>
                      </div>

                      {expandedCategories.includes(category.category) && (
                        <div className="card-body">
                          {category.products.length > 0 ? (
                            <table className="table table-hover table-bordered">
                              <thead className="table-light">
                                <tr>
                                  <th>Product Name</th>
                                  <th>Price</th>
                                  <th>Avail. Quantity</th>
                                  <th>Availability</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {category.products.map((product, idx) => (
                                  <tr key={idx}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                      <input
                                        type="checkbox"
                                        checked={product.available}
                                        onChange={() => {}}
                                      />
                                    </td>
                                    <td>
                                      <button className="btn btn-primary btn-sm">
                                        Action
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p className="text-muted">No products available in this category.</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No categories or products found.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
