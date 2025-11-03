"use client";

import Image from "next/image";
import Link from "next/link";

const CategoriesShowcase = () => {
    const categories = [
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Kids", path: "/kids" },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center premium-text">
                    Explore Collections
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.path}
                            className="group relative h-96 rounded-lg overflow-hidden hover-lift"
                        >
                            <div className="absolute inset-0 bg-muted">
                                <Image
                                    src="/placeholder.svg"
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <h3 className="text-white text-3xl font-bold premium-text">
                                    {category.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesShowcase;

