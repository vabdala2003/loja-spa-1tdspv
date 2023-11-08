import Link from "next/link";
import Image from "next/image";

export default function Calca() {
  return (
    <div>
        <br/>
        <h1>Nike Pants FitRun</h1><br/>
        <p><strong>Descrição: </strong></p>
        <p>Perfeita para correr em qualquer tempo, tem tecnologia adaptável, fresca no calor e quente no inverno.</p>
        <Image
        src="/calca.png"
        alt="calca"
        width={300}
        height={200}
        />
        <br/><p><Link href="/">Voltar...</Link></p>
    </div>
  )
}
