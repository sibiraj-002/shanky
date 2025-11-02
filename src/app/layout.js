import Providers from "@/components/Providers";
import "@/index.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>SHANK'S - Custom Tailoring</title>
                <meta name="description" content="Where Tailoring Meets Technology" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

