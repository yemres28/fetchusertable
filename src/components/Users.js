import { useState, useEffect } from "react";
import "./style.css";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  const first = users[0];
  return (
    <div>
      <div class="wrapper">
        <table>
          <td class="other">İD</td>
          <td class="other">NAME</td>
          <td class="other">USERNAME</td>
          <td class="other">EMAIL</td>
          <td class="other">STREET</td>
          <td class="other">CITY</td>
        </table>
      </div>
      {users.map((first) => (
        <div key={first.id}>
          <div class="wrapper">
            <table>
              <td class="other">{first?.id}</td>
              <td class="other">{first?.name}</td>
              <td class="other">{first?.username}</td>
              <td class="other">{first?.email}</td>
              <td class="other">{first?.address.street}</td>
              <td class="other">{first?.address.city}</td>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
