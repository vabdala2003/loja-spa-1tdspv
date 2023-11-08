import Link from "next/link";
import Image from "next/image";

export default function Camisa(){
    return(
        <div>
        <br/>
        <h1>T-shirt Plus Mega Master</h1><br/>
        <p><strong>Descrição: </strong></p>
        <p>A camiseta mais completa do mercado.</p>
        <Image
        src="/tshirt.png"
        alt="camisa"
        width={300}
        height={200}
        />
        <br/><p><Link href="/">Voltar...</Link></p>
    </div>
    )
}