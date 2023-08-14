<script setup lang="ts"></script>

<template>
  <div class="navbar-component">
    <div>
      <div class="app-title">Julie Amores OPAC</div>
    </div>
    <div class="app-router-links">
      <div><router-link to="/">Home</router-link></div>
      <div>
        <router-link to="/print-call-number">Dashboard</router-link>
      </div>
      <div>
        <router-link to="/print-call-number">Catalog</router-link>
      </div>
      <div>
        <router-link to="/reports/call-number">Reports</router-link>
      </div>
      <div>
        <router-link to="/reports">Admin</router-link>
      </div>
      <div>
        <router-link to="/reports">Settings</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar-component {
  height: calc(28px + 2rem);
  display: flex;
  border-bottom: 1px solid #aaa;
}

.app-title {
  width: 200px;
  padding: 1rem;
  font-size: 1.2em;
  font-weight: bold;
  border-right: 1px solid var(--border-color);
}

.app-router-links {
  padding: 1rem;
  display: flex;

  > div > a {
    margin: 0 1rem;
  }
}
</style>
