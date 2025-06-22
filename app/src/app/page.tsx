import AboutSection from "./components/AboutSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ContactUsSection />
      </main>
      <FooterSection />
    </div>
  );
}
