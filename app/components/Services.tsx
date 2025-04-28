// import ServiceCards from "./ServiceCards";
import { poppins, volkhov } from "../fonts";

export default function Services() {
  return (
    <section id="services" className="px-[16px] md:px-0 mb-10 lg:mb-[126px]">
      <h1
        className={`text-[30px] md:text-[50px] text-[#14213D] ${volkhov.className} font-bold leading-[65.5px] md:mb-[47px] text-center`}
      >
        Services
      </h1>
      <ServiceCards />
    </section>
  );
}

const services = [
  {
    title: "Mineral Exploration",
    description:
      "Using advanced exploration techniques, we identify and assess valuable mineral deposits to unlock new opportunities for mining investments.",
    isActive: false,
  },
  {
    title: "Mine Planning & Development",
    description:
      "We offer strategic mine planning to maximise resource extraction, optimise operations, and ensure long-term profitability.",
    isActive: true,
  },
  {
    title: "Mining Process Plant Construction",
    description:
      "From design to commissioning, we build efficient and high-performance mineral processing plants tailored to industry needs.",
    isActive: false,
  },
];

export const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[29px]">
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-[300px] 2xl:w-[408px] 2xl:h-[241px] p-5 md:px-[41px] md:py-[36px] rounded-[24px] shadow-md transition-all duration-300 ${
            service.isActive
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border"
          }`}
        >
          <h2
            className={`md:text-lg ${
              poppins.className
            } font-bold mb-2 md:mb-[18px] ${
              service.isActive ? "text-white" : "text-[#14213D]"
            }`}
          >
            {service.title}
          </h2>
          <p className="text-sm md:text-base poppins-regular">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};
