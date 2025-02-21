import Contributions from "@/components/contributions";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contributions/>
      <Footer/>
    </main>
  );
}
