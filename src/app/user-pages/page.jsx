import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';

export default function UserPages() {

  useEffect(() => {
    fetch("https://locaL:3000/api/git-users")
    .then((response)=> response.json())
    .then((response)=> setUsers(response))
    .catch(errors=> console.error(errors));

  }, [])

  const response = await fetch("/api/git-users");
  const users = await response.json();

    console.log(users)

  return (
    <div>
      <h1>User Pages</h1>

      <div>
        <ul>
          {
            response.map((user)=>(
              <li key={user.id}>
                <figure>
                  <Image
                  src={user.avatar_url}
                  alt="Avatar"
                  Width={50}
                  Height={50}/>
                  <figcaption>{user.login}</figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
