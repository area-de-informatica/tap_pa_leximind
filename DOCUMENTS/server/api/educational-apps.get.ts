export default defineEventHandler((event) => {
  const apps = [
    {
      id: 1,
      name: "Asistentes Virtuales",
      description: "Los LLMs pueden actuar como tutores virtuales, respondiendo preguntas y proporcionando explicaciones sobre diversos temas.",
      benefit: "Ofrecen apoyo individualizado, disponible 24/7 para los estudiantes."
    },
    {
      id: 2,
      name: "Generación de Contenido",
      description: "Ayudan a generar contenido educativo, como resúmenes, preguntas de examen y materiales de estudio.",
      benefit: "Facilitan el trabajo docente y promueven recursos personalizados."
    },
    {
      id: 3,
      name: "Análisis de Sentimiento",
      description: "Analizan emociones en los textos escritos por los estudiantes, ayudando a entender su estado emocional.",
      benefit: "Permite una mejor intervención emocional y seguimiento del bienestar estudiantil."
    },
    {
      id: 4,
      name: "Personalización del Aprendizaje",
      description: "Adaptan el contenido educativo a las necesidades individuales de cada estudiante.",
      benefit: "Promueven la equidad en el aprendizaje y mejoran la motivación."
    }
  ]

  return apps
})
