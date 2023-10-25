import React from 'react'
import Image from 'next/image';

export default function UserPages() {

  const response = await fetch("/api/git-users");
  if (response.ok) {
    return response.json();
  }
  else {
    throw new Error("Error getting users from API")
  }

  return (
    <div>
      <h1>User Pages</h1>

      <div>
        <ul>
          {
            response.map(user)=>(
              <li key={user.id}>
                <figure>
                  <
                  src={user.avatar_url}
                  alt="Avatar"
                  Width={50}
                  Height={50}/>
                </figure>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
