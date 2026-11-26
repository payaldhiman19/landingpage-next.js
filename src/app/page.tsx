import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Problemsolution from "./sections/Problemsolution"
import ProductVideo from "./sections/ProductVideo";
import WhyChoose from "./sections/WhyChooseUs";
import HowItWorks from "./sections/HowItWorks";
import Reviews from "./sections/Reviews";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
export default function Home() {
  return (
    <main>
    <Hero />
    <Features />
    <Problemsolution />
    <ProductVideo />
    <WhyChoose />
    <HowItWorks />
    <Reviews/>
    <Contact/>
    <FAQ />
    </main>
  );
}
