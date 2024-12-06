import { useEffect } from "react";

import CTA1 from "../components/LandingComponents/Cta1";
import CTA2 from "../components/LandingComponents/Cta2";
import Hero from "../components/LandingComponents/Hero";
import HoverButton from "../components/LandingComponents/HoverButton";
import FeatureCards from "../components/LandingComponents/Features";
import Contact from "../components/LandingComponents/Contact";
import axios from "axios";

export default function LandingPage() {

  useEffect(() => {
    
    axios.get('http://localhost:3000')
         .then((response) => {
          console.log(response.data);
         })
         .catch((e) => {
          console.log('Error fetching data', e)
         })
  }, []);

  return (
    <>
      <Hero />
      <CTA1 />
      <HoverButton />
      <CTA2/>
      <FeatureCards/>
      <hr />
      <Contact/>
    </>
  );
}
