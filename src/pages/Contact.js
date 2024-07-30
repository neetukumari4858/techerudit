import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fname) newErrors.fname = "First name is required";
    if (!formData.lname) newErrors.lname = "Last name is required";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid phone number";
    if (!formData.budget || isNaN(formData.budget))
      newErrors.budget = "Budget must be a number";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://3.7.81.243:3253/api/contact/send",
          formData
        );
        console.log("Success:", response.data);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          budget: "",
          description: "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="contact_conatiner">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name"
            className="underline-input"
          />
          {errors.fname && <p className="error">{errors.fname}</p>}
        </div>
        <div className="input-container">
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last Name"
            className="underline-input"
          />
          {errors.lname && <p className="error">{errors.lname}</p>}
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="underline-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-container">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="underline-input"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="input-container">
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget"
            className="underline-input"
          />
          {errors.budget && <p className="error">{errors.budget}</p>}
        </div>
        <div className="input-container">
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="underline-input"
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <button type="submit" className="form_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
