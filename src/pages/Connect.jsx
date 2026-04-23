import React, { useState } from "react";
import "./connect.css";
import axios from "axios";
import SEO from "../SEO";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "contact",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${baseUrl}/api/form/${formData.formType}`, formData);

      setShowThankYou(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "contactLCG",
      });

      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showThankYou && (
        <div className="thankyou-overlay">
          <p>Thank you! We’ll get back to you</p>
        </div>
      )}

      <SEO title="Contact" description="Contact Lowercase Group" url="/contact" />

      <section className="connect">
        <div className="connect__container">

          {/* <p className="contactform_heading">Connect with Us</p> */}

          {/* <p className="contactform_desc">Please provide a concise overview of your enquiry. We prioritise serious proposals, partnerships and strategic opportunities.</p> */}

          <form className="connect__form" onSubmit={submit}>

            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                // placeholder="e.g. John Smith"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                // placeholder="e.g. example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                // placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                name="data"
                placeholder="Please provide a concise overview of your enquiry. We prioritise serious proposals, partnerships and strategic opportunities."
                value={formData.data}
                onChange={handleChange}
                rows="5"
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Sending..." : "Send message"}
            </button>

          </form>

        </div>
      </section>
    </>
  );
};

export default Connect;