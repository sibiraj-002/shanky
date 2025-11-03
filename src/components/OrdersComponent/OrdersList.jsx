"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const OrdersList = ({ orders }) => {
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

    if (orders.length === 0) {
        return (
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
        );
    }

    return (
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
    );
};

export default OrdersList;

