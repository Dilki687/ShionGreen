import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { jsPDF } from 'jspdf'; // Import jsPDF
import logo from "../images/logo.jpg"; // Import logo

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

  // Function to generate a PDF report for a single order
  const generateOrderReport = (order) => {
    const doc = new jsPDF();

    // Add logo to the PDF (centered and rounded)
    const logoSize = 40; // Size of the logo (adjust as needed)
    const logoX = (doc.internal.pageSize.width - logoSize) / 2; // Centered X position
    const logoY = 10; // Fixed Y position at the top
    doc.addImage(logo, 'JPG', logoX, logoY, logoSize, logoSize, undefined, 'FAST'); // Adjust size and position
    doc.setFillColor(255, 255, 255);
   
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

  // Function to generate a PDF report for all orders
  const generateAllOrdersReport = () => {
    const doc = new jsPDF();

    // Add logo to the PDF (centered and rounded)
    const logoSize = 40; // Size of the logo (adjust as needed)
    const logoX = (doc.internal.pageSize.width - logoSize) / 2; // Centered X position
    const logoY = 10; // Fixed Y position at the top
    doc.addImage(logo, 'JPG', logoX, logoY, logoSize, logoSize, undefined, 'FAST'); // Adjust size and position
    doc.setFillColor(255, 255, 255);
    
    // Title - centered
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Orders Report", doc.internal.pageSize.width / 2, 60, null, null, "center");

    let yOffset = 80; // Set initial Y position for content

    orders.forEach(order => {
      doc.setFontSize(12);
      doc.text(`Order ID: #${order._id}`, 10, yOffset);
      doc.text(`Customer Name: ${order.name}`, 10, yOffset + 10);
      doc.text(`Product: ${order.product}`, 10, yOffset + 20);
      doc.text(`Quantity: ${order.quantity}`, 10, yOffset + 30);
      doc.text(`Phone: ${order.phone}`, 10, yOffset + 40);
      doc.text(`Address: ${order.address}`, 10, yOffset + 50);
      doc.text(`Description: ${order.description}`, 10, yOffset + 60);
      doc.text(`Email: ${order.email}`, 10, yOffset + 70);
      doc.text(`Status: ${order.status}`, 10, yOffset + 80);

      // Add a horizontal line after each order
      doc.setLineWidth(0.5);
      doc.line(10, yOffset + 85, doc.internal.pageSize.width - 10, yOffset + 85);

      yOffset += 90; // Increase Y position for the next order

      if (yOffset > 250) {
        doc.addPage(); // Add a new page if content goes beyond page length
        yOffset = 10; // Reset Y position for the new page
      }
    });

    // Timestamp at the bottom in small letters
    const timestamp = new Date().toLocaleString();
    doc.setFontSize(8);
    doc.text(`Report generated on: ${timestamp}`, doc.internal.pageSize.width / 2, 280, null, null, "center");

    // Save the PDF with a name
    doc.save(`All_Orders_Report.pdf`);
  };

  // Function to delete an order
  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted order from the state
        setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
      } else {
        console.error('Error deleting order');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        
        {/* Generate All Orders Report Button */}
        <button
          className="btn mb-4"
          style={{ backgroundColor: '#113805', color: '#fff', display: 'flex', alignItems: 'center' }}
          onClick={generateAllOrdersReport}
        >
          Download All 
        </button>

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
                      style={{ backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center' }} // Changed to black
                      onClick={() => generateOrderReport(order)}
                    >
                      Download
                    </button>

                    {/* Delete Order Button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteOrder(order._id)}
                    >
                      Delete
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
