"use client";

import HeroSection from "./HeroSection";
import BrandStorySection from "./BrandStorySection";
import CategoriesShowcase from "./CategoriesShowcase";
import CTASection from "./CTASection";

const HomeComponent = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <CategoriesShowcase />
            <BrandStorySection />
            <CTASection />
        </div>
    );
};

export default HomeComponent;

