import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Aside } from "@/components/Aside";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: { template: "%s | Daraja Kit Docs", default: "Daraja Kit Docs" },
  description:
    "Daraja Kit is a typesafe Javascript library designed to simplify interactions with the Safaricom Daraja API, specifically for STK push requests. This library is suitable for both Node.js and React environments, allowing developers to seamlessly integrate M-Pesa payments into their applications.",
  twitter: {
    images: ["https://daraja-kit.vercel.app/ross.jpeg"],
  },
  openGraph: {
    images: ["https://daraja-kit.vercel.app/ross.jpeg"],
  },
  metadataBase: new URL("https://daraja-kit.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen flex flex-col`}>
        <Nav />
        <div className="flex h-[92%] w-full">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
