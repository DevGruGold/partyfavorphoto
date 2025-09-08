import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingCart from "@/components/BookingCart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="-mt-16">
        <BookingCart />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
