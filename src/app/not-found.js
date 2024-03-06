import Link from "next/link"
import Menu from "./components/Menu"; 
import Footer from "./components/Footer";

export default function NotFound(){
    return (
        <div>
        <h2>A página não foi encontrada</h2>
        <Link href="/">Retornar para Home</Link>
        </div>
    )
}