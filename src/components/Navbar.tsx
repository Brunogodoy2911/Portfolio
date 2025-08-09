import { navLinks } from "@/utils/navLinks";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "./ui/sheet";
import { Sun, Moon, List } from "phosphor-react";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex justify-between md:justify-around items-center px-6 md:px-12 py-8">
      <a
        href="#home"
        style={{ fontFamily: "Great Vibes" }}
        className="font-display text-4xl text-primary"
      >
        BG
      </a>

      <ul className="hidden md:flex justify-center items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="transition-colors hover:text-primary cursor-pointer"
            >
              {link.title}
            </a>
          </li>
        ))}
        <li>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Mudar tema"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </li>
      </ul>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir menu">
              <List size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="pl-5 pt-5 text-left text-xl">
              Menu
            </SheetTitle>
            <nav className="flex flex-col gap-8 text-center mt-16">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.title}>
                  <a
                    href={link.href}
                    className="text-xl transition-colors hover:text-primary"
                  >
                    {link.title}
                  </a>
                </SheetClose>
              ))}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Mudar tema"
                >
                  <Sun className="h-[1.5rem] w-[1.5rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
                  <Moon className="absolute h-[1.5rem] w-[1.5rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
