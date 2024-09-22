import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import ClientNavbar from "./components/Navbar/ClientNavbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Padjadjaran Career Expo 2024",
  description: "Padjadjaran Career Expo 2024",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} min-h-screen bg-[#F2F2F2] dark:bg-[#000B14]`}>  
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClientNavbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
