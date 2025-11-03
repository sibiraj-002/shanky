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
                            alt="Premium fabrics"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 premium-text">
                            Your Fabric.
                            <br />
                            Your Fit.
                            <br />
                            Your Style.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            From Bengaluru to Chennai and beyond, we bring 40+ years of
                            tailoring expertise directly to your doorstep. Choose your
                            fabric online, and our master craftsmen will create a
                            perfectly tailored garment just for you.
                        </p>
                        <Link href="/about">
                            <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
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

