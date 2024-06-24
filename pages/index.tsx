import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = async () => {
    const res = await fetch(
      "https://vercel-function-page.vercel.app/api/hello"
    );
    console.log(res);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
