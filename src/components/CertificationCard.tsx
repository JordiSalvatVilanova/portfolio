// components/CertificationCard.tsx

interface CertificationCardProps {
  title: string;
  institution: string;
  date: string;
  description?: string;
}

const CertificationCard = ({
  title,
  institution,
  date,
  description,
}: CertificationCardProps) => {
  return (
    <div className="bg-white border-l-4 border-yellow-400 shadow-md rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{institution}</p>
      <p className="text-sm text-gray-500 mb-3 italic">{date}</p>
      {description && <p className="text-gray-700 text-sm">{description}</p>}
    </div>
  );
};

export default CertificationCard;
