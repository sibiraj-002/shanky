"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const { cartCount, wishlistCount } = useCart();

  const menuItems = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "About Us", path: "/about" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
          {/* Menu Items - Left */}
          <nav className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-tight transition-all duration-300 hover:text-primary ${
                  pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logo - Center */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-105 cursor-pointer">
            <h1 className="text-3xl font-bold tracking-tighter premium-text">
              SHANK'S
            </h1>
          </Link>

          {/* Search, Profile, Wishlist & Cart - Right */}
          <div className="flex items-center gap-2">
            <Link href="/search">
              <Button variant="ghost" size="icon" className="hover:bg-accent transition-all duration-300 hover:scale-110">
                <Search className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-accent transition-all duration-300 hover:scale-110">
                <User className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative hover:bg-accent transition-all duration-300 hover:scale-110">
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-bounce"
                    variant="destructive"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-accent transition-all duration-300 hover:scale-110">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-bounce"
                    variant="destructive"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 premium-text">SHANK'S</h3>
              <p className="text-sm text-primary-foreground/80">
                Where Tailoring Meets Technology
              </p>
              <p className="text-sm text-primary-foreground/80 mt-2">
                Since the 1980s
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="hover:text-primary-foreground transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-primary-foreground/80">Chennai, India</p>
              <p className="text-sm text-primary-foreground/80 mt-2">
                Expert tailoring delivered nationwide
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            © 2025 SHANK'S. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

