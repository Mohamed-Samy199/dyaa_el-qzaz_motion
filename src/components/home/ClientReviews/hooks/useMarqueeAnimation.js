import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useMarqueeAnimation = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite horizontal marquee
      animationRef.current = gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });

      // Pause on card hover, resume on leave
      const cards = document.querySelectorAll(".testimonial-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => animationRef.current?.pause());
        card.addEventListener("mouseleave", () => animationRef.current?.play());
      });
    });

    return () => {
      ctx.revert();
      animationRef.current?.kill();
    };
  }, []);
};