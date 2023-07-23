import axios from "./axios.ts";
import urls from "./urls.ts";
import { PaginatedResponse } from "./index.ts";

export type Book = {
  id: number;
  library: string;
  area: string[];
  ddc: string;
  author_number: string;
  publication_year: number;
  accession_number: string;
  copy_number: string;
  catalogue_number: string;
};

export default {
  async getBooks(page: number = 1): Promise<PaginatedResponse<Book>> {
    const response = await axios.get<PaginatedResponse<Book>>(
      urls["get_all_books"],
      {
        params: {
          page: page,
        },
      },
    );

    return response.data;
  },
};
