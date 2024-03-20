import Image from "next/image";

export default async function Home() {
  const resposta = await fetch("https://back-end-ifms-blond.vercel.app/campi", {
    next: { revalidate: 1 },
  });

  const campi = await resposta.json()

  return (
    <main>
      <h1>Home</h1>
      {
      campi.map((campus,index) =>
        <div key={index}>
          <p>{campus.nome_campus}</p>
          <Image
            width={100}
            height={100} 
            src={campus.imagem_url}/>
        </div>
      )
      }
    </main>
  );
}
