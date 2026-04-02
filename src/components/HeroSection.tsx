import heroImg from "@/assets/hero-salon.jpg";
import { Sparkles, Shield, Award } from "lucide-react";

const badges = [
  { icon: Award, label: "Certified Professionals" },
  { icon: Shield, label: "Hygienic Environment" },
  { icon: Sparkles, label: "Premium Products" },
];

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Style & Streax luxury salon interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/90 via-salon-dark/70 to-salon-dark/40" />
      </div>

      <div className="container mx-auto relative z-10 py-32 md:py-0">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles size={14} />
            Trusted by 1000+ Happy Clients
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground">
            Elevate Your Style with{" "}
            <span className="gradient-text">Experts You Can Trust</span>
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
            Premium salon services designed to make you look and feel your best.
            Your beauty, our responsibility.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
            >
              View Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-6">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-primary-foreground/60">
                <b.icon size={18} className="text-primary" />
                <span className="text-xs font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
