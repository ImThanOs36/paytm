import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../Providers";
import { SessionProviderClient } from "../components/SessionProviderClient"; // Import the Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderClient>
          <Providers>
            {children}
          </Providers>
        </SessionProviderClient>
      </body>
    </html>
  );
}
