import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Transvioglobal",
  description: "Transvioglobal - Your Trusted Logistics Partner",
   icons: {
    icon: "/favicon.ico", // /public/favicon.ico
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#141414] ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="overflow-hidden">
          {children}
        
        </main>
        <Footer />
      </body>
    </html>
  );
}
