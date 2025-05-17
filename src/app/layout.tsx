import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HevoData - Enterprise Grade Security",
    description: `Explore HevoData's enterprise-grade security features including role-based access control, region-specific pipeline execution, and trusted compliance.`,
    applicationName: "HevoData",
    generator: "Next.js",
    keywords: ["hevodata", "security", "role based access control", "region specific pipeline", "cloud compliance", "secure data pipelines"],
    authors: [{ name: "Vishal Jagamani", url: "https://vishaljagamani.vercel.app" }],
    creator: "Vishal Jagamani",
    publisher: "HevoData",
    themeColor: "#5b2cc9",
    colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
