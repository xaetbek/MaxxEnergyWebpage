import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <main className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Have questions? Fill out the form below and we’ll get back to you.</p>

        {success && <div className="contact-success">✅ Your message has been sent!</div>}

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="contact-error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="contact-error">{errors.email}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <p className="contact-error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
