import TestimonialCard from "./TestimonialCard";
import { REVIEWS } from "../constants";

// Duplicate reviews for seamless infinite loop
const DOUBLED_REVIEWS = [...REVIEWS, ...REVIEWS];

const ReviewsMarquee = () => (
  <div className="flex whitespace-nowrap overflow-hidden">
    <div className="marquee-inner flex gap-8">
      {DOUBLED_REVIEWS.map((review, index) => (
        <TestimonialCard key={index} review={review} />
      ))}
    </div>
  </div>
);

export default ReviewsMarquee;