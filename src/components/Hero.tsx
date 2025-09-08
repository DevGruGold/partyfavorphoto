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
      title: "Professional Photo Booth Services",
      subtitle: "Award-winning experiences in the DMV area",
      image: heroPhotoBoothImage,
      cta: "Book Your Event",
      isHero: true
    },
    {
      title: "StudioStation Photo Booth",
      subtitle: "Our flagship service",
      price: "From $498",
      duration: "2-5 hours",
      image: studioStationImage,
      description: "Professional DSLR camera with glamorous sequin backdrops, goofy props, QR code sharing and unlimited custom prints",
      cta: "Book StudioStation"
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
            {/* Logo - Better mobile sizing */}
            <img 
              src="/lovable-uploads/4031df85-9654-492f-b28e-46b72d1d7fb8.png"
              alt="Party Favor Photo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
            />
            
            {/* Contact Actions - Mobile optimized */}
            <div className="flex items-center gap-3">
              {/* Phone - Show icon only on mobile */}
              <a 
                href="tel:+12027980610" 
                className="flex items-center gap-2 hover:text-primary transition-colors font-inter text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline text-sm">(202) 798-0610</span>
              </a>
              
              {/* WhatsApp Button - Better mobile styling */}
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white font-inter font-medium px-3 py-2 text-sm shadow-md hover:shadow-lg transition-all"
                onClick={() => window.open('https://wa.me/12027980610?text=Hi!%20I%27m%20interested%20in%20your%20photo%20booth%20services.', '_blank')}
              >
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile-First Hero Carousel */}
      <div className="relative h-screen min-h-[600px]">
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full relative">
                <div className="relative h-full">
                  {/* Background Image */}
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Mobile-First Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/20" />
                  
                  {/* Content Overlay - Mobile optimized */}
                  <div className="absolute inset-0 flex items-center justify-center md:justify-start">
                    <div className="container mx-auto px-5 py-8">
                      <div className="max-w-lg sm:max-w-xl md:max-w-2xl text-white text-center md:text-left">
                        {slide.isHero ? (
                          <>
                            {/* Hero Content */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-playfair">
                              {slide.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-95 font-inter font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                              {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                              <Button 
                                size="lg" 
                                className="px-6 py-3 text-base font-inter font-semibold bg-primary hover:bg-primary-elegant shadow-button hover:shadow-xl transition-all transform hover:-translate-y-1"
                                onClick={() => scrollToSection('booking')}
                              >
                                {slide.cta}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="lg" 
                                className="px-6 py-3 text-base border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary transition-all font-inter font-semibold backdrop-blur-md"
                                onClick={() => scrollToSection('services')}
                              >
                                View Our Work
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Service Slides Content */}
                            <div className="mb-6">
                              <p className="text-sm uppercase tracking-wide font-semibold opacity-90 mb-3 font-inter text-primary-glow">
                                {slide.subtitle}
                              </p>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair leading-tight">
                                {slide.title}
                              </h2>
                              <p className="text-sm sm:text-base md:text-lg mb-5 opacity-95 font-inter font-light leading-relaxed max-w-md mx-auto md:mx-0">
                                {slide.description}
                              </p>
                              
                              {/* Pricing Info */}
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 justify-center md:justify-start">
                                <span className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-full backdrop-blur-sm font-inter font-semibold text-primary-glow">
                                  {slide.price}
                                </span>
                                <span className="opacity-90 font-inter text-sm">
                                  Duration: {slide.duration}
                                </span>
                              </div>
                            </div>
                            
                            <Button 
                              size="lg" 
                              className="px-6 py-3 font-inter font-semibold text-base bg-primary hover:bg-primary-elegant shadow-button hover:shadow-xl transition-all transform hover:-translate-y-1 mx-auto md:mx-0"
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
          
          {/* Mobile-friendly navigation */}
          <CarouselPrevious className="left-3 text-white border-white/50 bg-black/40 hover:bg-white hover:text-primary transition-all h-10 w-10 backdrop-blur-sm" />
          <CarouselNext className="right-3 text-white border-white/50 bg-black/40 hover:bg-white hover:text-primary transition-all h-10 w-10 backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;