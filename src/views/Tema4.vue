<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estrategias y acciones correctivas en la lechería

    p En la evaluación de Buenas Prácticas Ganaderas (BPG) para producción de leche bovina, las estrategias correctivas en la lechería son acciones planificadas, sistemáticas y evaluables que se implementan ante la detección de no conformidades en procesos, instalaciones o procedimientos durante la evaluación de BPG en predios productores de leche bovina, según la Resolución ICA 067449 de 2020. Estas acciones tienen como objetivos:

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-14
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")

          .col-lg.d-flex
            .p-4.w-100.align-items-center

              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Corregir fallas reales o potenciales.


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Eliminar las causas raíz de no conformidades.


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Prevenir su recurrencia.


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Fortalecer los pilares de sanidad, ambiente, administración y bienestar animal.


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Garantizar o mantener la certificación en BPG.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Proceso de subsanación de hallazgos

    p La subsanación consiste en corregir una no conformidad identificada durante la evaluación técnica. Puede implicar:

    .row.justify-content-center.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-25
          .col-lg.d-flex
            .p-4.w-100.align-items-center
              ul.lista-ul--color
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Actualización o elaboración de registros sanitarios, reproductivos o de trazabilidad.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Adecuación de instalaciones (ordeño, residuos, almacenamiento).


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Aplicación de medidas de bioseguridad o de bienestar animal.


                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Capacitación inmediata del personal.


          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img2.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4
      .col-lg-10
        p.p-4.bg-2.r8.text-white El ICA puede otorgar plazos para la ejecución de dichas acciones, dependiendo del nivel de criticidad del hallazgo. El predio debe documentar todo el proceso y permitir su verificación.


    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Aplicación de acciones correctivas y preventivas

    p Este proceso debe ser sistemático y estar debidamente documentado. A continuación, se detallan sus etapas:

    .row.justify-content-center.align-items-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5.
          span Pasos para la aplicación de acciones correctivas en BPG

        .table-responsive.tabla-compacta 
          table
            thead(style="background-color: #CCDA2D")
              tr
                th Paso
                th Descripción

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start Identificación del problema

                td.text-start Derivado de auditorías o visitas técnicas.


              tr
                td.text-start Análisis de causa raíz

                td.text-start Aplicación de herramientas como los “5 ¿por qué?”.


              tr(style="background-color: #F6F6F6")
                td.text-start Definición de la acción correctiva

                td.text-start Cambios en infraestructura, protocolos o personal.


              tr(style="background-color: #F6F6F6")
                td.text-start Asignación de responsabilidades

                td.text-start Definir quién ejecuta y quién supervisa.


              tr
                td.text-start Implementación y seguimiento

                td.text-start Aplicación y monitoreo de los cambios.


              tr(style="background-color: #F6F6F6")
                td.text-start Evaluación de la eficacia
                td.text-start Verificación de que la causa se resolvió y no se repite.

          

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img3.png', alt='', style="width: 400px").m-auto

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3  Tipos de acciones: inmediatas y preventivas

    p Las acciones correctivas en el marco de las Buenas Prácticas Ganaderas (BPG) se clasifican según el momento en que se aplican y su finalidad. A continuación, se describen sus principales tipos:

    TabsB.color-acento-botones(style="background-color: #E5F2EB")
      .py-4.py-md-5(titulo="Acciones correctivas inmediatas" :icono="require('@/assets/curso/tema4/img4.svg')")
        .row.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Acciones correctivas inmediatas
            p Son reactivas y se implementan cuando el problema ya ocurrió. Buscan eliminar la no conformidad de manera urgente para evitar consecuencias mayores.

            p
              b Ejemplos:

            ul.lista-ul--color
              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0  Rechazo de leche con contaminación visible.


              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0     Impedir el ordeño de animales con mastitis.


              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 Retiro inmediato de productos veterinarios vencidos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema4/img5.png')

      .py-4.py-md-5(titulo="Acciones correctivas preventivas" :icono="require('@/assets/curso/tema4/img4.svg')")
        .row.p-4
          
          .col-md-6
            h4 Acciones correctivas preventivas
            p Son proactivas y se orientan a evitar que ocurran no conformidades en el futuro. Se basan en la evaluación constante del sistema para anticipar fallos.

            p
              b Ejemplos:

            ul.lista-ul--color
              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0      Mantenimiento periódico de equipos.



              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0         Reparaciones locativas en salas de ordeño y corrales.



              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0     Capacitaciones regulares en higiene y bioseguridad.

              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0     Actualización de protocolos y registros.

          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img6.png')

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4  Metodología para el plan de mejora

    p El diseño de un plan de mejora requiere una metodología clara que permita actuar de forma organizada ante hallazgos detectados durante la evaluación.

    .row.justify-content-center
      .col-lg-10
        .row.bg-2.r8.p-4
          figure
            img(src='@/assets/curso/tema4/img7.png', alt='', style="width: 925px").m-auto

          .row.align-items-center.justify-content-center
            .col-lg-4
              .row.mt-4.r8.bg-17.p-4.align-items-center.g-2
                .col-lg-12
                  p.mb-0
                    b Reconocimiento
                  p Detección del hallazgo real o potencial.

            .col-lg-4
              .row.mt-4.r8.bg-17.p-4.align-items-center.g-2
                .col-lg-12
                  p.mb-0
                    b Análisis
                  p Identificación de causas raíz.
                  <br>
                  

            .col-lg-4
              .row.mt-4.r8.bg-17.p-4.align-items-center.g-2
                .col-lg-12
                  p.mb-0
                    b Formulación
                  p Diseño de acciones enfocadas y sostenibles.

          .row.align-items-center
            .col-lg-4
              .row.mt-4.r8.bg-17.p-4.align-items-center.g-2
                .col-lg-12
                  p.mb-0
                    b Plan de acción

                  p Asignación de tareas, cronograma y recursos.

            .col-lg-4
              .row.mt-4.r8.bg-17.p-4.align-items-center.g-2
                .col-lg-12
                  p.mb-0
                    b Verificación
                  p Evaluación de la efectividad de las acciones implementadas.

            .col-lg-4
              .row.mt-4.r8.bg-26.p-1.align-items-center.g-2
                .col-lg-12
                  figure
                    img(src='@/assets/curso/tema4/img8.png', alt='', style="width: 295px").m-auto


    .titulo-tres.mt-5: h3 Criterios y métodos de aplicación

    p.mt-4 Antes de ejecutar cualquier acción correctiva, es importante considerar los siguientes elementos que permiten fundamentar la intervención:

    .row.align-items-center.mt-5
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img9.png', alt='', style="width: 505px").m-auto
      .col-lg-7

        .row.p-1.bg-11.r8.align-items-center
          .col-lg-12

            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 #[b Indicadores (KPI):] evidencias cuantitativas de desviaciones.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 #[b Registros operativos:] bitácoras, historiales sanitarios y de ordeño.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 #[b Informes del personal:] observaciones, propuestas de mejora o quejas.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 #[b Auditorías o visitas técnicas:] hallazgos o recomendaciones formales.

    .titulo-tres.mt-5: h3 Herramientas para la gestión de acciones correctivas

    p.mt-4 Para asegurar el seguimiento y trazabilidad de las acciones correctivas, es recomendable utilizar herramientas que documenten el proceso de mejora:

    .row.align-items-center.mt-5
      
      .col-lg-7

        .row.p-1.bg-11.r8.align-items-center
          .col-lg-12

            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 Matriz de acciones correctivas (fecha, hallazgo, causa, acción, responsable, evidencia).


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 Listas de chequeo antes y después.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 Formatos oficiales del ICA, actas y registros firmados.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 Evidencia fotográfica del antes y después.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0 Registros de capacitaciones realizadas.


      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img10.png', alt='', style="width: 505px").m-auto  


    .titulo-tres.mt-5: h3 Marco normativo aplicable

    p.mt-4 Las acciones correctivas deben ajustarse a la normativa vigente que rige la certificación BPG en predios lecheros. Entre los principales referentes se encuentran:

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.r8.bg-8.p-4
          .col-lg-8
            .row.justify-content-center
              .col-lg-6
                .tarjeta-clip.p-3.h-152.d-flex.align-items-center
                  img.clip-icon(src="@/assets/curso/tema4/clip.svg", alt="Clip")
                  p.mb-0.ms-2
                    | Resolución ICA 067449 de 2020: establece los lineamientos para la certificación en BPG.

              .col-lg-6
                .tarjeta-clip.p-3.h-152.d-flex.align-items-center
                  img.clip-icon(src="@/assets/curso/tema4/clip.svg", alt="Clip")
                  p.mb-0.ms-2
                    | Normas complementarias en sanidad, ambiente y bienestar animal.

            .row.justify-content-center.mt-4
              .col-lg-6
                .tarjeta-clip.p-3.h-152.d-flex.align-items-center
                  img.clip-icon(src="@/assets/curso/tema4/clip.svg", alt="Clip")
                  p.mb-0.ms-2
                    | Buenas Prácticas de Manufactura (BPM) y trazabilidad alimentaria.

              .col-lg-6
                .tarjeta-clip.p-3.h-152.d-flex.align-items-center
                  img.clip-icon(src="@/assets/curso/tema4/clip.svg", alt="Clip")
                  p.mb-0.ms-2
                    | Sistemas internos de gestión definidos por cada predio.

          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema4/img11.png', alt='', style="width: 295px").m-auto


    .titulo-tres.mt-5: h3 Contingencias y planes de emergencia

    p.mt-4 Los planes de contingencia permiten anticiparse a eventos que puedan alterar el funcionamiento del predio lechero. Su implementación asegura la continuidad operativa y la protección de los recursos.

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img12.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        p Ejemplos de planes de contingencia:

        .row.align-items-center.justify-content-center
          .col-lg-6
            .row.r8.bg-25.p-3.align-items-center.g-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img13.svg", alt="", style="width: 61px").m-auto
              .col-lg-8
                p Planes para sanidad animal.

          .col-lg-6
            .row.r8.bg-25.p-3.align-items-center.g-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img14.svg", alt="", style="width: 61px").m-auto
              .col-lg-8
                p Estrategias para abastecimiento de alimentos.


        .row.align-items-center.justify-content-center
          .col-lg-6
            .row.mt-4.r8.bg-25.p-3.align-items-center.g-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img15.svg", alt="", style="width: 61px").m-auto
              .col-lg-8
                p Protocolos ante desastres naturales o emergencias ambientales.

          .col-lg-6
            .row.mt-4.r8.bg-25.p-3.align-items-center.g-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema4/img16.svg", alt="", style="width: 61px").m-auto
              .col-lg-8
                p Medidas frente a interrupciones en transporte o comercialización.

    .titulo-tres.mt-5: h3 Ejemplos por área evaluada

    p.mt-4 Durante la evaluación BPG, se identifican no conformidades específicas en distintas áreas. A continuación, se presentan ejemplos comunes y las acciones correctivas recomendadas para cada caso:

    .row.justify-content-center.align-items-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Ejemplos

        .table-responsive.tabla-compacta 
          table
            thead(style="background-color: #CCDA2D")
              tr
                th Área
                th No conformidad
                th Acción correctiva

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start Bienestar animal

                td.text-start Sin sombra ni agua
                td.text-start Instalar bebederos y sombra




              tr
                td.text-start Higiene en ordeño

                td.text-start Falta de protocolo
                td.text-start Capacitación y elaboración de POES



              tr(style="background-color: #F6F6F6")
                td.text-start Registro sanitario

                td.text-start No hay registros
                td.text-start Implementar libros obligatorios





              tr(style="background-color: #F6F6F6")
                td.text-start Bioseguridad

                td.text-start Sin pediluvios
                td.text-start Instalar pediluvio obligatorio

              tr
                td.text-start Residuos
                td.text-start Disposición incorrecta
                td.text-start Crear zona de compostaje




          

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema4/img17.png', alt='', style="width: 400px").m-auto

    .row.mt-4.justify-content-center
      .col-lg-10
        .row.bg-8.r8.p-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema4/img18.svg", alt="", style="width: 91px").m-auto

          .col-lg-10
            p Las estrategias correctivas son pilares fundamentales en la gestión de predios lecheros certificados en Buenas Prácticas Ganaderas. No solo aseguran el cumplimiento normativo y la mejora continua, sino que también fortalecen la calidad del producto, el bienestar animal y la confianza del consumidor. Además, permiten prevenir sanciones y aumentar la competitividad del sistema lechero colombiano.




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
