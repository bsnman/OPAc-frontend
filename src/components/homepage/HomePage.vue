<script setup lang="ts">
import { ref } from "vue";
import { useBooksStore } from "../../store/booksStore.ts";

const bookStore = useBooksStore();
const formEl = ref<HTMLFormElement>();
function clickImportExcel() {
  const formData = new FormData(formEl.value);

  bookStore.importFile(formData);
}
</script>

<template>
  <div>
    <h2 class="title">Julie Amores OPAC</h2>

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
