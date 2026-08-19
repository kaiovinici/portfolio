import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Credentials } from "@/sections/credentials";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Lab } from "@/sections/lab";
import { Projects } from "@/sections/projects";
import { Stack } from "@/sections/stack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Lab />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
