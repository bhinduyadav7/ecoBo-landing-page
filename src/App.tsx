import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {  
    const [loading, setLoading] = useState(true);



     // Loading screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);


// Progress bar animation
  useEffect(() => {
    gsap.to(".progress-bar", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);


   


   // Show loader first
  if (loading) {
   return <Loader />;
  }


  return (
    <>
  <Navbar />
    <div className="progress-bar"></div>
    <div className="cursor"></div>
     {/* Background Blobs */}
    <div className="bg-circle1"></div>
    <div className="bg-circle2"></div>
     
      <Hero />
      <Features />
      <Story />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;