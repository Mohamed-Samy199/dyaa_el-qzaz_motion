import { useAboutAnimations } from "./hooks/useAboutAnimations";

import KineticBackground from "./components/KineticBackground";
import ScrollIndicator from "./components/ScrollIndicator";
import ProfileImage from "./components/ProfileImage";
import ManifestoCard from "./components/ManifestoCard";

const AboutMe = () => {
  // --- Hooks ---
  const { sectionRef, cardRef, textBgRef } = useAboutAnimations();

  // --- Render ---
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden py-24 px-6 md:px-12"
    >
      {/* Parallax kinetic text */}
      <KineticBackground textBgRef={textBgRef} />

      {/* HUD scroll indicator */}
      <ScrollIndicator />

      {/* Main content grid */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <ProfileImage />
          <ManifestoCard cardRef={cardRef} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;