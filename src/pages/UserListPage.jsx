import React from 'react';
import UserList from '../components/UserList';


const UserListPage = () => {
    console.log('✅ UserListPage rendered');
  return (
    <div>
      <h2>All Users</h2>
      <UserList />
    </div>
  );
};

export default UserListPage;
