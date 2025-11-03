"use client";

import FabricSelector from "@/components/FabricSelector";

const FabricSelectorSection = ({ selectedFabric, onFabricSelect }) => {
    return (
        <section>
            <div className="text-center py-12 bg-background">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 premium-text">
                    Choose Your Fabric
                </h2>
                <p className="text-muted-foreground text-lg">
                    Select from our curated collection of premium materials
                </p>
            </div>
            <FabricSelector
                selectedFabric={selectedFabric}
                onFabricSelect={onFabricSelect}
            />
        </section>
    );
};

export default FabricSelectorSection;

