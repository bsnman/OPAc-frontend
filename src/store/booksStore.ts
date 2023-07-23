import { defineStore } from 'pinia'
import axios from "../api/axios.ts";



export const useBooksStore = defineStore('bookStore', () => {
    const books = reactive('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function getBookStore() {
    }

    return { count, name, doubleCount, increment }
})