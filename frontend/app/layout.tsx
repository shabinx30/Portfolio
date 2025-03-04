import type { Metadata } from "next";
import { Geist, Geist_Mono, Anonymous_Pro } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const majorMonoDisplay = Anonymous_Pro({
  weight: "400",
  variable: "--major-mono-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHABEEN SHARIH",
  description: "Hello, i am shabeen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${majorMonoDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
