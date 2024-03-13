import {useState, useEffect } from "react";
import { fetchUsers } from "../api";

import UserCard from "./UserCard";

const UserList = () => {
  const [users,setUsers] = useState([])
    useEffect(() => {
    fetchUsers().then((users) => {
        setUsers(users)
    });
  }, []);
  return( 
    <div className="user-list">
        <ul>
            {users.map((user)=> (<UserCard key={user.username} username={user.username} name={user.name} img={user.avatar_url}/>))}
        </ul>
    </div>
  )
};
export default UserList;
