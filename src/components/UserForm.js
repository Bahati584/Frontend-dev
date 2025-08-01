import React, { useState } from 'react';
import '../styles/UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="user-form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <input name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;



