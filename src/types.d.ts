import "vue-router";
import { SideBarTypeEnum } from "./store/sideBarStore.ts";

// To ensure it is treated as a module, add at least one `export` statement
export {};

declare module "vue-router" {
  interface RouteMeta {
    sideBarType: SideBarTypeEnum;
  }
}
