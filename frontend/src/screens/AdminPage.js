import React, { useState, useEffect } from 'react';   
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { jsPDF } from 'jspdf'; // Import jsPDF
import logo from "../images/logo.jpg"

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Function to generate the PDF
  const generateReport = (order) => {
    const doc = new jsPDF();

    // Add logo to the PDF (centered and rounded)
    const logoSize = 40; // Size of the logo (adjust as needed)
    const logoX = (doc.internal.pageSize.width - logoSize) / 2; // Centered X position
    const logoY = 10; // Fixed Y position at the top
    doc.addImage(logo, 'JPG', logoX, logoY, logoSize, logoSize, undefined, 'FAST'); // Adjust size and position
    doc.setFillColor(255, 255, 255);
    doc.circle(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2, 'F'); // Add rounded circle effect to the logo

    // Title - centered
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Order Report", doc.internal.pageSize.width / 2, 60, null, null, "center");

    // Order details - centered in the middle of the page
    doc.setFontSize(12);
    doc.text(`Order ID: #${order._id}`, doc.internal.pageSize.width / 2, 70, null, null, "center");
    doc.text(`Customer Name: ${order.name}`, doc.internal.pageSize.width / 2, 80, null, null, "center");
    doc.text(`Product: ${order.product}`, doc.internal.pageSize.width / 2, 90, null, null, "center");
    doc.text(`Quantity: ${order.quantity}`, doc.internal.pageSize.width / 2, 100, null, null, "center");
    doc.text(`Phone: ${order.phone}`, doc.internal.pageSize.width / 2, 110, null, null, "center");
    doc.text(`Address: ${order.address}`, doc.internal.pageSize.width / 2, 120, null, null, "center");
    doc.text(`Description: ${order.description}`, doc.internal.pageSize.width / 2, 130, null, null, "center");
    doc.text(`Email: ${order.email}`, doc.internal.pageSize.width / 2, 140, null, null, "center");

    // Status
    doc.text(`Status: ${order.status}`, doc.internal.pageSize.width / 2, 150, null, null, "center");

    // Timestamp at the bottom in small letters
    const timestamp = new Date().toLocaleString();
    doc.setFontSize(8);
    doc.text(`Report generated on: ${timestamp}`, doc.internal.pageSize.width / 2, 280, null, null, "center");

    // Save the PDF with a name
    doc.save(`Order_Report_${order._id}.pdf`);
  };

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">View Orders</h2>

        <div className="row">
          {/* Dynamically Render Cards for Each Order */}
          {orders.map((order) => (
            <div key={order._id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Order ID: #{order._id}</h5>
                  <p className="card-text"><strong>Customer Name:</strong> {order.name}</p>
                  <p className="card-text"><strong>Product:</strong> {order.product}</p>
                  <p className="card-text"><strong>Quantity:</strong> {order.quantity}</p>
                  <p className="card-text"><strong>Phone:</strong> {order.phone}</p>
                  <p className="card-text"><strong>Address:</strong> {order.address}</p>
                  <p className="card-text"><strong>Description:</strong> {order.description}</p>
                  <p className="card-text"><strong>Email:</strong> {order.email}</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${order.status === 'Completed' ? 'bg-success' : order.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}>
                      {order.status}
                    </span>
                    {/* Generate Report Button */}
                    <button 
                      className="btn" 
                      style={{ backgroundColor: '#113805', color: '#fff' }}
                      onClick={() => generateReport(order)}
                    >
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
