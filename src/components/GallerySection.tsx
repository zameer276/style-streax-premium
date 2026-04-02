import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import { useScrollAnimation } from "./useScrollAnimation";

const images = [
  { src: serviceHair, alt: "Hair styling transformation" },
  { src: gallery2, alt: "Bridal makeup" },
  { src: serviceMakeup, alt: "Professional makeup" },
  { src: gallery4, alt: "Nail art" },
  { src: serviceBridal, alt: "Bridal look" },
  { src: gallery6, alt: "Party makeup" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">
            Our <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            See the magic we create — real results from real clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 || i === 4 ? "row-span-2" : ""
              } ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-salon-dark/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
