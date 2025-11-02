"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProductById } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Ruler } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const ProductDetail = () => {
    const params = useParams();
    const router = useRouter();
    const product = getProductById(params.id);
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

    if (!product) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <Card className="p-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                        <p className="text-muted-foreground mb-6">
                            The product you're looking for doesn't exist.
                        </p>
                        <Link href="/">
                            <Button>Go Home</Button>
                        </Link>
                    </Card>
                </div>
            </Layout>
        );
    }

    const handleAddToCart = () => {
        addToCart({ ...product, selectedSize });
        toast.success("Added to cart!");
    };

    const handleToggleWishlist = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
            toast.success("Removed from wishlist");
        } else {
            addToWishlist(product);
            toast.success("Added to wishlist!");
        }
    };

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Breadcrumb */}
                <section className="container mx-auto px-4 py-8">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href={`/${product.category.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-foreground transition-colors">
                            {product.category}
                        </Link>
                        <span>/</span>
                        <span className="text-foreground">{product.name}</span>
                    </nav>
                </section>

                {/* Product Section */}
                <section className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Image Gallery */}
                        <div className="relative group">
                            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                                <Image
                                    src={product.images[selectedImageIndex]}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700"
                                />
                                {product.originalPrice && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                                        SALE
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="flex gap-2 mt-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${selectedImageIndex === index
                                            ? "border-primary scale-110"
                                            : "border-transparent hover:border-primary/50"
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 premium-text">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <p className="text-3xl font-bold">{product.price}</p>
                                {product.originalPrice && (
                                    <>
                                        <p className="text-xl text-muted-foreground line-through">
                                            {product.originalPrice}
                                        </p>
                                        <p className="text-sm text-green-600 font-semibold">
                                            Save {Math.round((1 - parseFloat(product.price.replace(/[₹,]/g, "")) / parseFloat(product.originalPrice.replace(/[₹,]/g, ""))) * 100)}%
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-2">Fabric:</h3>
                                <p className="text-muted-foreground">{product.fabric}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-3">Size:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md border transition-all duration-300 hover:scale-110 ${selectedSize === size
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "border-border hover:border-primary"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-2">Description:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Custom Fit Button */}
                            <Link href={`/custom-fit/${product.id}`} className="block mb-4">
                                <Button variant="outline" className="w-full" size="lg">
                                    <Ruler className="w-4 h-4 mr-2" />
                                    Customize Your Perfect Fit
                                </Button>
                            </Link>

                            <div className="flex gap-3 mb-6">
                                <Button
                                    className="flex-1"
                                    size="lg"
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleToggleWishlist}
                                    className={isInWishlist(product.id) ? "bg-red-50 border-red-300" : ""}
                                >
                                    <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                                </Button>
                            </div>

                            {/* Measurements */}
                            <div className="border-t pt-6">
                                <h3 className="text-sm font-semibold mb-3">Size Guide:</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(product.measurements).map(([key, value]) => (
                                        <div key={key}>
                                            <p className="text-xs text-muted-foreground uppercase mb-1">
                                                {key}
                                            </p>
                                            <p className="text-sm font-semibold">{value}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="border-t py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 premium-text text-center">
                            You May Also Like
                        </h2>
                        <div className="flex justify-center">
                            <Link href="/men">
                                <Button size="lg" variant="outline">
                                    Browse All Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ProductDetail;

