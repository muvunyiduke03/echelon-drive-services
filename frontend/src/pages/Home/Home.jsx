import CTA from "../../components/CTA/CTA";
import Hero from "./Hero";
import ServicesPreview from "./ServicesPreview";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function Home(){
  return(
    <>
      <Hero/>
      <ServicesPreview/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
    </>
  )
}

export default Home;