"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBox, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const tabs = [
  { id: "home", name: "Home" },
  { id: "about", name: "About us" },
  { id: "services", name: "Services" },
  { id: "contact", name: "Contact us" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const handleScroll = (id: string) => {
    setActiveTab(id);
    scrollToSection(id);
  };

  return (
    <div className="">
      <nav
        className={`w-full h-[90px] sm:px-[13px] md:px-[125px] flex justify-between items-center fixed top-0 z-10 bg-white `}
      >
        <Image src="/logo.svg" alt="logo" width={87.13} height={85} />
        <div className=" sm:hidden text-[18px] md:flex items-center gap-x-[65px] poppins-regular">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              onClick={() => handleScroll(tab.id)}
              className={`cursor-pointer ${
                activeTab === tab.id ? "poppins-bold text-[#FCBC11]" : ""
              }`}
            >
              {tab.name}
            </a>
          ))}
        </div>
        <div className=""></div>
      </nav>

      {/* hero page */}
      <div className="w-full  overflow-hidden relative bg-no-repeat bg-cover bg-[url('/hero.webp')] sm:bg-center md:bg-top text-center justify-center">
        <div className="w-full  bg-[#14213D]/50 pl-[129px] pt-[166px] pb-[326px] ">
          <div className="text-white sm:mt-[78px] md:mt-[120px]  md:text-start">
            <div className=" md:w-[681px] mb-6">
              <h1 className=" sm:text-[40px]  md:text-[70px]  poppins-bold leading-[83px] mb-4">
                Reliable Mining Solutions for a Sustainable Future
              </h1>
              <p className="md:text-[24px] poppins-mediem leading-[34.5px]">
                Experts in Mineral Exploration & Mining Process Plant
                Engineering
              </p>
            </div>
            <button
              className="sm:px-[20px] sm:py-[12px] sm:h-[40px] md:px-[40px] md:py-[14.5px] md:h-[56px] text-2xl poppins-bold bg-[#FCBC11] rounded-md"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* about us and service page */}
      <div
        id="about"
        className="flex flex-col items-center justify-center pt-[80px] px-[130px] pb-[143px]"
      >
        <div className="mb-[126px]">
          <h1 className="text-[50px] text-[#14213D] volkhov-bold leading-[65.5px] mb-[23px] text-center">
            About Us
          </h1>
          <p className="w-[1467px] poppins-regular text-[16px] text-[#343544] leading-[30px] mb-[48px]">
            Earthpro Exploration Group is a leading mineral exploration and
            process plant engineering...
          </p>
          <div className="w-[1467px] flex items-center justify-between">
            <div className="">
              <h1 className="text-[30px] text-[#14213D] volkhov-bold leading-[38.7px] mb-[25px]">
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
            <Image src="/aboutus.svg" alt="about us" width={699} height={309} />
          </div>
        </div>
        <div id="services" className="">
          <h1 className="text-[50px] text-[#14213D] volkhov-bold leading-[65.5px] mb-[47px] text-center">
            Services
          </h1>
          <ServiceCards />
        </div>
      </div>
      {/* Get in touch section */}
      <div
        id="contact"
        className="bg-[#14213D] flex flex-col items-center py-[76px] px-[318px] relatve"
      >
        <h1 className="text-[50px] text-white volkhov-bold leading-[65.5px] mb-[62px] text-center">
          Get in Touch
        </h1>

        <ContactForm />
      </div>

      {/* Client and partners */}
      <div className="flex flex-col items-center px-[290px] py-[100px] relatve">
        <h1 className="text-[50px] text-[#14213D] volkhov-bold leading-[65.5px] mb-[62px] text-center">
          Clients & Partners
        </h1>
        <div className="w-full flex items-center justify-center gap-x-[73px]">
          <div className="bg-[#F2F2F2] px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
            Company Logo 1
          </div>
          <div className="bg-[#F2F2F2] px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
            Company Logo 2
          </div>
          <div className="bg-[#F2F2F2] px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
            Company Logo 3
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const ChooseUsOptions = ({
  bgColor,
  count,
  title,
  description,
}: {
  bgColor: string;
  count: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-x-[27px]">
      <div
        className="w-[47px] h-[48px] rounded-[13px] flex items-center justify-center text-[19px] text-white poppins-semibold leading-[30px]"
        style={{ backgroundColor: bgColor }}
      >
        {count}
      </div>
      <div className="text-[#343544] poppins-regular text-[16px] leading-[30px]">
        <h1 className="poppins-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const chooseUsOptionsData = [
  {
    bgColor: "#f0bb1f",
    count: "1",
    title: "Industry Expertise",
    description: "Years of experience in delivering top-tier mining solutions.",
  },
  {
    bgColor: "#14213D",
    count: "2",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tools for precise mining operations.",
  },
  {
    bgColor: "#FE4411",
    count: "3",
    title: "Sustainable Practices",
    description: "Commitment to environmentally responsible mining.",
  },
];

const services = [
  {
    title: "Mining Process Plant Construction",
    description:
      "From design to commissioning, we build efficient and high-performance mineral processing plants tailored to industry needs.",
    isActive: false,
  },
  {
    title: "Mine Planning & Development",
    description:
      "We offer strategic mine planning to maximise resource extraction, optimise operations, and ensure long-term profitability.",
    isActive: true, // Active card (darker background)
  },
  {
    title: "Mineral Exploration",
    description:
      "Using advanced exploration techniques, we identify and assess valuable mineral deposits to unlock new opportunities for mining investments.",
    isActive: false,
  },
];

const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-[29px]">
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-[408px] h-[241px] px-[41px] py-[36px] rounded-[24px] shadow-md transition-all duration-300 ${
            service.isActive
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border"
          }`}
        >
          <h2
            className={`text-lg poppins-bold mb-[18px] ${
              service.isActive ? "text-white" : "text-[#14213D]"
            }`}
          >
            {service.title}
          </h2>
          <p className="poppins-regular">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#14213D]">
      {/* Left Section: Contact Details */}
      <div className="text-white space-y-6 p-6 w-[30%]">
        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex items-center justify-center rounded-full bg-[#FCBC11]">
            <FaMapMarkerAlt className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-sm">
              Location: Abuakwa , near baptist University
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex items-center justify-center rounded-full bg-[#FCBC11]">
            <FaPhoneAlt className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-sm"> +233543839253/+233242280826</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex items-center justify-center rounded-full bg-[#FCBC11]">
            <FaEnvelope className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm">info@ecc.com</p>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-lg">
        <h2 className="text-center text-xl poppins-bold text-[#14213D] mb-[41px]">
          Send a Message
        </h2>

        <form
          action="https://formspree.io/f/myzkrbky"
          method="POST"
          className="space-y-4"
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-style w-1/2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-style w-1/2"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-style w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input-style w-full"
          />
          <textarea
            name="message"
            placeholder="How Can We Help You"
            className="input-style w-full h-[147px]"
            required
          ></textarea>

          {/* Hidden field for spam filtering */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button
            type="submit"
            className="w-full bg-[#14213D] text-white py-3 rounded-[36px] capitalize font-semibold text-lg hover:bg-[#0f1a2b] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="w-full bg-[#14213D] flex flex-col justify-center items-center text-white py-8">
      <div className="flex items-start gap-x-[152px] mb-[48px]">
        {/* Left Section: Logo */}
        <div className="w-[191px] h-[181px] relative">
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
                  onClick={() => scrollToSection(tab.id)}
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
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@eec.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBox />
              <span>PO Box 456 gh</span>
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
