import DashboardPage from './pages/DashboardPage';

import './AppStyles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from './layout/AdminLayout';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h2>Welcome to the Admin Dashboard</h2>} />
          <Route path="users" element={<UserListPage />} />
          <Route path="add" element={<AddUserPage />} />
        </Route>

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}
<Route path="/admin" element={<DashboardPage />} />
export default App;


