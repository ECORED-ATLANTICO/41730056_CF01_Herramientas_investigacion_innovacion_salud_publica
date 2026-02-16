<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Innovación en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") La innovación en salud pública hace referencia a la creación o mejora de métodos, procesos, servicios o estrategias que buscan resolver problemas relacionados con la salud de la población. Este concepto se fundamenta en la aplicación del conocimiento generado a través de la investigación, integrando la investigación, el desarrollo y la innovación (I+D+i) para transformar la evidencia científica en soluciones prácticas. 

            .row.align-items-center.bg-color-3.p-4.p-lg-5
              .col-lg-auto
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 De esta manera, la innovación permite fortalecer la vigilancia en salud, optimizar la toma de decisiones y mejorar la respuesta del sistema de salud frente a eventos que afectan el bienestar colectivo.

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto de innovación
        
        img(src="@/assets/curso/tema1/3.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.banner-text El concepto de innovación se refiere a la implementación de un producto, servicio, proceso, método o modelo nuevo o significativamente mejorado que genera valor y produce un impacto tangible en la práctica real. 
        
        
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="zoom-in")
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0 No se limita únicamente a la invención tecnológica, sino que abarca también mejoras de tipo organizacional, social y en la prestación de servicios, contribuyendo a transformar los sistemas de salud pública y a optimizar su capacidad de respuesta ante los desafíos sanitarios contemporáneos. 
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (Flessa & Huebner, 2021; Kimble & Massoud, 2017).
      
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Además, la innovación en salud pública implica la creación o adaptación de soluciones orientadas a mejorar las condiciones de vida de las comunidades, fortaleciendo la equidad y la sostenibilidad de las intervenciones. 

        .row.align-items-center.bg-color-1.p-4.p-lg-5
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Actualmente se conceptualiza la innovación como un proceso sistémico, dinámico y con múltiples etapas, que integra conocimiento científico, gestión institucional y aprendizaje organizacional, lo que permite que las ideas se conviertan en resultados concretos, escalables y útiles para la sociedad (Garney et al., 2022).
    
    separador
    
    .bg-full-width.bg-fondo-1
      .px-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Innovación e I+D+i
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La innovación y la investigación en salud pública mantienen una relación indispensable, que se manifiesta desde la formulación de una hipótesis o proyecto de investigación hasta la implementación de resultados y su evaluación en contextos reales. Esta relación puede comprenderse en tres funciones que se retroalimentan dentro del ciclo I+D+i: la generación de conocimiento, su aplicación en soluciones innovadoras y la evaluación de su impacto en la salud de la población, permitiendo ajustar, mejorar y validar las intervenciones según las necesidades del entorno sanitario:
        
        TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
          .p-3.p-md-4(titulo="Generación de conocimiento")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Generación de conocimiento
                p La investigación científica y tecnológica es la base de la innovación en salud pública. A través de estudios epidemiológicos, sociales y de sistemas de salud, se produce evidencia que permite comprender problemas sanitarios, identificar determinantes de salud y evaluar intervenciones. Este conocimiento constituye el insumo fundamental para el desarrollo de ideas y soluciones innovadoras orientadas a mejorar la salud de la población.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
          .p-3.p-md-4(titulo="Aplicación del conocimiento")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Aplicación del conocimiento
                p La innovación transforma los resultados de la investigación en soluciones prácticas, sostenibles y aplicables a contextos reales. Esto incluye el desarrollo de nuevos productos, procesos y enfoques sociales que fortalecen la vigilancia, la atención y la prevención en salud pública, asegurando que el conocimiento generado tenga un impacto tangible en los sistemas de salud.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')
          .p-3.p-md-4(titulo="Evaluación de impacto")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Evaluación de impacto
                p La evaluación permite medir si las innovaciones implementadas mejoran efectivamente los resultados en salud de la población. Este proceso analiza la pertinencia, efectividad y sostenibilidad de las soluciones aplicadas, generando nueva evidencia que retroalimenta la investigación y orienta decisiones sobre su ajuste, mejora o escalamiento.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-xl-5.mb-3.mb-lg-0
        .bg-color-5.p-4.px-lg-5.tarjeta 
          p.mb-0 En el contexto de la salud pública, la protección de estos activos debe estar acompañada de principios de equidad, acceso y responsabilidad social. Las instituciones públicas, universidades y centros de investigación que desarrollan innovaciones financiadas con recursos estatales tienen la obligación ética y legal de garantizar que sus resultados sean accesibles y beneficiosos para la población.
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-xl-4
        img.d-xl-flex.d-none(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mb-3
        p.mb-0 Por ello, la gestión de la propiedad intelectual en el sector salud no se limita a registrar o patentar, sino que implica definir estrategias de transferencia tecnológica responsable, en las cuales se equilibren los derechos de los innovadores con las necesidades de los sistemas de salud.
    

 
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
