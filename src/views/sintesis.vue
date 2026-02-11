<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/1.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-0(data-aos="fade-right") El componente formativo Herramientas y normativa de innovación en salud pública permite comprender los fundamentos conceptuales, normativos y éticos que orientan la innovación en este campo, desde su marco teórico y regulatorio hasta su aplicación práctica en los sistemas de salud. Se inicia con el estudio de los conceptos y tipologías de innovación, así como su relación con los desafíos actuales de la salud pública. Posteriormente, se profundiza en la normativa internacional y nacional que respalda la innovación en salud, lo que permite establecer su importancia en la formulación de políticas públicas y en la toma de decisiones institucionales. Asimismo, se analizan los ecosistemas de innovación y los modelos de articulación intersectorial, proporcionando herramientas para fortalecer la colaboración entre actores públicos, privados, académicos y sociales.
        
      
        .row.align-items-center.bg-color-1.p-4.mb-5
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Se presentan los principios éticos que influyen en el desarrollo e implementación de innovaciones, así como los mecanismos de propiedad intelectual y transferencia tecnológica. La documentación aborda el equilibrio entre protección del conocimiento, acceso equitativo y responsabilidad social. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos éticos y legales asociados a la innovación en salud. 
        
        
        .row.justify-content-center.bg-color-sintesis.tarjeta.p-4
          .col-lg-10.mb-5.bgs.p-4.brad
            figure
              img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Herramientas y normativa de innovación en salud pública ofrece una aproximación integral a los conocimientos fundamentales sobre la innovación aplicada al sector salud y el marco normativo que la regula. Este módulo analiza detalladamente los conceptos, tipos y enfoques de innovación en salud pública, resaltando su relevancia en la transformación de los sistemas de salud, la mejora del acceso y la generación de impacto social, y se desglosan los elementos normativos que orientan su desarrollo responsable. Asimismo, se estudia el ecosistema de innovación desde el modelo de la cuádruple hélice, reconociendo el papel articulador del Estado, la academia, el sector productivo y la sociedad. La propuesta profundiza en los principios éticos que deben guiar la innovación en salud y en la gestión de la propiedad intelectual, promoviendo un equilibrio entre la protección del conocimiento, el acceso equitativo y la sostenibilidad de las soluciones innovadoras.")
          .col-auto
            a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
