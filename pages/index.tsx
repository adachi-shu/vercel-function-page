import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();
    console.log(data);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
