import Link from "next/link";
import Image from "next/image";

export default function Tenis(){
    return(
        <div>
        <br/>
        <h1>AirMax</h1><br/>
        <p><strong>Descrição: </strong></p>
        <p>Estiloso, comfortável e num preço que cabe no seu bolso apenas aqui na loja Spa Fiap.</p>
        <Image
        src="/shoe.png"
        alt="tenis"
        width={300}
        height={200}
        />
        <br/><p><Link href="/">Voltar...</Link></p>
    </div>
    )
}