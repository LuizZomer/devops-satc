import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://reqres.in/api/users?page=1"
      );

      setUsers(response.data.data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuários</h2>

      {users.map((user) => (
        <div key={user.id}>
          {user.first_name} - {user.email}
        </div>
      ))}
    </div>
  );
}