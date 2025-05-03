import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Rentals from "./components/Rentals";
import GetInTouch from "./components/GetInTouch";
import ClientsPartners from "./components/ClientsPartners";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div
        className="flex flex-col items-center justify-center px-[13px] lg:px-[130px] mt-[80px]"
      >
        <About />
        <Services />
        <Rentals />
      </div>
      <GetInTouch />
      <ClientsPartners />
      <Footer />
    </main>
  );
}
