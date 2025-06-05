<template>
  <v-container>
    <h1>Questions</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert v-if="!questions.length" type="info">
          No hay preguntas disponibles.
        </v-alert>
        <Test
          v-for="question in questions"
          :key="question.id"
          :question="question"
          @select-question="handleSelectQuestion"
        />
      </v-col>
      <v-col cols="12" md="6">
        <EditQuestion
          v-if="currentQuestion"
          :question="currentQuestion"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const storeQuestion = useStoreQuestion()

const questions = computed(() => storeQuestion.questions)
const currentQuestion = computed(() => storeQuestion.currentQuestion)

const handleSelectQuestion = (question) => {
  storeQuestion.setCurrentQuestion(question)
}

onMounted(() => {
  storeQuestion.fetchQuestions() })
</script>
