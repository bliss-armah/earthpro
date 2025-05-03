"use client";

import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import { scrollToSection } from "../utils/scrollToSection";
import MobileMenu from "./MobileMenu";
import { redirect, useRouter } from "next/navigation";
import { poppins } from "../fonts";

const tabs = [
  { id: "home", name: "Home" },
  { id: "about", name: "About us" },
  { id: "services", name: "Services" },
  { id: "rentals", name: "Rentals" },
  { id: "contact", name: "Contact us" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("activeTab") || "home";
    }
    return "home";
  });

  const updateActiveTab = (id: string) => {
    setActiveTab(id);
    sessionStorage.setItem("activeTab", id);
  };

  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleScroll = (id: string) => {
    updateActiveTab(id);
    scrollToSection(id);
    if (showMenu) setShowMenu(false);
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {showMenu && (
        <MobileMenu
          tabs={tabs}
          activeTab={activeTab}
          handleScroll={handleScroll}
          toggleMenu={toggleMenu}
        />
      )}

      <nav className="w-full h-[90px] px-[13px] lg:px-[125px] flex justify-between items-center fixed top-0 z-10 bg-white">
        <div className="w-[70.13px] h-[52px] md:w-[87.13px] md:h-[85px] relative">
          <Image
            src="/logo.svg"
            alt="logo"
            fill
            onClick={() => redirect("/")}
          />
        </div>

        <div className=" text-[18px] hidden md:flex items-center md:gap-x-8 lg:gap-x-[65px] poppins-regular">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              onClick={() => {
                if (tab.id === "rentals") {
                  router.push("/rentals");
                  updateActiveTab(tab.id);
                } else {
                  handleScroll(tab.id);
                  router.push(`/#${tab.id}`);
                }
              }}
              className={`cursor-pointer ${
                activeTab === tab.id
                  ? `${poppins.className} font-bold text-[#FCBC11]`
                  : ""
              }`}
            >
              {tab.name}
            </a>
          ))}
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <TiThMenu size={30} />
        </div>
        <div className="hidden lg:block"></div>
      </nav>
    </>
  );
}
