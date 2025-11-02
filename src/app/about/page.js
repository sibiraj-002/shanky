"use client";

import Layout from "@/components/Layout";
import Image from "next/image";

const About = () => {
    return (
        <Layout>
            <div className="min-h-screen">
                {/* Hero Section */}
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

                {/* Content */}
                <section className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-6 premium-text">
                                Where Tailoring Meets Technology
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                For over four decades, SHANK'S has been a trusted name in custom tailoring.
                                What began as a small family workshop in Chennai has evolved into a modern
                                tailoring service that bridges tradition and technology.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our master tailors, trained through generations, bring unmatched expertise
                                to every stitch. Today, we've made this heritage accessible to customers
                                across India through our digital platform.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 premium-text">
                                    Our Process
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">1.</span>
                                        <span>Choose your fabric from our curated collection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">2.</span>
                                        <span>We source and purchase your selected fabric in Chennai</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">3.</span>
                                        <span>Our master tailors craft your garment with precision</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">4.</span>
                                        <span>Delivered to your doorstep, anywhere in India</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-4 premium-text">
                                    Our Promise
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3">✓</span>
                                        <span>40+ years of tailoring expertise</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3">✓</span>
                                        <span>Premium fabrics sourced locally</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3">✓</span>
                                        <span>Perfect fit guaranteed</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3">✓</span>
                                        <span>Nationwide delivery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-smoke p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4 premium-text text-center">
                                Your Fabric. Your Fit. Your Style.
                            </h3>
                            <p className="text-center text-muted-foreground text-lg">
                                Stitched by Tradition, Designed for You
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;

