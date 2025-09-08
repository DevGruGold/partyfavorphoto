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
      {/* Slim Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/10 relative z-50 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/lovable-uploads/4031df85-9654-492f-b28e-46b72d1d7fb8.png"
              alt="Party Favor Photo" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
            />
            <div className="flex items-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-muted-foreground">
              <a href="tel:+12027980610" className="flex items-center gap-1 md:gap-2 hover:text-primary transition-colors font-inter">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">(202) 798-0610</span>
              </a>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white font-inter font-medium text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2"
                onClick={() => window.open('https://wa.me/12027980610?text=Hi!%20I%27m%20interested%20in%20your%20photo%20booth%20services.', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Photo-Forward Hero Carousel */}
      <div className="relative h-screen min-h-[500px] sm:min-h-[600px]">
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full relative">
                <div className="relative h-full">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 sm:from-black/70 sm:via-black/50 sm:to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-3 sm:px-4">
                      <div className="max-w-xl sm:max-w-2xl text-white">
                        {slide.isHero ? (
                          <>
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-tight font-playfair">
                              {slide.title}
                            </h1>
                            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 opacity-90 font-inter font-light leading-relaxed">
                              {slide.subtitle}
                            </p>
                            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 md:gap-4">
                              <Button 
                                size="lg" 
                                className="px-4 xs:px-6 md:px-8 py-2 xs:py-3 md:py-4 text-sm xs:text-base md:text-lg font-inter font-semibold w-full xs:w-auto"
                                onClick={() => scrollToSection('booking')}
                              >
                                {slide.cta}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="lg" 
                                className="px-4 xs:px-6 md:px-8 py-2 xs:py-3 md:py-4 text-sm xs:text-base md:text-lg border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary transition-all font-inter font-semibold backdrop-blur-sm w-full xs:w-auto"
                                onClick={() => scrollToSection('services')}
                              >
                                View Our Work
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mb-3 sm:mb-4">
                              <p className="text-xs sm:text-sm uppercase tracking-wide font-semibold opacity-90 mb-2 font-inter">
                                {slide.subtitle}
                              </p>
                              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 font-playfair leading-[1.2]">
                                {slide.title}
                              </h2>
                              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 opacity-90 font-inter font-light leading-relaxed">
                                {slide.description}
                              </p>
                              <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 sm:gap-6 mb-3 sm:mb-4 md:mb-6 text-xs xs:text-sm">
                                <span className="bg-white/20 px-2 xs:px-3 md:px-4 py-1 xs:py-2 rounded-full backdrop-blur-sm font-inter font-semibold inline-block w-fit">
                                  {slide.price}
                                </span>
                                <span className="opacity-90 font-inter">
                                  Duration: {slide.duration}
                                </span>
                              </div>
                            </div>
                            <Button 
                              size="lg" 
                              className="px-4 xs:px-6 md:px-8 py-2 xs:py-3 md:py-4 font-inter font-semibold text-sm xs:text-base w-full xs:w-auto"
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
          <CarouselPrevious className="left-2 sm:left-4 text-white border-white bg-black/30 hover:bg-white hover:text-black transition-all h-8 w-8 sm:h-10 sm:w-10" />
          <CarouselNext className="right-2 sm:right-4 text-white border-white bg-black/30 hover:bg-white hover:text-black transition-all h-8 w-8 sm:h-10 sm:w-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;