import { PageNavSmall } from "@/components/PageNavSmall";
import Image from "next/image";
import maple from "../public/maple.jpeg";
import { NextPage } from "@/components/NextPage";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="w-4/5 p-5">
      <PageNavSmall />
      <h1 className="h1">Introduction</h1>
      <Image
        src={maple}
        className="w-full h-[30vh] object-cover mt-5"
        alt="maple"
      />
      <p className="mt-5">
        React Daraja is a typesafe Javascript library designed to simplify
        interactions with the Safaricom Daraja API. This library is suitable for
        both Node.js and React environments, allowing developers to seamlessly
        integrate M-Pesa payments into their applications in an efficient,
        modern and stress free manner.
      </p>
      <NextPage nextHref="installation" />
      <SmoothScroll />
    </main>
  );
}
