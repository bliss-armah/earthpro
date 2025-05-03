"use client";
import { poppins } from "../fonts";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  return (
    <section
    id="home"
    className="w-full overflow-hidden relative bg-no-repeat bg-cover bg-[url('/hero.webp')] bg-top md:bg-[url('/hero.webp')] md:bg-top text-center justify-center"
  >
    <div className="w-full h-[500px] md:h-[873px] bg-[#14213D]/50 items-center flex md:pl-[129px]">
      <div className="text-white sm:mt-[78px] md:text-start">
        <div className="md:w-[681px] mb-6 ">
          <h1 className={`text-[30px]  md:text-[70px]  ${poppins.className} font-bold md:leading-[83px] mb-4`}>
            Reliable Mining Solutions for a Sustainable Future
          </h1>
          <p className="text-[18px] md:text-[24px] poppins-medium md:leading-[34.5px]">
            Experts in Mineral Exploration & Mining Process Plant
            Engineering
          </p>
        </div>
        <button
          className="px-[20px] py-[12px] sm:h-[40px] md:px-[40px] md:py-[14.5px] md:h-[56px] text-2xl ${poppins.className} font-bold bg-[#FCBC11] rounded-md"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>
      </div>
    </div>
  </section>

  );
}
