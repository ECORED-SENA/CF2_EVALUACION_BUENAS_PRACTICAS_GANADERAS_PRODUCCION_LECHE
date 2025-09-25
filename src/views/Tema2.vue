<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de personal en lechería

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de personal en lechería comprende la #[b planificación, organización, capacitación y control] del recurso humano involucrado en todas las fases del proceso productivo, desde el ordeño hasta el manejo sanitario y administrativo.
          br
          br
          | En el marco de las #[b Buenas Prácticas Ganaderas (BPG)], esta gestión es esencial para garantizar la #[b calidad, inocuidad, eficiencia y sostenibilidad] de la producción lechera, ya que el desempeño del personal impacta directamente en el bienestar animal, la higiene del producto y el cumplimiento normativo

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Herramientas para la gestión del personal

    p Los predios que aspiran a certificarse en BPG deben implementar herramientas que aseguren el manejo técnico y documentado del talento humano.

    .row.bg-20
      .col-12 
        .px-5
          .row.align-items-center
            .col-lg-6
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-17.r8.gx-1
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema2/img2.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Manual de funciones] 
                        p Define responsabilidades, actividades y perfil requerido para cada cargo operativo y técnico.

            .col-lg-6.mt-lg-0.mt-3
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-17.r8.gx-1
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema2/img3.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Registros de personal] 
                        p Incluyen datos de identificación, fecha de ingreso, cargo, certificados de capacitación y evaluaciones de desempeño.

          .row.align-items-center.mt-3
            .col-lg-6
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-17.r8.gx-1
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema2/img4.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Protocolos operativos] 
                        p Establecen instrucciones escritas para tareas críticas (ordeño, medicamentos, bioseguridad, limpieza).

            .col-lg-6.mt-lg-0.mt-3
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-17.r8.gx-1
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema2/img5.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Evidencias de capacitación	] 
                        p Documentan la participación del personal en actividades formativas sobre BPG, trazabilidad, sanidad y sostenibilidad.
          separador
          #t_2_2.titulo-segundo.color-acento-contenido
            h2 2.2 Capacitación del personal

          p La #[b formación continua] es un eje central en el sistema BPG. Permite asegurar que todo el equipo esté preparado para aplicar correctamente los procedimientos y cumplir con las normativas vigentes (Resoluciones ICA 067449 de 2020 y 000017 de 2023).

          .carousel-bg
            .row.justify-content-center.align-items-center
              .col-lg-12
                SlyderF.custom(columnas="col-md-6 col-xl-4")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img6.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Inducción al ingreso
                    p.text-center.mb-0 	Formación inicial en normas internas, bioseguridad, ordeño y manejo animal.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img7.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Capacitaciones periódicas	
                    p.text-center.mb-0 Sesiones regulares, mínimo semestrales, sobre sanidad, higiene, trazabilidad, bienestar animal y manejo de residuos.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img8.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Evaluación del aprendizaje
                    p.text-center.mb-0 	Verificación mediante ejercicios prácticos, observación o cuestionarios.
                  

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img9.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Herramientas pedagógicas	
                    p.text-center.mb-0 	Uso de talleres, videos, guías ilustradas y materiales impresos de fácil comprensión.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img10.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Registro de capacitación		
                    p.text-center.mb-0 Documento con fecha, tema, capacitador, lista firmada de asistentes y resultado de la evaluación, si aplica.

    .row.bg-21.m-neg
      .col-12
        .px-5.pb-5
          separador
          #t_2_3.titulo-segundo.color-acento-contenido
            h2 2.3 Asignación de funciones

          p Una asignación clara de funciones permite mejorar la organización interna, optimizar recursos y cumplir los estándares técnicos requeridos en auditorías de BPG.

          .row.mt-4.align-items-center
            .col-lg-7
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
                .row(titulo="Función documentada")

                  p.px-5 Cada cargo debe estar respaldado con un manual o formato que describa sus responsabilidades.

                div(titulo="Asignación según perfil")

                  p.px-5 Las tareas deben corresponder a la capacidad técnica y experiencia del trabajador.

                div(titulo="Supervisión técnica")

                  p.px-5 Debe existir acompañamiento de un responsable técnico (veterinario, administrador, etc.) cuando el proceso lo requiera.

                div(titulo="Identificación del personal")

                  p.px-5 Se recomienda usar elementos visibles como carné o dotación diferenciada para identificación durante auditorías o visitas técnicas.

            .col-lg-5.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema2/img11.png', alt='', style="width: 500px").m-auto


    .row.mt-4.align-items-center.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='', style="width: 400px").m-auto
      .col-lg-6
        p Los ejemplos de funciones asignadas son:
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img13.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Ordeñador] 
                  p Aplicar POES, seguir la rutina de ordeño, registrar volúmenes, reportar anomalías en la leche o animales.

        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img14.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Encargado sanitario] 
                  p Aplicar tratamientos, llevar registros clínicos, verificar tiempos de retiro, alertar sobre signos o brotes.

        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img15.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Administrador del predio] 
                  p Coordinar operaciones, consolidar datos productivos y económicos, gestionar insumos, liderar auditorías internas.


    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Evaluación del desempeño

    p La #[b evaluación periódica del desempeño] del personal es uno de los aspectos clave que los técnicos del ICA valoran durante las auditorías de certificación BPG.


    .row.bg-7
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 255) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Monitoreo del desempeño	

                    p Debe estar planificado con una periodicidad adecuada (mensual, bimensual o trimestral).

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img16.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Listas de chequeo estructuradas	

                    p Evalúan cumplimiento técnico, puntualidad, disciplina, higiene personal y trato respetuoso hacia los animales.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img17.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Retroalimentación y mejora	

                    p Ante debilidades, se debe aplicar reentrenamiento, reasignación temporal o supervisión directa.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img18.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Registro documentado	

                    p Formato con fecha, criterios evaluados, observaciones y firmas del técnico responsable y del trabajador evaluado.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img19.png', alt='')


    p.mt-5.mb-0 Este proceso permite detectar oportunidades de mejora en la gestión del talento humano y evidencia la existencia de un sistema organizativo sólido.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Evaluación del ICA en la gestión de personal

    p Durante la auditoría BPG, los técnicos del Instituto Colombiano Agropecuario (ICA) o las entidades certificadoras autorizadas evalúan lo siguiente:

    .row.align-items-center.justify-content-center
      .col-lg-4
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.align-items-center.tim
          .row.align-items-center
            .col-4
              figure
                img(src="@/assets/curso/tema2/img20.svg", alt="", style="width: 61px").m-auto
            .col-8
              p.mb-0
                b Manuales de funciones y organigrama
              p Deben estar actualizados, completos y disponibles.

      .col-lg-4.mt-lg-0.mt-3
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.align-items-center.tim
          .row.align-items-center
            .col-4
              figure
                img(src="@/assets/curso/tema2/img21.svg", alt="", style="width: 61px").m-auto
            .col-8
              p.mb-0
                b Capacitación documentada	
              p Debe haber registros firmados que evidencien la formación continua del personal.

      .col-lg-4.mt-lg-0.mt-3
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.align-items-center.tim
          .row.align-items-center
            .col-4
              figure
                img(src="@/assets/curso/tema2/img22.svg", alt="", style="width: 61px").m-auto
            .col-8
              p.mb-0
                b Protocolos aplicados	
              p Se verifica que el personal conozca y cumpla las instrucciones operativas.

    .row.align-items-center.justify-content-center.mt-3
      .col-lg-4
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.align-items-center.tim
          .row.align-items-center
            .col-4
              figure
                img(src="@/assets/curso/tema2/img23.svg", alt="", style="width: 61px").m-auto
            .col-8
              p.mb-0
                b Registros de actividades	
              p Deben estar firmados y fechados.

      .col-lg-4.mt-lg-0.mt-3
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.align-items-center.tim
          .row.align-items-center
            .col-4
              figure
                img(src="@/assets/curso/tema2/img24.svg", alt="", style="width: 61px").m-auto
            .col-8
              p.mb-0
                b Conciencia sanitaria		
              p El personal debe conocer los riesgos y aplicar medidas preventivas.

      .col-lg-4.mt-lg-0.mt-3.d-lg-block.d-none
        .tarjeta--boton.color-acento-contenido.text-white--hover(style="height:183px")
          .row.align-items-center
            .col-lg-12
              figure
                img(src="@/assets/curso/tema2/img25.png", alt="", style="width: 400px").m-auto

    .titulo-tres.mt-5: h3 Clasificación de hallazgos en auditoría BPG

    p.mt-4 Durante la auditoría de Buenas Prácticas Ganaderas (BPG) en predios lecheros, los hallazgos se clasifican según su gravedad e impacto sobre el sistema evaluado. Esta clasificación permite priorizar acciones correctivas y definir consecuencias sobre la certificación.

    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1.
          span Clasificación de hallazgos en auditoría BPG

        .table-responsive
          table
            thead(style="background-color: #CCDA2D")
              tr
                th Tipo de hallazgo
                th Ejemplo
                th Impacto sobre la certificación
            tbody
              tr(style="background-color: #F6F6F6")
                td Crítico
                td Personal sin capacitación sanitaria ni protocolos de higiene.
                td Suspensión inmediata
              tr
                td Mayor
                td No existe asignación formal de funciones.
                td Requiere corrección previa
              tr(style="background-color: #F6F6F6")
                td Menor
                td Falta de firma o fecha en un formato de capacitación.
                td Observación técnica sin suspensión

    separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Beneficios de una buena gestión del personal en lechería
    
    .row.bg-22.m-neg
      .col-12
        .p-5
          p Una gestión eficiente del personal es un pilar estratégico dentro del modelo BPG. Sus beneficios se reflejan en distintos niveles:

          .row.justify-content-center.g-4
            .col-lg-4
              .card2.border-0.rounded-4.overflow-hidden(style="background-color:#FFFFFF")
                img(src='@/assets/curso/tema2/img26.png', alt='', class="card-img-top", style="height: 191px; object-fit: cover;")
                .card2-body.text-center.mt-4(style="height:176px")
                  p.fw-bold.mb-1 Técnica y sanitaria
                  p.mb-0 Mejora la calidad e inocuidad de la leche, disminuye errores y reduce riesgos sanitarios.

            .col-lg-4
              .card2.border-0.rounded-4.overflow-hidden(style="background-color:#FFFFFF")
                img(src='@/assets/curso/tema2/img27.png', alt='', class="card-img-top", style="height: 191px; object-fit: cover;")
                .card2-body.text-center.mt-4(style="height:176px")
                  p.fw-bold.mb-1 Organizacional y normativa

                  p.mb-0 Facilita el cumplimiento legal, la trazabilidad de actividades y el éxito en auditorías internas y externas.

            .col-lg-4
              .card2.border-0.rounded-4.overflow-hidden(style="background-color:#FFFFFF")
                img(src='@/assets/curso/tema2/img28.png', alt='', class="card-img-top", style="height: 191px; object-fit: cover;")
                .card2-body.text-center.mt-4(style="height:176px")
                  p.fw-bold.mb-1 Humana y productiva

                  p.mb-0 Fomenta un clima laboral positivo, impulsa la formación continua y mejora la sostenibilidad del sistema productivo.


          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-5.r8.gx-3
                .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                    img(src='@/assets/curso/tema2/img29.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
      
                .col-lg.d-flex
                  .p-2.w-100.align-items-center
                    p La #[b gestión del personal] en la producción lechera es una #[b columna vertebral del sistema de Buenas Prácticas Ganaderas]. A través de funciones claras, capacitación constante, protocolos definidos y evaluaciones periódicas, se garantiza una producción responsable, segura, eficiente y orientada al mercado.

                    p Una lechería organizada, con talento humano comprometido y técnicamente formado, no solo cumple con los requisitos sanitarios y legales, sino que se posiciona como un sistema #[b competitivo, sostenible y confiable], capaz de responder a los desafíos del sector agroalimentario actual.
                


    .titulo-tres.mt-5: h3 Seguimiento de Buenas Prácticas Ganaderas (BPG) en la producción de leche bovina

    p.mt-4 A continuación, se presenta un pódcast que aborda el seguimiento de las Buenas Prácticas Ganaderas en la producción de leche bovina, destacando los mecanismos de evaluación y control necesarios para asegurar el cumplimiento de los estándares de calidad y sostenibilidad en el sector lechero.

    .row.align-items-center.mt-4
      .col-lg-7

        .row.align-items-center.bg-2.r8.p-4
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img30.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p.text-white Lo invitamos a escuchar el siguiente pódcast:

            TarjetaAudio.color-acento-contenido.mb-3.bg-9.p-3(
              texto="Evaluación de Buenas Prácticas Ganaderas en la produccion de leche"
              :audio="require('@/assets/componentes/audios/audio1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img31.png', alt='', style="width: 504px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
