import { useState } from "react";
import Layout from "@/components/Layout";
import FabricSelector from "@/components/FabricSelector";
import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";
import fabricTexture from "@/assets/fabric-texture.jpg";

const Index = () => {
  const [selectedFabric, setSelectedFabric] = useState("cotton");

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroModel}
              alt="Premium tailored clothing"
              className="w-full h-full object-cover fabric-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 premium-text text-center">
              SHANKY
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-center max-w-2xl">
              Where Tailoring Meets Technology
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80 text-center">
              Custom tailoring since the 1980s
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
            >
              Start Customizing
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Fabric Selector */}
        <section>
          <div className="text-center py-12 bg-background">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 premium-text">
              Choose Your Fabric
            </h2>
            <p className="text-muted-foreground text-lg">
              Select from our curated collection of premium materials
            </p>
          </div>
          <FabricSelector
            selectedFabric={selectedFabric}
            onFabricSelect={setSelectedFabric}
          />
        </section>

        {/* Brand Story */}
        <section className="py-24 bg-gradient-to-b from-background to-smoke">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src={fabricTexture}
                  alt="Premium fabrics"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 premium-text">
                  Your Fabric.
                  <br />
                  Your Fit.
                  <br />
                  Your Style.
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From Bengaluru to Chennai and beyond, we bring 40+ years of
                  tailoring expertise directly to your doorstep. Choose your
                  fabric online, and our master craftsmen will create a
                  perfectly tailored garment just for you.
                </p>
                <Button variant="secondary" size="lg">
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center premium-text">
              Explore Collections
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Men", path: "/men" },
                { name: "Women", path: "/women" },
                { name: "Kids", path: "/kids" },
              ].map((category) => (
                <a
                  key={category.name}
                  href={category.path}
                  className="group relative h-96 rounded-lg overflow-hidden hover-lift"
                >
                  <div className="absolute inset-0 bg-muted">
                    <img
                      src="/placeholder.svg"
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <h3 className="text-white text-3xl font-bold premium-text">
                      {category.name}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 premium-text">
              Stitched by Tradition, Designed for You
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the perfect blend of heritage craftsmanship and modern
              convenience
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Order Now
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
