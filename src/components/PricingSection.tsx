import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { Scissors, Sparkles, Hand, SprayCan, Droplets, Star } from "lucide-react";

type Category = {
  name: string;
  icon: React.ElementType;
  subcategories: {
    title: string;
    discount?: boolean;
    items: { name: string; price: string }[];
  }[];
};

const categories: Category[] = [
  {
    name: "Hair Services",
    icon: Scissors,
    subcategories: [
      {
        title: "Hair Cutting",
        items: [
          { name: "Basic Haircut", price: "₹500" },
          { name: "Haircut / Hairwash / Blowdry", price: "₹600" },
          { name: "Baby Haircut", price: "₹500" },
          { name: "Hair Trim Straight", price: "₹300" },
          { name: "Advance Haircut / Hairwash / Blowdry", price: "₹999" },
        ],
      },
      {
        title: "Hair Styling",
        items: [
          { name: "Hair Wash + Blow Dryer (Loreal Professional)", price: "₹400" },
          { name: "Hair Wash + Blow Dryer (GK Hair)", price: "₹500" },
          { name: "Blow Dryer Full Straight / Hair Wash", price: "₹600" },
          { name: "Blow Dryer Curls / Hair Wash", price: "₹700" },
          { name: "Temporary Straight (Ironing)", price: "₹700" },
          { name: "Tone Curl / Hair Wash", price: "₹800" },
          { name: "Messy Curls", price: "₹900" },
          { name: "Hair Bun (Basic)", price: "₹600" },
          { name: "Advance Messy Bun", price: "₹999" },
          { name: "Crimping", price: "₹700" },
        ],
      },
      {
        title: "Hair Colour",
        items: [
          { name: "Global Hair Color L'Oréal Professional Paris (S)", price: "₹2,999" },
          { name: "Global Hair Color L'Oréal Professional Paris (M)", price: "₹3,999" },
          { name: "Global Hair Color L'Oréal Professional Paris (L)", price: "₹4,999" },
          { name: "Per Streak L'Oréal Professional Paris (S)", price: "₹199" },
          { name: "Per Streak L'Oréal Professional Paris (M)", price: "₹299" },
          { name: "Per Streak L'Oréal Professional Paris (L)", price: "₹399" },
          { name: "Highlights L'Oréal Professional Paris (S)", price: "₹2,499" },
          { name: "Highlights L'Oréal Professional Paris (M)", price: "₹3,499" },
          { name: "Highlights L'Oréal Professional Paris (L)", price: "₹4,499" },
          { name: "Root Touchup L'Oréal Professional Paris", price: "₹1,699" },
          { name: "Ombre / Balayage L'Oréal Professional Paris", price: "₹8,999" },
        ],
      },
      {
        title: "Hair Oiling",
        items: [
          { name: "Olive Oil", price: "₹700" },
          { name: "Coconut Oil", price: "₹500" },
          { name: "Scalp Tonic", price: "₹500" },
          { name: "Castor", price: "₹500" },
          { name: "Moroccan Oil", price: "₹1,499" },
        ],
      },
      {
        title: "Professional Hair Services",
        items: [
          { name: "Ola Plex (/ml)", price: "₹1,499" },
          { name: "Fibre Flex (/ml)", price: "₹1,499" },
        ],
      },
    ],
  },
  {
    name: "Hair Treatments",
    icon: SprayCan,
    subcategories: [
      {
        title: "Hair Chemical Treatments",
        discount: true,
        items: [
          { name: "Smoothening / Rebounding (S) Loreal", price: "₹3,499" },
          { name: "Smoothening / Rebounding (M) Loreal", price: "₹4,999" },
          { name: "Smoothening / Rebounding (L) Loreal", price: "₹5,999" },
          { name: "Keratin Treatment (S) GK Hair", price: "₹3,999" },
          { name: "Keratin Treatment (M) GK Hair", price: "₹4,499" },
          { name: "Keratin Treatment (L) GK Hair", price: "₹4,999" },
          { name: "Keratin Treatment (S) Brasil Cacau", price: "₹3,999" },
          { name: "Keratin Treatment (M) Brasil Cacau", price: "₹4,999" },
          { name: "Keratin Treatment (L) Brasil Cacau", price: "₹5,999" },
          { name: "Kerasmoothing (S) Loreal + GK Hair", price: "₹6,999" },
          { name: "Kerasmoothing (M) Loreal + GK Hair", price: "₹7,999" },
          { name: "Kerasmoothing (L) Loreal + GK Hair", price: "₹8,999" },
          { name: "Botox (S)", price: "₹3,499" },
          { name: "Botox (M)", price: "₹3,999" },
          { name: "Botox (L)", price: "₹4,999" },
          { name: "Nanoplastia / Silk Therapy (S)", price: "₹3,999" },
          { name: "Nanoplastia / Silk Therapy (M)", price: "₹4,999" },
          { name: "Nanoplastia / Silk Therapy (L)", price: "₹5,999" },
        ],
      },
      {
        title: "Hair Spa",
        items: [
          { name: "Hair Spa L'Oréal Professional Paris (S)", price: "₹999" },
          { name: "Hair Spa L'Oréal Professional Paris (M)", price: "₹1,299" },
          { name: "Hair Spa L'Oréal Professional Paris (L)", price: "₹1,599" },
          { name: "Keratin Spa (S)", price: "₹1,799" },
          { name: "Keratin Spa (M)", price: "₹1,999" },
          { name: "Keratin Spa (L)", price: "₹2,499" },
          { name: "Anti-dandruff Spa L'Oréal Professional Paris (S)", price: "₹999" },
          { name: "Anti-dandruff Spa L'Oréal Professional Paris (M)", price: "₹1,399" },
          { name: "Anti-dandruff Spa L'Oréal Professional Paris (L)", price: "₹1,599" },
          { name: "Hairfall Spa L'Oréal Professional Paris (S)", price: "₹999" },
          { name: "Hairfall Spa L'Oréal Professional Paris (M)", price: "₹1,399" },
          { name: "Hairfall Spa L'Oréal Professional Paris (L)", price: "₹1,699" },
        ],
      },
      {
        title: "Threading",
        items: [
          { name: "Upperlips", price: "₹40" },
          { name: "Eyebrows", price: "₹50" },
          { name: "Forehead", price: "₹50" },
          { name: "Chin", price: "₹50" },
          { name: "Sidelocks", price: "₹100" },
          { name: "Full Face", price: "₹250" },
        ],
      },
    ],
  },
  {
    name: "Facials & Skin",
    icon: Sparkles,
    subcategories: [
      {
        title: "Facials & Rituals",
        discount: true,
        items: [
          { name: "Papaya", price: "₹1,499" },
          { name: "Fruit", price: "₹1,000" },
          { name: "O3+ Diamond", price: "₹4,999" },
          { name: "O3+ Skin Whitening", price: "₹3,499" },
          { name: "Radiant & Glowing Skin", price: "₹2,499" },
          { name: "Lotus Hydra Vitals / Puravitals", price: "₹2,999" },
          { name: "Lotus Gold Sheen", price: "₹2,999" },
        ],
      },
      {
        title: "Professional Facials",
        items: [
          { name: "Hydra Facial", price: "₹5,999" },
          { name: "Kanpeki Furutsu", price: "₹1,999" },
          { name: "Kanpeki Papaya / Blench / Walnut / Jamaican", price: "₹6,000" },
          { name: "LED Mask Therapy", price: "₹499" },
        ],
      },
      {
        title: "Clean Up / D-Tan",
        items: [
          { name: "Papaya", price: "₹699" },
          { name: "Fruit", price: "₹699" },
          { name: "Lotus", price: "₹999" },
          { name: "Detan", price: "₹999" },
          { name: "Whitening", price: "₹799" },
        ],
      },
      {
        title: "Professional Skin Clean Ups",
        items: [
          { name: "Fulnstant", price: "₹999" },
          { name: "Episyl Pro Matte", price: "₹1,599" },
        ],
      },
      {
        title: "Bleach",
        items: [
          { name: "Boots Papaya / Fruit / Oxy / Gold", price: "₹399" },
          { name: "O3+ Power Mask", price: "₹499" },
          { name: "Whitening", price: "₹399" },
          { name: "Diamond", price: "₹599" },
          { name: "Anti-Ageing", price: "₹599" },
        ],
      },
    ],
  },
  {
    name: "Mani & Pedi",
    icon: Hand,
    subcategories: [
      {
        title: "Manicure & Pedicure",
        items: [
          { name: "Basic Manicure", price: "₹499" },
          { name: "Basic Pedicure", price: "₹499" },
          { name: "Advanced Manicure", price: "₹999" },
          { name: "Advanced Pedicure", price: "₹999" },
          { name: "Basic Manicure & Pedicure", price: "₹999" },
          { name: "Advanced Manicure & Pedicure", price: "₹1,999" },
        ],
      },
    ],
  },
  {
    name: "Body & Spa",
    icon: Droplets,
    subcategories: [
      {
        title: "Body Massage / Body Polish",
        discount: true,
        items: [
          { name: "Body Bleach", price: "₹2,999" },
          { name: "Full Body Massage", price: "₹3,499" },
          { name: "Body D.Tan", price: "₹3,499" },
          { name: "Body Polishing Basic", price: "₹3,000" },
          { name: "Body Polishing Advanced", price: "₹4,999" },
          { name: "Neck & Shoulder", price: "₹1,100" },
        ],
      },
    ],
  },
  {
    name: "Waxing",
    icon: Star,
    subcategories: [
      {
        title: "Waxing",
        items: [
          { name: "Underarms Chocolate", price: "₹149" },
          { name: "Underarms Rica / Sara / O3+", price: "₹299" },
          { name: "Half Arms Chocolate", price: "₹249" },
          { name: "Half Arms Rica / Sara / O3+", price: "₹399" },
          { name: "Full Arms Chocolate", price: "₹499" },
          { name: "Full Arms Rica / Sara / O3+", price: "₹699" },
          { name: "Half Legs Chocolate", price: "₹399" },
          { name: "Half Legs Rica / Sara / O3+", price: "₹599" },
          { name: "Full Legs Chocolate", price: "₹799" },
          { name: "Full Legs Rica / Sara / O3+", price: "₹999" },
          { name: "Neck Chocolate", price: "₹249" },
          { name: "Neck Rica / Sara / O3+", price: "₹399" },
          { name: "Half Body Chocolate", price: "₹1,399" },
          { name: "Half Body Rica / Sara / O3+", price: "₹1,599" },
          { name: "Full Body Chocolate", price: "₹2,999" },
          { name: "Full Body Rica / Sara / O3+", price: "₹4,499" },
          { name: "Bikini Chocolate", price: "₹999" },
          { name: "Bikini Rica / Sara / O3+", price: "₹1,499" },
          { name: "Full Face Chocolate", price: "₹999" },
          { name: "Full Face Rica / Sara / O3+", price: "₹1,499" },
          { name: "Sidelocks Chocolate", price: "₹299" },
          { name: "Sidelocks Rica / Sara / O3+", price: "₹399" },
          { name: "Upperlips Chocolate", price: "₹199" },
          { name: "Upperlips Rica / Sara / O3+", price: "₹249" },
          { name: "Chin Chocolate", price: "₹199" },
          { name: "Chin Rica / Sara / O3+", price: "₹249" },
          { name: "Nose Chocolate", price: "₹199" },
          { name: "Nose Rica / Sara / O3+", price: "₹249" },
          { name: "Forehead Chocolate", price: "₹199" },
          { name: "Forehead Rica / Sara / O3+", price: "₹249" },
        ],
      },
    ],
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);

  const active = categories[activeTab];

  return (
    <section id="pricing" className="section-padding bg-salon-dark/50">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Price Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">
            Our <span className="gradient-text">Services & Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Transparent pricing with premium products. Ask for seasonal discounts!
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Price List */}
        <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {active.subcategories.map((sub) => (
            <div key={sub.title} className="glass-card rounded-2xl overflow-hidden">
              {/* Sub-category header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-primary/10">
                <h3 className="font-display font-bold text-lg text-foreground uppercase tracking-wide">
                  {sub.title}
                </h3>
                {sub.discount && (
                  <span className="bg-amber-500 text-salon-dark text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                    Ask for Discount
                  </span>
                )}
              </div>

              {/* Items */}
              <div className="divide-y divide-border/50">
                {sub.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-3 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4 text-sm">
            Prices may vary based on hair length and product usage. Contact us for exact quotes.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services%20and%20pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
