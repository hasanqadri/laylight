import type { Metadata } from "next";
import "./globals.css";

const metadataBase = new URL('https://laylight.us') // Replace with your domain

export const metadata: Metadata = {
    metadataBase: metadataBase,
    title: "Laylight",
    description: "Your personal job coach",
    openGraph: {
        title: "Laylight Career Consulting",
        description: "Navigate your next big move. Your path to the top, illuminated.",
        url: "https://laylight.com",
        siteName: "Laylight",
        images: [
            {
                url: "https://laylight.com/images/share-preview.png", // Must be an absolute URL
                width: 1200,
                height: 630,
                alt: "Laylight Career Consulting Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>Laylight</title>
        </head>
        <body className="antialiased">
            {children}
        </body>
        </html>
    );
}
