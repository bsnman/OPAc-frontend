import bookApi from "./bookApi.ts";

export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export default {
  bookApi: bookApi,
};
