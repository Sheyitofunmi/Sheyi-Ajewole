import "./App.css";
import About from "./components/About";
import Bot from "./components/Bot";
import Box from "./components/Box";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Bot />
      <Hero />
      <div className="side1 bg-[#ffeed9] relative "></div>
      <About />
      <div className="side2 bg-[#eeb4aa] relative "></div>
      <Skills />

      <div className="side3 bg-[#7689d8] relative"></div>
      <Projects />
      <div className="side4 bg-[#a1eacd] relative"></div>
      {/* <Testimonials /> */}
      <div className="side5 bg-[#fef2d8]"></div>
      <Contact />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
