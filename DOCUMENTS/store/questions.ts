import { defineStore } from 'pinia'

// Definino las interfaces para tipar correctamente los datos 
interface Answer {
  a: string;
  b: string;
  c: string;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export const useQuestionsStore = defineStore('questions', {
  state: () => ({
    questions: [] as Question[],
    currentQuestion: null as Question | null,
    isLoading: false,
    error: null as string | null
  }),
  
  getters: {
    // Getter para obtener la cantidad de preguntas
    questionCount: (state) => state.questions.length,
    
    // Getter para verificar si hay una pregunta seleccionada
    hasCurrentQuestion: (state) => state.currentQuestion !== null,
    
    // Getter para obtener una pregunta por ID
    getQuestionById: (state) => (id: number) => {
      return state.questions.find(q => q.id === id) || null
    }
  },
  
  actions: {
    /**
     * Obtiene las preguntas desde la API
     */
    async fetchQuestions() {
      this.isLoading = true
      this.error = null
      
      try {
        const response = await $fetch('/api/questions', { method: 'GET' }) as Question[]
        this.questions = response
      } catch (error) {
        console.error('Error fetching questions:', error)
        this.error = 'No fue posible cargar las preguntas'
      } finally {
        this.isLoading = false
      }
    },
    
    /**
     * Establece la pregunta actual
     * @param question - La pregunta a establecer como actual
     */
    setCurrentQuestion(question: Question) {
      this.currentQuestion = { ...question }
    },
    
    /**
     * Establece la pregunta actual por ID
     * @param id - ID de la pregunta a establecer como actual
     */
    setCurrentQuestionById(id: number) {
      const question = this.getQuestionById(id)
      if (question) {
        this.currentQuestion = { ...question }
      }
    },
    
    /**
     * Actualiza una pregunta existente
     * @param updatedQuestion - La pregunta con los datos actualizados
     */
    updateQuestion(updatedQuestion: Question) {
      const index = this.questions.findIndex(q => q.id === updatedQuestion.id)
      if (index !== -1) {
        // Reemplazar la pregunta completa para mantener la reactividad
        this.questions[index] = { ...updatedQuestion }
        
        // Si la pregunta actual es la que se actualizó, también actualizamos currentQuestion
        if (this.currentQuestion && this.currentQuestion.id === updatedQuestion.id) {
          this.currentQuestion = { ...updatedQuestion }
        }
      }
    },
    
    /**
     * Reinicia el estado de la pregunta actual
     */
    clearCurrentQuestion() {
      this.currentQuestion = null
    }
  }
})
