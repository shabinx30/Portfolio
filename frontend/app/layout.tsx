import type { Metadata } from "next";
import {  Krona_One } from "next/font/google";
import "./globals.css";


const majorMonoDisplay = Krona_One({
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
