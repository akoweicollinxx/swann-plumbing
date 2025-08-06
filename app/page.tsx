import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Services/>
      <GallerySection/>
      <TestimonialsSection/>
      <FAQSection/>
    </>
  );
}
