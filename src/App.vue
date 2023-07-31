<script setup lang="ts"></script>

<template>
  <div>
    <div><router-link to="/">Go to Home</router-link></div>
    <div>
      <router-link to="/print-call-number">Go to Print Call Number</router-link>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
