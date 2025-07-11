import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSettingStore = defineStore('settingStore', () => {
  const count = ref(0)
  const addCount = () => {
    count.value++
  }
  return { count, addCount }
})
