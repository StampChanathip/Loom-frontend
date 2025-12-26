import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { QueryProviders } from "@/shared/providers/QueryProvider";
import { Suspense } from "react";
import Loading from "@/components/utils/Loading";
import { ToastProvider } from "@/shared/providers/ToastProvider";
import ToastWrapper from "@/components/utils/ToastWrapper";
import SessionInitializer from "@/components/providers/SessionInitializer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loom - AI Learning Path Visualizer",
  description:
    "Transform any topic into an interactive, explorable visual map showing prerequisites, core concepts, and advanced topics with progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProviders>
        <Suspense fallback={<Loading children={undefined} />}>
          <body
            className={`${inter.variable} ${firaCode.variable} antialiased`}
          >
            <ToastProvider>
              <SessionInitializer />
              <ToastWrapper />
              <Header />
              <div className="w-full p-4 md:p-16">{children}</div>
            </ToastProvider>
          </body>
        </Suspense>
      </QueryProviders>
    </html>
  );
}
