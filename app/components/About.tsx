import Image from "next/image";
import ChooseUsOptions from "./ChooseUsOptions";
import { volkhov } from "../fonts";

const chooseUsOptionsData = [
  {
    bgColor: "#f0bb1f",
    count: "1",
    title: "Industry Expertise",
    description:
      "Years of experience in delivering top tier exploration and mining solutions.",
  },
  {
    bgColor: "#14213D",
    count: "2",
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest tools for precise target generation in mining operations.",
  },
  {
    bgColor: "#FE4411",
    count: "3",
    title: "Sustainable Practices",
    description: "Commitment to environmentally responsible mining.",
  },
];

export default function About() {
  return (
    <section id="about" className="mb-6 lg:mb-[126px]">
      <h1
        className={`text-[30px] lg:text-[50px] text-[#14213D] ${volkhov.className} font-bold lg:leading-[65.5px] mb-4 md:mb-[23px] text-center`}
      >
        About Us
      </h1>
      <p className="w-full text-center md:text-left  poppins-regular text-[16px] text-[#343544] md:leading-[30px] mb-8 md:mb-[48px]">
        Earthpro exploration and construction is a leading exploration and mine
        process plant construction company dedicated to unlocking the potential
        of mineral resources with expertise in mineral exploration, strategic
        mine planning and mine process plant development. We provide end-to-end
        solutions that drive efficiency, sustainability and long term success in
        the mining sector.
      </p>
      <div className=" flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full ">
          <h1
            className={`text-[30px] text-center lg:text-start text-[#14213D] ${volkhov.className} font-bold leading-[38.7px] mb-8 lg:mb-[25px]`}
          >
            Why Choose Us?
          </h1>
          {chooseUsOptionsData.map((item, index) => (
            <div key={index} className="mb-[25px]">
              <ChooseUsOptions
                bgColor={item.bgColor}
                count={item.count}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg-w-[699px] h-[200px] lg-h-[309px] relative">
          <Image src="/aboutus.svg" alt="about us" fill />
        </div>
      </div>
    </section>
  );
}
