import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";
import Certificates from "@/components/Certificates";
import SkillLevels from "@/components/SkillLevels";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <SkillSet />
      <Certificates />
      <SkillLevels />
      <Blog />
      <Footer />
    </>
  );
}