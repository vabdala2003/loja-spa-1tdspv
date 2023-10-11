import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <li><Link href='/produtos/tenis'>TÊNIS</Link></li>
          <li><Link href='/produtos/sapatenis'>SAPATÊNIS</Link></li>
          <li><Link href='/produtos/sandalia'>SANDALIA</Link></li>
        </ul>
      </div>
    </>
  )
}
