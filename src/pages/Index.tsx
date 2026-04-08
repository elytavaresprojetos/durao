import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import UsefulLinks from "@/components/UsefulLinks";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroCarousel />
      <Services />
      <Testimonials />
      <UsefulLinks />
      <CtaBanner />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
