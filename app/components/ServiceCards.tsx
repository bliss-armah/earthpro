import Image from "next/image";

interface ServiceCardsProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCards({
  image,
  title,
  description,
}: ServiceCardsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image src={image} alt={title} fill />
      </div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
