import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".story-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        ".story-para",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      className="story-section"
      style={{
        minHeight: "100vh",
        background: "#143d2b",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "50px",
      }}
    >
      <h1
        className="story-title"
        style={{
          fontSize: "5rem",
          marginBottom: "40px",
          textAlign: "center",
          opacity: 1,
        }}
      >
        Every Sip Matters
      </h1>

      <p
        className="story-para"
        style={{
          fontSize: "1.5rem",
          width: "60%",
          textAlign: "center",
          lineHeight: "1.8",
          opacity: 1,
        }}
      >
        Our bottles are designed to reduce plastic waste and inspire a
        more sustainable future.
      </p>
    </section>
  );
}