import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import ProofBar from "./components/ProofBar";
import About from "./components/About";
import Experience from "./components/Experience";
import SelectedWork from "./components/SelectedWork";
import ProductThinking from "./components/ProductThinking";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProofBar />
        <About />
        <Experience />
        <SelectedWork />
        <ProductThinking />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
