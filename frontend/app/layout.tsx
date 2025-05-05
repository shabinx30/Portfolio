import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import "./globals.css";


const majorMonoDisplay = Krona_One({
  weight: "400",
  variable: "--major-mono-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shabeen Sharih | Full Stack Developer & Web Designer",
  description: "I'm Shabeen Sharih, a passionate Full Stack Developer specializing in React.js, Next.js, and Node.js. I build responsive, high-performance websites and web applications that enhance user experience.",
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
    "Shabeen Sharih"
  ],
  authors: [
    {
      name: "Shabeen Sharih",
      url: "https://tungstenz.online/" // Replace with your portfolio link
    }
  ],
  robots: "index, follow", // Ensures search engines index your site
  openGraph: {
    title: "Shabeen Sharih | Full Stack Developer & Web Designer",
    description: "Explore my portfolio showcasing web development projects built with React.js, Next.js, and Node.js.",
    url: "https://tungstenz.online/", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://instagram.fcok10-4.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok10-4.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AFeCYm11zBCiIvc8RQQ7g8rjat-Hg43kkkkkwySQw51EW8GmSVV9uSRTuohHRb8jRZXfGz8qY4J34vgW76V-eT9&_nc_ohc=RUriHpRQhYsQ7kNvgFuVKph&_nc_gid=752596427b0a4110bb2db4995adcc603&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYFB6aPeQ4gRFk4AQtXOU8x_3p2yRVnSrlcsYGcB7Ojogw&oe=67D3705A&_nc_sid=7d3ac5", // Add a relevant image URL
        width: 1200,
        height: 630,
        alt: "Shabeen Sharih - Full Stack Developer"
      }
    ]
  }
};


import AppProvider from "../context/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body
          className={`${majorMonoDisplay.variable} antialiased`}
        >
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
