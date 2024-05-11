import { Inter } from "next/font/google";
import { HomePage } from "@/components/component/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
