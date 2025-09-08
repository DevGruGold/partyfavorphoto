import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  type: 'standard' | 'premium';
  name: string;
  price: number;
  hours: number;
  quantity: number;
}

const BookingCart = () => {
  const [date, setDate] = useState<Date>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const studioStationPricing = [
    { hours: 2, price: 498, totalHours: 3 }, // includes 1hr setup
    { hours: 3, price: 747, totalHours: 4 },
    { hours: 4, price: 996, totalHours: 5 },
    { hours: 5, price: 1245, totalHours: 6 }
  ];

  const addToCart = (pricing: typeof studioStationPricing[0]) => {
    const existingItem = cartItems.find(item => 
      item.hours === pricing.hours
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === existingItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: `studiobooth-${pricing.hours}h-${Date.now()}`,
        type: 'standard',
        name: `StudioStation Photo Booth (${pricing.hours}h service + 1h setup)`,
        price: pricing.price,
        hours: pricing.hours,
        quantity: 1
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const sendWhatsAppOrder = () => {
    if (!date || cartItems.length === 0) {
      alert('Please select a date and add items to your cart');
      return;
    }

    const orderDetails = [
      `📅 Booking Date: ${format(date, 'PPP')}`,
      '',
      '📸 Photo Booth Services:',
      ...cartItems.map(item => 
        `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
      ),
      '',
      `💰 Total: $${getTotalPrice().toFixed(2)}`,
      '',
      'Please confirm availability and provide final details. Thank you!'
    ].join('\n');

    const whatsappUrl = `https://wa.me/12027980610?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Book Your StudioStation</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light">
            Select your date, choose your package, and book instantly via WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Date Selection */}
          <Card className="p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair">Select Your Date</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-12",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick your event date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* StudioStation Packages */}
            <div className="mt-6 md:mt-8">
              <h4 className="text-lg font-semibold mb-4 font-playfair">StudioStation Packages</h4>
              <div className="space-y-3">
                {studioStationPricing.map((pricing) => (
                  <div key={pricing.hours} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h5 className="font-semibold text-base md:text-lg font-inter">
                          {pricing.hours} Hour Service ({pricing.totalHours}h total)
                        </h5>
                        <p className="text-muted-foreground text-sm font-inter font-light">
                          Includes 1hr setup, DSLR camera, backdrops, props & printing
                        </p>
                        <p className="text-primary font-bold text-lg font-inter">${pricing.price}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(pricing)}
                        className="flex-shrink-0 ml-2"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Shopping Cart */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold font-playfair">Your Cart</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <Badge variant="secondary">{getTotalItems()}</Badge>
              </Button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-center py-8 text-muted-foreground font-inter">Your cart is empty</p>
                <p className="text-sm text-center font-inter font-light">Add some photo packages above</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <h6 className="font-medium text-sm">{item.name}</h6>
                      <p className="text-primary font-semibold">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  
                  <Button
                    onClick={sendWhatsAppOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                    disabled={!date || cartItems.length === 0}
                  >
                    Book via WhatsApp
                  </Button>
                  
                  {(!date || cartItems.length === 0) && (
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      {!date ? "Please select a date" : "Add items to your cart"}
                    </p>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCart;