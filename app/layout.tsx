import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import MaxWidthWrapper from "@/app/_components/MaxWithWrapper";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./_components/ThemeProvider";
import Footer from "./_components/Footer";
import CartProvider from "./_components/Providers";
import SupabaseProvider from "@/providers/SupabaseProvider";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makroner&Co",
  description: "Beste sted for å finne makroner i Norge",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <SupabaseProvider>
            <CartProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
            </CartProvider>
            </SupabaseProvider>
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
