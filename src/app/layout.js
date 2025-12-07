import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    metadataBase: new URL("https://www.amolrathod.dev"),
    title: "Amol Rathod | Full Stack Developer",
    description: "Amol Rathod — Full Stack Developer (MERN & Flask). Portfolio and projects.",
    openGraph: {
        title: "Amol Rathod | Full Stack Developer",
        description: "Portfolio showcasing full-stack projects, cloud work, and security interests.",
        url: "https://www.amolrathod.dev",
        siteName: "Amol Rathod Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "tr_TR",
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
        <html lang="en">
            <head>
                {/* Google Fonts için performans iyileştirmesi */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            </head>
            <body
                className={`${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
