<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import TabMenu from "primevue/tabmenu";

const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    route: "/",
  },
  {
    label: "Dashboard",
    icon: "pi pi-fw pi-calendar",
    route: "/dashboard",
  },
  {
    label: "Catalog",
    icon: "pi pi-fw pi-pencil",
    route: "/catalog",
  },
  {
    label: "Reports",
    icon: "pi pi-fw pi-file",
    route: "/reports/call-number",
  },
  {
    label: "Admin",
    icon: "pi pi-fw pi-cog",
    route: "/admin",
  },
  {
    label: "Settings",
    icon: "pi pi-fw pi-cog",
    route: "/settings",
  },
]);

onMounted(() => {
  active.value = items.value.findIndex(
    (item) => route.path === router.resolve(item.route).path,
  );
});

watch(
  route,
  () => {
    active.value = items.value.findIndex(
      (item) => route.path === router.resolve(item.route).path,
    );
  },
  { immediate: true },
);
</script>

<template>
  <div class="navbar-container">
    <TabMenu v-model:activeIndex="active" :model="items">
      <template #item="{ label, item, props }">
        <router-link
          v-if="item.route"
          :to="item.route"
          custom
          v-slot="routerProps"
        >
          <a
            :href="routerProps.href"
            v-bind="props.action"
            @click="($event) => routerProps.navigate($event)"
            @keydown.enter.space="($event) => routerProps.navigate($event)"
          >
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>
      </template>
    </TabMenu>
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
}

.navbar-title {
  padding: 0px 20px;
  width: 200px;
  border-right: 2px solid var(--surface-d);
}
</style>
