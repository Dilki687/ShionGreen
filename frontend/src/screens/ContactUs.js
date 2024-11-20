import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Banner Section */}
      <motion.div
        className="banner-section text-white text-center py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact us!</h1>
        <p className="lead">Stay connected with us</p>
      </motion.div>

      {/* Content Section */}
      <div className="container my-5">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          HAVE SOME QUESTIONS, ISSUES OR COMMENTS?
        </motion.h2>
        <motion.p
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Welcome! We are a leading provider of premium traditional spices,
          offering a range of products such as cinnamon and pepper. For any
          inquiries, please feel free to reach out to us through the contact
          points listed below for your convenience.
        </motion.p>

        {/* Contact Details Section */}
        <div className="row text-center">
          {/* General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Consumer Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Consumer Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Another General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.9 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Another General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
