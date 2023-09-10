import axios from "./axios.ts";
import urls from "./urls.ts";
import { PaginatedResponse } from "./index.ts";

export type Book = {
  id: number;
  title: string;
  library: string;
  areas: string[];
  ddc: string;
  author_number: string;
  publication_year: number;
  accession_number: string;
  copy_number: string;
  catalogue_number: string;
  volume: string;
};

export type AreaMapping = {
  [key: string]: string[];
};
export type AreaCodeMapping = {
  [key: string]: string;
};

export default {
  async getBooks(page: number = 1): Promise<PaginatedResponse<Book>> {
    const response = await axios.get<PaginatedResponse<Book>>(
      urls.get_all_books,
      {
        params: {
          page: page,
        },
      },
    );

    return response.data;
  },
  async getAreaMapping(): Promise<AreaMapping> {
    const response = await axios.get<AreaMapping>(urls.get_area_mapping);

    return response.data;
  },
  async getAreaCodeMapping(): Promise<AreaCodeMapping> {
    const response = await axios.get<AreaCodeMapping>(
      urls.get_area_code_mapping,
    );

    return response.data;
  },
  async postImportExcelFile(formData: FormData): Promise<boolean> {
    const response = await axios.post(urls.import_excel_file, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.status == 204;
  },
};
