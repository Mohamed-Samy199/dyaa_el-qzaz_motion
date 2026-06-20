import SkillsGrid from "./SkillsGrid";

const ManifestoCard = ({ cardRef }) => {
  return (
    <div className="lg:col-span-8">
      <div
        ref={cardRef}
        className="relative bg-white/[0.01] border border-white/5 p-10 md:p-14 rounded-2xl backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.05)] transform-style-3d will-change-transform group hover:border-purple-500/20 transition-colors duration-500"
      >
        {/* Decorative background text */}
        <div className="absolute top-0 right-0 p-4 text-teal-500/10 font-mono text-8xl font-black select-none uppercase group-hover:text-purple-500/20 transition-colors">
          ME
        </div>

        <div className="relative z-10 space-y-10">
          {/* Heading block */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-teal-400 font-mono text-xs uppercase tracking-[0.4em]">
              <div className="w-8 h-[1px] bg-teal-500" />
              <span>Visual Origin Story</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              I Turn Static Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic">
                Kinetic Experiences.
              </span>
            </h3>
          </div>

          {/* Bio */}
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl">
            Hi, I'm Dyaa Al-Qzaz — a Motion Graphic Designer and Visual Storyteller with a strong
            background in marketing and graphic design. I help brands, content creators, and
            startups deliver powerful visual messages that connect with their audience and leave a
            lasting impression.
          </p>

          {/* Skills grid */}
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
};

export default ManifestoCard;