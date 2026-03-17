"use client";

import { Card } from "@/components/ui/card";
import { Package, Shirt, Truck } from "lucide-react";

const ProcessSteps = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="p-8 text-center hover-lift transition-all duration-500 hover:scale-105">
                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
                        <Package className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 premium-text">
                        1. Choose Your Product
                    </h3>
                    <p className="text-muted-foreground">
                        Pick a printed T-shirt, jersey or sports kit and select your size.
                    </p>
                </Card>

                <Card className="p-8 text-center hover-lift transition-all duration-500 hover:scale-105">
                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
                        <Shirt className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 premium-text">
                        2. We Print & Prepare
                    </h3>
                    <p className="text-muted-foreground">
                        Our team prints your design and prepares your tee, jersey or kit in Chennai.
                    </p>
                </Card>

                <Card className="p-8 text-center hover-lift transition-all duration-500 hover:scale-105">
                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
                        <Truck className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 premium-text">
                        3. Delivered to You
                    </h3>
                    <p className="text-muted-foreground">
                        Your customised gear is shipped anywhere in India, ready for match day.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default ProcessSteps;

