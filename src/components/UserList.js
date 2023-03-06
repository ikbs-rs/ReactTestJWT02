import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [usersO, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
console.log(response);
  useEffect(() => {
    axios
      .get("http://localhost:8380/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Korisnik</th>
              <th>Ime</th>
              <th>Prezime</th>
            </tr>
          </thead>
          <tbody>            
            { 
              usersO.users.map((user) => (
                  <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
