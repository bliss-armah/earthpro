import Navbar from "../components/Navbar";
import RentalCard from "../components/RentalCard";
import { volkhov } from "../fonts";
import { images } from "../utils/constants";

export default function RentalsPage() {
  return (
    <div>
      <Navbar />

      <section className="px-[16px] md:px-0 mb-10 lg:mb-[50px] mt-[100px]">
        <h1
          className={`text-[30px] lg:text-[50px] text-[#14213D] ${volkhov.className} font-bold lg:leading-[65.5px] mb-4 md:mb-[23px] text-center`}
        >
          Reliable Equipment Rentals
        </h1>
        <p className="text-lg md:text-xl text-center poppins-regular text-[#343544] md:leading-[30px] max-w-3xl mx-auto">
          Discover our wide selection of modern and reliable construction
          equipment available for rent. Whether you’re managing a large project
          or need tools for a weekend job, we’ve got you covered.
        </p>
      </section>

      <section className="px-4 md:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <RentalCard key={index} name={item.name} src={item.src} />
          ))}
        </div>
      </section>
    </div>
  );
}
