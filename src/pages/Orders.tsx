import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Package, Scissors, Truck } from "lucide-react";

const Orders = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-b from-smoke to-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              From fabric selection to your doorstep
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 premium-text">
                  1. Choose Fabric
                </h3>
                <p className="text-muted-foreground">
                  Browse our curated collection and select your preferred fabric. 
                  Each material is carefully chosen for quality and comfort.
                </p>
              </Card>

              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <Scissors className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 premium-text">
                  2. We Stitch in Chennai
                </h3>
                <p className="text-muted-foreground">
                  Our team purchases your fabric and our master tailors craft 
                  your garment with 40+ years of expertise.
                </p>
              </Card>

              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <Truck className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 premium-text">
                  3. Delivered to You
                </h3>
                <p className="text-muted-foreground">
                  Your perfectly tailored garment is delivered to your doorstep, 
                  anywhere in India, ready to wear.
                </p>
              </Card>
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4 premium-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the perfect blend of traditional craftsmanship and modern convenience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/men" className="inline-block">
                  <button className="bg-primary-foreground text-primary px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
                    Browse Men's Collection
                  </button>
                </a>
                <a href="/women" className="inline-block">
                  <button className="bg-primary-foreground text-primary px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
                    Browse Women's Collection
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Orders;
