// 1. Define route components.
// These can be imported from other files
import HomePage from "./components/homepage/HomePage.vue";
import PrintCallNumber from "./components/reports/PrintCallNumber.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { SideBarTypeEnum, useSideBarStore } from "./store/sideBarStore.ts";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: HomePage,
      },
    ],
  },
  {
    path: "/reports",
    children: [
      {
        path: "call-number",
        component: PrintCallNumber,
        meta: {
          sideBarType: SideBarTypeEnum.REPORTS,
        },
      },
    ],
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to) => {
  const sideBarStore = useSideBarStore();

  console.log(to.meta.sideBarType);

  sideBarStore.sideBarType = to.meta.sideBarType;
});

export default router;
