import CustomFitClient from "@/components/CustomFitClient";
import { getProductById } from "@/lib/products";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";

export function generateMetadata({ params }) {
    const product = getProductById(params.id);

    if (!product) {
        return {
            title: "Custom fit - Not found",
            robots: { index: false, follow: false },
        };
    }

    const canonical = `/custom-fit/${product.id}`;
    const title = `Custom Size for ${product.name}`;
    const description =
        "Share your measurements and preferences to get a custom-sized printed T-shirt or jersey. Our team will confirm details before production.";

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title: `${title} | SHANK'S`,
            description,
            url: `${siteUrl}${canonical}`,
            images: product.images?.length
                ? product.images.map((src) => ({
                      url: `${siteUrl}${src}`,
                  }))
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | SHANK'S`,
            description,
        },
    };
}

export default function CustomFit({ params }) {
    const product = getProductById(params.id);
    return <CustomFitClient product={product} />;
}

