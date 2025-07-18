import studioStationImage from "@/assets/studio-station.jpg";
import weddingBoothImage from "@/assets/wedding-booth-fun.jpg";
import corporateBoothImage from "@/assets/corporate-booth.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "StudioStation Photo Booth",
      subtitle: "Our flagship service",
      image: studioStationImage,
      price: "From $498",
      duration: "2-3 hours",
      features: [
        "Professional DSLR camera",
        "Glamorous sequin backdrops",
        "Professional strobe lighting",
        "Unlimited custom prints",
        "QR code sharing",
        "Professional attendant",
        "Goofy props included"
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
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photo booth packages designed for every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
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
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
                <Button className="w-full">
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="text-center mt-16 bg-card border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Serving Multiple Markets</h3>
          <p className="text-lg text-muted-foreground mb-6">
            We're proud to serve Washington D.C., Maryland, Virginia, and expanding to Colorado, Texas, and Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Washington D.C.</span>
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Maryland</span>
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Virginia</span>
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Colorado</span>
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Texas</span>
            <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm">Florida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;