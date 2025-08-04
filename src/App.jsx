import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from './layout/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';

import './AppStyles.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Layout with nested pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} /> {/* /admin */}
          <Route path="users" element={<UserListPage />} /> {/* /admin/users */}
          <Route path="add" element={<AddUserPage />} /> {/* /admin/add */}
        </Route>

        {/* Redirect everything else to /admin */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

