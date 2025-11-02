"use client";

import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart, isInWishlist } = useCart();
    const [removingIds, setRemovingIds] = useState(new Set());

    const handleRemoveFromWishlist = (product) => {
        setRemovingIds((prev) => new Set([...prev, product.id]));
        setTimeout(() => {
            removeFromWishlist(product.id);
            setRemovingIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(product.id);
                return newSet;
            });
            toast.success("Removed from wishlist");
        }, 300);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Added to cart!");
    };

    if (wishlistItems.length === 0) {
        return (
            <Layout>
                <div className="min-h-screen">
                    <section className="container mx-auto px-4 py-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 premium-text">
                            My Wishlist
                        </h1>
                        <Card className="p-16 text-center">
                            <Heart className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
                            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
                            <p className="text-muted-foreground mb-6">
                                Start adding products you love to your wishlist
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Link href="/men">
                                    <Button>Browse Men's Collection</Button>
                                </Link>
                                <Link href="/women">
                                    <Button>Browse Women's Collection</Button>
                                </Link>
                            </div>
                        </Card>
                    </section>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[30vh] bg-gradient-to-b from-smoke to-background flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
                            My Wishlist
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlistItems.map((product) => (
                            <Card
                                key={product.id}
                                className={`overflow-hidden group cursor-pointer hover-lift transition-all duration-500 ${removingIds.has(product.id) ? 'opacity-0 scale-95' : ''
                                    }`}
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
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                                SALE
                                            </div>
                                        )}
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
                                    <div className="flex gap-2">
                                        <Button
                                            className="flex-1"
                                            variant="secondary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleAddToCart(product);
                                            }}
                                        >
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                            Add to Cart
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="flex-shrink-0"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoveFromWishlist(product);
                                            }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Wishlist;

