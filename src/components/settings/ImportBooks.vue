<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBooksStore } from "../../store/booksStore.ts";

const bookStore = useBooksStore();
const formEl = ref<HTMLFormElement>();
async function clickImportExcel() {
  const formData = new FormData(formEl.value);

  const imported = await bookStore.importFile(formData);

  if (imported) {
    bookStore.getBooks();
  }
}

onMounted(() => {
  bookStore.getBooks();
});
</script>

<template>
  <div>
    <h2 class="title">Julie Amores OPAC</h2>

    <div>
      <div>Number of books</div>
      <div>
        {{ bookStore.count }}
      </div>
    </div>

    <div>
      <form ref="formEl" @submit.prevent>
        <input name="selected-file" type="file" />
        <button @click="clickImportExcel">Import Excel</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 24px;
}
</style>
