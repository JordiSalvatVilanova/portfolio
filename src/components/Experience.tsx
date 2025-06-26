import { Briefcase } from 'lucide-react';

const Experience = () => {
  const jobs = [
    {
      title: 'Programador Junior SAP ABAP',
      company: 'Viewnext (IBM), Reus',
      date: 'Enero 2024 – Enero 2025',
      tasks: [
        'Participación en el proyecto de gestión de expedientes fiscales (eSPRIU) para CTTI.',
        'Desarrollo y mantenimiento en ABAP usando module pools, dynpros y POO.',
        'Elaboración de documentación técnica y gestión de órdenes de transporte.',
        'Adición de campos a plantillas existentes.',
      ],
      techs: ['SAP', 'ABAP', 'Dynpros', 'POO'],
    },
    {
      title: 'Desarrollador de Aplicaciones Web',
      company: 'DOIT Sistemas Multisensoriales SL, Reus',
      date: 'Junio 2023 – Noviembre 2023',
      tasks: [
        'Desarrollo de minijuegos accesibles para personas con daño cerebral.',
        'Minijuego de vestir personajes paso a paso.',
        'Ahorcado temático con silueta de oficios.',
        'Wordle adaptado al cliente.',
      ],
      techs: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-10 gap-4">
          <Briefcase className="text-orange-500 w-10 h-10" />
          <h2 className="text-4xl font-bold text-orange-600">Experiencia Laboral</h2>
        </div>

        <div className="space-y-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400"
            >
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500 mb-4">{job.date}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-orange-50 text-orange-700 text-sm px-3 py-1 rounded-full border border-orange-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
