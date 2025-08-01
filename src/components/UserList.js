import React from 'react';
import '../styles/UserList.css';

const UserList = () => {
  const users = [
    { name: 'Isaac Bahati', email: 'isaac@example.com',number: '0712345678' },
    { name: 'Jane Doe', email: 'jane@example.com',number: '0712345678' }
  ];

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UserList;
