import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    rating: 5,
    text: "Absolutely stunning bridal makeup! The team understood exactly what I wanted and delivered beyond my expectations. I felt like a queen on my special day.",
  },
  {
    name: "Ananya Gupta",
    service: "Hair Coloring",
    rating: 5,
    text: "Best hair color I've ever had! The stylists are incredibly talented and use premium products. My hair feels healthy and looks gorgeous.",
  },
  {
    name: "Ritu Patel",
    service: "Facial Treatment",
    rating: 5,
    text: "The facial treatment here is magical. My skin has never looked better. The hygienic environment and professional staff make every visit a pleasure.",
  },
  {
    name: "Meera Joshi",
    service: "Hair Styling",
    rating: 5,
    text: "I've been coming to Style & Streax for over 2 years now. Consistently excellent service, modern techniques, and they always keep up with the latest trends.",
  },
  {
    name: "Kavita Singh",
    service: "Party Makeup",
    rating: 5,
    text: "Got my party makeup done here and received so many compliments! The products used are top-notch and the makeup lasted all night.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-salon-gold text-salon-gold" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed font-light">
              "{testimonials[current].text}"
            </p>

            <div className="mt-8">
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-primary">{testimonials[current].service}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
