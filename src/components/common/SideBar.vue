<script setup lang="ts">
import { useSideBarStore } from "../../store/sideBarStore.ts";

const sideBarStore = useSideBarStore();
</script>

<template>
  <div class="sidebar-component">
    <div class="navbar-title">
      <h3>OPAC</h3>
    </div>
    <div
      v-for="sidebar_link in sideBarStore.sidebar_links"
      :key="sidebar_link.path"
    >
      <router-link :to="sidebar_link.path">{{
        sidebar_link.label
      }}</router-link>
    </div>
  </div>
</template>

<style scoped>
.sidebar-component {
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-right: 2px solid var(--surface-d);
}
</style>
