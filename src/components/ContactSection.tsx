import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">
            Visit Our <span className="gradient-text">Salon</span>
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[350px] md:h-auto shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.073!2d74.7955!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856e0e1a7c5d%3A0x1234567890abcdef!2sSSM%20Higher%20Secondary%20School%2C%20Parray%20Pora%2C%20Hyderpora%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Near SSM Higher Secondary, Parray Pora,<br />
                  Hyderpora, Srinagar, Jammu &amp; Kashmir 190005
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground mt-1">
                  +91 99999 99999<br />
                  +91 88888 88888
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Working Hours</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Mon – Sat: 10:00 AM – 8:00 PM<br />
                  Sunday: 11:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
