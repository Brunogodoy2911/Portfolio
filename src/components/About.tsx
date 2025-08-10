import { Card } from "./ui/card";

export function About() {
  return (
    <div
      id="about"
      className="flex w-full flex-col items-center gap-12 px-4 py-16 text-center md:py-20"
    >
      <h1 className="text-3xl font-bold sm:text-4xl">Sobre Mim</h1>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="flex flex-col overflow-hidden text-left transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
            alt="Close-up de um monitor exibindo código-fonte de uma aplicação web."
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 p-6">
            <h3 className="text-2xl font-bold text-primary">Formação e Foco</h3>
            <p className="text-lg">
              Graduando em Análise e Desenvolvimento de Sistemas e com formação
              técnica prévia, minha paixão é a construção de soluções de ponta a
              ponta. Minha especialização como Desenvolvedor Full-Stack (React &
              Java) foi consolidada no bootcamp intensivo da Generation Brasil.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col overflow-hidden text-left transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Equipe de desenvolvimento colaborando em um projeto, com post-its e anotações em uma parede de vidro."
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 p-6">
            <h3 className="text-2xl font-bold text-primary">
              Perfil Profissional
            </h3>
            <p className="text-lg">
              Um profissional movido pela disciplina e proatividade, com grande
              capacidade de aprender e aplicar novas tecnologias de forma ágil.
              Gosto de compartilhar conhecimento, auxiliando colegas e
              colaborando para o crescimento da equipe e o sucesso dos projetos.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col overflow-hidden text-left transition-transform duration-300 hover:scale-105">
          <img
            src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZWxpZ2VuY2lhJTIwYXJ0aWZpY2lhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Ilustração de um braço robótico e uma mão humana se tocando, simbolizando a união entre tecnologia e humanidade."
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 p-6">
            <h3 className="text-2xl font-bold text-primary">
              Interesses Futuros
            </h3>
            <p className="text-lg">
              Meu próximo objetivo é aprofundar meus estudos em Inteligência
              Artificial e Análise de Dados com Python, buscando uma
              especialização na área para transformar dados em soluções
              inteligentes.
            </p>
          </div>
        </Card>

        <Card className="flex flex-col overflow-hidden text-left transition-transform duration-300 hover:scale-105">
          <img
            src="https://ik.imagekit.io/brunogodoy/st-augustine-1024x576.jpeg?updatedAt=1754794323677"
            alt="Santino Agostinho, um dos maiores teólogos da história da Igreja Católica."
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 p-6">
            <h3 className="text-2xl font-bold text-primary">
              Interesses Pessoais
            </h3>
            <p className="text-lg">
              Fora do universo da programação, dedico meu tempo ao estudo e à
              apreciação da teologia e da história da Igreja Católica.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
