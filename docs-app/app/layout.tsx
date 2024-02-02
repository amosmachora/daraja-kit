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
  title: { template: "%s | React Daraja Docs", default: "React Daraja Docs" },
  description:
    "React Daraja is a typesafe Javascript library designed to simplify interactions with the Safaricom Daraja API, specifically for STK push requests. This library is suitable for both Node.js and React environments, allowing developers to seamlessly integrate M-Pesa payments into their applications.",
  twitter: {
    images: ["https://react-daraja.vercel.app/ross.jpeg"],
  },
  openGraph: {
    images: ["https://react-daraja.vercel.app/ross.jpeg"],
  },
  metadataBase: new URL("https://react-daraja.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen flex flex-col dark:bg-dark`}>
        <Nav />
        <div className="flex h-[92%] w-full dark:bg-dark">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
