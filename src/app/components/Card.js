import Image from "next/image";

export default function Card(nome_campi) {
  return (
    <div>
      <Image>
        width={100}
        height={100} 
        src={dados_imagem}
      </Image>
      <h1>{nome_campi}</h1>
    </div>
  );
}
