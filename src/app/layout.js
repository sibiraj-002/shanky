import Providers from "@/components/Providers";
import "@/index.css";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "SHANK'S - Custom Tailoring",
        template: "%s | SHANK'S",
    },
    description: "Where Tailoring Meets Technology",
    applicationName: "SHANK'S",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: "SHANK'S",
        title: "SHANK'S - Custom Tailoring",
        description: "Where Tailoring Meets Technology",
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "SHANK'S - Custom Tailoring",
        description: "Where Tailoring Meets Technology",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

