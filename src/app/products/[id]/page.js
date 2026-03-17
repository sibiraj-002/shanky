import ProductDetailClient from "@/components/ProductDetailClient";
import { getProductById } from "@/lib/products";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";

export function generateMetadata({ params }) {
    const product = getProductById(params.id);

    if (!product) {
        return {
            title: "Product not found",
            robots: { index: false, follow: false },
        };
    };

    const canonical = `/products/${product.id}`;

    return {
        title: `${product.name} (${product.category})`,
        description: product.description,
        alternates: { canonical },
        openGraph: {
            title: `${product.name} | SHANK'S`,
            description: product.description,
            url: `${siteUrl}${canonical}`,
            images: product.images?.length
                ? product.images.map((src) => ({
                      url: `${siteUrl}${src}`,
                  }))
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | SHANK'S`,
            description: product.description,
        },
    };
}

export default function ProductDetail({ params }) {
    const product = getProductById(params.id);
    return <ProductDetailClient product={product} />;
}

