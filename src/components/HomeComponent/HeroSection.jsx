"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/hero-model.jpg"
                    alt="Premium tailored clothing"
                    fill
                    className="object-cover fabric-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 premium-text text-center">
                    SHANK'S
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center max-w-3xl font-semibold italic">
                    Life half, Attire half
                </p>
                <p className="text-xl md:text-2xl mb-4 text-center max-w-2xl">
                    Where Tailoring Meets Technology
                </p>
                <p className="text-lg md:text-xl mb-8 text-white/80 text-center">
                    Custom tailoring since the 1980s
                </p>
                <Link href="/men">
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-110"
                    >
                        Start Customizing
                    </Button>
                </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

