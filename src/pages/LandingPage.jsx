import CTA1 from "../components/LandingComponents/Cta1";
import CTA2 from "../components/LandingComponents/Cta2";
import Hero from "../components/LandingComponents/Hero";
import HoverButton from "../components/LandingComponents/HoverButton";
import FeatureCards from "../components/LandingComponents/Features";
import Testimonial from "../components/LandingComponents/Testimonial";
import Contact from "../components/LandingComponents/Contact";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CTA1 />
      <HoverButton />
      <CTA2/>
      <FeatureCards/>
      <Testimonial/>
      <hr />
      <Contact/>
    </>
  );
}
