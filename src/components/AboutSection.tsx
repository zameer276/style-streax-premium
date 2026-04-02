import teamImg from "@/assets/team.jpg";
import { useScrollAnimation } from "./useScrollAnimation";
import { Heart, Target, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Passion", desc: "Beauty is our craft and our calling" },
  { icon: Target, title: "Precision", desc: "Every detail matters in our work" },
  { icon: Users, title: "Client First", desc: "Your satisfaction drives everything we do" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative rounded-2xl overflow-hidden ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <img
              src={teamImg}
              alt="Style & Streax salon team"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-salon-dark/80 to-transparent p-8">
              <p className="text-primary-foreground font-display text-2xl font-bold">
                10+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Where Beauty Meets <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to redefine beauty standards, Style & Streax
              Salon has been transforming lives one look at a time. Our team of
              certified professionals brings together years of experience with the
              latest trends to deliver results that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that everyone deserves to feel confident and beautiful.
              That's why we use only premium products and cutting-edge techniques
              to ensure every client leaves our salon feeling their absolute best.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {values.map((v) => (
                <div key={v.title} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{v.title}</p>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
