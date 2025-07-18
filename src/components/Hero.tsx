import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import partyFavorLogo from "@/assets/party-favor-logo.png";

const Hero = () => {
  return (
    <section className="bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <img 
              src={partyFavorLogo} 
              alt="Party Favor Photo" 
              className="h-12 object-contain"
            />
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(202) 798-0610</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@partyfavorphoto.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Professional Photo Booth Services
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Award-winning photo booth experiences for weddings, corporate events, and special celebrations in the Washington D.C. metro area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="px-8 py-4">
              Book Your Event
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              View Our Work
            </Button>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Quality</h3>
              <p className="text-muted-foreground">DSLR cameras and professional lighting for stunning photos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete Service</h3>
              <p className="text-muted-foreground">Setup, props, attendant, and unlimited prints included</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted Experience</h3>
              <p className="text-muted-foreground">Serving the DMV area with exceptional service since 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;