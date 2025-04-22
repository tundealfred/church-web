import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar"; // Add this import
import Footer from "../components/layout/Footer"; // Add this import

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Your Church Name", // Update this
  description: "Welcome to our church community", // Update this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
