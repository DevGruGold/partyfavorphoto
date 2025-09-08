import studioStationImage from "@/assets/studio-station.jpg";
import weddingBoothImage from "@/assets/wedding-booth-fun.jpg";
import corporateBoothImage from "@/assets/corporate-booth.jpg";
import celebrationBoothImage from "@/assets/celebration-booth.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "StudioStation Photo Booth",
      subtitle: "Our flagship service",
      image: studioStationImage,
      price: "From $498",
      duration: "2-5 hours",
      features: [
        "Professional DSLR camera",
        "Glamorous sequin backdrops",
        "Professional strobe lighting",
        "Unlimited custom prints",
        "QR code sharing",
        "Professional attendant",
        "Goofy props included",
        "1 hour free setup included"
      ],
      description: "Our elegant ballroom service with real DSLR camera, popping strobe flash, and unlimited custom prints will be the highlight of your party!"
    },
    {
      title: "Wedding Packages",
      subtitle: "Make your special day unforgettable",
      image: weddingBoothImage,
      price: "Custom pricing",
      duration: "4-6 hours",
      features: [
        "Custom wedding backdrops",
        "Bride & groom props",
        "Guest book integration",
        "Online gallery access",
        "Same-day photo delivery",
        "Coordinator included",
        "Setup & breakdown"
      ],
      description: "Capture the joy and laughter of your wedding day with our premium photo booth experience designed specifically for weddings."
    },
    {
      title: "Corporate Events",
      subtitle: "Professional fun for business",
      image: corporateBoothImage,
      price: "From $750",
      duration: "3-8 hours",
      features: [
        "Branded backdrops available",
        "Corporate prop packages",
        "Digital delivery options",
        "Social media integration",
        "Professional setup",
        "Event coordination",
        "Custom print layouts"
      ],
      description: "Add excitement to your corporate events, holiday parties, and team building activities with our professional photo booth services."
    },
    {
      title: "Celebration Packages",
      subtitle: "Perfect for birthdays, bar mitzvahs & quinceañeras",
      image: celebrationBoothImage,
      price: "From $595",
      duration: "3-5 hours",
      features: [
        "Custom balloon arches",
        "Celebration-themed props",
        "Age-appropriate backdrops",
        "Cultural celebration elements",
        "Custom print designs",
        "Party coordination",
        "Themed decoration setup",
        "Social media sharing"
      ],
      description: "Make milestone celebrations unforgettable with our specialized packages for birthdays, bar mitzvahs, quinceañeras, and other special occasions."
    }
  ];

  return (
    <section className="py-3 md:py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-playfair">Service Details</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light">
            Complete information about our professional photo booth packages
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                  {service.price}
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold mb-1 font-inter">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 font-playfair">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 font-inter font-light">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-inter">
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.open('https://wa.me/50661500559?text=Hi!%20Please%20send%20me%20more%20information%20about%20' + encodeURIComponent(service.title), '_blank')}
                >
                  Request Quote via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="text-center mt-12 md:mt-16 bg-card border rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Serving Multiple Markets</h3>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            We're proud to serve Washington D.C., Maryland, Virginia, and expanding to Colorado, Texas, and Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Washington D.C.</span>
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Maryland</span>
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Virginia</span>
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Colorado</span>
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Texas</span>
            <span className="px-3 md:px-4 py-2 bg-muted text-muted-foreground rounded-md text-xs md:text-sm">Florida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;