import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); 
    }

    fetchUsers();
  }, []);

  return (
    <div className="card-container">
      <h2>Usuários</h2>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <div className="user-header">
              <p className="user-name">{user.name}</p>
              <p className="user-username">@{user.username}</p>
            </div>
            <div className="user-details">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Telefone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}