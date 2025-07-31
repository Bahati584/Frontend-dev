import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/AdminLayout.css';

function AdminLayout() {
    return (
      <div className="admin-container">
        <div className="admin-sidebar">
          <h2>Admin Panel</h2>
          <nav>
            <ul>
              <li><Link to="/admin">Dashboard</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
              <li><Link to="/admin/add">Add User</Link></li>
            </ul>
          </nav>
        </div>
  
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default AdminLayout;


