import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PortfolioModal from "./PortfolioModal";
import SERVICES from "./constants";
import ServiceCard from "./ServiceCard";
import "./PortfolioModal.css";

export default function CreativeServices() {
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-strip", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <section
        ref={containerRef}
        className="h-screen min-h-[700px] bg-white flex flex-col md:flex-row overflow-hidden border-y border-gray-200"
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onOpen={(s) => setSelectedService(s)}
          />
        ))}
      </section>

      <PortfolioModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
