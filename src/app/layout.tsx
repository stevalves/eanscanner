import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const font = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EANScanner",
  description:
    "Uma aplicação que permite a busca de informações detalhadas de um produto a partir do seu código de barras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
