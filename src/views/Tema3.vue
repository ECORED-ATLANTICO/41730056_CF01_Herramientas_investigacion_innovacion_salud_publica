<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa y ecosistema de innovación en salud 
    
    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema3/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-8(data-aos="fade-up")
            p.banner-text La innovación en el ámbito de la salud se desarrolla dentro de un marco normativo y un ecosistema institucional que orientan, regulan y promueven la generación y aplicación del conocimiento. A nivel internacional y nacional, estas disposiciones establecen principios, lineamientos y responsabilidades para garantizar que los procesos de innovación se realicen de manera ética, segura y alineada con las prioridades en salud pública.
        
        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Normativa internacional

        .row.mb-5.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") La innovación en salud pública ha adquirido un papel estratégico a nivel global debido a su capacidad para responder a problemáticas estructurales que afectan la equidad, la sostenibilidad y la seguridad sanitaria. En las últimas décadas, los organismos internacionales han reconocido que la innovación no solo impulsa el desarrollo tecnológico, sino que también fortalece los sistemas de salud frente a contextos complejos y cambiantes, orientando políticas y marcos regulatorios que respaldan su implementación responsable y efectiva.


        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/3.png", alt="alt")
              .crd_hover_txt--body
                h3.mb-3 Inequidad  y acceso
                p.mb-0 La innovación facilita soluciones accesibles y escalables, como la telemedicina y los diagnósticos móviles, que contribuyen a reducir brechas de acceso en poblaciones vulnerables.
        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/4.png", alt="alt")
              .crd_hover_txt--body
                h3.mb-3 Sostenibilidad financiera
                p.mb-0 Las innovaciones de proceso y organizacionales mejoran la eficiencia, reducen costos y favorecen la viabilidad de los sistemas de salud a largo plazo.
        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/5.png", alt="alt")
              .crd_hover_txt--body
                h3.mb-3 Respuesta a crisis sanitarias
                p.mb-0 El desarrollo de nuevas tecnologías y sistemas de vigilancia fortalece la capacidad de respuesta ante emergencias y pandemias, consolidando la innovación como una estrategia de seguridad sanitaria.
    
    .row.align-items-center.bg-color-1.p-4.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img.d-lg-flex.d-none(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Ante este contexto, se han establecido diversos referentes normativos y estratégicos internacionales que orientan el desarrollo y la aplicación de la innovación en salud pública, promoviendo la cooperación, el acceso equitativo y el uso responsable del conocimiento.
    
    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Organización  Mundial de la Salud (OMS)") La Estrategia Mundial y Plan de Acción sobre Salud Pública, Innovación y Propiedad Intelectual orienta a los Estados en investigación, innovación tecnológica, producción local y evaluación de tecnologías sanitarias.
          
          p(numero="2" titulo="Organización Panamericana de la Salud (OPS)") La Plataforma Regional de Innovación y Producción y la Agenda de Salud Sostenible para las Américas promueven la innovación, la seguridad regional y el acceso equitativo a tecnologías sanitarias.
          
          p(numero="3" titulo="Naciones Unidas - ODS") El ODS 3 (Salud y bienestar) impulsa el uso de la ciencia, la tecnología y la innovación para alcanzar metas de salud y desarrollo sostenible.
          
          p(numero="4" titulo="UNCTAD") Promueve la ciencia, tecnología e innovación como ejes para fortalecer capacidades, infraestructura y resiliencia de los sistemas de salud.

          p(numero="3" titulo="OMPI (WIPO)") Regula tratados internacionales de propiedad intelectual, buscando equilibrar la protección de innovaciones con el acceso a tecnologías sanitarias esenciales.
          
          p(numero="4" titulo="OCDE") Aporta marcos metodológicos como el Manual de Oslo, que orienta la clasificación y medición de la innovación en el sector salud.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Normativa nacional
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-4.p-5
              p.mb-0(data-aos="fade-right") La innovación en salud pública en Colombia se desarrolla sobre un marco normativo integral que articula principios constitucionales, políticas públicas, disposiciones legales y estrategias nacionales de ciencia, tecnología e innovación. Este marco reconoce la salud como un derecho fundamental y posiciona la investigación, el desarrollo tecnológico y la innovación como herramientas clave para mejorar la equidad, la calidad y la sostenibilidad del sistema de salud. 
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A través de la acción coordinada del Estado, la academia, el sector productivo y la sociedad civil, se promueve la generación y aplicación del conocimiento para responder a los principales desafíos sanitarios del país y fortalecer la toma de decisiones en salud pública.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fundamento constitucional y legal")
            figure.mb-3
              img(src="@/assets/curso/tema3/10.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
            p.mb-0 Establece la salud como un derecho fundamental y una obligación del Estado, garantizando su acceso, calidad y equidad, y promoviendo la innovación como medio para su realización.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Base científica y tecnológica")
            figure.mb-3
              img(src="@/assets/curso/tema3/11.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
            p.mb-0 Orienta la investigación, el desarrollo tecnológico y la transferencia de conocimiento en salud, priorizando la inversión en ciencia, tecnología e innovación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Articulación estratégica")
            figure.mb-3
              img(src="@/assets/curso/tema3/12.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
            p.mb-0 Promueve la coordinación entre políticas, sectores y actores para fortalecer la investigación, la innovación y la autonomía sanitaria del país.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Carácter financiero")
            figure.mb-3
              img(src="@/assets/curso/tema3/13.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
            p.mb-0 Define los lineamientos y mecanismos de financiación que respaldan proyectos de innovación en salud pública, asegurando su sostenibilidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fundamento institucional")
            figure.mb-3
              img(src="@/assets/curso/tema3/14.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
            p.mb-0 Integra modelos de gestión pública que evalúan y fortalecen la gestión del conocimiento y la innovación, garantizando la aplicación efectiva de los resultados de investigación.
    
    p.mb-5 En conjunto, el marco normativo Colombiano articula el derecho fundamental a la salud con la generación y aplicación del conocimiento científico y tecnológico, asegurando que la innovación contribuya al bienestar, la equidad y la sostenibilidad del sistema de salud. A partir de estos lineamientos, la política pública de innovación en salud se concreta mediante instrumentos de planeación, regulación e inversión, especialmente los documentos CONPES y otras disposiciones legales, que orientan la gobernanza del Sistema Nacional de Innovación, promueven la transformación digital, fortalecen la autonomía sanitaria y facilitan la toma de decisiones basadas en evidencia en salud pública.

    .bg-fondo-slider.tarjeta
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/15.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 CONPES 4145 de 2025
              h5 Lineamientos estratégicos para la inversión nacional en I+D+i
              p.mb-0 Fortalece la inversión en investigación, desarrollo e innovación en todos los sectores, incluido el de la salud, promoviendo la cooperación entre actores públicos, privados y académicos.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/16.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 CONPES 4144 de 2025
              h5 Política nacional de inteligencia artificial
              p.mb-0 Orienta el uso responsable de la IA en salud, reconociendo oportunidades para mejorar eficiencia, atención y gestión, así como riesgos éticos y psicosociales.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/17.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 CONPES 4170 de 2025
              h5 Soberanía sanitaria y producción farmacéutica
              p.mb-0 Impulsa la producción nacional de medicamentos, vacunas y tecnologías sanitarias, fortaleciendo la autonomía sanitaria y reduciendo la dependencia externa.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/18.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 CONPES 4069 de 2021
              h5 Política nacional de CTel 2022-2031
              p.mb-0 Marco rector del ecosistema nacional de investigación e innovación, que prioriza la salud como sector estratégico para la investigación aplicada y la transferencia de conocimiento.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/19.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 CONPES 3975 de 2020
              h5 Transformación digital e IA
              p.mb-0 Promueve la digitalización del sistema de salud mediante inteligencia artificial, interoperabilidad y telemedicina, fortaleciendo un enfoque preventivo y basado en datos.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/20.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4.mb-0 Ley 1419 de 2010
              h5 Telesalud en Colombia
              p.mb-0 Introduce la telesalud y la telemedicina como modalidades innovadoras para mejorar el acceso, la oportunidad y la continuidad de la atención en salud.
      
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Ecosistema de innovación 
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Colombia cuenta con condiciones favorables para consolidar un ecosistema de innovación en salud pública basado en el modelo de la Cuádruple Hélice, el cual promueve la interacción articulada entre el Estado, la academia, el sector productivo y la sociedad civil. Este enfoque permite superar la fragmentación institucional y orienta la innovación hacia soluciones colaborativas, abiertas y con impacto social, facilitando la generación, transferencia y aplicación del conocimiento para responder de manera efectiva a los desafíos sanitarios del país.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
      div(titulo="Hélice  gubernamental")
        p.ms-5 El Estado actúa como regulador, articulador y facilitador del ecosistema de innovación en salud pública. A través de entidades como el Ministerio de Salud, MinCiencias e INVIMA, orienta la inversión en investigación, desarrollo e innovación hacia prioridades sanitarias nacionales, garantizando marcos normativos éticos, seguros y flexibles. Además, promueve instrumentos de financiación, incentivos y alianzas público-privadas que permiten reducir brechas entre investigación y aplicación práctica. Su rol es clave para asegurar que la innovación se traduzca en políticas públicas, servicios de salud mejorados y mayor equidad para la población.
      div(titulo="Hélice académica")
        p.ms-5 La academia y los centros de investigación constituyen el eje de generación de conocimiento científico y tecnológico. Universidades, institutos de investigación y centros especializados desarrollan estudios orientados a problemáticas reales de salud pública, fortaleciendo la investigación aplicada y la formación de talento humano. Esta hélice impulsa la transferencia de resultados hacia el sistema de salud, apoyando la toma de decisiones basadas en evidencia. Su aporte permite que la ciencia trascienda el ámbito académico y se convierta en una herramienta práctica para mejorar la calidad, eficiencia y pertinencia de las intervenciones en salud.
      div(titulo="Hélice empresarial")
        p.ms-5 El sector productivo cumple un papel fundamental en la transformación del conocimiento en soluciones escalables y sostenibles. Empresas, startups y emprendimientos del sector salud y tecnológico aportan capacidades de gestión, innovación, financiamiento y comercialización. Mediante la articulación con el Estado y la academia, facilitan la validación, producción y adopción de tecnologías, servicios y modelos innovadores. Esta hélice contribuye a que las innovaciones lleguen efectivamente al sistema de salud, fortaleciendo la competitividad, la sostenibilidad económica y la modernización de los servicios sanitarios.
      div(titulo="Hélice social")
        p.ms-5 La sociedad civil representa la dimensión participativa del ecosistema de innovación, asegurando que las soluciones desarrolladas respondan a las necesidades reales de la población. Comunidades, organizaciones sociales y usuarios del sistema de salud aportan conocimiento del territorio, perspectivas culturales y criterios de aceptación social. Su participación en el diseño, implementación y evaluación de innovaciones favorece la equidad, la apropiación social del conocimiento y la sostenibilidad de las intervenciones. Esta hélice fortalece la democratización de la innovación y consolida a la ciudadanía como actor activo en la transformación del sistema de salud.
    
   
      
      

</template>

<script>
export default {
  name: 'Tema3',
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
