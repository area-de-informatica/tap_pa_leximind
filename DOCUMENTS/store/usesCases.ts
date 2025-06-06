import { defineStore } from 'pinia'

// Definimos la interfaz para tipar correctamente los datos de casos de uso
interface UseCase {
  id: number;
  title: string;
  description: string;
  // Agrega aquí más propiedades según la estructura de tus casos de uso
  // Por ejemplo: category, status, priority, createdAt, etc.
}

export const useCasesStore = defineStore('useCases', {
  state: () => ({
    useCases: [] as UseCase[],
    currentUseCase: null as UseCase | null,
    isLoading: false,
    error: null as string | null
  }),
  
  getters: {
    // Getter para obtener la cantidad de casos de uso
    useCaseCount: (state) => state.useCases.length,
    
    // Getter para verificar si hay un caso de uso seleccionado
    hasCurrentUseCase: (state) => state.currentUseCase !== null,
    
    // Getter para obtener un caso de uso por ID
    getUseCaseById: (state) => (id: number) => {
      return state.useCases.find(u => u.id === id) || null
    }
  },
  
  actions: {
    /**
     * Obtiene los casos de uso desde la API
     */
    async fetchUseCases() {
      this.isLoading = true
      this.error = null
      
      try {
        const response = await $fetch('/api/useCase', { method: 'GET' }) as UseCase[]
        this.useCases = response
      } catch (error) {
        console.error('Error fetching use cases:', error)
        this.error = 'No fue posible cargar los casos de uso'
      } finally {
        this.isLoading = false
      }
    },
    
    /**
     * Establece el caso de uso actual
     * @param useCase - El caso de uso a establecer como actual
     */
    setCurrentUseCase(useCase: UseCase) {
      this.currentUseCase = { ...useCase }
    },
    
    /**
     * Establece el caso de uso actual por ID
     * @param id - ID del caso de uso a establecer como actual
     */
    setCurrentUseCaseById(id: number) {
      const useCase = this.getUseCaseById(id)
      if (useCase) {
        this.currentUseCase = { ...useCase }
      }
    },
    
    /**
     * Actualiza un caso de uso existente
     * @param updatedUseCase - El caso de uso con los datos actualizados
     */
    updateUseCase(updatedUseCase: UseCase) {
      const index = this.useCases.findIndex(u => u.id === updatedUseCase.id)
      if (index !== -1) {
        // Reemplazar el caso de uso completo para mantener la reactividad
        this.useCases[index] = { ...updatedUseCase }
        
        // Si el caso de uso actual es el que se actualizó, también actualizamos currentUseCase
        if (this.currentUseCase && this.currentUseCase.id === updatedUseCase.id) {
          this.currentUseCase = { ...updatedUseCase }
        }
      }
    },
    
    /**
     * Reinicia el estado del caso de uso actual
     */
    clearCurrentUseCase() {
      this.currentUseCase = null
    }
  }
})
