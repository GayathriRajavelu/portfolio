import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;