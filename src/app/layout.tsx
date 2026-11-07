import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4, Roboto } from "next/font/google";
import "./globals.css";
import { AutoUpdate } from "@/components/AutoUpdate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Prathamesh Jadhav",
    default: "Prathamesh Jadhav — Full Stack Developer",
  },
  description:
    "Prathamesh Jadhav is a Full Stack Developer based in Mumbai, India, specializing in PHP, Laravel, JavaScript, React and Next.js.",
  metadataBase: new URL("https://prathameshjadhav.com"),
  openGraph: {
    title: "Prathamesh Jadhav — Full Stack Developer",
    description:
      "Full Stack Developer based in Mumbai, India. PHP, Laravel, JavaScript, React and Next.js.",
    type: "website",
    url: "https://prathameshjadhav.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prathamesh Jadhav",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AutoUpdate />
        {children}
      </body>
    </html>
  );
}
