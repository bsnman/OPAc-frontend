import { defineStore } from "pinia";
import { computed, ref } from "vue";

export enum SideBarTypeEnum {
  HOME = "HOME",
  DASHBOARD = "DASHBOARD",
  CATALOG = "CATALOG",
  REPORTS = "REPORTS",
  ADMIN = "ADMIN",
  SETTINGS = "SETTINGS",
}

export enum LinkType {
  LINK,
  DIVIDER,
}

type SideBarLink = {
  label: string;
  path: string;
  type: LinkType;
};
type AllSidebarLinkType = Partial<
  Record<keyof typeof SideBarTypeEnum, SideBarLink[]>
>;

const ALL_SIDEBAR_LINK: AllSidebarLinkType = {
  [SideBarTypeEnum.HOME]: [],
  [SideBarTypeEnum.DASHBOARD]: [],
  [SideBarTypeEnum.CATALOG]: [
    {
      label: "Books",
      path: "/catalog/books",
      type: LinkType.LINK,
    },

    {
      label: "Borrow",
      path: "/catalog/borrow",
      type: LinkType.LINK,
    },
  ],
  [SideBarTypeEnum.REPORTS]: [
    {
      label: "Call Number",
      path: "/reports/call-number",
      type: LinkType.LINK,
    },
  ],
  [SideBarTypeEnum.ADMIN]: [],
  [SideBarTypeEnum.SETTINGS]: [
    {
      label: "Import Books",
      path: "/settings/import-books",
      type: LinkType.LINK,
    },
  ],
};

export const useSideBarStore = defineStore("sideBarStore", () => {
  const sideBarType = ref(SideBarTypeEnum.HOME);

  const sidebar_links = computed(() => {
    return ALL_SIDEBAR_LINK[sideBarType.value];
  });

  return { sideBarType, sidebar_links };
});
