<script setup lang="ts"></script>

<template>
  <div class="sidebar-component">
    <div><router-link to="/">Import File</router-link></div>
    <div>
      <router-link to="/print-call-number">Print Call Number</router-link>
    </div>
    <div>
      <router-link to="/print-call-number">Teachers</router-link>
    </div>
  </div>
</template>

<style scoped>
.sidebar-component {
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
</style>
