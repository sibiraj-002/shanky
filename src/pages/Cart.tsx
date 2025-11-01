import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 premium-text">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 text-center">
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Start adding custom pieces to your collection
                </p>
                <Button asChild>
                  <a href="/men">Start Shopping</a>
                </Button>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 premium-text">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹0</span>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  Proceed to Checkout
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cart;
