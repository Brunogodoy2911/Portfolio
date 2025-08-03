import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <nav>
      <h1>BG</h1>

      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Mudar tema</span>
        </Button>
      </ul>
    </nav>
  );
}
