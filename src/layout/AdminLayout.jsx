import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      {/* This renders nested routes like /admin/users */}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
