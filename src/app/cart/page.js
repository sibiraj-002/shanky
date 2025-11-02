"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            toast.success("Removed from cart");
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? 0 : 0;
    const total = subtotal + shipping;

    return (
        <Layout>
            <div className="min-h-screen">
                <section className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 premium-text">
                        Shopping Cart
                    </h1>

                    {cartItems.length === 0 ? (
                        <Card className="p-8 text-center">
                            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                            <p className="text-muted-foreground mb-6">
                                Start adding custom pieces to your collection
                            </p>
                            <Link href="/men">
                                <Button>Start Shopping</Button>
                            </Link>
                        </Card>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                                {cartItems.map((item) => (
                                    <Card key={item.id} className="overflow-hidden hover-lift transition-all duration-300">
                                        <div className="flex gap-4 p-4">
                                            <Link href={`/products/${item.id}`}>
                                                <div className="relative w-24 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0 group">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            </Link>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <Link href={`/products/${item.id}`}>
                                                        <h3 className="text-lg font-semibold hover:text-primary transition-colors premium-text">
                                                            {item.name}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-sm text-muted-foreground">{item.category}</p>
                                                    <p className="text-xl font-bold mt-2">{item.price}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-3 border rounded-md">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </Button>
                                                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            removeFromCart(item.id);
                                                            toast.success("Removed from cart");
                                                        }}
                                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        clearCart();
                                        toast.success("Cart cleared");
                                    }}
                                    className="w-full"
                                >
                                    Clear Cart
                                </Button>
                            </div>

                            <div className="lg:col-span-1">
                                <Card className="p-6 sticky top-24">
                                    <h3 className="text-xl font-semibold mb-4 premium-text">
                                        Order Summary
                                    </h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Subtotal</span>
                                            <span>₹{subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Shipping</span>
                                            <span>Free</span>
                                        </div>
                                        <div className="border-t pt-3 flex justify-between font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full" size="lg">
                                        Proceed to Checkout
                                    </Button>
                                    <Link href="/men" className="block mt-4">
                                        <Button variant="outline" className="w-full">
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </Card>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </Layout>
    );
};

export default Cart;

