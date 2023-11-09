import Link from "next/link";

import { BiBorderOuter, BiSolidSearchAlt2 } from "react-icons/bi";


export default async function UserPages() {
    let users;
    
    try {
        const response = await fetch("http://localhost:3000/api/base/base-users/0");
        users = await response.json();
    } catch(error){
        console.log(error);
        redirect("/error");
    }

  return (
    <div className="userPage">
        <h1>User Pages</h1>
        
        <div>
            <table>
            <thead>
                <tr>    
                    <th>ID</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>SENHA</th>
                    <th>OPCOES</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            <Link href={`/user-view/${user.id}`}>
                                {user.nome}
                            </Link></td>
                        <td>{user.email}</td>
                        <td>{user.senha}</td>
                        <td>
                            <Link href={`/user-view/${user.id}`}>
                                <BiBorderOuter />
                            </Link>
                            <Link href={`https://www.google.com/search?q=${user.nome}`}>
                                <BiSolidSearchAlt2 />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6">Total de Usuários: {users.length}</td>
                </tr>
            </tfoot>
        </table>
        </div>

    </div>
  )
}
