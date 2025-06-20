import AboutSection from "./components/AboutSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      
      <Navbar />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactUsSection />
      </main>
      <FooterSection />
    </div>
  );
}
