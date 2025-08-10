import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "sonner";
import { Footer } from "./components/Footer";
import { initGA } from "./utils/analytics";

export function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster richColors />
    </main>
  );
}
