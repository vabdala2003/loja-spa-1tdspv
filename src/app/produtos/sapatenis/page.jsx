import Link from "next/link"
import Image from "next/image"

export default function Sapatenis() {
    return(
        <div>
            <h1>SAPATENIS</h1>

            <div>  
                <h2>DESCRIÇÃO: </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sequi modi quaerat in fugit similique non ex nulla voluptas 
                    possimus commodi cum, ab placeat, laborum blanditiis incidunt 
                    quas aliquid odio laboriosam.</p>
            </div>

            <p><Link href='/'>Voltar...</Link></p>

            <figure>
                <Image src="/sapatenis.jpg" alt="sapatenis" width={320} height={320}></Image>
            </figure>
        </div>
    )
}