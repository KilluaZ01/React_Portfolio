import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";

const App = () => {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] antialiased"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-[rgba(242,184,109,0.16)] blur-[120px]"></div>
        <div className="absolute right-[-10%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-[rgba(75,172,198,0.12)] blur-[120px]"></div>
        <div className="absolute bottom-[-12%] left-[28%] h-[26rem] w-[26rem] rounded-full bg-[rgba(255,140,90,0.12)] blur-[140px]"></div>
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:84px_84px]"></div>
      </div>
      <div className="mx-6 max-w-8xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="space-y-6 pb-10">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Certificate />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
