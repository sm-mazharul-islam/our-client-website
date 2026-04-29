import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UsersRow from "./UsersRow";
import { BASE_URL } from "../../../utils/constants";

const Users = () => {
  const [user, allUser] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}users`)
      .then((res) => res.json())
      .then((data) => allUser(data));
  }, []);
  return (
    <div>
      <h2>This is user page</h2>
      <h3>{user.length}</h3>

      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
          </tr>
        </thead>
        <tbody>
          {user.map((row) => (
            <UsersRow key={row._id} row={row}></UsersRow>
          ))}
        </tbody>
      </table>

      {/* <table>
    {
        user.map(row => <UsersRow
        key={row._id}
        row={row}
        ></UsersRow>)
    }
  </table> */}
    </div>
  );
};

export default Users;
