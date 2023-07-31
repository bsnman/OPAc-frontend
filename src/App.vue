<script setup lang="ts">
import SideBar from "./components/common/SideBar.vue";
</script>

<template>
  <div class="main-container">
    <div class="sidebar-container">
      <SideBar />
    </div>
    <div class="workspace-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  height: 100%;
}
.sidebar-container {
  border-right: 1px solid #000;
}

.workspace-container {
  padding: 1rem;
}
</style>
