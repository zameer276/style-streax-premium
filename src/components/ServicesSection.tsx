import { Scissors, Palette, Sparkles, Crown } from "lucide-react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    desc: "Cuts, coloring, keratin treatments, and styling by expert stylists",
    price: "Starting ₹499",
    image: serviceHair,
  },
  {
    icon: Palette,
    title: "Makeup",
    desc: "Party, editorial, and everyday makeup with premium cosmetics",
    price: "Starting ₹999",
    image: serviceMakeup,
  },
  {
    icon: Sparkles,
    title: "Skincare",
    desc: "Facials, cleanups, anti-aging treatments for radiant skin",
    price: "Starting ₹699",
    image: null,
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    desc: "Complete bridal makeover including mehendi, makeup & hair",
    price: "Starting ₹14,999",
    image: serviceBridal,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">
            Premium Services for Your{" "}
            <span className="gradient-text">Perfect Look</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            From everyday styling to once-in-a-lifetime bridal looks, we deliver
            excellence in every service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group glass-card rounded-2xl overflow-hidden hover-lift ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <s.icon size={48} className="text-primary/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-salon-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <p className="text-primary font-bold text-sm">{s.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
