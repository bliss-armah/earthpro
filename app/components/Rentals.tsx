'use client';
import { volkhov } from "../fonts";
import { images } from "../utils/constants";
import RentalImageCard from "./RentalImageCard";

export default function Rentals() {


  return (
    <section id="services" className="px-4 md:px-0 mb-10 lg:mb-[126px]">
      <h1
        className={`text-[30px] md:text-[50px] text-[#14213D] ${volkhov.className} font-bold leading-[65.5px] mb-8 md:mb-[47px] text-center`}
      >
        Equipment Rentals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.slice(0, 3).map((img) => (
          <RentalImageCard key={img.name} name={img.name} src={img.src} />
        ))}
      </div>
    </section>
  );
}
