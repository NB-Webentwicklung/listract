import React from "react";
import Image from "next/image";

import { type GoogleBooksVolume } from "@/types/google-books";

interface SearchResultsProps {
  searchResults: GoogleBooksVolume[];
}

const SearchResults = ({ searchResults }: SearchResultsProps) => {
  return (
    <div>
      {searchResults.map((book) => {
        const imageLinks = book.volumeInfo.imageLinks;
        const authors = book.volumeInfo.authors;

        const imageUrl = imageLinks
          ? imageLinks.thumbnail
          : "https://placehold.co/75x112/png";

        return (
          <div
            key={book.id}
            className='border-2 border-gray-400 my-2 rounded-lg px-3 py-2 flex space-x-4'
          >
            <Image
              className='rounded-lg'
              src={imageUrl}
              alt={"book cover"}
              width={75}
              height={112}
            />
            <div className='py-4'>
              <h3 className='text-lg font-semibold'>{book.volumeInfo.title}</h3>

              <div className='text-sm flex space-x-4 pt-2'>
                <p>{authors ? authors.join(", ") : "No authors found"}</p>
                <p>{book.volumeInfo.publishedDate.split("-")[0]}</p>
                <p>{book.volumeInfo.pageCount} pages</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
