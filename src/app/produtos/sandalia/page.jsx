import Link from "next/link"

export default function Sandalia() {
    return(
        <div>
            <h1>SANDALIA</h1>

            <div>  
                <h2>DESCRIÇÃO: </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sequi modi quaerat in fugit similique non ex nulla voluptas 
                    possimus commodi cum, ab placeat, laborum blanditiis incidunt 
                    quas aliquid odio laboriosam.</p>
            </div>

            <p><Link href='/'>Voltar...</Link></p>
        </div>
    )
}


