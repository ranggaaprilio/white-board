import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whiteboard",
  description:
    "Whiteboard is a collaborative tool for teams to brainstorm ideas, plan projects, and get work done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
