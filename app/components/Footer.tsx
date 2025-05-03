import Image from "next/image";
import { FaBox, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#14213D] flex flex-col justify-center items-center text-white py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-x-[152px] mb-[48px]">
        {/* Left Section: Logo */}
        <div className=" w-[100px] md:w-[191px] h-[90px] md:h-[181px] relative">
          <Image src="/footerlogo.svg" alt="EEC Logo" fill />
        </div>
        {/* Middle Section: Quick Links */}
        <div className="text-center">
          <h3 className="text-[24px] poppins-semibold mb-[31px]">
            Quick Links
          </h3>
          <ul className=" space-y-2">
            {footerOptions.map((tab) => (
              <li key={tab.id}>
                <a
                  key={tab.id}
                //   onClick={() => scrollToSection(tab.id)}
                  className={`cursor-pointer hover:text-yellow-400`}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Get in Touch */}
        <div className="text-center">
          <h3 className="text-[24px] poppins-semibold mb-[31px]">
            Get In Touch
          </h3>
          <ul className="mt-2 space-y-2 flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@eec.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBox />
              <span>Noble ventures, P.O.Box 45</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-[18px] poppins-regular">
        ©2024 by EarthPro Exploration Group. All rights reserved
      </div>
    </footer>
  );
};

const footerOptions = [
  { id: "about", name: "About us" },
  { id: "services", name: "Our Services" },
  { id: "contact", name: "Message us" },
];