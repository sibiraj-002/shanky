"use client";

import HeroSection from "./HeroSection";
import OrdersTabs from "./OrdersTabs";

const OrdersComponent = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <OrdersTabs />
        </div>
    );
};

export default OrdersComponent;

