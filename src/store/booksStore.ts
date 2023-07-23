import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Book } from "../api/bookApi.ts";
import api from "../api";

export const useBooksStore = defineStore("bookStore", () => {
  const state = reactive<{ books: Book[] }>({ books: [] });
  const count = ref<number>(0);
  const currentPage = ref<number>(0);
  const hasNextPage = ref<boolean>(false);
  async function getBooks() {
    const paginated_books = await api.bookApi.getBooks(1);

    state.books = paginated_books.results;
    count.value = paginated_books.count;
    currentPage.value = 1;
    console.log(!!paginated_books.next);
    hasNextPage.value = !!paginated_books.next;
  }
  async function getBooksNextPage() {
    const paginated_books = await api.bookApi.getBooks(currentPage.value + 1);

    for (const book of paginated_books.results) {
      const index = state.books.findIndex((b) => b.id === book.id);
      if (index === -1) {
        state.books.push(book);
      }
    }
    count.value = paginated_books.count;
    currentPage.value++;
    hasNextPage.value = !!paginated_books.next;
  }

  return { state, getBooks, getBooksNextPage, hasNextPage };
});
