"use client";
import { redirect } from 'next/navigation'
import { volkhov } from "../fonts";
import { ServiceCards } from "./Services";

export default function Rentals() {
  return (
    <section id="services" className="px-[16px] md:px-0 mb-10 lg:mb-[126px]">
      <h1
        className={`text-[30px] md:text-[50px] text-[#14213D] ${volkhov.className} font-bold leading-[65.5px] md:mb-[47px] text-center`}
      >
        Equipment Rentals
      </h1>
      <div className="" onClick={() => redirect('/rentals')}>

      <ServiceCards />
      </div>
    </section>
  );
}
