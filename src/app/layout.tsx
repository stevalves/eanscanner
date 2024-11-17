import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const font = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EANScanner",
  description: "desc",
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
        </body>
    </html>
  );
}
