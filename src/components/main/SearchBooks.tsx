import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Search } from "lucide-react";

import { getBooksBySearchTerm } from "@/actions/book";
import { type GoogleBooksVolume } from "@/types/google-books";

import SearchResults from "./SearchResults";

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
          <div className='flex items-center w-full md:w-2/3 mx-auto relative'>
            <Field
              className='px-4 py-3 w-full border border-gray-300 mx-auto flex rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              name='searchTerm'
              type='text'
              placeholder='Search for books by title, author, ...'
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
          <SearchResults searchResults={searchResults} />
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
