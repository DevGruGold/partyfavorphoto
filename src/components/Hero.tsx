import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroPhotoBoothImage from "@/assets/hero-photo-booth.jpg";
import partyFavorLogo from "@/assets/party-favor-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroPhotoBoothImage} 
          alt="Party Favor Photo Booth Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={partyFavorLogo} 
            alt="Party Favor Photo" 
            className="h-24 md:h-32 object-contain filter drop-shadow-2xl"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          It's Where the Party's <span className="text-transparent bg-gradient-party bg-clip-text">@</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
          Award-Winning Photo Booth Experiences in the DMV
        </p>
        
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Professional DSLR</h3>
            <p className="text-white/80">Studio-quality photos with professional lighting</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Unlimited Prints</h3>
            <p className="text-white/80">Custom branded prints for all your guests</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Fun Props</h3>
            <p className="text-white/80">Huge selection of goofy and glamorous props</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="party" size="lg" className="text-lg px-8 py-4">
            Book Your Event
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            View Gallery
          </Button>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>(202) 798-0610</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Arlington, VA</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>info@partyfavorphoto.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;