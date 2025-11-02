"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { getProductById } from "@/lib/products";
import { toast } from "sonner";
import { Ruler, ChevronLeft, Check } from "lucide-react";
import Link from "next/link";

const CustomFit = () => {
    const params = useParams();
    const router = useRouter();
    const product = getProductById(params.id);

    const [measurements, setMeasurements] = useState({
        chest: "",
        waist: "",
        shoulder: "",
        sleeveLength: "",
        shirtLength: "",
        neck: "",
    });

    const [preferences, setPreferences] = useState({
        fitType: "",
        collarStyle: "",
        cuffStyle: "",
        specialNotes: "",
    });

    const [currentStep, setCurrentStep] = useState(1);
    const steps = ["Measurements", "Preferences", "Review"];

    if (!product) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <Card className="p-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                        <Link href="/">
                            <Button>Go Home</Button>
                        </Link>
                    </Card>
                </div>
            </Layout>
        );
    }

    const handleInputChange = (field, value) => {
        setMeasurements((prev) => ({ ...prev, [field]: value }));
    };

    const handlePreferenceChange = (field, value) => {
        setPreferences((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        // In a real app, this would send data to the backend
        toast.success("Your custom fit order has been submitted! Our tailors will contact you soon.");
        router.push("/orders");
    };

    const canProceed = () => {
        if (currentStep === 1) {
            return measurements.chest && measurements.waist && measurements.shoulder;
        }
        if (currentStep === 2) {
            return preferences.fitType && preferences.collarStyle;
        }
        return true;
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <p className="text-muted-foreground mb-6">
                            Provide your measurements in inches. Don't worry if you're unsure - our team will contact you to confirm.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="chest">Chest / Bust (inches)</Label>
                                <Input
                                    id="chest"
                                    type="number"
                                    placeholder="38"
                                    value={measurements.chest}
                                    onChange={(e) => handleInputChange("chest", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="waist">Waist (inches)</Label>
                                <Input
                                    id="waist"
                                    type="number"
                                    placeholder="32"
                                    value={measurements.waist}
                                    onChange={(e) => handleInputChange("waist", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="shoulder">Shoulder Width (inches)</Label>
                                <Input
                                    id="shoulder"
                                    type="number"
                                    placeholder="16"
                                    value={measurements.shoulder}
                                    onChange={(e) => handleInputChange("shoulder", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="sleeveLength">Sleeve Length (inches)</Label>
                                <Input
                                    id="sleeveLength"
                                    type="number"
                                    placeholder="32"
                                    value={measurements.sleeveLength}
                                    onChange={(e) => handleInputChange("sleeveLength", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="shirtLength">Shirt Length (inches)</Label>
                                <Input
                                    id="shirtLength"
                                    type="number"
                                    placeholder="30"
                                    value={measurements.shirtLength}
                                    onChange={(e) => handleInputChange("shirtLength", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="neck">Neck Size (inches)</Label>
                                <Input
                                    id="neck"
                                    type="number"
                                    placeholder="15"
                                    value={measurements.neck}
                                    onChange={(e) => handleInputChange("neck", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <p className="text-muted-foreground mb-6">
                            Customize your garment to match your style preferences.
                        </p>
                        <div>
                            <Label htmlFor="fitType">Fit Type</Label>
                            <Select value={preferences.fitType} onValueChange={(value) => handlePreferenceChange("fitType", value)}>
                                <SelectTrigger id="fitType">
                                    <SelectValue placeholder="Select fit type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="slim">Slim Fit</SelectItem>
                                    <SelectItem value="regular">Regular Fit</SelectItem>
                                    <SelectItem value="loose">Loose Fit</SelectItem>
                                    <SelectItem value="tailored">Tailored Fit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="collarStyle">Collar Style</Label>
                            <Select value={preferences.collarStyle} onValueChange={(value) => handlePreferenceChange("collarStyle", value)}>
                                <SelectTrigger id="collarStyle">
                                    <SelectValue placeholder="Select collar style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="standard">Standard Collar</SelectItem>
                                    <SelectItem value="button-down">Button-Down Collar</SelectItem>
                                    <SelectItem value="spread">Spread Collar</SelectItem>
                                    <SelectItem value="band">Band Collar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="cuffStyle">Cuff Style</Label>
                            <Select value={preferences.cuffStyle} onValueChange={(value) => handlePreferenceChange("cuffStyle", value)}>
                                <SelectTrigger id="cuffStyle">
                                    <SelectValue placeholder="Select cuff style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="button">Button Cuff</SelectItem>
                                    <SelectItem value="french">French Cuff</SelectItem>
                                    <SelectItem value="barrel">Barrel Cuff</SelectItem>
                                    <SelectItem value="mitered">Mitered Cuff</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="specialNotes">Special Instructions (Optional)</Label>
                            <Textarea
                                id="specialNotes"
                                placeholder="Any specific requests or notes for our tailors..."
                                value={preferences.specialNotes}
                                onChange={(e) => handlePreferenceChange("specialNotes", e.target.value)}
                                rows={4}
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <div className="border rounded-lg p-6 space-y-4">
                            <h3 className="font-semibold text-lg mb-4">Your Measurements</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(measurements).map(([key, value]) => (
                                    value && (
                                        <div key={key} className="flex justify-between border-b pb-2">
                                            <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                            <span className="font-semibold">{value}"</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="border rounded-lg p-6 space-y-4">
                            <h3 className="font-semibold text-lg mb-4">Your Preferences</h3>
                            <div className="space-y-2">
                                {Object.entries(preferences).map(([key, value]) => (
                                    value && (
                                        <div key={key} className="flex justify-between border-b pb-2">
                                            <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                            <span className="font-semibold capitalize">{value}</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="border rounded-lg p-6 bg-primary/5">
                            <h3 className="font-semibold text-lg mb-4">Next Steps</h3>
                            <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                                <li>Our team will review your order within 24 hours</li>
                                <li>We'll contact you to confirm measurements if needed</li>
                                <li>Payment will be processed once measurements are confirmed</li>
                                <li>Your garment will be crafted by our master tailors in Chennai</li>
                                <li>Delivery to your doorstep within 7-10 business days</li>
                            </ol>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-smoke to-background">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    {/* Breadcrumb */}
                    <Link href={`/products/${product.id}`} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Product
                    </Link>

                    {/* Product Preview */}
                    <Card className="mb-8 overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 p-6 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold mb-2 premium-text">{product.name}</h1>
                                <p className="text-muted-foreground mb-4">{product.category}</p>
                                <p className="text-2xl font-bold">{product.price}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Steps */}
                    <Card className="p-6 mb-6">
                        <div className="flex justify-between items-center mb-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center flex-1 relative">
                                    {index < steps.length - 1 && (
                                        <div className={`absolute top-5 left-[60%] w-full h-0.5 ${index < currentStep - 1 ? 'bg-primary' : 'bg-muted'
                                            }`} />
                                    )}
                                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${index + 1 <= currentStep
                                        ? 'bg-primary text-primary-foreground scale-110'
                                        : 'bg-muted text-muted-foreground'
                                        }`}>
                                        {index + 1 < currentStep ? (
                                            <Check className="w-5 h-5" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <span className={`mt-2 text-sm font-medium transition-colors ${index + 1 <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                                        }`}>
                                        {step}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Step Content */}
                    <Card className="p-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Ruler className="w-6 h-6" />
                                {steps[currentStep - 1]}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {renderStepContent()}
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex justify-between mt-6">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                            disabled={currentStep === 1}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={() => {
                                if (currentStep < steps.length) {
                                    setCurrentStep(currentStep + 1);
                                } else {
                                    handleSubmit();
                                }
                            }}
                            disabled={!canProceed()}
                        >
                            {currentStep === steps.length ? "Submit Order" : "Next"}
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CustomFit;

