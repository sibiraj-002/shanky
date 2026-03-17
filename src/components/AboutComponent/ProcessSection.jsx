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
                                <span>Choose your product – printed T-shirt, jersey or sports kit</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-primary mr-3">2.</span>
                                <span>Upload your design or share details for names, numbers and logos</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-primary mr-3">3.</span>
                                <span>We print and prepare your gear in Chennai</span>
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
                                <span>Experience in fit and garment construction</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3">✓</span>
                                <span>Prints and materials chosen for comfort and durability</span>
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

