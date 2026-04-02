import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-salon-dark text-primary-foreground/70">
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <span className="text-xl font-display font-bold text-primary-foreground">
            Style <span className="text-primary">&</span> Streax
          </span>
          <p className="text-sm leading-relaxed">
            Premium salon services designed to make you look and feel your best.
            Your beauty, our responsibility.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-primary-foreground text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="font-semibold text-primary-foreground text-sm">Services</h4>
          <div className="flex flex-col gap-2">
            {["Hair Styling", "Makeup", "Skincare", "Bridal Packages", "Nail Art"].map((s) => (
              <span key={s} className="text-sm">{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-primary-foreground text-sm">Contact</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>+91 99999 99999</span>
            <span>info@styleandstreax.com</span>
            <span>Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Style & Streax Salon. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={12} className="text-primary fill-primary" /> for beauty
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
