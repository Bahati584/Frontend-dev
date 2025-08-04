import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/users');
                setUsers(res.data); // assuming backend returns array of users
            } catch (err) {
                console.error('Failed to fetch users:', err);
            }
        };

        fetchUsers();

    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>
                            <strong>{user.name}</strong> - {user.email} - {user.phone}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
