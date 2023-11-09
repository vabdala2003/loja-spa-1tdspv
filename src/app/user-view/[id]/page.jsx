import { redirect } from "next/navigation";

export default async function Item({params}) {
        let user;
        try {
            const response = await fetch(`http://localhost:3000/api/base/base-users/${params.id}`);
            user = await response.json();
        } catch(error){
            console.log(error);
            redirect("/error");
        }
  return (
    <div className="pagUser">
        {
            <div key={user.id}>
                <h1>NOME: {user.nome}</h1>
                <h2>EMAIL: {user.email}</h2>
                <h2>SENHA: {user.senha}</h2>
            </div>
        } 
    </div>
  )
}
