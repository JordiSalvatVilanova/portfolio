import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'Perfil' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Formación' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certificaciones' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jordi Salvat</h1>

        {/* Botó menú hamburguesa */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú desktop */}
        <ul className="hidden lg:flex space-x-6">
  {navItems.map(item => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        className={
          item.id === 'contact'
            ? 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
            : 'text-gray-700 hover:text-blue-500 transition-colors'
        }
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

      </div>

      {/* Menú mòbil */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-white px-4 pb-4 space-y-2 shadow-md">
  {navItems.map(item => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        onClick={() => setIsOpen(false)}
        className={
          item.id === 'contact'
            ? 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
            : 'block text-gray-700 hover:text-blue-500 transition-colors'
        }
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

      )}
    </nav>
  );
};

export default Navbar;
