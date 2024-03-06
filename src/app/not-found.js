import Link from "next/link"
import Menu from "./components/Menu"; 
import Footer from "./components/Footer";
import styles from "./components/not-found.module.css"

export default function NotFound(){
    return (
        <div>
        <h2 className={styles.h2}>A página não foi encontrada</h2>
        <Link href="/">Retornar para Home</Link>
        </div>
    )
}