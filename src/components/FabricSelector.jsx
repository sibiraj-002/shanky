"use client";

import { Card } from "@/components/ui/card";

const fabrics = [
  {
    id: "cotton",
    name: "Premium Cotton",
    description: "Breathable and comfortable",
    image: "/premimum_cotton.jpg",
  },
  {
    id: "linen",
    name: "Linen Blend",
    description: "Elegant and lightweight",
    image: "/linen_blend.jpg",
  },
  {
    id: "wool",
    name: "Fine Wool",
    description: "Warm and sophisticated",
    image: "/fine_wool.jpg",
  },
  {
    id: "silk",
    name: "Pure Silk",
    description: "Luxurious and smooth",
    image: "/silk.jpg",
  },
];

const FabricSelector = ({ onFabricSelect, selectedFabric }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-smoke">
      {fabrics.map((fabric) => (
        <Card
          key={fabric.id}
          className={`cursor-pointer transition-all duration-300 hover-lift ${
            selectedFabric === fabric.id
              ? "ring-2 ring-primary shadow-lg"
              : "hover:shadow-md"
          }`}
          onClick={() => onFabricSelect(fabric.id)}
        >
          <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-sm premium-text">{fabric.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {fabric.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FabricSelector;

