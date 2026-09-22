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
    title: "Amol Rathod | Full Stack Developer",
    description:
        "Amol Rathod — Full Stack Developer (MERN & Flask). Secure APIs, payments, and production-ready interfaces.",
    openGraph: {
        title: "Amol Rathod | Full Stack Developer",
        description: "Portfolio of full-stack products, cloud work, and security-minded engineering.",
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
        icon: "/favicon.ico",
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
            <body className="antialiased bg-[#05070c] font-sans">{children}</body>
        </html>
    );
}
