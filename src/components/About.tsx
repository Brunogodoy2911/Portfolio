import { Card } from "./ui/card";

export function About() {
  return (
    <div
      id="about"
      className="flex w-full flex-col items-center gap-8 px-4 py-16 text-center md:py-12"
    >
      <h1 className="text-3xl font-bold sm:text-4xl">Sobre Mim</h1>

      <Card className="flex max-w-5xl flex-col items-center gap-5 p-6 text-center md:p-8 md:text-left">
        <p className="text-lg ">
          Desenvolvedor Full-Stack apaixonado por transformar problemas em
          soluções digitais eficientes. Minha jornada na programação foi
          impulsionada pela curiosidade, e hoje possuo experiência prática no
          desenvolvimento de aplicações do zero, utilizando tecnologias como
          React Native e Firebase.
        </p>
        <p className="text-lg">
          Com habilidades em React, Angular, Java e Spring Boot, adquiridas em
          bootcamps e na graduação em Análise e Desenvolvimento de Sistemas,
          tenho uma base sólida tanto no front-end quanto no back-end.
        </p>
        <p className="text-lg">
          Sou um profissional proativo, com forte espírito de equipe e pronto
          para minha primeira oportunidade no mercado, buscando ativamente um
          ambiente onde eu possa aprender, colaborar e crescer.
        </p>
      </Card>
    </div>
  );
}
