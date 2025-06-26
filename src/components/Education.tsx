import { GraduationCap } from 'lucide-react';

const Education = () => {
  const studies = [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      school: 'Institut Baix Camp, Reus',
      date: '2021 – 2023',
      description: [
        'Grado Superior de 2 años orientado a programación web.',
        'Frontend, backend, diseño responsivo, bases de datos, despliegue y seguridad.',
        'Tecnologías aprendidas: JavaScript, PHP, SQL, HTML/CSS, etc.',
      ],
      techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git'],
    },
    {
      title: 'Bootcamp Full Stack Java Spring + React',
      school: 'Fundación Esplai, Tecnoparc Reus',
      date: 'Febrero 2025 – Julio 2025 (en curso)',
      description: [
        '576h de formación intensiva full stack.',
        'Backend con Java Spring + MySQL, frontend con React + Vite.',
        'Formación adicional en Git, Azure, APIs RESTful, Tailwind y TypeScript.',
      ],
      techs: ['Java', 'Spring', 'React', 'TypeScript', 'Tailwind', 'Azure'],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-10 gap-4">
          <GraduationCap className="text-blue-500 w-10 h-10" />
          <h2 className="text-4xl font-bold text-blue-600">Experiencia Académica</h2>
        </div>

        <div className="space-y-10">
          {studies.map((study, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 border-l-4 border-blue-400"
            >
              <h3 className="text-2xl font-bold">{study.title}</h3>
              <p className="text-sm text-gray-700">{study.school}</p>
              <p className="text-sm text-gray-600 mb-4">{study.date}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800 mb-4">
                {study.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {study.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-300"
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

export default Education;
