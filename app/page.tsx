import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1180px] px-6 pb-10 md:px-14">
      <Hero />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
