import { useProjectsAnimations } from "./hooks/useProjectsAnimations";
import { useVideoModal }          from "./hooks/useVideoModal";

import SectionHeader    from "./components/SectionHeader";
import ProjectsCarousel from "./components/ProjectsCarousel";
import VideoModal       from "./components/VideoModal";
import "./LatestProjects.css";

const LatestProjects = () => {
  // --- Hooks ---
  const { containerRef } = useProjectsAnimations();
  const { selectedProject, isVideoOpen, videoModalRef, videoRef, openVideo, closeVideo } = useVideoModal();

  // --- Render ---
  return (
    <section ref={containerRef} className="py-12 bg-[#0a0a0a] text-white overflow-hidden relative">

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader />
        <ProjectsCarousel onPlay={openVideo} />
      </div>

      {/* Video modal (conditional) */}
      {isVideoOpen && selectedProject && (
        <VideoModal
          project={selectedProject}
          videoModalRef={videoModalRef}
          videoRef={videoRef}
          onClose={closeVideo}
        />
      )}

    </section>
  );
};

export default LatestProjects;