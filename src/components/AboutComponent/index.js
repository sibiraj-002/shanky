"use client";

import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import ProcessSection from "./ProcessSection";

const AboutComponent = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <StorySection />
            <ProcessSection />
        </div>
    );
};

export default AboutComponent;

