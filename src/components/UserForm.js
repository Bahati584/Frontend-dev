import React, { useState } from 'react';
import '../styles/UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);
      alert("User created successfully!");

      // Reset form
      setFormData({ name: '', email: '', number: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="user-form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;




