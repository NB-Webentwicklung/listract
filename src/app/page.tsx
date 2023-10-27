import { Pacifico } from "next/font/google";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className='container mx-auto w-1/2 mt-12'>
      <div className={clsx("flex items-center space-x-4", pacifico.className)}>
        <Image src='/logo.png' alt='Listract Logo' width={40} height={40} />
        <h1 className='text-4xl'>Listract</h1>
      </div>
      <p className='text-2xl py-8'>Landing Page</p>
    </main>
  );
}
