import { NextRequest, NextResponse } from "next/server";

const campus = [
    {
      id:1,
      nome_campus: "Campus Aquidauana",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5526.jpg"
    },
    {
      id:2,
      nome_campus: "Campus Campo Grande",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_0079.jpg"
    },
    {
      id:3,
      nome_campus: "Campus Corumbá",
      imagem_url: "https://www.ifms.edu.br/noticias/ifms-inicia-atendimento-em-sede-definitiva-em-corumba/01-09-2018-mat-campu-corumba.png/@@images/2457c838-5209-49aa-af8d-0838bcb5ef39.png"
    },
    {
      id:4,
      nome_campus: "Campus Coxim",
      imagem_url: "https://www.edicaoms.com.br/uploads/images/noticias/10b3cd12552938fbc1589a83c121e15e.jpg"
    },
    {
      id:5,
      nome_campus: "Campus Dourados",
      imagem_url: "https://www.ifms.edu.br/campi/campus-dourados/sobre/fotos/fachada-ifms-campus-dourados-2023/img_6991.jpg/@@images/c3708882-1106-43f6-9875-e34e30656cf7.jpeg"
    },
    {
      id:6,
      nome_campus: "Campus Jardim",
      imagem_url: "https://www.bonitonoticias.com.br/imagem/noticia/1000/1000/1591704648_97152.jpg"
    },
    {
      id:7,
      nome_campus: "Campus Naviraí",
      imagem_url: "https://www.ifms.edu.br/campi/campus-navirai/sobre/fotos/recepcao-dos-estudantes-2019/recepcao-estudantes-2019/@@images/6d15bf0f-c5c9-4c16-93c5-d3d459df3a20.jpeg"
    },
    {
      id:8,
      nome_campus: "Campus Nova Andradina",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"
    },
    {
      id:9,
      nome_campus: "Campus Ponta Porã",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/inauguracoes-pp-2023/pp-7.jpg"
    },
    {
      id:10,
      nome_campus: "Campus Três Lagoas",
      imagem_url: "https://www.hojemais.com.br/imagem/noticia/1000/1000/1598047640_62013.jpg"
    }
  ];

export async function GET() {
    try {
      return NextResponse.json(campus);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };