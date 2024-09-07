import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-us">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="map">
          <iframe
            title="AgroMerchant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5707079815164!2d75.86519037548926!3d22.67269762947342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd837364b765%3A0xc3f41805d8726d0!2sIPS%20Academy!5e0!3m2!1sen!2sin!4v1694089864080!5m2!1sen!2sin"
            width="100%"
            height="250"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <p><strong>Location:</strong> IPS Academy Indore</p>
        <p><strong>Email:</strong> <a href="mailto:support@agromerchants.com">support@agromerchants.com</a></p>
        <p><strong>Call:</strong> <a href="tel:+917859807007">+91 78598 07007</a></p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
