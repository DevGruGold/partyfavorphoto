import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import partyFavorLogo from "@/assets/party-favor-logo-new.png";
import heroPhotoBoothImage from "@/assets/hero-photo-booth.jpg";
import studioStationImage from "@/assets/studio-station.jpg";
import weddingBoothImage from "@/assets/wedding-booth-fun.jpg";
import corporateBoothImage from "@/assets/corporate-booth.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const heroSlides = [
    {
      title: "StudioStation Photo Booth",
      subtitle: "Our flagship service",
      price: "From $498",
      duration: "2-5 hours",
      image: studioStationImage,
      description: "Professional DSLR camera with glamorous sequin backdrops, goofy props, QR code sharing and unlimited custom prints",
      cta: "Book StudioStation",
      isHero: true
    },
    {
      title: "Professional Photo Booth Services",
      subtitle: "Award-winning experiences in the DMV area",
      image: heroPhotoBoothImage,
      cta: "Book Your Event"
    },
    {
      title: "Wedding Packages",
      subtitle: "Make your special day unforgettable",
      price: "Custom pricing",
      duration: "4-6 hours", 
      image: weddingBoothImage,
      description: "Custom wedding backdrops with guest book integration and same-day photo delivery",
      cta: "Book Wedding Package"
    },
    {
      title: "Corporate Events",
      subtitle: "Professional fun for business",
      price: "From $750",
      duration: "3-8 hours",
      image: corporateBoothImage, 
      description: "Branded backdrops with social media integration for corporate events and team building",
      cta: "Book Corporate Event"
    }
  ];

  return (
    <section className="bg-background">
      {/* Mobile-Optimized Header */}
      <header className="bg-white/98 backdrop-blur-sm border-b border-border/20 relative z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Centered and doubled in size */}
            <div className="flex-1 flex justify-center">
              <img 
                src="/lovable-uploads/4031df85-9654-492f-b28e-46b72d1d7fb8.png"
                alt="Party Favor Photo" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain"
              />
            </div>
            
            {/* Contact Actions - Mobile optimized */}
            <div className="flex items-center gap-3">
              {/* Phone Number - Always visible and clickable */}
              <a 
                href="tel:+12027980610" 
                className="flex items-center gap-2 hover:text-primary transition-colors font-inter text-muted-foreground font-medium"
              >
                <span className="text-sm md:text-base">(202) 798-0610</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Hero */}
      <div className="relative min-h-screen">
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative min-h-screen">
                <div className="relative min-h-screen flex flex-col">
                  {/* Background Image - Takes full screen */}
                  <div className="relative flex-1 min-h-screen">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    
                    {/* Mobile-First Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 md:bg-gradient-to-r md:from-black/50 md:via-black/30 md:to-black/10" />
                    
                    {/* Content Overlay - Fills full screen */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-center md:items-start px-5 py-12">
                      <div className="max-w-lg sm:max-w-xl md:max-w-2xl text-white text-center md:text-left md:ml-8 lg:ml-12">
                        {slide.isHero ? (
                          <>
                            {/* Hero Content - Larger for mobile */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-playfair">
                              {slide.title}
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 opacity-95 font-inter font-light leading-relaxed">
                              {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                              <Button 
                                size="lg" 
                                className="px-8 py-4 text-lg font-inter font-semibold bg-primary hover:bg-primary-elegant shadow-button hover:shadow-xl transition-all transform hover:-translate-y-1"
                                onClick={() => scrollToSection('booking')}
                              >
                                {slide.cta}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="lg" 
                                className="px-8 py-4 text-lg border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary transition-all font-inter font-semibold backdrop-blur-md"
                                onClick={() => scrollToSection('services')}
                              >
                                View Our Work
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Service Slides Content - Larger for mobile */}
                            <div className="mb-8">
                              <p className="text-base uppercase tracking-wide font-semibold opacity-90 mb-4 font-inter text-primary-glow">
                                {slide.subtitle}
                              </p>
                              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight">
                                {slide.title}
                              </h2>
                              <p className="text-base sm:text-lg md:text-xl mb-8 opacity-95 font-inter font-light leading-relaxed">
                                {slide.description}
                              </p>
                              
                              {/* Pricing Info - Larger for mobile */}
                              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 justify-center md:justify-start">
                                <span className="bg-primary/20 border border-primary/40 px-6 py-3 rounded-full backdrop-blur-sm font-inter font-semibold text-primary-glow text-lg">
                                  {slide.price}
                                </span>
                                <span className="opacity-90 font-inter text-base">
                                  Duration: {slide.duration}
                                </span>
                              </div>
                            </div>
                            
                            <Button 
                              size="lg" 
                              className="px-8 py-4 font-inter font-semibold text-lg bg-primary hover:bg-primary-elegant shadow-button hover:shadow-xl transition-all transform hover:-translate-y-1"
                              onClick={() => scrollToSection('booking')}
                            >
                              {slide.cta}
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Mobile-friendly navigation - Positioned for full screen */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white border-white/50 bg-black/40 hover:bg-white hover:text-primary transition-all h-12 w-12 backdrop-blur-sm" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white border-white/50 bg-black/40 hover:bg-white hover:text-primary transition-all h-12 w-12 backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;