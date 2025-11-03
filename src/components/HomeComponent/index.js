"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import FabricSelectorSection from "./FabricSelectorSection";
import BrandStorySection from "./BrandStorySection";
import CategoriesShowcase from "./CategoriesShowcase";
import CTASection from "./CTASection";

const HomeComponent = () => {
    const [selectedFabric, setSelectedFabric] = useState("cotton");

    return (
        <div className="min-h-screen">
            <HeroSection />
            <FabricSelectorSection
                selectedFabric={selectedFabric}
                onFabricSelect={setSelectedFabric}
            />
            <BrandStorySection />
            <CategoriesShowcase />
            <CTASection />
        </div>
    );
};

export default HomeComponent;

