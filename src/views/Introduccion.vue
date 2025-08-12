<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-9
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-2.r8
                    .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/intro/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
                    .col-lg.d-flex
                      .p-4.w-100.d-flex.align-items-center
                        p.mb-0.text-white La producción de leche bovina con criterios técnicos, higiénicos y sostenibles es fundamental para garantizar la inocuidad alimentaria, el bienestar animal y la competitividad del sector ganadero. En este contexto, las Buenas Prácticas Ganaderas (BPG) constituyen un conjunto de acciones y lineamientos orientados a mejorar la calidad del producto, proteger la salud pública, preservar el ambiente y asegurar condiciones adecuadas en las unidades productivas.

                p.mt-2 Su implementación está respaldada por la normatividad vigente en Colombia, en particular por la Resolución ICA 067449 de 2020, que establece los requisitos sanitarios, ambientales y de manejo técnico que deben cumplir los predios lecheros.

            .col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/intro/img2-1.png', alt='', style="width: 295px").m-auto

          .row.align-items-center.justify-content-center
            .col-lg-10
              .row.mt-4.r8.bg-3.p-3.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/intro/img3.svg", alt="", style="width: 95px").m-auto
                .col-lg-10
                  p La evaluación de las BPG es un proceso técnico y normativo liderado por el ICA o por entidades autorizadas, cuyo propósito es verificar el cumplimiento de los estándares mediante auditorías, listas de verificación y revisión directa en el predio. Esta evaluación permite identificar hallazgos, promover acciones correctivas y consolidar una cultura de mejora continua. Más allá de ser un requisito para obtener la certificación, evaluar las BPG representa una herramienta estratégica para fortalecer la sostenibilidad, trazabilidad y solidez operativa de la producción de leche bovina en Colombia.



</template>

<script>
export default {
  name: 'Introduccion',
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
