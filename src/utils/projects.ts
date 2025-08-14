import ReactLogo from "../../public/icons/react.svg";
import AngularLogo from "../../public/icons/angular.svg";
import TypeScriptLogo from "../../public/icons/typescript.svg";
import TailwindLogo from "../../public/icons/tailwind.svg";
import JavaLogo from "../../public/icons/java.svg";
import SpringBootLogo from "../../public/icons/spring.svg";
import ExpoLogo from "../../public/icons/expo.svg";
import GluestackLogo from "../../public/icons/gluestacks.svg";
import ShadcnLogo from "../../public/icons/shadcn.svg";
import FirebaseLogo from "../../public/icons/firebase.svg";
import BootStrapLogo from "../../public/icons/bootstrap.svg";

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
      "Desenvolvi uma plataforma Full Stack para personal trainers, centralizando a gestão de alunos e a criação de planos de treino. O sistema otimiza a comunicação e o acompanhamento de progresso, agregando valor tanto para o profissional quanto para o cliente.",
    link_rep: "https://github.com/Grupo-02-Turma-Java-82/HealthSync_Page",
    link_demo: "https://hsync.com.br/",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/MockUpConnectUs.png?updatedAt=1754696344427",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Home?updatedAt=1754601893262",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Dashboard?updatedAt=1754797475367",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Clientes?updatedAt=1754797526866",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Oportunidades?updatedAt=1754797526868",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/ConnectUS/Usu%C3%A1rio?updatedAt=1754797526872",
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
      "Criei um CRM completo para otimizar o processo de vendas. A plataforma centraliza o cadastro de clientes, permite o gerenciamento de oportunidades com um pipeline Kanban e fornece um dashboard com métricas chave, capacitando a equipe a tomar decisões baseadas em dados.",
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
      "Frontend de um e-commerce farmacêutico com gestão completa de produtos e categorias. Neste projeto, implementei funcionalidades de CRUD (Criar, Ler, Atualizar, Deletar) que interagem com uma API robusta, demonstrando habilidades de integração e manipulação de dados.",
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
      "Sistema web para gerenciamento de reembolsos, projetado para simplificar a submissão de despesas por funcionários e o acompanhamento por gestores. O foco foi criar uma interface clara e um fluxo de usuário eficiente para agilizar processos administrativos.",
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
      "Aplicação de e-commerce de jogos com integração de API, filtro de produtos e carrinho de compras funcional. O projeto foi arquitetado com foco em componentização, performance e uma experiência de usuário responsiva e intuitiva.",
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
      "Aplicação mobile para gestão de treinos, permitindo que usuários registrem e acompanhem seus exercícios. O projeto foi desenvolvido com foco em performance nativa e uma interface de usuário limpa para uso rápido na academia.",
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
      "Aplicativo mobile, parte do meu TCC, que serve como uma plataforma para personal trainers gerenciarem seus alunos e fichas de treino. O projeto utiliza Firebase para autenticação e armazenamento de dados em tempo real, garantindo uma solução escalável e eficaz.",
    link_rep: "https://github.com/Brunogodoy2911/PersonalConnect",
    link_demo: "",
  },
  {
    imgs: [
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/Gerador%20Certificado%20Online/Certificados?updatedAt=1755145391412",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/Gerador%20Certificado%20Online/Novo%20Certificado?updatedAt=1755150012848",
      "https://ik.imagekit.io/brunogodoy/Cover%20Projects/Gerador%20Certificado%20Online/Certificado?updatedAt=1755145391791",
    ],
    title: "Gerador de Certificado Online",
    tecnologies: [
      {
        name: "Angular",
        img: AngularLogo,
      },
      {
        name: "TypeScript",
        img: TypeScriptLogo,
      },
      {
        name: "Bootstrap",
        img: BootStrapLogo,
      },
    ],
    description:
      "Esta aplicação Angular automatiza a criação de certificados personalizados, substituindo o processo manual demorado e propenso a erros. Com ela, é possível cadastrar, listar e baixar certificados em formato PNG de forma rápida, garantindo um resultado profissional e eficiente.",
    link_rep: "https://github.com/Brunogodoy2911/Gerador-Certificado-Online",
    link_demo: "https://geradocertificadoonline.netlify.app",
  },
];
