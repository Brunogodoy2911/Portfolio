import { Button } from "./ui/button";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-8 py-8">
      <span className="flex justify-center items-center gap-4">
        <Button size="icon" variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/brunogodoydev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinLogo className="size-7" />
          </a>
        </Button>
        <Button size="icon" variant="outline" asChild>
          <a
            href="https://github.com/Brunogodoy2911"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GithubLogo className="size-7" />
          </a>
        </Button>
      </span>

      <p className="text-lg text-center">
        © {currentYear} Bruno Godoy. Todos os direitos reservados.
      </p>
    </footer>
  );
}
