import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Banner Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Contact us!</h1>
        <p className="lead">Stay connected with us</p>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">HAVE SOME QUESTIONS, ISSUES OR COMMENTS?</h2>
        <p className="text-center mb-5">
          Welcome! We are a leading provider of premium traditional spices,
          offering a range of products such as cinnamon and pepper. For any
          inquiries, please feel free to reach out to us through the contact
          points listed below for your convenience.
        </p>

        {/* Contact Details Section */}
        <div className="row text-center">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Consumer Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">General Enquiries</h5>
                <p className="card-text">
                  📞 +123-456-7890 <br /> 📧 info@shionspices.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
