"use client";

import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { products } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all"); // all | tshirt | jersey

    const results = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return products.filter((product) => {
            if (typeFilter === "tshirt" && product.category !== "T-Shirt") return false;
            if (typeFilter === "jersey" && product.category !== "Jersey") return false;

            if (!normalizedQuery) return true;

            const haystack = `${product.name} ${product.category} ${product.description} ${product.fabric}`.toLowerCase();
            return haystack.includes(normalizedQuery);
        });
    }, [query, typeFilter]);

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-smoke to-background">
                <div className="container mx-auto px-4 py-10 max-w-5xl">
                    <header className="mb-8 space-y-3">
                        <h1 className="text-3xl md:text-4xl font-bold premium-text">Search T-Shirts, Jerseys & Kits</h1>
                        <p className="text-muted-foreground">
                            Quickly find the perfect printed T-shirt, jersey or sports gear by name, style or description.
                        </p>
                    </header>

                    <Card className="p-4 md:p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by name, style, team..."
                                    className="pl-9 pr-9"
                                />
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        aria-label="Clear search"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    variant={typeFilter === "all" ? "default" : "outline"}
                                    onClick={() => setTypeFilter("all")}
                                >
                                    All
                                </Button>
                                <Button
                                    type="button"
                                    variant={typeFilter === "tshirt" ? "default" : "outline"}
                                    onClick={() => setTypeFilter("tshirt")}
                                >
                                    T-Shirts
                                </Button>
                                <Button
                                    type="button"
                                    variant={typeFilter === "jersey" ? "default" : "outline"}
                                    onClick={() => setTypeFilter("jersey")}
                                >
                                    Jerseys
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {results.length === 0 ? (
                        <p className="text-muted-foreground text-sm">No products found. Try a different keyword.</p>
                    ) : (
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {results.map((product) => (
                                <Card key={product.id} className="overflow-hidden group">
                                    <Link href={`/products/${product.id}`}>
                                        <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </Link>
                                    <div className="p-4 space-y-2">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                            {product.category}
                                        </p>
                                        <Link href={`/products/${product.id}`}>
                                            <h2 className="font-semibold premium-text line-clamp-2 hover:text-primary transition-colors">
                                                {product.name}
                                            </h2>
                                        </Link>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                                        <p className="text-lg font-bold mt-1">{product.price}</p>
                                    </div>
                                </Card>
                            ))}
                        </section>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default SearchPage;

