import React, { useState } from "react";
// import "../css/Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/contact", formData)
      .then((response) => {
        console.log("Data berhasil dikirim:", response.data);
        // Reset form setelah berhasil dikirim
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Gagal mengirim data:", error);
      });
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Hubungi Numedica dengan mengisi Form yang ada dibawah ini</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" />
        </label>
        <label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
        </label>
        <label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="Phone Number" />
        </label>
        <label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required placeholder="Have anything to say?" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
