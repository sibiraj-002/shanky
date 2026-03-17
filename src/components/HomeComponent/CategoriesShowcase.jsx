"use client";

import Image from "next/image";
import Link from "next/link";

const CategoriesShowcase = () => {
    const collections = [
        {
            name: "Printed T‑Shirts",
            path: "/men",
            description: "Graphic and logo tees in premium cotton.",
        },
        {
            name: "Jerseys",
            path: "/men",
            description: "Match-ready athletic jerseys for teams and fans.",
        },
        {
            name: "Sports Gear",
            path: "/men",
            description: "Shoes, caps and kits to complete your look.",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center premium-text">
                    Shop by Collection
                </h2>
                <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                    Focused on printed T‑shirts, jerseys and essential sports items.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {collections.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="group relative h-80 rounded-lg overflow-hidden hover-lift"
                        >
                            <div className="absolute inset-0 bg-muted">
                                <Image
                                    src="/placeholder.svg"
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white text-2xl font-bold premium-text">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-white/80 mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesShowcase;

