import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Meet AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <body className={cn("antialiased", poppins.className)}>{children}</body>
      </html>
    </TRPCReactProvider>
  );
}
