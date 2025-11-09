import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pricing sections
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;