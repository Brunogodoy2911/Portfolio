import { FormContact } from "./FormContact";

export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col w-full justify-center items-center bg-accent-foreground px-4 py-14"
    >
      <span className="flex flex-col gap-6 pb-8">
        <h1 className="text-background font-bold text-3xl text-center">
          Gostou do meu perfil? Vamos conversar sobre os próximos passos.
        </h1>
        <h2 className="text-background text-2xl text-center">
          Estou a um e-mail de distância para discutirmos uma nova oportunidade.
        </h2>
      </span>

      <FormContact />
    </div>
  );
}
