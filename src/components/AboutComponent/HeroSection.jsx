"use client";

import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative h-[70vh] overflow-hidden">
            <Image
                src="/workshop.jpg"
                alt="SHANK'S Workshop"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
                        Our Story
                    </h1>
                    <p className="text-2xl">Since the 1980s</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

