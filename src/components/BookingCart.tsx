import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/TranslationContext";
import { useCart } from "@/contexts/CartContext";
import { 
  CalendarIcon, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Trash2, 
  Clock,
  CheckCircle,
  Star,
  Zap,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  type: 'standard' | 'premium';
  name: string;
  basePrice: number;
  hours: number;
  quantity: number;
  totalPrice: number;
}

const BookingCart = () => {
  const { t } = useTranslation();
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [date, setDate] = useState<Date>();
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [selectedHours, setSelectedHours] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Base pricing structure - aligned with partyfavorphoto.com
  const BASE_PRICE_2HRS = 498; // Base price for minimum 2 hours
  const HOURLY_RATE = 249; // Each additional hour

  // Calculate price based on hours
  const calculatePrice = (hours: number) => {
    if (hours <= 2) return BASE_PRICE_2HRS;
    return BASE_PRICE_2HRS + (hours - 2) * HOURLY_RATE;
  };

  // Get current price for selected hours
  const currentPrice = calculatePrice(selectedHours);

  const handleAddToCart = () => {
    if (selectedHours < 2) {
      toast({
        title: "Invalid Selection",
        description: "Minimum booking is 2 hours",
        variant: "destructive",
      });
      return;
    }

    const existingItem = cartItems.find(item => item.hours === selectedHours);
    
    const newItem = {
      id: `studiobooth-${selectedHours}h-${Date.now()}`,
      type: 'standard' as const,
      name: `StudioStation Photo Booth - ${selectedHours} Hours`,
      basePrice: currentPrice,
      hours: selectedHours,
      quantity: 1,
      totalPrice: currentPrice
    };

    addToCart(newItem);

    if (existingItem) {
      toast({
        title: "Updated Cart",
        description: `Increased quantity for ${selectedHours}h service`,
      });
    } else {
      toast({
        title: "Added to Cart",
        description: `${selectedHours}h StudioStation service added`,
      });
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    const item = cartItems.find(i => i.id === itemId);
    removeFromCart(itemId);
    toast({
      title: "Removed from Cart",
      description: `${item?.name} removed`,
    });
  };

  const handleUpdateQuantity = (itemId: string, change: number) => {
    const item = cartItems.find(i => i.id === itemId);
    if (item && item.quantity + change === 0) {
      toast({
        title: "Removed from Cart",
        description: `${item.name} removed`,
      });
    }
    updateQuantity(itemId, change);
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items removed from cart",
    });
  };

  const sendWhatsAppOrder = async () => {
    if (!date || cartItems.length === 0) {
      toast({
        title: "Incomplete Order",
        description: !date ? "Please select a date first" : "Please add items to your cart",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const orderDetails = [
        `📅 Event Date: ${format(date, 'EEEE, MMMM do, yyyy')}`,
        '',
        '📸 StudioStation Photo Booth Services:',
        ...cartItems.map(item => 
          `• ${item.name} × ${item.quantity} - $${item.totalPrice.toFixed(2)}`
        ),
        '',
        `💰 Subtotal: $${getTotalPrice().toFixed(2)}`,
        `📦 Total Items: ${getTotalItems()}`,
        '',
        '✨ Package includes:',
        '• Professional DSLR camera setup',
        '• Premium backdrops & props collection',
        '• Instant photo printing',
        '• Professional lighting',
        '• 1-hour setup included',
        '',
        'Ready to book! Please confirm availability and provide event details.'
      ].join('\n');

      const whatsappUrl = `https://wa.me/50661500559?text=${encodeURIComponent(orderDetails)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Booking Initiated",
        description: "WhatsApp opened with your order details",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 font-playfair">{t('booking.title')}</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-inter px-2 mb-4">
            {t('booking.subtitle')}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              const gallerySection = document.getElementById('gallery');
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mb-2"
          >
            View Our Work
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Configuration Panel */}
          <Card className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
            {/* Date Selection */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold font-playfair flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Select Event Date
              </h3>
              <div className="relative">
                <Input
                  type="date"
                  value={date ? format(date, 'yyyy-MM-dd') : ''}
                  onChange={(e) => {
                    const newDate = e.target.value ? new Date(e.target.value + 'T12:00:00') : undefined;
                    setDate(newDate);
                    if (newDate) {
                      toast({
                        title: "Date Selected",
                        description: format(newDate, "EEEE, MMMM do, yyyy"),
                      });
                    }
                  }}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full h-10 sm:h-11 cursor-pointer hover:bg-accent/50 transition-colors pl-8 sm:pl-10 text-sm sm:text-base"
                  placeholder="Choose your event date"
                />
                <CalendarIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground pointer-events-none" />
              </div>
              {date && (
                <p className="text-xs sm:text-sm text-muted-foreground bg-muted/30 rounded-md p-2">
                  Selected: {format(date, "EEEE, MMMM do, yyyy")}
                </p>
              )}
            </div>

            <Separator />

            {/* Hour Selection */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold font-playfair flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Service Duration
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Hours: {selectedHours}</span>
                  <span className="text-primary font-bold">${currentPrice}</span>
                </div>
                
                <Slider
                  value={[selectedHours]}
                  onValueChange={(value) => setSelectedHours(value[0])}
                  max={8}
                  min={2}
                  step={1}
                  className="w-full"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 hrs</span>
                  <span>4 hrs</span>
                  <span>6 hrs</span>
                  <span>8 hrs</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Professional DSLR camera & lighting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Premium backdrops & props collection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Instant photo printing included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>1-hour professional setup</span>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full h-10 sm:h-11 font-semibold smooth-transition hover:scale-[1.02] text-sm sm:text-base"
                disabled={selectedHours < 2}
              >
                <Plus className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Add {selectedHours}h Service - ${currentPrice}
              </Button>
            </div>
          </Card>

          {/* Shopping Cart */}
          <Card id="cart" className="p-3 sm:p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-semibold font-playfair flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Your Cart
              </h3>
              <div className="flex items-center gap-2">
                {cartItems.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearCart}
                    className="text-destructive hover:text-destructive text-xs"
                  >
                    Clear All
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="flex items-center gap-1"
                >
                  <Badge variant="secondary" className="animate-bounce-gentle">
                    {getTotalItems()}
                  </Badge>
                  {isCartOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </Button>
              </div>
            </div>

            <div className={cn(
              "overflow-hidden smooth-transition",
              isCartOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            )}>
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground animate-fade-in">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="font-inter mb-1">Your cart is empty</p>
                  <p className="text-xs font-inter">Add photo booth services above</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="bg-muted/30 rounded-lg p-3 animate-fade-in smooth-transition hover:bg-muted/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h6 className="font-medium text-sm truncate">{item.name}</h6>
                          <p className="text-xs text-muted-foreground">
                            ${item.basePrice} × {item.quantity} = ${item.totalPrice}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="h-6 w-6 p-0 text-destructive hover:text-destructive shrink-0 ml-2"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="h-7 w-7 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="h-7 w-7 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{item.hours}h</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold text-primary">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="text-xs text-muted-foreground text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Professional photo booth experience</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Zap className="h-3 w-3" />
                        <span>Instant booking via WhatsApp</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={sendWhatsAppOrder}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 h-10 sm:h-11 smooth-transition hover:scale-[1.02] text-sm sm:text-base"
                      disabled={!date || cartItems.length === 0 || isLoading}
                    >
                      {isLoading ? (
                        "Opening WhatsApp..."
                      ) : (
                        <>
                          <Zap className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Book via WhatsApp
                        </>
                      )}
                    </Button>
                    
                    {(!date || cartItems.length === 0) && (
                      <p className="text-xs text-muted-foreground text-center">
                        {!date ? "Select a date to continue" : "Add services to your cart"}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCart;