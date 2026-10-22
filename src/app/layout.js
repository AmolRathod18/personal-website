import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata = {
    metadataBase: new URL("https://www.amolrathod.dev"),
    title: "Amol Rathod — Software, built for the real world",
    description:
        "Amol Rathod is a full-stack developer in Bengaluru building practical web products, secure workflows, and dependable software.",
    openGraph: {
        title: "Amol Rathod — Software, built for the real world",
        description: "Field notes on full-stack products, cloud work, and security-minded engineering.",
        url: "https://www.amolrathod.dev",
        siteName: "Amol Rathod Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    icons: {
        icon: [{ url: "/brand-mark.svg?v=2", type: "image/svg+xml" }],
        shortcut: "/brand-mark.svg?v=2",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
            <body className="antialiased bg-[#e5e6e8] font-sans">{children}</body>
        </html>
    );
}
