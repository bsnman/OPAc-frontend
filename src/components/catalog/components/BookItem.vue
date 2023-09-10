<script setup lang="ts">
import { Book } from "../../../api/bookApi.ts";

const props = defineProps<{
  book: Book;
}>();
</script>

<template>
  <div class="book-item">
    <div class="book-item-details">
      <div>
        <strong>{{ props.book.title }}</strong> {{ props.book.ddc }}
      </div>
      <div>
        {{ props.book.library }}
      </div>
    </div>
    <div class="book-item-actions">Action</div>
  </div>
</template>

<style scoped lang="scss">
.book-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.book-item-details {
  flex-grow: 1;
}

.book-item-actions {
  width: 100px;
}
</style>
