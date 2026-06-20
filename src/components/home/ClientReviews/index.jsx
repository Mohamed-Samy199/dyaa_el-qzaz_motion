import { useMarqueeAnimation } from "./hooks/useMarqueeAnimation";

import SectionHeader  from "./components/SectionHeader";
import ReviewsMarquee from "./components/ReviewsMarquee";
import BottomDivider  from "./components/BottomDivider";

const ClientReviews = () => {
  // --- Hooks ---
  useMarqueeAnimation();

  // --- Render ---
  return (
    <section className="bg-[#050505] py-12 overflow-hidden border-t border-white/5">
      <SectionHeader />
      <ReviewsMarquee />
      <BottomDivider />
    </section>
  );
};

export default ClientReviews;