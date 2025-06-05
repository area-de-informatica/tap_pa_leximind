import { defineStore } from 'pinia'

// Definimos la interfaz para tipar correctamente los datos de contenido
interface Content {
  id: number;
  title: string;
  body: string;
  // Agrega aquí más propiedades según la estructura de tu contenido
  // Por ejemplo: author, createdAt, updatedAt, etc.
}

export const useContentStore = defineStore('content', {
  state: () => ({
    contents: [] as Content[],
    currentContent: null as Content | null,
    isLoading: false,
    error: null as string | null
  }),
  
  getters: {
    // Getter para obtener la cantidad de contenidos
    contentCount: (state) => state.contents.length,
    
    // Getter para verificar si hay un contenido seleccionado
    hasCurrentContent: (state) => state.currentContent !== null,
    
    // Getter para obtener un contenido por ID
    getContentById: (state) => (id: number) => {
      return state.contents.find(c => c.id === id) || null
    }
  },
  
  actions: {
    /**
     * Obtiene los contenidos desde la API
     */
    async fetchContents() {
      this.isLoading = true
      this.error = null
      
      try {
        const response = await $fetch('/api/content', { method: 'GET' }) as Content[]
        this.contents = response
      } catch (error) {
        console.error('Error fetching contents:', error)
        this.error = 'No fue posible cargar los contenidos'
      } finally {
        this.isLoading = false
      }
    },
    
    /**
     * Establece el contenido actual
     * @param content - El contenido a establecer como actual
     */
    setCurrentContent(content: Content) {
      this.currentContent = { ...content }
    },
    
    /**
     * Establece el contenido actual por ID
     * @param id - ID del contenido a establecer como actual
     */
    setCurrentContentById(id: number) {
      const content = this.getContentById(id)
      if (content) {
        this.currentContent = { ...content }
      }
    },
    
    /**
     * Actualiza un contenido existente
     * @param updatedContent - El contenido con los datos actualizados
     */
    updateContent(updatedContent: Content) {
      const index = this.contents.findIndex(c => c.id === updatedContent.id)
      if (index !== -1) {
        // Reemplazar el contenido completo para mantener la reactividad
        this.contents[index] = { ...updatedContent }
        
        // Si el contenido actual es el que se actualizó, también actualizamos currentContent
        if (this.currentContent && this.currentContent.id === updatedContent.id) {
          this.currentContent = { ...updatedContent }
        }
      }
    },
    
    /**
     * Reinicia el estado del contenido actual
     */
    clearCurrentContent() {
      this.currentContent = null
    }
  }
})
