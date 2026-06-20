import { X } from "lucide-react";
import { SHOWREEL_VIDEO_URL } from "../constants";

const VideoModal = ({ videoModalRef, videoRef, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl">
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Video Container */}
      <div
        ref={videoModalRef}
        className="relative w-[90%] max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-black"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10001] p-3 bg-black/50 hover:bg-red-500 rounded-full text-white transition-all"
        >
          <X size={24} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={SHOWREEL_VIDEO_URL} type="video/webm" />
          <source src={SHOWREEL_VIDEO_URL.replace(".webm", ".mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Info Badge */}
        <div className="absolute top-4 left-4 z-30 bg-purple-600/80 px-4 py-2 rounded-lg text-white text-xs font-mono">
          DYAA SHOWREEL • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;