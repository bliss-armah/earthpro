"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type RentalImageCardProps = {
  src: string;
  name: string;
};

export default function RentalImageCard({ src, name }: RentalImageCardProps) {
  const router = useRouter();

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
      onClick={() => router.push("/rentals")}
    >
      <Image
        src={src}
        alt={name}
        width={400}
        height={300}
        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-end">
        <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-white text-lg font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
}
