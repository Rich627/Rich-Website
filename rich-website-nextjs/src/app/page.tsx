import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Certificates from "@/components/Certificates";
import SkillSet from "@/components/SkillSet";
import SkillLevels from "@/components/SkillLevels";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Certificates />
      <SkillSet />
      <SkillLevels />
      <Experience />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}