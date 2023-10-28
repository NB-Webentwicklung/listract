"use client";

import { useAuth } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

import Navigation from "@/components/layout/Navigation";
import SearchsBooks from "@/components/main/SearchBooks";

const queryClient = new QueryClient();

export default function Home() {
  const { userId } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' richColors />

      <main className='container px-2 mx-auto w-full md:w-2/3 xl:w-1/2 mt-12'>
        <Navigation />
        <div className='mt-8'>
          {userId ? (
            <SearchsBooks />
          ) : (
            <p className='text-center'>Please sign-in first.</p>
          )}
        </div>
      </main>
    </QueryClientProvider>
  );
}
