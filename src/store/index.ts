import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return { 
      themeName: "light",
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    changeTheme(theme: string) {
      this.themeName = theme
    },
  },
})