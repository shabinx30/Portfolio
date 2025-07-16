import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Shabeen Sharih | Full Stack Developer & Web Designer",
    description:
        "I'm Shabeen Sharih, a passionate Full Stack Developer specializing in React.js, Next.js, and Node.js. I build responsive, high-performance websites and web applications that enhance user experience.",
    keywords: [
        "Full Stack Developer",
        "Web Developer",
        "React.js Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "Backend Development",
        "Responsive Web Design",
        "UI/UX Design",
        "Portfolio Website",
        "Web Development Services",
        "Freelance Web Developer",
        "Shabeen Sharih",
    ],
    authors: [
        {
            name: "Shabeen Sharih",
            url: "https://shabeensharih.tungstenz.online/", // Replace with your portfolio link
        },
    ],
    robots: "index, follow", // Ensures search engines index your site
    openGraph: {
        title: "Shabeen Sharih | Full Stack Developer & Web Designer",
        description:
            "Explore my portfolio showcasing web development projects built with React.js, Next.js, and Node.js.",
        url: "https://shabeensharih.tungstenz.online/", // Replace with your actual URL
        type: "website",
        images: [
            {
                url: "/Images/profile.jpg",
                width: 462,
                height: 462,
                alt: "Shabeen Sharih - Full Stack Developer",
            },
        ],
    },
};

import AppProvider from "../context/AppContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
