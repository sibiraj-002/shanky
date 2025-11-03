"use client";

const HeroSection = () => {
    return (
        <section className="relative h-[40vh] bg-gradient-to-b from-smoke to-background flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 premium-text">
                    Orders
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                    Track your custom orders
                </p>
            </div>
        </section>
    );
};

export default HeroSection;

