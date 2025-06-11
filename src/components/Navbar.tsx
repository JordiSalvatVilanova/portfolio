const Navbar = () => {
  const navItems = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia laboral' },
    { id: 'education', label: 'Experiencia académica' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jordi Salvat</h1>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
