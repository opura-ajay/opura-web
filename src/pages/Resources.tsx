import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Resources sections
import ResourcesHero from "@/components/sections/resources/ResourcesHero";
import ResourcesList from "@/components/sections/resources/ResourcesList";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ResourcesHero />
        <ResourcesList />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;