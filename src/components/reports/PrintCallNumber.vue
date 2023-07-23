<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBooksStore } from "../../store/booksStore.ts";

const printPageElement = ref<HTMLDivElement | null>(null);

const { books, getBooks } = useBooksStore();

onMounted(() => {
  getBooks();
});

function print() {
  window.print();
}
</script>

<template>
  <div class="print-call-number">
    <div class="printable">
      <div ref="printPageElement" class="print-page">
        <div
          v-for="book in books.books"
          class="call-number-container"
          :key="book.accession_number"
        >
          <p>
            {{ book.library }}<template v-if="book.area">/</template
            >{{ book.area }}
          </p>
          <p>
            {{ book.ddc }}
          </p>
          <p>
            {{ book.author_number }}
          </p>
          <p>
            {{ book.publication_year }}
          </p>
          <p v-if="book.copy_number">
            {{ book.copy_number }}
          </p>
        </div>
      </div>
    </div>
    <button @click="print">Print</button>
  </div>
</template>

<style scoped lang="scss">
.print-call-number {
  width: 640pt;
}

.print-page {
  display: flex;
  flex-wrap: wrap;
}

.call-number-container {
  font-family: "Lucida Sans Unicode";
  font-weight: bold;
  font-size: 12.2pt;
  color: #111;

  min-width: 77pt;
  height: 103pt;
  border: 1px solid #000;
  margin: 11px 7px;
  padding: 5pt 8pt;
  page-break-inside: avoid;

  p {
    margin: 0;
    line-height: 19pt;
    text-align: left;
  }
}
</style>
