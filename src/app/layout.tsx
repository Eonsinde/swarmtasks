import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { constructMetadata } from "@/lib/construct-metadata"
import { SessionProvider } from "next-auth/react"
import ConvexClientProvider from "@/providers/convex-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
