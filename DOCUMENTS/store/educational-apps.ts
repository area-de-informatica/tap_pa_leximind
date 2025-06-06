import { defineStore } from 'pinia'

export const useEducationalAppsStore = defineStore('educationalApps', {
  state: () => ({
    apps: [],
    currentApp: null,
  }),
  actions: {
    async fetchApps() {
      try {
        const response = await $fetch('/api/educational-apps', { method: 'GET' })
        this.apps = response
      } catch (error) {
        console.error('Error fetching educational apps:', error)
      }
    },
    setCurrentApp(app) {
      this.currentApp = { ...app }
    },
    updateApp(updatedApp) {
      const index = this.apps.findIndex(a => a.id === updatedApp.id)
      if (index !== -1) {
        this.apps[index] = { ...updatedApp }
        if (this.currentApp && this.currentApp.id === updatedApp.id) {
          this.currentApp = { ...updatedApp }
        }
      }
    },
  },
})
