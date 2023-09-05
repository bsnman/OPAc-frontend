<script setup lang="ts">
import SideBar from "./components/common/SideBar.vue";
import NavBar from "./components/common/NavBar.vue";
</script>

<template>
  <div class="main-container">
    <div style="display: flex; height: 100%">
      <SideBar />
      <div>
        <NavBar />
        <div class="workspace-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100vw;
  height: 100%;
}

.workspace-container {
  padding: 1rem;
}
</style>
