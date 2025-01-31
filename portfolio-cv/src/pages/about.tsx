import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
