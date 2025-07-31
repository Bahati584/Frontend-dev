import React from 'react';
import '../styles/UserList.css';

const UserList = () => {
  const users = [
    { name: 'Isaac Bahati', email: 'isaac@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' }
  ];

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UserList;
