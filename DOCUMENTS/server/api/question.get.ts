export default defineEventHandler((event) => {
  const questions = [
    {
      id: 1,
      question: "¿Cuál es la principal ventaja de utilizar LLMs en entornos educativos?",
      answers: [
        {
          a: "Personalización del aprendizaje según las necesidades individuales",
          b: "Reemplazo completo de los profesores humanos",
          c: "Eliminación de la necesidad de evaluaciones",
        },
      ],
    },
    {
      id: 2,
      question: "¿Qué desafío ético es más relevante al implementar LLMs en educación?",
      answers: [
        {
          a: "Privacidad de datos de los estudiantes",
          b: "Costo de implementación tecnológica",
          c: "Sobrecarga de información digital",
        },
      ],
    },
    {
      id: 3,
      question: "¿Cómo pueden los LLMs ayudar a estudiantes con necesidades especiales?",
      answers: [
        {
          a: "Ofreciendo adaptaciones personalizadas y múltiples formatos de contenido",
          b: "Sustituyendo completamente las adaptaciones curriculares tradicionales",
          c: "Simplificando todos los contenidos a un nivel básico",
        },
      ],
    },
    {
      id: 4,
      question: "¿Cuál es una limitación significativa de los LLMs en el contexto educativo?",
      answers: [
        {
          a: "Posibilidad de generar información incorrecta o alucinaciones",
          b: "Solo funcionan para asignaturas de humanidades",
          c: "No pueden procesar consultas en diferentes idiomas",
        },
      ],
    },
    {
      id: 5,
      question: "¿Qué beneficio ofrecen los LLMs a los docentes?",
      answers: [
        {
          a: "Automatización de tareas repetitivas como calificación básica y generación de materiales",
          b: "Eliminación de la necesidad de planificación pedagógica",
          c: "Sustitución completa de la retroalimentación personalizada",
        },
      ],
    },
    {
      id: 6,
      question: "¿Cómo pueden los LLMs fomentar el pensamiento crítico en los estudiantes?",
      answers: [
        {
          a: "Presentando múltiples perspectivas sobre un tema y fomentando el cuestionamiento",
          b: "Proporcionando siempre una única respuesta definitiva y correcta",
          c: "Evitando temas controversiales o complejos",
        },
      ],
    },
    {
      id: 7,
      question: "¿Qué riesgo presenta el uso de LLMs por parte de los estudiantes?",
      answers: [
        {
          a: "Dependencia excesiva que podría reducir el desarrollo de habilidades propias de investigación",
          b: "Imposibilidad de acceder a información actualizada",
          c: "Distracción exclusivamente por contenido de entretenimiento",
        },
      ],
    },
    {
      id: 8,
      question: "¿Qué habilidad pueden desarrollar mejor los estudiantes al aprender a usar LLMs adecuadamente?",
      answers: [
        {
          a: "Formulación de preguntas efectivas y evaluación crítica de la información",
          b: "Memorización de datos específicos",
          c: "Habilidades de escritura manual",
        },
      ],
    },
    {
      id: 9,
      question: "¿Cuál es una aplicación efectiva de los LLMs en la evaluación educativa?",
      answers: [
        {
          a: "Proporcionar retroalimentación detallada e inmediata sobre trabajos escritos",
          b: "Eliminar completamente las evaluaciones tradicionales",
          c: "Calificar subjetivamente según criterios variables",
        },
      ],
    },
    {
      id: 10,
      question: "¿Qué competencia digital se vuelve esencial para los estudiantes en la era de los LLMs?",
      answers: [
        {
          a: "Alfabetización en IA: capacidad para interactuar críticamente con sistemas de IA",
          b: "Programación avanzada de redes neuronales",
          c: "Diseño gráfico digital",
        },
      ],
    },
    {
      id: 11,
      question: "¿Cómo pueden los LLMs contribuir a un aprendizaje más inclusivo?",
      answers: [
        {
          a: "Ofreciendo contenido en múltiples idiomas y adaptado a diferentes niveles",
          b: "Estandarizando todos los materiales educativos",
          c: "Eliminando la necesidad de diversidad en los recursos educativos",
        },
      ],
    },
    {
      id: 12,
      question: "¿Qué aspecto debe considerarse prioritario al implementar LLMs en instituciones educativas?",
      answers: [
        {
          a: "Formación docente para integrar la tecnología de manera pedagógicamente efectiva",
          b: "Adquisición del software más costoso disponible",
          c: "Sustitución completa de materiales tradicionales",
        },
      ],
    },
  ]

  return questions
})
