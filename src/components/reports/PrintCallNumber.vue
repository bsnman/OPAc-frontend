<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBooksStore } from "../../store/booksStore.ts";
import { useAreasStore } from "../../store/areasStore.ts";
import { Book } from "../../api/bookApi.ts";
import PrintableDiv from "../common/PrintableDiv.vue";

const printPageElement = ref<HTMLDivElement | null>(null);
const smallBox = ref<boolean>(false);

const bookStore = useBooksStore();
const areaStore = useAreasStore();

onMounted(() => {
  bookStore.getBooks();
  areaStore.getAreaCodeMapping();
});

function print() {
  window.print();
}

function loadMoreClick() {
  bookStore.getBooksNextPage();
}

function getLocatorCode(book: Book): string {
  const library = book.library;
  let locator_code = library;

  if (book.areas.length > 0) {
    locator_code += `/${book.areas.join("")}`;
  }
  return locator_code;
}
</script>

<template>
  <div class="print-call-number">
    <div>
      <input type="checkbox" v-model="smallBox" />
      Small Box
    </div>
    <button @click="print">Print</button>
    &nbsp;
    <button v-if="bookStore.hasNextPage" @click="loadMoreClick">
      Load More
    </button>
    <PrintableDiv>
      <div ref="printPageElement" class="print-page">
        <div
          v-for="book in bookStore.state.books"
          class="call-number-container"
          :class="{ 'small-box': smallBox }"
          :key="book.accession_number"
        >
          <p>
            {{ getLocatorCode(book) }}
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
    </PrintableDiv>
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

  min-width: 94pt;
  height: 115pt;
  border: 1px solid #000;
  margin: 11px 7px;
  padding: 5pt 8pt;
  page-break-inside: avoid;

  p {
    margin: 0;
    line-height: 19pt;
    text-align: left;
  }

  &.small-box {
    font-size: 7.8pt;
    height: 76.5pt;
    min-width: 57pt;

    p {
      line-height: 13pt;
    }
  }
}
</style>
