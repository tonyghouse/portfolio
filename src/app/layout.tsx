import './globals.css';
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from '@/components/navbar';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Tony Ghouse",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Navbar/>
          {children}
          </body>
    </html>
  );
}


