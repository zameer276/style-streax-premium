import { useState } from "react";
import { Calendar, Phone, User, Scissors } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

const serviceOptions = [
  "Hair Styling",
  "Hair Coloring",
  "Makeup",
  "Skincare / Facial",
  "Bridal Package",
  "Nail Art",
  "Other",
];

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}`
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="section-padding bg-salon-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-primary-foreground">
            Ready to <span className="gradient-text">Transform</span> Your Look?
          </h2>
          <p className="text-primary-foreground/60 mt-4">
            Fill in the details and we'll confirm your appointment via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto glass-card-dark rounded-2xl p-8 space-y-5 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Name */}
          <div className="relative">
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              required
              maxLength={100}
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="tel"
              required
              maxLength={15}
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9+]/g, "") })}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Service */}
          <div className="relative">
            <Scissors size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="" className="text-salon-dark">Select Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="text-salon-dark">{s}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
