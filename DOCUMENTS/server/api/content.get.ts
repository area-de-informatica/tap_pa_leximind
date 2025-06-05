export default defineEventHandler((event) => {
    const content = [
      {
        id: 1,
        title: "¿Qué son los LLMs?",
        content: "Los LLMs (Large Language Models) son sistemas de IA entrenados para comprender y generar texto humano.",
        details: [
          {
            examples: "GPT-4, Gemini",
            applications: "Generación de texto, respuesta a preguntas, asistencia virtual",
            relevance: "Transformando la forma en que interactuamos con la tecnología"
          },
        ],
      },
      {
        id: 2,
        title: "Definiciones clave",
        content: "Conceptos fundamentales para entender los LLMs y su funcionamiento.",
        details: [
          {
            term: "Inteligencia Artificial (IA)",
            definition: "Rama de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el reconocimiento de voz, el aprendizaje y la toma de decisiones.",
            importance: "Base tecnológica que permite el desarrollo de LLMs"
          },
        ],
      },
      {
        id: 3,
        title: "Modelo de Lenguaje",
        content: "Algoritmo entrenado para predecir la siguiente palabra en una secuencia de texto.",
        details: [
          {
            process: "Entrenamiento basado en millones de textos",
            capability: "Permite generar contenido con un alto nivel de comprensión",
            evolution: "Ha evolucionado desde modelos simples hasta los actuales LLMs de gran escala"
          },
        ],
      },
      {
        id: 4,
        title: "Procesamiento del Lenguaje Natural (PLN)",
        content: "Subcampo de la IA enfocado en la interacción entre las computadoras y el lenguaje humano.",
        details: [
          {
            focus: "Comprensión y generación de lenguaje humano",
            techniques: "Incluye análisis sintáctico, semántico y pragmático",
            connection: "Los LLMs representan un avance significativo en este campo"
          },
        ],
      },
      {
        id: 5,
        title: "Propósito de este OVA",
        content: "Este recurso está diseñado para que puedas:",
        details: [
          {
            objective1: "Comprender los conceptos básicos detrás de los LLMs",
            objective2: "Explorar sus aplicaciones dentro del contexto educativo",
            objective3: "Analizar ventajas, retos y recomendaciones para su implementación en el aula"
          },
        ],
      }
    ]
    return content
  })
