import { Settings2 } from 'lucide-react';


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Settings2 className="text-green-500 w-10 h-10" />
          <h2 className="text-4xl font-bold text-green-500">Habilidades Técnicas</h2>
        </div>


        <div className="grid md:grid-cols-2 gap-10">
          {/* Lenguajes */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              Lenguajes
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'ABAP', 'SQL', 'HTML', 'CSS', 'XML', 'XPATH'].map((lang, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              Frameworks & Bibliotecas
            </h3>
            <div className="flex flex-wrap gap-4">
              {['React', 'Vite', 'React Native', 'Node.js', 'jQuery', 'Bootstrap', 'Tailwind CSS'].map((fw, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Bases de datos */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              Bases de Datos
            </h3>
            <div className="flex flex-wrap gap-4">
              {['PostgreSQL', 'Oracle APEX', 'PhpMyAdmin', 'MySQL Workbench'].map((db, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {db}
                </span>
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              Herramientas de Desarrollo
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Git', 'GitHub', 'Docker', 'Postman', 'VirtualBox'].map((tool, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* IDEs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              IDEs y Editores
            </h3>
            <div className="flex flex-wrap gap-4">
              {['VS Code', 'Eclipse', 'PHPStorm', 'NetBeans', 'Notepad++'].map((ide, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {ide}
                </span>
              ))}
            </div>
          </div>

          {/* Plataformas */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
              Plataformas y Entornos
            </h3>
            <div className="flex flex-wrap gap-4">
              {['SAP', 'Linux', 'Windows', 'Azure'].map((env, i) => (
                <span key={i} className=" text-green-700 text-sm px-3 py-1 rounded-full border border-green-200">
                  {env}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
