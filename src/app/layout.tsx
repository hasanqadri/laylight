import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Laylight",
    description: "Your personal job coach",
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
