import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Book } from "../api/bookApi.ts";
import api from "../api";

export const useBooksStore = defineStore("bookStore", () => {
  const books = reactive<{ books: Book[] }>({ books: [] });
  const count = ref<number>(0);
  const currentPage = ref<number>(0);
  async function getBooks() {
    const paginated_books = await api.bookApi.getBooks(1);

    books.books = paginated_books.results;
    count.value = paginated_books.count;
    currentPage.value = 1;
  }
  async function getBooksNextPage() {
    const paginated_books = await api.bookApi.getBooks(currentPage.value + 1);

    books.books = paginated_books.results;
    count.value = paginated_books.count;
    currentPage.value++;
  }

  return { books, getBooks, getBooksNextPage };
});
