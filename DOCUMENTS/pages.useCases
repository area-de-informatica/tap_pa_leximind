<template>
  <v-container>
    <h1>Casos de Uso de LLMs en la Educación</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert v-if="!useCases.length" type="info">
          No hay casos de uso disponibles.
        </v-alert>
        <UseCaseCard
          v-for="useCase in useCases"
          :key="useCase.id"
          :useCase
          @select-use-case="handleSelectUseCase"
        />
      </v-col>
      <v-col cols="12" md="6">
        <EditUseCase
          v-if="currentUseCase"
          :useCase ="currentUseCase"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const store = useCasesStore()

const useCases = computed(() => store.useCases)
console.log(useCases)
const currentUseCase = computed(() => store.currentUseCase)

const handleSelectUseCase = (useCase) => {
  store.setCurrentUseCase(useCase)
}

onMounted(() => {
  store.fetchUseCases()
})
</script>
