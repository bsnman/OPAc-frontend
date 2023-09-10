<script setup lang="ts">
import { useBooksStore } from "../../store/booksStore.ts";
import BookItem from "./components/BookItem.vue";
import { onMounted, ref } from "vue";
import InputText from "primevue/inputtext";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";

const bookStore = useBooksStore();

onMounted(() => {
  bookStore.getBooks();
});

const selectedDDCFilter = ref();
const DDC = ref([
  { name: "000-099", code: "000" },
  { name: "100-199", code: "100" },
  { name: "200-299", code: "200" },
  { name: "300-399", code: "300" },
  { name: "400-499", code: "400" },
  { name: "500-599", code: "500" },
  { name: "600-699", code: "600" },
  { name: "700-799", code: "700" },
  { name: "800-899", code: "800" },
  { name: "900-999", code: "900" },
]);

const selectedLibrary = ref();
const libraries = ref([
  { name: "Elementary", code: "ELEM" },
  { name: "Junior High", code: "JHS" },
]);
</script>

<template>
  <div>
    <div>
      <InputText placeholder="Search Title"></InputText>
      &nbsp;
      <MultiSelect
        v-model="selectedDDCFilter"
        placeholder="Filter DDC"
        :options="DDC"
        optionLabel="name"
      />
      &nbsp;
      <Dropdown
        v-model="selectedLibrary"
        :options="libraries"
        optionLabel="name"
        placeholder="Filter Library"
        show-clear
      />
    </div>
    <br />
    <div class="book-list">
      <BookItem
        v-for="book in bookStore.state.books"
        :key="book.id"
        :book="book"
      ></BookItem>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
