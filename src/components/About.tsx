import profileImg from '../assets/yo.jfif'; // substitueix per la teva imatge real

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
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
        <h1 className="text-4xl font-bold mb-2">Jordi Salvat</h1>
        <h2 className="text-xl text-gray-600 mb-4">Desarrollador de Software</h2>
        <p className="text-gray-700 mb-6 max-w-lg">
           
          <span className="font-semibold">Más de 2 años de experiencia en el sector TIC</span> y una grande pasión por aprender y mejorar continuamente, tanto dentro como fuera del horario laboral. Me destaco por ser una persona
          <span className="font-semibold"> empática, comunicativa y con gran capacidad para trabajar en equipo</span>, con experiencia en tecnologías clave utilizadas en el sector.
        </p>

        {/* Botons */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Contactar
          </a>
          <a
            href="/cv-ayman.pdf"
            download
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
