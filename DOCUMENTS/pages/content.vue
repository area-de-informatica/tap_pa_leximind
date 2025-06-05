<template>
  <v-container>
    <h1>Contenido</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert v-if="!contents.length" type="info">
          No hay contenido disponible.
        </v-alert>
        <ContentCard
          v-for="content in contents"
          :key="content.id"
          :content="content"
          @select-content="handleSelectContent"
        />
      </v-col>
      <v-col cols="12" md="6">
        <EditContent
          v-if="currentContent"
          :content="currentContent"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const storeContent = useContentStore()

const contents = computed(() => storeContent.contents)
const currentContent = computed(() => storeContent.currentContent)

const handleSelectContent = (content) => {
  storeContent.setCurrentContent(content)
}

onMounted(() => {
  storeContent.fetchContents()
})
</script>
