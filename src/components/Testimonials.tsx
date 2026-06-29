import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const reviews = [
    {
      text: "Best bottle I've ever owned.",
      name: "Sarah M.",
    },
    {
      text: "Beautiful and sustainable.",
      name: "John D.",
    },
    {
      text: "Looks premium and keeps water cold.",
      name: "Emma K.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial.card", {
        scrollTrigger: {
          trigger: ".testimonial.cards",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
    //id="testimonials"
    id="reviews"
    className="testimonials">
      <h1>What People Say</h1>

      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>{review.text}</p>
            <span>{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}