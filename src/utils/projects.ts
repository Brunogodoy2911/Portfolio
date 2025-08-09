import ReactLogo from "../../public/icons/react.svg";
import TypeScriptLogo from "../../public/icons/typescript.svg";
import TailwindLogo from "../../public/icons/tailwind.svg";
import JavaLogo from "../../public/icons/java.svg";
import SpringBootLogo from "../../public/icons/spring.svg";
import ExpoLogo from "../../public/icons/expo.svg";
import GluestackLogo from "../../public/icons/gluestacks.svg";
import ShadcnLogo from "../../public/icons/shadcn.svg";
import FirebaseLogo from "../../public/icons/firebase.svg";

export interface Technology {
  name: string;
  img: string;
}

export interface Project {
  imgs: string[];
  title: string;
  tecnologies: Technology[];
  description: string;
  link_rep: string;
  link_demo: string;
}

export const projects: Project[] = [
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/HealthSync/Home?updatedAt=1754585142143",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/HealthSync/Personal?updatedAt=1754695538125",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/HealthSync/Aluno?updatedAt=1754695572844",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/HealthSync/Apresenta%C3%A7%C3%A3o?updatedAt=1754695482479",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/HealthSync/Grupo.jpeg?updatedAt=1754695503373",
    ],
    title: "HealthSync",
    tecnologies: [
      {
        name: "React",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "TailwindCSS",
        img: TailwindLogo,
      },
      {
        name: "Shadcn/ui",
        img: ShadcnLogo,
      },
      {
        name: "Java",
        img: JavaLogo,
      },
      {
        name: "Spring Boot",
        img: SpringBootLogo,
      },
    ],
    description:
      "O HealthSync é uma plataforma completa para personal trainers e seus alunos, projetada para otimizar a gestão de treinos, acompanhar o progresso e fortalecer a comunicação.",
    link_rep: "https://github.com/Grupo-02-Turma-Java-82/HealthSync_Page",
    link_demo: "https://hsync.com.br/",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/MockUpConnectUs.png?updatedAt=1754696344427",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Home?updatedAt=1754601893262",
    ],
    title: "ConnectUS",
    tecnologies: [
      {
        name: "React",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "TailwindCSS",
        img: TailwindLogo,
      },
      {
        name: "Shadcn/ui",
        img: ShadcnLogo,
      },
      {
        name: "Java",
        img: JavaLogo,
      },
      {
        name: "Spring Boot",
        img: SpringBootLogo,
      },
    ],
    description:
      "ConnectUS é um CRM intuitivo para gerenciar clientes (CPF/CNPJ), acompanhar oportunidades de vendas em um pipeline visual e analisar métricas de crescimento através de um dashboard interativo.",
    link_rep: "https://github.com/Grupo-02-Turma-Java-82/ConnectUs_CRM_Page",
    link_demo: "https://connectuscrm.netlify.app",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Thumb%20(1).png?updatedAt=1752554734356",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/PharmaShop/Produtos?updatedAt=1754695744281",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/PharmaShop/Categorias?updatedAt=1754695744184",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/PharmaShop/Novo%20Produto?updatedAt=1754695744176",
    ],
    title: "PharmaShop",
    tecnologies: [
      {
        name: "React",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "TailwindCSS",
        img: TailwindLogo,
      },
      {
        name: "Java",
        img: JavaLogo,
      },
      {
        name: "Spring Boot",
        img: SpringBootLogo,
      },
    ],
    description:
      "PharmaShop é o frontend de uma aplicação de e-commerce para uma farmácia, desenvolvido como o Desafio de Performance Goal do Bloco 03 do bootcamp de Desenvolvimento Full Stack Java da Generation Brasil.",
    link_rep: "https://github.com/Brunogodoy2911/PharmaShop",
    link_demo: "https://projeto-final-bloco-03-eta.vercel.app/",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Login?updatedAt=1754709073219",
      "https://ik.imagekit.io/brunogodoy/adm_dashboard?updatedAt=1750169590341",
      "https://ik.imagekit.io/brunogodoy/adm-preview?updatedAt=1750169590355",
      "https://ik.imagekit.io/brunogodoy/new_refund?updatedAt=1750169590261",
    ],
    title: "Refund 2.0",
    tecnologies: [
      {
        name: "React",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "TailwindCSS",
        img: TailwindLogo,
      },
    ],
    description:
      "A aplicação Refund 2.0 é um sistema web front-end desenvolvido para gerenciar solicitações de reembolso. O objetivo é permitir que funcionários de uma empresa possam submeter despesas para reembolso e que os gestores possam visualizar e acompanhar essas solicitações. ",
    link_rep: "https://github.com/Brunogodoy2911/Refund_2.0",
    link_demo: "https://refund-2-0-sigma.vercel.app/",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Thumb.png?updatedAt=1752553690411",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/GameStore/Home?updatedAt=1754696094992",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/GameStore/Cart?updatedAt=1754696095028",
    ],
    title: "GameStore",
    tecnologies: [
      {
        name: "React",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "TailwindCSS",
        img: TailwindLogo,
      },
      {
        name: "Shadcn/ui",
        img: ShadcnLogo,
      },
      {
        name: "Java",
        img: JavaLogo,
      },
      {
        name: "Spring Boot",
        img: SpringBootLogo,
      },
    ],
    description:
      "GameStore é uma aplicação front-end que simula uma loja virtual de jogos. Ela consome dados de uma API para listar produtos, permite que os usuários filtrem os jogos por categoria e gerenciem seus itens em um carrinho de compras funcional. O projeto foi desenvolvido com foco em performance, componentização e uma ótima experiência de usuário.",
    link_rep: "https://github.com/Brunogodoy2911/GameStore",
    link_demo: "https://game-store-rouge-one.vercel.app/",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Cover%20-%20IgniteGym?updatedAt=1754707609953",
    ],
    title: "Ignite Gym",
    tecnologies: [
      {
        name: "React Native",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "Gluestack-ui",
        img: GluestackLogo,
      },
      {
        name: "Expo",
        img: ExpoLogo,
      },
    ],
    description:
      "O Ignite Gym é uma aplicação para você gerenciar seus treinos na academia e ter mais controle sobre os exercícios que está realizando.",
    link_rep: "https://github.com/Brunogodoy2911/IgniteGym",
    link_demo: "",
  },
  {
    imgs: [
      "https://github.com/Brunogodoy2911/PersonalConnect/raw/main/assets/telas.png",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/Personal%20Connect/Feira?updatedAt=1754696810273",
    ],
    title: "PersonalConnect",
    tecnologies: [
      {
        name: "React Native",
        img: ReactLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "Expo",
        img: ExpoLogo,
      },
      {
        name: "Firebase",
        img: FirebaseLogo,
      },
    ],
    description:
      "PersonalConnect é um aplicativo desenvolvido como parte do meu Trabalho de Conclusão de Curso (TCC) no curso de Análise e Desenvolvimento de Sistemas na ETEC Hortolândia. O objetivo do projeto é fornecer uma plataforma para personal trainers (treinadores pessoais) gerenciarem e criarem fichas de treinos para seus alunos de forma organizada e eficaz.",
    link_rep: "https://github.com/Brunogodoy2911/PersonalConnect",
    link_demo: "",
  },
];
