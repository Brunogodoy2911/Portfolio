import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Button } from "./ui/button";

export function Hero() {
  const googleDriveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1C3GY3ILyNf_DgpxbOtJFsUcWp1ttqXnl";

  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center sm:items-start  justify-center gap-10 md:gap-12 lg:gap-32 mt-12 px-4 h-[41rem]"
    >
      <img
        src="https://ik.imagekit.io/brunogodoy/WhatsApp%20Image%202025-04-06%20at%2022.17.19.jpeg?updatedAt=1754336005577"
        alt="Imagem de Bruno Godoy"
        loading="lazy"
        className="object-cover w-[18rem] h-[21rem] md:w-[19.4rem] md:h-[22.3rem] rounded-2xl shrink-0"
      />

      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
        <span className="flex gap-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
            Bruno
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Henrique
          </h1>
        </span>

        <p className="text-2xl">Desenvolvedor Full Stack</p>

        <p className="max-w-md lg:max-w-lg">
          Da lógica de negócio à implementação final, eu construo software que
          resolve problemas, com foco em sistemas performáticos, manuteníveis e
          na qualidade do código.
        </p>

        <span className="flex gap-4 mt-3">
          <Button asChild>
            <a
              href={googleDriveDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
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
      </div>
    </div>
  );
}
