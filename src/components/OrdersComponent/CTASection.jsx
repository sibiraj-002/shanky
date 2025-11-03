"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center hover:shadow-xl transition-shadow duration-500">
                <h2 className="text-3xl font-bold mb-4 premium-text">
                    Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                    Experience the perfect blend of traditional craftsmanship and modern convenience
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/men">
                        <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 transition-all duration-300 hover:scale-105">
                            Browse Men's Collection
                        </Button>
                    </Link>
                    <Link href="/women">
                        <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 transition-all duration-300 hover:scale-105">
                            Browse Women's Collection
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTASection;

