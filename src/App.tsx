import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "sonner";
import { Footer } from "./components/Footer";
import { initGA } from "./utils/analytics";
import { ScrollAnimation } from "./components/ScrollAnimation";
import { Anchor } from "./components/Anchor";

export function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <main>
      <Navbar />

      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      <ScrollAnimation>
        <Projects />
      </ScrollAnimation>

      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>

      <Footer />

      <Anchor />

      <Toaster richColors />
    </main>
  );
}
