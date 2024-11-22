import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    mrp: "",
    discountType: "",
    discountValue: "",
    price: "",
    uom: "",
    productSize: "",
    quantity: "",
    description: "",
    country: "",
    manufacturer: "",
    deliveryType: [],
    productImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      deliveryType: checked
        ? [...prev.deliveryType, value]
        : prev.deliveryType.filter((type) => type !== value),
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Product Details Submitted!");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Add a Product</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                onChange={handleInputChange}
                value={formData.category}
              >
                <option value="">Select related Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="grocery">Grocery</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter product name"
                onChange={handleInputChange}
                value={formData.productName}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="mrp">
              <Form.Label>Product MRP</Form.Label>
              <Form.Control
                type="number"
                name="mrp"
                placeholder="Enter MRP"
                onChange={handleInputChange}
                value={formData.mrp}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="discountType">
              <Form.Label>Discount Type</Form.Label>
              <Form.Select
                name="discountType"
                onChange={handleInputChange}
                value={formData.discountType}
              >
                <option value="">Select</option>
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="discountValue">
              <Form.Label>Discount Value</Form.Label>
              <Form.Control
                type="number"
                name="discountValue"
                placeholder="Enter Discount Value"
                onChange={handleInputChange}
                value={formData.discountValue}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter Price"
                onChange={handleInputChange}
                value={formData.price}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="uom">
              <Form.Label>Unit of Measurement</Form.Label>
              <Form.Select
                name="uom"
                onChange={handleInputChange}
                value={formData.uom}
              >
                <option value="">Select</option>
                <option value="kg">Kg</option>
                <option value="ltr">Ltr</option>
                <option value="pcs">Pcs</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="quantity">
              <Form.Label>Available Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                onChange={handleInputChange}
                value={formData.quantity}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows="3"
                placeholder="Enter product description"
                onChange={handleInputChange}
                value={formData.description}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country of Origin</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Enter country of origin"
                onChange={handleInputChange}
                value={formData.country}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="manufacturer">
              <Form.Label>Manufacturer Name</Form.Label>
              <Form.Control
                type="text"
                name="manufacturer"
                placeholder="Enter manufacturer name"
                onChange={handleInputChange}
                value={formData.manufacturer}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Card className="addProduct-card">
              <Card.Body>
                <Card.Title>Delivery Details</Card.Title>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    name="deliveryType"
                    value="instant"
                    label="Instant Delivery"
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="deliveryType"
                    value="schedule"
                    label="Schedule Delivery"
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="deliveryType"
                    value="pickup"
                    label="Store Pickup"
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="addProduct-card">
              <Card.Body>
                <Card.Title>Product Image</Card.Title>
                <div className="d-flex flex-column align-items-center">
                  <Form.Group controlId="productImage" className="position-relative">
                    <Form.Control
                      type="file"
                      name="productImage"
                      onChange={handleFileChange}
                      style={{
                        position: "absolute",
                        opacity: 0,
                        zIndex: -1,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-light d-flex flex-column align-items-center"
                      style={{
                        border: "2px dashed #ccc",
                        padding: "20px",
                        borderRadius: "8px",
                        width: "150px",
                        height: "140px",
                        textAlign: "center",
                      }}
                      onClick={() => document.getElementById("productImage").click()}
                    >
                      <FaCloudUploadAlt size={40} color="#007bff" />
                      <span className="mt-2">Upload Image</span>
                    </button>
                  </Form.Group>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex">
          <Button type="submit" className="btn btn-success me-2 ">
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
