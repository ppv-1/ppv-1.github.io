
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Components */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default App;
