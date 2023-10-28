import axios from "axios";

import { GoogleBooksResponse, GoogleBooksVolume } from "@/types/google-books";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";

export const getBooksBySearchTerm = async (
  query: string,
): Promise<GoogleBooksVolume[]> => {
  try {
    const response = await axios.get<GoogleBooksResponse>(apiUrl, {
      params: {
        q: query,
        maxResults: 5,
      },
    });

    const books = response.data.items;

    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
