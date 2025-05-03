"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type RentalCardProps = {
  name: string;
  src: string;
};

export default function RentalCard({ name, src }: RentalCardProps) {
  const router = useRouter();

  return (
    <div className="bg-[#fff6de] rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        <h2 className="text-[#14213D] text-lg font-bold mb-2">{name}</h2>
        <div className="w-full h-48 bg-white rounded-md flex items-center justify-center overflow-hidden">
          <Image
            src={src}
            alt={name}
            width={200}
            height={150}
            className="object-contain max-h-full"
          />
        </div>
      </div>
      <button
        onClick={() => {
          router.push("/#contact");
        }}
        className="mt-4 bg-[#3e3621] text-white text-sm font-semibold py-2 rounded-md hover:bg-[#605334] transition"
      >
        Make enquiries
      </button>
    </div>
  );
}
