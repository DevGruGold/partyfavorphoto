import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingCart from "@/components/BookingCart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookingCart />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
