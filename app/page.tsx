import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Training from "@/components/Training";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Reviews />
        <Training />
        <Gallery />
        <Locations />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
