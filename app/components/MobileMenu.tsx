import { IoMdClose } from 'react-icons/io';
import { poppins } from '../fonts';
import { useRouter } from 'next/navigation';

interface MobileMenuProps {
  tabs: { id: string; name: string }[];
  activeTab: string;
  handleScroll: (id: string) => void;
  toggleMenu: () => void;
  updateActiveTab: (id: string) => void;
}

export default function MobileMenu({ tabs, activeTab, handleScroll, toggleMenu,updateActiveTab }: MobileMenuProps) {
    const router = useRouter();
  
  return (
    <div className="fixed inset-0 bg-white z-50 p-5">
      <div className="flex justify-end" onClick={toggleMenu}>
        <IoMdClose size={24} />
      </div>
      <ul className="flex flex-col gap-6 mt-10">
        {tabs.map((tab) => (
          <li
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
            className={`text-2xl cursor-pointer ${activeTab === tab.id ? `${poppins.className} font-bold text-[#FCBC11]` : ''}`}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
