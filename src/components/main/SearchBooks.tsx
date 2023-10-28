import React, { use, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Search } from "lucide-react";
import { useQuery } from "react-query";

import { getBooksBySearchTerm } from "@/actions/book";
import { type GoogleBooksVolume } from "@/types/google-books";

const SearchsBooks = () => {
  const [searchResults, setSearchResults] = useState<
    GoogleBooksVolume[] | null
  >(null);

  return (
    <div>
      <Formik
        initialValues={{ searchTerm: "" }}
        onSubmit={async (values) => {
          const searchResult = await getBooksBySearchTerm(values.searchTerm);
          if (!searchResult) {
            setSearchResults([]);
            return;
          }
          setSearchResults(searchResult);
        }}
      >
        <Form>
          <div className='flex items-center w-2/3 mx-auto relative'>
            <Field
              className='px-4 py-3 w-full border border-gray-300 mx-auto flex rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              name='searchTerm'
              type='text'
              placeholder='Search for book titles, authors, ...'
            />
            <button type='submit'>
              <Search
                size={20}
                className='absolute right-5 top-1/2 transform -translate-y-1/2'
              />
            </button>
          </div>
        </Form>
      </Formik>
      <div className='mt-6'>
        {searchResults && searchResults.length > 0 && (
          <div>
            {searchResults.map((book) => (
              <div
                key={book.id}
                className='border-2 border-gray-400 my-2 rounded-lg px-4 py-2'
              >
                <div>
                  <h3 className='text-lg font-semibold'>
                    {book.volumeInfo.title}
                  </h3>
                  <p className='text-sm'>
                    {book.volumeInfo.authors || "no author"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {searchResults && searchResults.length === 0 && (
          <p className='text-center'>No books found.</p>
        )}
        {!searchResults && (
          <p className='text-center'>Search for books first</p>
        )}
      </div>
    </div>
  );
};

export default SearchsBooks;
