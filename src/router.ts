// 1. Define route components.
// These can be imported from other files
import HomePage from "./components/homepage/HomePage.vue";
import PrintCallNumber from "./components/reports/PrintCallNumber.vue";
import { createRouter, createWebHistory } from "vue-router";
import { SideBarTypeEnum, useSideBarStore } from "./store/sideBarStore.ts";
import BookList from "./components/catalog/BookList.vue";
import BorrowBook from "./components/catalog/BorrowBook.vue";
import DashBoard from "./components/dashboard/DashBoard.vue";
import AdminPage from "./components/admin/AdminPage.vue";
import SettingsPage from "./components/settings/SettingsPage.vue";
import ImportBooks from "./components/settings/ImportBooks.vue";

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
    path: "/dashboard",
    children: [
      {
        path: "",
        component: DashBoard,
        meta: {
          sideBarType: SideBarTypeEnum.DASHBOARD,
        },
      },
    ],
  },
  {
    path: "/catalog",
    children: [
      {
        path: "books",
        component: BookList,
        meta: {
          sideBarType: SideBarTypeEnum.CATALOG,
        },
      },
      {
        path: "borrow",
        component: BorrowBook,
        meta: {
          sideBarType: SideBarTypeEnum.CATALOG,
        },
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
  {
    path: "/admin",
    children: [
      {
        path: "",
        component: AdminPage,
        meta: {
          sideBarType: SideBarTypeEnum.ADMIN,
        },
      },
    ],
  },
  {
    path: "/settings",
    children: [
      {
        path: "",
        component: SettingsPage,
        meta: {
          sideBarType: SideBarTypeEnum.SETTINGS,
        },
      },
      {
        path: "import-books",
        component: ImportBooks,
        meta: {
          sideBarType: SideBarTypeEnum.SETTINGS,
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
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to) => {
  const sideBarStore = useSideBarStore();

  sideBarStore.sideBarType = to.meta.sideBarType;
});

export default router;
