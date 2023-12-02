import React from "react";
import Link from "next/link";
import { Search, Share2, Star } from "lucide-react";

const Landing = () => {
  const features = [
    {
      title: "Find every book",
      icon: <Search />,
      description:
        "Search for any book you can think of and add it to your library.",
    },
    {
      title: "Share your library",
      icon: <Share2 />,

      description:
        "Share your library with others and see what books they have enjoyed.",
    },
    {
      title: "Find new books",
      icon: <Search />,

      description:
        "See what books others have enjoyed and possibly find a new book to read.",
    },
    {
      title: "Save your favorite books",
      icon: <Star />,

      description:
        "Save your favorite books to your library and share them with others.",
    },
  ];

  return (
    <div>
      <p className='w-2/3 mx-auto text-6xl text-center'>
        A place where you can store books you enjoy
      </p>
      <p className='text-lg text-slate-700 w-2/3 mx-auto pt-6 text-center'>
        This is a place where you can store books you enjoy and share them with
        others. You can also see what books others have enjoyed and possibly
        find a new book to read.
      </p>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {features.map((feature) => (
          <div className='bg-yellow-200 p-3 rounded-md' key={feature.title}>
            <div className='flex space-x-2 items-center'>
              {feature.icon}
              <h3 className='text-2xl font-bold'>{feature.title}</h3>
            </div>
            <p className='text-lg text-slate-600'>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className='mt-12 flex justify-center'>
        <Link
          href='/signup'
          className='bg-green-500 py-3 text-lg w-1/2 text-center rounded-md'
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
