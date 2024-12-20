import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  );
}
