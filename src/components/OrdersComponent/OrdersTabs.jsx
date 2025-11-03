"use client";

import { useState } from "react";
import OrdersList from "./OrdersList";
import ProcessSteps from "./ProcessSteps";
import CTASection from "./CTASection";

const OrdersTabs = () => {
    const [activeTab, setActiveTab] = useState("process");
    
    // Mock orders data - in real app this would come from backend
    const orders = [];

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="flex gap-4 border-b mb-8">
                <button
                    onClick={() => setActiveTab("orders")}
                    className={`pb-4 px-4 border-b-2 transition-colors ${
                        activeTab === "orders" 
                            ? "border-primary text-primary font-semibold" 
                            : "border-transparent text-muted-foreground"
                    }`}
                >
                    My Orders
                </button>
                <button
                    onClick={() => setActiveTab("process")}
                    className={`pb-4 px-4 border-b-2 transition-colors ${
                        activeTab === "process" 
                            ? "border-primary text-primary font-semibold" 
                            : "border-transparent text-muted-foreground"
                    }`}
                >
                    How It Works
                </button>
            </div>

            {activeTab === "orders" && <OrdersList orders={orders} />}

            {activeTab === "process" && (
                <>
                    <ProcessSteps />
                    <CTASection />
                </>
            )}
        </section>
    );
};

export default OrdersTabs;

