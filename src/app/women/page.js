"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const products = [
    {
        id: 11,
        name: "Designer Blouse",
        category: "Traditional",
        price: "₹2,999",
        originalPrice: "₹3,999",
        image: "/placeholder.svg",
    },
    {
        id: 12,
        name: "Custom Kurta",
        category: "Ethnic Wear",
        price: "₹3,499",
        originalPrice: "₹4,499",
        image: "/placeholder.svg",
    },
    {
        id: 13,
        name: "Contemporary Top",
        category: "Western Wear",
        price: "₹2,299",
        image: "/placeholder.svg",
    },
    {
        id: 14,
        name: "Stretch Wear",
        category: "Activewear",
        price: "₹2,799",
        image: "/placeholder.svg",
    },
];

const Women = () => {
    const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Added to cart!");
    };

    const handleToggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
            toast.success("Removed from wishlist");
        } else {
            addToWishlist(product);
            toast.success("Added to wishlist!");
        }
    };

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] bg-gradient-to-b from-smoke to-background flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
                            Women's Collection
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Elegance crafted to perfection
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className="overflow-hidden group cursor-pointer hover-lift transition-all duration-500"
                            >
                                <Link href={`/products/${product.id}`}>
                                    <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {product.originalPrice && (
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
                                                SALE
                                            </div>
                                        )}
                                        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-white/90 hover:bg-white hover:scale-110 transition-transform"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleToggleWishlist(product);
                                                }}
                                            >
                                                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                        {product.category}
                                    </p>
                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="text-lg font-semibold mb-2 premium-text hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex items-center gap-2 mb-4">
                                        <p className="text-xl font-bold">{product.price}</p>
                                        {product.originalPrice && (
                                            <p className="text-sm text-muted-foreground line-through">
                                                {product.originalPrice}
                                            </p>
                                        )}
                                    </div>
                                    <Button
                                        className="w-full hover:scale-105 transition-transform duration-300"
                                        variant="secondary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(product);
                                        }}
                                    >
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Add to Cart
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

export default Women;

