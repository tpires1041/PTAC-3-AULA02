import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.header}>
            <Link href="/">
            <Image
                width={90}
                height={90} 
                src={"https://www.ifms.edu.br/marcaifms.png"}
            />
            </Link>
            <nav className={styles.navegacao}>
                <ul>
                <Link href="/">
                    <li className={styles.link}>Home</li>
                </Link>
                <Link href="/registro">
                    <li className={styles.link}>Registro</li>
                </Link>
                <Link href="/localizacao">
                    <li className={styles.link}>Localização</li>
                </Link>
                </ul>
            </nav>
        </header>
    )
}