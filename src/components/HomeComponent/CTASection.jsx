"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 premium-text">
                    Stitched by Tradition, Designed for You
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Experience the perfect blend of heritage craftsmanship and modern
                    convenience
                </p>
                <Link href="/men">
                    <Button
                        size="lg"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-110"
                    >
                        Order Now
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default CTASection;

