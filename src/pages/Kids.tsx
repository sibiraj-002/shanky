import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Kids Jersey",
    category: "Sports",
    price: "₹1,499",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Casual Shirt",
    category: "Everyday",
    price: "₹1,799",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Party Wear",
    category: "Special Occasion",
    price: "₹2,299",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Comfort Tee",
    category: "Casual",
    price: "₹999",
    image: "/placeholder.svg",
  },
];

const Kids = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-b from-smoke to-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
              Kids Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comfortable styles for little ones
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden group cursor-pointer hover-lift"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 premium-text">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold mb-4">{product.price}</p>
                  <Button className="w-full" variant="secondary">
                    Customize
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kids;
