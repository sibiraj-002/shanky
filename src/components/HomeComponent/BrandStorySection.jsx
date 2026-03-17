"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BrandStorySection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-smoke">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <Image
                            src="/fabric-texture.jpg"
                            alt="Printed T-shirts and sports jerseys"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 premium-text">
                            Your Team.
                            <br />
                            Your Print.
                            <br />
                            Your Game.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            SHANK&apos;S now focuses on printed T‑shirts, jerseys and sports
                            essentials. From fan tees to full match kits, we help you
                            create gear that looks sharp on and off the field.
                        </p>
                        <Link href="/about">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="hover:scale-105 transition-transform duration-300"
                            >
                                Learn Our Story
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStorySection;

