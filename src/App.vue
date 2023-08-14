<script setup lang="ts">
import SideBar from "./components/common/SideBar.vue";
import NavBar from "./components/common/NavBar.vue";
</script>

<template>
  <div class="main-container">
    <div class="navbar-container">
      <NavBar />
    </div>

    <div style="display: flex">
      <div class="sidebar-container">
        <SideBar />
      </div>
      <div class="workspace-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100vw;
  height: 100%;
}
.sidebar-container {
  border-right: 1px solid var(--border-color);
}

.workspace-container {
  padding: 1rem;
}
</style>
