import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import clsx from "clsx";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const Navigation = () => {
  const { userId } = useAuth();

  return (
    <div className='flex justify-between'>
      <div className={clsx("flex items-center space-x-4", pacifico.className)}>
        <Image src='/logo.png' alt='Listract Logo' width={40} height={40} />
        <h1 className='text-4xl'>Listract</h1>
      </div>
      <div className='bg-gray-300 border-gray-400 rounded-lg px-4 py-1 border-2'>
        {userId ? (
          <UserButton showName={true} />
        ) : (
          <Link href={"/sign-in"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
