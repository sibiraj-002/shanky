import { products } from "@/lib/products";

export default function sitemap() {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";

    const staticRoutes = [
        "",
        "/about",
        "/men",
        "/women",
        "/kids",
        "/cart",
        "/wishlist",
        "/orders",
    ];

    const staticEntries = staticRoutes.map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
    }));

    const productEntries = products.flatMap((p) => [
        {
            url: `${siteUrl}/products/${p.id}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/custom-fit/${p.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ]);

    return [...staticEntries, ...productEntries];
}

