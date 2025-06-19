import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="h-max w-full flex flex-col justify-start items-center">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}
