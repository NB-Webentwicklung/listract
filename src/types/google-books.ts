export interface GoogleBooksVolume {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    pageCount: number;
    categories: string[];
  };
}

export interface GoogleBooksResponse {
  kind: string;
  totalItems: number;
  items: GoogleBooksVolume[];
}
