"use client";

import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Scissors, Truck, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Orders = () => {
    const [activeTab, setActiveTab] = useState("process");

    // Mock orders data - in real app this would come from backend
    const orders = [];

    const getStatusBadge = (status) => {
        const statuses = {
            delivered: { icon: CheckCircle2, color: "bg-green-500", label: "Delivered" },
            processing: { icon: Clock, color: "bg-blue-500", label: "Processing" },
            cancelled: { icon: XCircle, color: "bg-red-500", label: "Cancelled" },
        };
        const statusObj = statuses[status] || statuses.processing;
        const Icon = statusObj.icon;
        return (
            <Badge variant="outline" className={`flex items-center gap-1 ${statusObj.color} text-white border-none`}>
                <Icon className="w-3 h-3" />
                {statusObj.label}
            </Badge>
        );
    };

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Hero Section */}
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

                {/* Tabs */}
                <section className="container mx-auto px-4 py-8">
                    <div className="flex gap-4 border-b mb-8">
                        <button
                            onClick={() => setActiveTab("orders")}
                            className={`pb-4 px-4 border-b-2 transition-colors ${activeTab === "orders" ? "border-primary text-primary font-semibold" : "border-transparent text-muted-foreground"
                                }`}
                        >
                            My Orders
                        </button>
                        <button
                            onClick={() => setActiveTab("process")}
                            className={`pb-4 px-4 border-b-2 transition-colors ${activeTab === "process" ? "border-primary text-primary font-semibold" : "border-transparent text-muted-foreground"
                                }`}
                        >
                            How It Works
                        </button>
                    </div>

                    {activeTab === "orders" && (
                        <>
                            {orders.length === 0 ? (
                                <Card className="p-12 text-center">
                                    <Package className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
                                    <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Your order history will appear here
                                    </p>
                                    <Link href="/men">
                                        <Button>Start Shopping</Button>
                                    </Link>
                                </Card>
                            ) : (
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <Card key={order.id} className="overflow-hidden hover-lift transition-all duration-300">
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-lg font-semibold premium-text">Order #{order.id}</h3>
                                                        <p className="text-sm text-muted-foreground">{order.date}</p>
                                                    </div>
                                                    {getStatusBadge(order.status)}
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="relative w-20 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={order.product.image}
                                                            alt={order.product.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold">{order.product.name}</h4>
                                                        <p className="text-sm text-muted-foreground">{order.product.category}</p>
                                                        <p className="text-lg font-bold mt-2">{order.total}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {activeTab === "process" && (
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                <Card className="p-8 text-center hover-lift transition-all duration-500 hover:scale-105">
                                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
                                        <Package className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 premium-text">
                                        1. Choose Fabric
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Browse our curated collection and select your preferred fabric.
                                        Each material is carefully chosen for quality and comfort.
                                    </p>
                                </Card>

                                <Card className="p-8 text-center hover-lift transition-all duration-500 hover:scale-105">
                                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
                                        <Scissors className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 premium-text">
                                        2. We Stitch in Chennai
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Our team purchases your fabric and our master tailors craft
                                        your garment with 40+ years of expertise.
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
                                        Your perfectly tailored garment is delivered to your doorstep,
                                        anywhere in India, ready to wear.
                                    </p>
                                </Card>
                            </div>

                            <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center hover:shadow-xl transition-shadow duration-500">
                                <h2 className="text-3xl font-bold mb-4 premium-text">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-xl mb-8 opacity-90">
                                    Experience the perfect blend of traditional craftsmanship and modern convenience
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/men">
                                        <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 transition-all duration-300 hover:scale-105">
                                            Browse Men's Collection
                                        </Button>
                                    </Link>
                                    <Link href="/women">
                                        <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 transition-all duration-300 hover:scale-105">
                                            Browse Women's Collection
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </Layout>
    );
};

export default Orders;

