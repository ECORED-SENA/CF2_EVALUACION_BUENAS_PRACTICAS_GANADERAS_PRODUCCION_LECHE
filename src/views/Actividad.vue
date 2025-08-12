<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de las buenas prácticas ganaderas ',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de leche bovina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por trazabilidad en la producción lechera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El control de la reproducción de las vacas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La alimentación suplementaria de los animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El pesaje del ganado diariamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La identificación y seguimiento del producto desde el animal hasta el consumidor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Según la Resolución ICA 067449 de 2020, ¿cuál es uno de los pilares de las BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trazabilidad y registros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Control del clima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exportación de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño del empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una acción correctiva inmediata en lechería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implementar un nuevo sistema de ordeño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programar capacitación a futuro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rechazar leche contaminada con barro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rediseñar el protocolo de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué acción se considera una estrategia correctiva en BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro sanitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de visitas familiares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registro de ordeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de tratamientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué debe incluirse en la rutina posterior al ordeño?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pre-dipping y revisión de ubres.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Secado con toalla reutilizable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimentación con silo de maíz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpieza del equipo y post-dipping.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de trazabilidad permite conocer el historial completo dentro del mismo predio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De cadena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horizontal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Comercial',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una de las principales causas de acciones correctivas es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buen desempeño del ordeñador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resultados positivos en auditorías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No conformidades detectadas en inspecciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alta producción de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta es clave para verificar el cumplimiento de BPG en el predio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libro de visitas sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lista de canciones del ordeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de mascotas del predio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lista de chequeo del ICA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se busca con la implementación de estrategias correctivas en la evaluación de BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar que comprendan y apliquen los procedimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar el manejo de praderas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el costo del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la cantidad de ordeños por día.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se debe hacer primero al detectar una no conformidad en auditoría?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarla si no es grave.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar mantenimiento a todo el predio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Castigar al responsable del área.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocer la no conformidad y analizar la causa raíz.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
