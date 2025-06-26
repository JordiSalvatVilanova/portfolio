import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
