import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer"; // Import Footer component
import ContactUs from "./screens/ContactUs"; // Import ContactUs page
import OrderForm from "./screens/OrderForm";
import HomePage from "./screens/HomePage";
import AdminPage from "./screens/AdminPage"; // Import AdminPage
import Sidebar from "./components/Sidebar"; // Import Sidebar component

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout />
      </div>
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin";

  return (
    <div className="d-flex">
      {/* Render Sidebar only for AdminPage */}
      {isAdminRoute && <Sidebar />}

      <div className={isAdminRoute ? "flex-grow-1" : "w-100"}>
        {/* Render NavBar and Footer only for non-admin routes */}
        {!isAdminRoute && <NavBar />}

        <main>
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/orderform" element={<OrderForm />} />
            <Route path="/admin" element={<AdminPage />} /> {/* AdminPage Route */}
          </Routes>
        </main>

        {!isAdminRoute && <Footer />}
      </div>
    </div>
  );
};

export default App;
