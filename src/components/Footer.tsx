import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import partyFavorLogo from "@/assets/party-favor-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/4031df85-9654-492f-b28e-46b72d1d7fb8.png" 
              alt="Party Favor Photo" 
              className="h-12 mb-4"
            />
            <p className="mb-4 text-primary-foreground/80 max-w-md">
              Professional photo booth services bringing memorable experiences to events across the Washington D.C. metro area.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Established in Arlington, Virginia
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(202) 798-0610</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Arlington, VA</span>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Washington D.C.</li>
              <li>Arlington, VA</li>
              <li>Bethesda, MD</li>
              <li>Alexandria, VA</li>
              <li>Chevy Chase, MD</li>
              <li>Tysons Corner, VA</li>
            </ul>
          </div>
        </div>
        
        {/* Social Media and Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Instagram className="h-5 w-5 hover:text-primary-foreground/70 cursor-pointer transition-colors" />
            <Facebook className="h-5 w-5 hover:text-primary-foreground/70 cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Party Favor Photo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;