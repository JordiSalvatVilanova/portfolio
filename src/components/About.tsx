import profileImg from '../assets/yo.jfif';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Imatge */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-center md:text-left">Jordi Salvat</h1>
          <h2 className="text-xl text-gray-600 mb-4 text-center md:text-left">
            Desarrollador de Software
          </h2>
          <p className="text-gray-700 mb-6 max-w-lg text-center md:text-left">
            <span className="font-semibold">Más de 2 años de experiencia en el sector TIC</span> y una gran pasión por aprender y mejorar continuamente, tanto dentro como fuera del horario laboral.
            Me destaco por ser una persona
            <span className="font-semibold"> empática, comunicativa y con gran capacidad para trabajar en equipo</span>, amb experiència en tecnologies clau utilitzades en el sector.
          </p>

          {/* Botons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Contactar
            </a>
            <a
              href="../../public/CV_Jordi_Salvat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
