<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de innovación
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La innovación en salud pública puede clasificarse en diferentes tipos según las características del cambio que introduce, el nivel de impacto que genera, el enfoque desde el cual se desarrolla y el grado de apertura del proceso innovador. Estas clasificaciones permiten comprender cómo surgen las innovaciones, de qué manera transforman los sistemas de salud y cómo se articulan diversos actores en su desarrollo. Identificar los tipos de innovación facilita el análisis y la selección de estrategias más adecuadas para responder a problemáticas sanitarias específicas, optimizar recursos y fortalecer la investigación aplicada en salud pública.
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Innovación según el cambio
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-1.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
          .col-lg-11
            p.mb-0(data-aos="fade-right") Esta clasificación permite identificar los tipos de innovación según la naturaleza del cambio que se introduce en productos, procesos, estrategias o estructuras organizacionales. De acuerdo con los lineamientos del Manual de Oslo (OCDE, 2018), ampliamente adoptado en los sistemas de ciencia, tecnología e innovación, esta tipología facilita el análisis y la comparación de las innovaciones, al reconocer cómo se materializan los cambios y de qué manera contribuyen al mejoramiento del desempeño y la generación de valor en distintos contextos, incluido el ámbito de la salud pública.

        TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
          .p-3.p-md-4(titulo="Innovación  de producto o servicio")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Innovación  de producto o servicio
                p Consiste en la introducción de un bien o servicio nuevo, o en la mejora significativa de sus características técnicas, funcionales o de uso, con el fin de responder a nuevas necesidades o mejorar la experiencia del usuario.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/2.png', alt='Texto que describa la imagen')
          .p-3.p-md-4(titulo="Innovación de proceso")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Innovación de proceso
                p Se refiere a la implementación de métodos nuevos o mejorados para la producción, logística o distribución, orientados a optimizar recursos, reducir costos y aumentar la eficiencia y calidad de los resultados.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')
          .p-3.p-md-4(titulo="Innovación de <em>marketing</em>")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Innovación de <em>marketing</em>
                p Implica la aplicación de nuevas estrategias de comercialización que generan cambios relevantes en el diseño, presentación, promoción o posicionamiento de un producto o servicio frente al usuario.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='Texto que describa la imagen')
          .p-3.p-md-4(titulo="Innovación organizacional")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0
                h4 Innovación organizacional
                p Comprende la adopción de nuevas formas de organización interna, gestión del trabajo o relaciones externas, que fortalecen la coordinación, la innovación y el desempeño institucional.
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/5.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Innovación según el impacto
    
    img(src="@/assets/curso/tema2/11.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La innovación puede clasificarse de acuerdo con el impacto que genera y el grado de transformación que introduce en productos, servicios, procesos o modelos existentes. Esta clasificación permite analizar si los cambios son graduales o si representan rupturas significativas frente a las prácticas tradicionales, considerando su alcance tecnológico y su efecto en los sistemas y mercados donde se implementan. Comprender estos tipos de innovación facilita la identificación de estrategias adecuadas para responder a necesidades específicas y evaluar su potencial de transformación en distintos contextos, incluido el ámbito de la salud pública.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Innovación  incremental
                p.text-center Se basa en mejoras continuas y progresivas de productos, servicios o procesos existentes. Optimiza lo ya establecido sin generar cambios drásticos, siendo el tipo de innovación más frecuente en las organizaciones.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Innovación radical
                p.text-center Introduce productos, servicios o procesos completamente nuevos, sustentados en nuevas tecnologías o combinaciones inéditas, generando cambios profundos y abriendo nuevas oportunidades de desarrollo.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Innovación disruptiva
                p.text-center Provoca transformaciones significativas que reemplazan o vuelven obsoletos modelos y tecnologías existentes, creando nuevas formas de generar valor y modificando de manera estructural los sistemas establecidos.    
            
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/7.png', alt='')
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Innovación según el enfoque
    
    p.mb-5 La innovación puede analizarse también a partir del enfoque desde el cual se orienta su desarrollo, considerando el tipo de problema que busca resolver y el valor que pretende generar. Esta clasificación permite identificar si la innovación se centra en avances técnicos, en la atención de necesidades sociales o en la sostenibilidad ambiental, facilitando la selección de estrategias acordes con los objetivos del sector y el contexto de aplicación, especialmente en el ámbito de la salud pública.

    .row.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="Innovación  tecnológica")
            p.ms-5 Se orienta a la aplicación de avances científicos y tecnológicos para desarrollar nuevos productos, servicios o procesos, o mejorar de manera significativa los existentes.
          div(titulo="Innovación social")
            p.ms-5 Busca generar soluciones nuevas o mejoradas a problemáticas sociales, priorizando el bienestar colectivo, la equidad y la mejora de la calidad de vida de la población.
          div(titulo="Innovación ambiental")
            p.ms-5 Se enfoca en el desarrollo de soluciones que reduzcan el impacto ambiental, promuevan el uso eficiente de los recursos y favorezcan prácticas sostenibles y de economía circular.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Innovación según nivel de apertura

    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
          .col-lg-7
            p.mb-0(data-aos="fade-right") La innovación también puede clasificarse de acuerdo con el grado de apertura del proceso, es decir, según la forma en que las organizaciones interactúan, colaboran y comparten conocimiento con actores externos durante el desarrollo de soluciones innovadoras. Este enfoque, conocido como innovación abierta, reconoce que el conocimiento relevante no se encuentra únicamente al interior de una institución, sino que puede surgir de la articulación con otros sectores, favoreciendo la cocreación, la transferencia de saberes y la generación de mayor valor social, especialmente en contextos de salud pública.
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Innovación  cerrada")
                h4 Innovación  cerrada
                p Se desarrolla de manera interna dentro de una organización, que controla todas las etapas del proceso innovador. Se apoya principalmente en recursos propios y protege los resultados mediante mecanismos de propiedad intelectual.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Innovación abierta")
                h4 Innovación abierta
                p Se basa en la colaboración con actores externos como universidades, empresas, comunidades o instituciones públicas, promoviendo el intercambio de conocimientos, recursos y tecnologías para desarrollar soluciones más pertinentes y adaptadas al contexto.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Innovación colaborativa o co-creada")
                h4 Innovación colaborativa o co-creada
                p Integra elementos de innovación cerrada y abierta. La organización mantiene liderazgo técnico o regulatorio, pero articula a otros actores en etapas específicas, favoreciendo alianzas estratégicas y la generación de impacto social sostenible.

        .row.align-items-center.bg-color-3.p-4.mb-5
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/15.svg", style="max-width: 123px").mx-auto
          .col-lg
            p.mb-0 En síntesis, la innovación en salud pública no suele manifestarse de manera aislada, sino como una combinación dinámica de distintos tipos y enfoques, integrando dimensiones sociales, tecnológicas, organizacionales y de apertura. La implementación de sistemas de telemedicina asincrónica en zonas rurales ejemplifica esta convergencia, al responder a desigualdades en el acceso a atención especializada mediante soluciones accesibles y contextualizadas. Este tipo de innovación transforma los procesos tradicionales de atención, optimiza el uso de recursos y rompe con esquemas presenciales excluyentes, al tiempo que amplía la cobertura del sistema de salud. Además, su desarrollo requiere la articulación entre múltiples actores del ecosistema, instituciones de salud, academia, sector tecnológico, Estado y comunidade, lo que evidencia el valor de la colaboración y la cocreación para generar impactos sostenibles y pertinentes en la salud de la población.
    

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
