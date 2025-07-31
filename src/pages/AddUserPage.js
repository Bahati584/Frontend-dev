import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function AddUserPage() {
  const [refresh, setRefresh] = useState(false);

  const handleUserCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>➕ Add New User</h1>
      <UserForm onUserCreated={handleUserCreated} />
      <UserList key={refresh} />
    </div>
  );
}

export default AddUserPage;
