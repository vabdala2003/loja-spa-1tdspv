"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserPages() {

    // const response = await fetch("http://localhost:3000/api/git-users");
    // const users = await response.json();

    const [users, setUsers] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3000/api/base/base-users/0")
            .then((response)=> response.json())
            .then((response)=> setUsers(response))
            .catch(errors=> console.error(errors));

        }, [])
        
        console.log(users);

  return (
    <div>
        <h1>User Pages</h1>
        
        <div>
            <ul className="card-user">
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            {user.email}
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}
