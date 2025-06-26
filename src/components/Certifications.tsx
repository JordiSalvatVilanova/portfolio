import CertificationCard from '../components/CertificationCard';
import { BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Máster VIEWNEXRT en ABAP IV',
      institution: 'Viewnext',
      date: 'Dic 2023',
      description: 'Formación profesional interna sobre desarrollo con ABAP y SAP.',
    },
    {
      title: 'Bootcamp Full Stack Java Spring + React + MySQL + SoftSkills',
      institution: 'Fundación Esplai – Tecnoparc Reus',
      date: 'Feb 2025 – Jul 2025',
      description: '576h de formación full stack en backend Java + frontend React.',
    },
    {
      title: 'Azure Fundamentals',
      institution: 'Microsoft',
      date: 'Jun 2025',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:justify-center">
          <BadgeCheck className="text-yellow-500 w-8 h-8" />
          <h2 className="text-4xl font-bold text-yellow-600">Certificaciones</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <CertificationCard key={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
