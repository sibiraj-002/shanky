"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfilePage = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-smoke to-background">
                <div className="container mx-auto px-4 py-10 max-w-4xl space-y-8">
                    <header className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold premium-text">Your Profile</h1>
                        <p className="text-muted-foreground">
                            Manage your custom T-shirt and jersey preferences. In a full app, this is where sign-in and saved
                            measurements would live.
                        </p>
                    </header>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p className="text-muted-foreground">
                                    This demo does not include authentication yet. You can plug in your auth system and populate
                                    this section with the customer&apos;s name, email, and contact info.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Saved Measurements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <p className="text-muted-foreground">
                                    Once measurements are captured from the custom size flow, they can be stored and reused here
                                    for faster ordering.
                                </p>
                                <Link href="/orders">
                                    <Button variant="outline" size="sm">
                                        View your orders
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Order History</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <p className="text-muted-foreground">
                                The current demo shows a static orders page. In production, this section would summarize recent
                                T-shirt and jersey orders with status, size, and customization details.
                            </p>
                            <Link href="/orders">
                                <Button size="sm">Go to Orders</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;

