<template>
  <v-container>
    <h1>Aplicaciones Educativas</h1>
    <p>En esta sección, exploramos diversas aplicaciones educativas de los LLMs y cómo pueden ser utilizadas para mejorar la enseñanza y el aprendizaje.</p>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert v-if="!apps.length" type="info">
          No hay aplicaciones registradas.
        </v-alert>
        <EducationalAppCard
          v-for="app in apps"
          :key="app.id"
          :app="app"
          @select-app="handleSelectApp"
        />
      </v-col>
      <v-col cols="12" md="6">
        <EditEducationalApp
          v-if="currentApp"
          :app="currentApp"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const store = useEducationalAppsStore()

const apps = computed(() => store.apps)
const currentApp = computed(() => store.currentApp)

const handleSelectApp = (app) => {
  store.setCurrentApp(app)
}

onMounted(() => {
  store.fetchApps()
})
</script>
