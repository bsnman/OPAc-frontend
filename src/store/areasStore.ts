import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../api";
import { AreaCodeMapping, AreaMapping } from "../api/bookApi.ts";

export const useAreasStore = defineStore("areaStore", () => {
  const area_mapping = ref<AreaMapping>({});
  const area_code_mapping = ref<AreaCodeMapping>({});

  async function getAreaMapping() {
    area_mapping.value = await api.bookApi.getAreaMapping();
  }
  async function getAreaCodeMapping() {
    area_code_mapping.value = await api.bookApi.getAreaCodeMapping();
  }

  return {
    area_mapping,
    area_code_mapping,
    getAreaMapping,
    getAreaCodeMapping,
  };
});
