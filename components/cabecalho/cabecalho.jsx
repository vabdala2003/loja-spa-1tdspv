import Link from "next/link";

export default function Cabecalho() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link href='/produtos/tenis'>TÊNIS</Link></li>
            <li><Link href='/produtos/sapatenis'>SAPATÊNIS</Link></li>
            <li><Link href='/produtos/sandalia'>SANDALIA</Link></li>
            <li><Link href='/produtos/user-pages'>GIT-USERS</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
