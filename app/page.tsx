"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBox, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

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

  const [show, setShow] = useState(false);
  const toggleShowNavbarMenu = () => {
    setShow(!show);
  };

  return (
    <div className="">
      {show && (
        <div>
          <div className="w-full h-full absolute top-0 left-0 z-50 bg-white py-5 px-[22px] shadow-lg">
            <div
              className={`w-full flex justify-end mb-[10px]`}
              onClick={toggleShowNavbarMenu}
            >
              <IoMdClose color={"#000000"} size={24} />
            </div>
            <ul className="w-full flex flex-col gap-y-4 px-[13px]">

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
            </ul>
          </div>
        </div>
      )}
      <nav
        id="home"
        className={`w-full h-[90px] px-[13px] lg:px-[125px] flex justify-between items-center fixed top-0 z-10 bg-white `}
      >
        <div className="w-[70.13px] h-[52px] md:w-[87.13px] md:h-[85px] relative">
          <Image src="/logo.svg" alt="logo" fill />
        </div>
        <div className=" text-[18px] hidden md:flex items-center md:gap-x-8 lg:gap-x-[65px] poppins-regular">
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
        <div className={"md:hidden"} onClick={toggleShowNavbarMenu}>
          <TiThMenu size={30} />
        </div>
        <div className="hidden lg:block"></div>
      </nav>

      {/* hero page */}
      <div className="w-full overflow-hidden relative bg-no-repeat bg-cover bg-[url('/hero.webp')] md:bg-top text-center justify-center lg:mb-[80px]">
        <div className="w-full h-[500px] md:h-[873px] bg-[#14213D]/50 items-center flex md:pl-[129px]">
          <div className="text-white sm:mt-[78px] md:text-start">
            <div className="md:w-[681px] mb-6 ">
              <h1 className="text-[30px]  md:text-[70px]  poppins-bold md:leading-[83px] mb-4">
                Reliable Mining Solutions for a Sustainable Future
              </h1>
              <p className="text-[18px] md:text-[24px] poppins-medium md:leading-[34.5px]">
                Experts in Mineral Exploration & Mining Process Plant
                Engineering
              </p>
            </div>
            <button
              className="px-[20px] py-[12px] sm:h-[40px] md:px-[40px] md:py-[14.5px] md:h-[56px] text-2xl poppins-bold bg-[#FCBC11] rounded-md"
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
        className="flex flex-col items-center justify-center py-8 px-[13px] lg:px-[130px] lg:pb-[143px] lg:h-[1207px] lg:mb-[80px]"
      >
        <div className="mb-6 lg:mb-[126px]">
          <h1 className="text-[30px] lg:text-[50px] text-[#14213D] volkhov-bold lg:leading-[65.5px] mb-8 md:mb-[23px] text-center">
            About Us
          </h1>
          <p className="w-full  poppins-regular text-[16px] text-center text-[#343544] md:leading-[30px] mb-8 md:mb-[48px]">
            Earthpro exploration and construction is a leading exploration and
            mine process plant construction company dedicated to unlocking the
            potential of mineral resources with expertise in mineral exploration
            , strategic mine planning and mine process plant development , we
            provide end to end solutions that drive efficiency , sustainability
            and long term success in the mining sector.
          </p>
          <div className=" flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full ">
              <h1 className="text-[30px] text-center lg:text-start text-[#14213D] volkhov-bold leading-[38.7px] mb-8 lg:mb-[25px]">
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
        </div>
        <div id="services" className="px-[16px] md:px-0 mb-10 lg:mb-0">
          <h1 className="text-[30px] md:text-[50px] text-[#14213D] volkhov-bold leading-[65.5px] mb-8 md:mb-[47px] text-center">
            Services
          </h1>
          <ServiceCards />
        </div>
      </div>

      {/* Get in touch section */}
      <div
        id="contact"
        className="bg-[#14213D] flex flex-col items-center px-[13px] py-8 md:py-[40px] lg:py-[76px] lg:px-[318px] relatve"
      >
        <h1 className="text-[30px] lg:text-[50px] text-white volkhov-bold lg:leading-[65.5px] mb-[20px] lg:mb-[62px] text-center">
          Get in Touch
        </h1>

        <ContactForm />
      </div>

      {/* Client and partners */}
      <div className="flex flex-col items-center px-[13px] lg:px-[290px] py-8 md:py-10 lg:py-[100px] relatve">
        <h1 className="w-full text-[30px] md:text-[50px] text-[#14213D] volkhov-bold lg:leading-[65.5px] mb-[62px] text-center">
          Clients & Partners
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[73px]">
          <div className="bg-[#F2F2F2] px-[45px] lg:px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
            Company Logo 1
          </div>
          <div className="bg-[#F2F2F2] px-[45px] lg:px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
            Company Logo 2
          </div>
          <div className="bg-[#F2F2F2] px-[45px] lg:px-[70px] py-[26px] text-[#000000] poppins-regular text-[23px] leading-[34.5px]">
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
            className={`md:text-lg poppins-bold mb-2 md:mb-[18px] ${
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

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-[#14213D]">
      {/* Left Section: Contact Details */}
      <div className="text-white space-y-6 p-6 md:grid md:grid-cols-2 gap-5 lg:block 2xl:w-[30%]">
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
          <div className="h-[35px] w-[35px] flex  items-center justify-center rounded-full bg-[#FCBC11]">
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
      <div className="bg-white rounded-xl p-8 shadow-lg  lg:max-w-lg">
        <h2 className="text-center text-xl poppins-bold text-[#14213D] mb-[41px]">
          Send a Message
        </h2>

        <form
          action="https://formspree.io/f/myzkrbky"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="lg:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="lg:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <textarea
            name="message"
            placeholder="How Can We Help You"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[147px]"
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
      <div className="flex flex-col md:flex-row items-start gap-x-[152px] mb-[48px]">
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
