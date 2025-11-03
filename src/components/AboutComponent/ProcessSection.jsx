"use client";

const ProcessSection = () => {
    return (
        <section className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto">
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
    );
};

export default ProcessSection;

