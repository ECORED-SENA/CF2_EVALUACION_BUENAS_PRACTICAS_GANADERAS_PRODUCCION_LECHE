<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Trazabilidad de la producción de leche

    .row.bg-4
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8
              .row.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 85px").m-auto
                .col-lg-10
                  p La trazabilidad en la producción de leche es la #[b capacidad de identificar, registrar, seguir y verificar] toda la información relacionada con la leche cruda, desde el animal en la unidad productiva hasta su llegada al consumidor final. Implica conocer con precisión #[b cuándo, dónde y por quién] fue producida la leche, así como los insumos, procesos y condiciones involucradas en su obtención.

              p.mt-3.p-4.bg-5.r8 Este seguimiento continuo permite garantizar la #[b seguridad alimentaria], la #[b inocuidad del producto], el #[b bienestar animal] y el #[b cumplimiento de la normatividad vigente]. Debido al creciente interés por productos lácteos seguros y de alta calidad, la trazabilidad se ha convertido en un componente esencial dentro de las #[b Buenas Prácticas Ganaderas (BPG)].

            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 400px").m-auto

          p.mt-4 En este contexto, se reconocen dos tipos principales de trazabilidad:

          .row.mt-4.justify-content-center.align-items-stretch
            .col-lg-5
              .row.p-4.bg-6.r8.h-100.g-2.shadow-card
                figure
                  img(src="@/assets/curso/tema1/img3.svg", alt="", style="width: 83px")
                p.mt-4
                  b Trazabilidad interna
                p Corresponde al seguimiento de la leche y sus procesos dentro del predio lechero: ordeño, almacenamiento, manejo sanitario, entre otros.

            .col-lg-5
              .row.p-4.bg-6.r8.h-100.g-2.shadow-card
                figure
                  img(src="@/assets/curso/tema1/img4.svg", alt="", style="width: 83px")
                p.mt-4
                  b Trazabilidad de cadena
                p Comprende desde el nacimiento del animal hasta la entrega de la leche en plantas de transformación o comercialización.

          .titulo-tres.mt-5: h3 Objetivos y beneficios de la trazabilidad

          p.mt-4 Esta trazabilidad integral fortalece la confianza del consumidor, facilita auditorías oficiales y permite una rápida respuesta ante eventos sanitarios o no conformidades en la cadena láctea. A continuación, se presentan los principales objetivos y beneficios de su implementación:

    .row.bg-7
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 255) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Aseguramiento de calidad e inocuidad

                    p Control sanitario del animal y del producto. Prevención de riesgos por residuos de medicamentos o contaminantes.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Transparencia y confianza

                    p Evidencia sobre el origen y tratamiento del producto. Refuerzo de la credibilidad ante consumidores, autoridades y mercados internacionales.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Cumplimiento normativo

                    p Requisito para certificaciones BPG y exportaciones. Respaldo normativo: resoluciones del ICA, Invima y normas internacionales como #[i Codex Alimentarius] e ISO.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Mejora productiva y sanitaria

                    p Soporte para decisiones técnicas sobre salud, alimentación, genética y manejo. Fomento de la sostenibilidad y tecnificación de la ganadería.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='')
                  
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Elementos para su desarrollo

    p Un sistema de trazabilidad eficaz en predios lecheros requiere una estructura organizada, basada en registros confiables, protocolos definidos y tecnologías adecuadas para el seguimiento de la información. A continuación, se describen los principales elementos que permiten su implementación:

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Identificación de animales")

            p.px-5 Se realiza individualmente o por lotes mediante chapetas, aretes electrónicos, tatuajes o chips, permitiendo rastrear la leche hasta el animal productor.

          div(titulo="Registro sanitario y reproductivo")

            p.px-5 Incluye datos sobre vacunas, tratamientos, enfermedades, partos, lactancias y medicamentos, esenciales para verificar tiempos de retiro y garantizar la inocuidad.

          div(titulo="Protocolos y registros de ordeño")

            p.px-5 Consideran la higiene del personal, técnica y frecuencia del ordeño, limpieza de equipos, control de residuos y ambiente, impactando la calidad de la leche.

          div(titulo="Control de calidad de la leche")

            p.px-5 Comprende análisis físico-químicos (grasa, proteína, densidad) y microbiológicos (bacterias, patógenos), garantizando el cumplimiento de estándares normativos.

    .row.mt-4.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Condiciones de alimentación y ambiente")

            p.px-5 Se documenta el tipo de dieta, suplementos, alojamiento y bienestar animal, factores que influyen en la producción y composición de la leche.

          div(titulo="Almacenamiento y transporte")

            p.px-5 Se controla temperatura, limpieza de tanques y vehículos, tiempos y medios de traslado, preservando la calidad del producto hasta su entrega.

          div(titulo="Seguimiento del destino final")

            p.px-5 Consideran la higiene del personal, técnica y frecuencia del ordeño, limpieza de equipos, control de residuos y ambiente, impactando la calidad de la leche.

          div(titulo="Auditoría y verificación interna")

            p.px-5 Registra comprador, planta de acopio o transformación, fechas y rutas de entrega, cerrando el ciclo de trazabilidad del producto.

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='', style="width: 295px").m-auto

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.mt-4.r8.bg-9.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img11.svg", alt="", style="width: 95px").m-auto
          .col-lg-10
            p Todos estos componentes contribuyen a #[b recopilar, conservar y auditar información crítica], asegurando la inocuidad del producto, facilitando la supervisión oficial y reforzando la credibilidad del sistema productivo ante el consumidor y los mercados.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Tipos y niveles de trazabilidad

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La trazabilidad puede clasificarse según su nivel de alcance en la cadena de producción y comercialización. Existen dos formas principales de trazabilidad: #[b interna y de cadena (externa)]. Ambas son complementarias y necesarias para garantizar el control total del producto desde su origen hasta el consumidor final.


    .titulo-tres.mt-5: h3 Trazabilidad de cadena (externa)

    p.mt-4 Este tipo de trazabilidad se aplica cuando se puede rastrear un producto desde la adquisición de materias primas hasta su llegada al consumidor, pasando por etapas como el acopio, transformación, transporte, distribución y venta. Se basa en el seguimiento del producto:

    .row.align-items-center
      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-10.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img13.svg', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.d-flex.align-items-center
                  p.mb-0 #[b Hacia adelante:] del productor al consumidor. Ejemplo: saber a qué planta fue enviada una leche específica.

      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-10.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img14.svg', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.d-flex.align-items-center
                  p.mb-0 #[b Hacia atrás:] del consumidor al productor. Ejemplo: identificar de qué finca provino un lote determinado de leche.


    p.mt-2 A continuación, se presentan dos secuencias típicas asociadas a este tipo de trazabilidad:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 1. 
          span Trazabilidad de cadena (externa)

        figure
          img(src='@/assets/curso/tema1/img15.svg', alt='Diagrama sobre la trazabilidad de cadena externa que representa las etapas del ciclo de vida de un producto, desde la producción de materias primas hasta el reciclaje, pasando por procesos como fabricación, distribución, venta, consumo y reuso, e incluye un seguimiento visual del flujo del producto y su rastreo hacia el consumidor final.', style="width: 1030px").m-auto

    p.mt-4 La trazabilidad de cadena permite actuar con rapidez ante riesgos o no conformidades, facilita el cumplimiento normativo y refuerza la confianza en la cadena alimentaria.

    .titulo-tres.mt-5: h3 Trazabilidad interna

    p.mt-4 La trazabilidad interna se refiere al #[b seguimiento detallado de los procesos dentro de una misma unidad productiva], como una finca o planta lechera. Este seguimiento permite conocer el recorrido del producto en cada una de sus etapas internas. Sus principales características son:

    .row.align-items-center.mt-5
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='', style="width: 505px").m-auto
      .col-lg-7

        .row.p-1.bg-11.r8.align-items-center
          .col-lg-12

            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-12.r8(style="min-height:60px;")
                span.icono-img
                p.mb-0.m-l10 Registro de procesos como #[b ordeño, almacenamiento, tratamiento y manejo sanitario].


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Control detallado por #[b lotes o animales individuales] mediante sistemas de identificación específicos.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Aplicación de protocolos que garantizan la inocuidad y calidad dentro del predio, antes de la salida del producto al siguiente eslabón de la cadena.


    .row.justify-content-center.mt-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2. 
          span Rastreabilidad interna en la producción

        figure
          img(src='@/assets/curso/tema1/img17.svg', alt=' Esquema sobre la rastreabilidad interna en la producción que muestra el flujo de materias primas provenientes de distintos proveedores hacia un fabricante, donde se transforman en productos intermedios y finales, con registros de aceptación, proceso y envío para asegurar el control interno de la producción. ', style="width: 820px").m-auto

    p.mt-4 La trazabilidad en la producción lechera puede abordarse desde distintos niveles según el alcance del seguimiento requerido. A continuación, se presentan los dos tipos principales, sus aplicaciones y diferencias clave.

    .row.mt-2
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/4Et05gufShQ?si=mVGCssswDvX2wiN2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.mt-4.r8.bg-9.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img18.svg", alt="", style="width: 95px").m-auto
          .col-lg-10
            p Ambos tipos de trazabilidad son esenciales para establecer un sistema de control efectivo que permita #[b garantizar la trazabilidad] total del producto, desde su origen hasta su destino final.

    .row.bg-13
      .col-12
        .px-5
          separador
          #t_1_3.titulo-segundo.color-acento-contenido
            h2 1.3  Trazabilidad individual y por lotes
          
          p Otra forma de clasificar la trazabilidad es según el #[b tipo de rastreo] que se puede realizar, en función de la #[b identificación individual] o #[b por lotes] de animales y productos. Esta distinción es clave en la gestión de los sistemas productivos y en la aplicación de medidas de control.

          .row.align-items-center
            .col-lg-6
              .row.justify-content-center.mb-5
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-5.gx-3
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema1/img19.svg', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Individual] 
                        p Seguimiento detallado por animal, mediante dispositivos como chapetas electrónicas.

            .col-lg-6
              .row.justify-content-center.mb-5
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-5.gx-3
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema1/img20.svg', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p.mb-0 #[b Por lotes] 
                        p Agrupación de animales o productos que comparten características comunes (raza, edad, lote sanitario, etc.).

          .row.mb-4.justify-content-center
            .col-lg-10
              p.p-4.bg-8.r8 La trazabilidad cumple un papel central en el #[b aseguramiento de la calidad e inocuidad de los alimentos], así como en #[b la sanidad animal y la salud pública]. Es uno de los conceptos fundamentales tanto en el #[b Código] Sanitario como en el #[i Codex Alimentarius].


          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-5
                .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                    img(src='@/assets/curso/tema1/img21.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
      
                .col-lg.d-flex
                  .p-4.w-100.align-items-center
                    p En el contexto de la #[b producción primaria], coexisten diversas herramientas que refuerzan la trazabilidad, entre ellas:

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 El #[b registro e identificación] de los semovientes, ya sea individual o por lotes, según la especie.

                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 La #[b inscripción del predio] productivo. El #[b registro y seguimiento del transporte] mediante #[b guías de movilización], que permiten rastrear a los animales desde su nacimiento hasta el final de su vida productiva.


              p.mt-4.mb-0 Además, productos de origen animal como la leche y sus derivados cuentan con elementos específicos que aseguran la trazabilidad desde la granja hasta las plantas de transformación. Entre estos, destacan #[b bases de datos] que promueven la calidad e inocuidad, facilitando la trazabilidad y el control de los procesos involucrados.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Herramientas y sistemas de soporte

    p A nivel internacional, existen herramientas regulatorias y técnicas que #[b facilitan la implementación de sistemas de trazabilidad] en la industria alimentaria y en la producción primaria. Estas herramientas permiten estandarizar procesos, garantizar la inocuidad y cumplir con requisitos sanitarios y comerciales.

    .row.mt-4.align-items-center
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="BPM (Buenas Prácticas de Manufactura)")

            p.px-5 Conjunto de requisitos higiénicos y sanitarios para la producción de alimentos. Reducen riesgos para la salud del consumidor y cumplen regulaciones nacionales e internacionales.

          div(titulo="POES (Procedimientos Operativos Estándar de Sanitización)")

            p.px-5 Describen tareas específicas de limpieza y desinfección antes, durante y después de las operaciones de ordeño o procesamiento.

          div(titulo="HACCP (Análisis de Peligros y Puntos Críticos de Control)")

            p.px-5 Sistema que permite identificar, evaluar y controlar peligros significativos que afectan la inocuidad de los alimentos.

          div(titulo="ISO (Organización Internacional de Normalización)")

            p.px-5 Establece normas técnicas para asegurar calidad, eficiencia, trazabilidad y menor costo en los procesos de producción y control.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='', style="width: 400px").m-auto


    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Importancia estratégica de la trazabilidad

    p.p-4.bg-9.r8 La trazabilidad es fundamental en la #[b aplicación de políticas sanitarias], en especial frente a enfermedades endémicas y zoonóticas, así como en el cumplimiento de los #[b requisitos exigidos por los mercados nacionales e internacionales], los cuales exigen cada vez más #[b certificación de origen, inocuidad y calidad].

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-10
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img23.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")

          .col-lg.d-flex
            .p-4.w-100.align-items-center
              p Además de sus aportes a la #[b salud pública, sanidad animal y comercio], la trazabilidad permite construir y alimentar sistemas estadísticos sólidos, mediante el uso de bases de datos sobre:

              .row.align-items-center.justify-content-center
                .col-lg-6
                  .row.mt-4.r8.bg-8.p-3.align-items-center.g-2
                    .col-lg-4.d-lg-block.d-none
                      figure
                        img(src="@/assets/curso/tema1/img24.svg", alt="", style="width: 61px").m-auto
                    .col-lg-8
                      p Inventario de animales.

                .col-lg-6
                  .row.mt-4.r8.bg-8.p-3.align-items-center.g-2
                    .col-lg-4.d-lg-block.d-none
                      figure
                        img(src="@/assets/curso/tema1/img25.svg", alt="", style="width: 61px").m-auto
                    .col-lg-8
                      p Parámetros productivos.


              .row.align-items-center.justify-content-center
                .col-lg-6
                  .row.mt-4.r8.bg-8.p-3.align-items-center.g-2
                    .col-lg-4.d-lg-block.d-none
                      figure
                        img(src="@/assets/curso/tema1/img26.svg", alt="", style="width: 61px").m-auto
                    .col-lg-8
                      p Registros de procesos y manejos técnicos.

                .col-lg-6
                  .row.mt-4.r8.bg-8.p-3.align-items-center.g-2
                    .col-lg-4.d-lg-block.d-none
                      figure
                        img(src="@/assets/curso/tema1/img27.svg", alt="", style="width: 61px").m-auto
                    .col-lg-8
                      p Información sobre genética y reproducción.

    p.mt-4.mb-0 Estos datos contribuyen a #[b mejorar la toma de decisiones, optimizar los sistemas productivos y tecnificar la actividad ganadera], consolidando la trazabilidad como una herramienta estratégica e integral para el desarrollo sostenible del sector.


    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Sistemas y plataformas para la trazabilidad

    p El desarrollo y fortalecimiento de la trazabilidad en la producción ganadera y láctea requiere del apoyo de #[b sistemas tecnológicos y plataformas especializadas], que permiten registrar, almacenar y consultar datos en tiempo real. Estas herramientas facilitan el seguimiento individual o por lotes, mejoran la gestión documental y optimizan los procesos de control y auditoría. Entre los sistemas más utilizados se encuentran:

    .row.mt-4.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img28.png', alt='', style="width: 400px").m-auto
      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-14.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img29.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b SINIGAN (Sistema Nacional de Identificación del Ganado)] 
                  p Plataforma oficial en Colombia para la identificación individual del ganado, registro de predios y trazabilidad animal.

        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-14.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img30.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Formatos físicos y digitales] 
                  p Herramientas como planillas en papel, hojas de cálculo (Excel), aplicaciones ganaderas y bases de datos personalizadas que permiten llevar registros productivos, sanitarios y reproductivos.

    .row.mt-4.justify-content-center
      .col-lg-10
        p.p-4.bg-8.r8 El uso adecuado de estas plataformas contribuye al cumplimiento normativo, mejora la trazabilidad operativa en campo y respalda procesos de certificación sanitaria y comercial. La incorporación de tecnología digital también permite generar reportes automáticos, análisis de datos y alertas tempranas ante eventos críticos.   


    .row.bg-15
      .col-12
        .px-5 
          separador
          #t_1_7.titulo-segundo.color-acento-contenido
            h2 1.7 Aplicación en predios lecheros

          p La trazabilidad en predios lecheros se implementa como un sistema estructurado de #[b identificación, seguimiento, verificación y documentación] de todas las etapas de la producción, desde el animal hasta la leche cruda entregada. Su implementación es obligatoria para la certificación en #[b Buenas Prácticas Ganaderas (BPG)] y se evalúa en aspectos como:

          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-5
                .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                    img(src='@/assets/curso/tema1/img31.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
      
                .col-lg.d-flex
                  .p-4.w-100.align-items-center

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 Identificación animal sin duplicados, ya sea individual o por lotes.

                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 Historia clínica veterinaria completa, incluyendo vacunación, tratamientos, enfermedades y tiempos de retiro.

                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 Documentación del proceso de ordeño: higiene del personal, limpieza de equipos y rutina aplicada.


                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 Registros de calidad de la leche: temperatura de almacenamiento, análisis físico-químicos y microbiológicos.


                      li.d-flex.align-items-start.p-1
                        span.icono-img
                        p.mb-0.m-l10 Rastreo del producto: transporte, destino de la leche y condiciones de traslado.

              p.mt-4 Durante las auditorías, los verificadores del #[b ICA] revisan estos componentes para determinar el grado de cumplimiento del predio frente a los requisitos establecidos en el #[b Formulario 3-852 v6], instrumento oficial de evaluación.


    .row.bg-16
      .col-12
        .p-5 
          separador
          #t_1_8.titulo-segundo.color-acento-contenido
            h2 1.8  Herramientas y registros asociados

          p Para garantizar una trazabilidad efectiva, los predios lecheros deben contar con herramientas técnicas y registros sistematizados que respalden la producción bajo estándares de calidad, inocuidad y legalidad. Entre los principales instrumentos requeridos se encuentran:

          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img32.png", style="height: 405px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img33.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Sistemas de identificación animal	
                    p.text-center.mb-0 Chapetas, aretes electrónicos o tatuajes registrados en #[b SINIGAN].

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img34.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Historia clínica del animal	
                    p.text-center.mb-0 Registros de tratamientos, vacunación, enfermedades y eventos reproductivos.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img35.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Protocolos de ordeño	
                    p.text-center.mb-0 Rutinas higiénicas, limpieza de equipos y condiciones del personal.
                  

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img36.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Control de calidad de la leche
                    p.text-center.mb-0 	Fichas de análisis físico-químico y microbiológico, control de temperatura.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img37.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Formatos de entrega y transporte	
                    p.text-center.mb-0 Registro del destino de la leche cruda y condiciones de traslado.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img38.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Manejo de residuos	
                    p.text-center.mb-0 Control de desechos biológicos y envases de medicamentos.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img39.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Archivo físico o digital	
                    p.text-center.mb-0 Conservación mínima de 12 meses con registros fechados y firmados por el responsable.




    p.mt-4 Estos documentos son verificados por el personal auditor para emitir hallazgos, cuya clasificación se detalla a continuación:

    .row.mt-4.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img40.png', alt='', style="width: 400px").m-auto
      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img41.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Crítico] 
                  p Leche de vacas medicadas sin retiro documentado. Suspensión inmediata de la certificación.

        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img42.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Mayor] 
                  p Falta de registros de medicamentos. Requiere acción correctiva para continuar.


        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img43.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-2.w-100.align-items-center
                  p.mb-0 #[b Menor] 
                  p Chapeta ilegible en algunos animales. Observación técnica sin suspensión.


    separador
    #t_1_9.titulo-segundo.color-acento-contenido
      h2 1.9  Evaluación, normativa y recomendaciones

    p El proceso de certificación BPG incluye una serie de #[b verificaciones técnicas por parte del ICA], entre las cuales se destacan:

    .row.align-items-center.mt-5
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img44.png', alt='', style="width: 505px").m-auto
      .col-lg-7

        .row.bg-11.r8.align-items-center
          .col-lg-12

            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Identificación animal sin duplicaciones.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Historia clínica individual actualizada.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Registro y uso adecuado de medicamentos, incluyendo tiempos de retiro.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Condiciones de higiene del ordeño y del personal.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Manejo de residuos peligrosos.


              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Control del ingreso y salida de productos.

    p.mt-4 Para asegurar el cumplimiento de estos criterios, se recomienda:

    .row.align-items-center.mt-5
      
      .col-lg-7

        .row.bg-11.r8.align-items-center
          .col-lg-12

            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Asignar un responsable técnico del sistema de registros.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Capacitar al personal en el diligenciamiento y manejo de tiempos de retiro.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Utilizar herramientas digitales y plataformas móviles.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Realizar revisiones periódicas de los registros.

              li.d-flex.align-items-start.p-1.bg-12.r8
                span.icono-img
                p.mb-0.m-l10 Establecer protocolos internos de trazabilidad clara, tanto interna como externa.


      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img45.png', alt='', style="width: 505px").m-auto


    p.mt-4 En Colombia, las principales #[b normas relacionadas con la trazabilidad en predios lecheros] son:

    .row.align-items-center
      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img46.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.align-items-center
                  p.mb-0 #[b Resolución ICA 067449 de 2020	] 
                  p Exige trazabilidad completa, verificable y documentada.

      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img47.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.align-items-center
                  p.mb-0 #[b Resolución ICA 000830 de 2020] 
                  p Regula registros de sanidad, identificación y procesos de ordeño.

    .row.align-items-center.mt-3
      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img48.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.align-items-center
                  p.mb-0 #[b Decreto 1500 de 2007 y Resolución 2674 de 2013	] 
                  p Establecen la trazabilidad obligatoria desde la producción primaria hasta el consumidor.

      .col-lg-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-17.r8.gx-1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img49.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.align-items-center
                  p.mb-0 #[b SINIGAN	] 
                  p Sistema nacional de seguimiento e identificación individual del ganado.

    .titulo-tres.mt-5: h3 Reflexión práctica

    .row.bg-18
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-8
                .col-lg.d-flex
                  .p-4.w-100.align-items-center
                    p Puede demostrar qué vaca produjo la leche, qué medicamento recibió, quién lo aplicó y si se respetó el tiempo de retiro?

                    p Una trazabilidad efectiva permite responder afirmativamente a esta pregunta con evidencia clara, organizada y verificable. Esto no solo respalda la calidad del producto, sino también la legalidad y seguridad del sistema productivo.
                .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                    img(src='@/assets/curso/tema1/img50.png', alt='', class="w-100 h-100 object-fit-cover")

          .row.align-items-center.mt-4
            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img51.png', alt='', style="width: 400px").m-auto
            .col-lg-8 
              p La trazabilidad en la producción lechera es una herramienta estratégica que integra salud animal, calidad del producto y control sanitario. Su adecuada implementación no solo permite cumplir con los requisitos legales, sino que también:

              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0.m-l10 Aumenta la #[b competitividad del sector ganadero].

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0.m-l10 Fortalece la #[b confianza del consumidor] y de los mercados internacionales.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0.m-l10 Mejora la #[b productividad y sostenibilidad] del sistema lechero.

              p.p-4.bg-19.r8 En este sentido, la trazabilidad se convierte en un pilar indispensable para cualquier productor que aspire a operar bajo estándares internacionales y participar activamente en un mercado exigente, asegurando alimentos seguros y de alta calidad.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
