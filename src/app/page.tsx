"use client";

import { Toaster } from "sonner";

import Navigation from "@/components/layout/Navigation";
import CreateCollection from "@/components/main/CreateCollection";

export default function Home() {
  return (
    <>
      <Toaster position='top-center' richColors />

      <main className='container mx-auto w-1/2 mt-12'>
        <Navigation />
        <div className='mt-16'>
          <CreateCollection />
        </div>
      </main>
    </>
  );
}
