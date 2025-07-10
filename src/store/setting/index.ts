import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSettingStore = defineStore('SettingStore', () => {
  const title = ref<string[]>([])
  const setTitle = (data: string[]) => {
    title.value = data
  }
  return { title, setTitle }
})
