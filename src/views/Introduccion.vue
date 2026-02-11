<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") El componente formativo Herramientas y normativa de innovación en salud pública, ofrece al aprendiz herramientas técnicas y prácticas para abordar la innovación como apoyo a la investigación y al monitoreo de eventos en salud pública. A partir del conocimiento de los fundamentos de la innovación, su relación con la I+D+i y sus tipologías, se fortalecen capacidades analíticas para identificar oportunidades de mejora y generación de valor en contextos sanitarios, según necesidades poblacionales.
        .row.align-items-center.bg-color-1.p-4  
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este componente también enfatiza en el marco normativo y el ecosistema de innovación en salud pública, con un enfoque en referentes internacionales, nacionales y el contexto colombiano. Además, promueve la aplicación de principios éticos y de propiedad intelectual, garantizando el uso responsable del conocimiento y el respeto normativo. Así, se contribuye a la formación de aprendices competentes y comprometidos con investigaciones innovadoras que aporten a la toma de decisiones y al fortalecimiento de la salud pública.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

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
