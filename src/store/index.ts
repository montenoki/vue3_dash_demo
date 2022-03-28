import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return { 
      themeName: "light",
    }
  },
  actions: {
    updateTheme(theme: string) {
      this.themeName = theme
    },
  },
})