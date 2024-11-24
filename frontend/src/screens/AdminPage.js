import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AdminPage = () => {
  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">View Orders</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Jane Doe</td>
                <td>Necklace</td>
                <td>1</td>
                <td>$50</td>
                <td>
                  <span className="badge bg-success">Completed</span>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>John Smith</td>
                <td>Ring</td>
                <td>2</td>
                <td>$100</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Emily Clark</td>
                <td>Watch</td>
                <td>1</td>
                <td>$150</td>
                <td>
                  <span className="badge bg-danger">Cancelled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
