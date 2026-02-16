<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ética y propiedad intelectual en innovación 
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La innovación en salud pública debe desarrollarse bajo principios éticos y marcos de propiedad intelectual que garanticen la protección de las personas, el uso responsable del conocimiento y el acceso equitativo a sus beneficios. En este sentido, la ética orienta la toma de decisiones durante los procesos de investigación, desarrollo e implementación de innovaciones, asegurando el respeto por la dignidad humana, la justicia social y la seguridad sanitaria. A su vez, la propiedad intelectual establece reglas para la protección y gestión de los resultados innovadores, equilibrando el reconocimiento a los creadores con el interés público, la transferencia de conocimiento y la sostenibilidad de las soluciones en salud.
        
        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Principios éticos en innovación en salud 
        
        img(src="@/assets/curso/tema4/2.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text La innovación en salud pública exige un compromiso ético permanente, dado que introduce transformaciones tecnológicas, organizacionales y sociales que inciden directamente en los derechos fundamentales, la equidad y la confianza pública. A diferencia de otros ámbitos, la innovación en salud opera en contextos de incertidumbre científica, impacto colectivo y decisiones que pueden afectar de manera diferencial a individuos y comunidades. Por ello, los principios éticos no constituyen un componente accesorio, sino un marco orientador esencial para la toma de decisiones responsables. Estos principios permiten evaluar riesgos, priorizar acciones y asegurar que la innovación contribuya efectivamente al bienestar social, evitando la profundización de desigualdades o la vulneración de la dignidad humana:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="A" titulo="Beneficencia y no maleficencia") La innovación debe orientarse a maximizar beneficios colectivos, mejorar resultados en salud, eficiencia y cobertura, al tiempo que minimiza riesgos, daños o efectos adversos no previstos. Esto implica evaluar de forma rigurosa las posibles externalidades negativas, sesgos tecnológicos o impactos diferenciados, especialmente en el uso de herramientas como la inteligencia artificial o sistemas automatizados.
          
          p(numero="B" titulo="Justicia y equidad") Exige que los beneficios y cargas de la innovación se distribuyan de manera justa, priorizando a poblaciones vulnerables y territorios históricamente rezagados. La innovación en salud pública debe contribuir a reducir brechas de acceso y no limitarse a soluciones que favorezcan únicamente a grupos con mayores recursos o capacidades.
          
          p(numero="C" titulo="Respeto por la autonomía y participación") Aunque muchas innovaciones tienen un alcance colectivo, es fundamental garantizar el respeto por la autonomía individual y comunitaria. Esto implica asegurar información clara, participación informada y mecanismos reales de consulta, consentimiento y corresponsabilidad social en los procesos de innovación.
          
          p(numero="D" titulo="Transparencia y rendición de cuentas") Los procesos de innovación deben ser abiertos y comprensibles en sus objetivos, métodos, riesgos y resultados. Las instituciones públicas, académicas y privadas tienen la responsabilidad de explicar y justificar las decisiones adoptadas, fortaleciendo la confianza social y la legitimidad de las intervenciones.

          

    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        LineaTiempoD.color-secundario
          p(numero="E" titulo="Principio de precaución") Ante la novedad tecnológica y la evidencia científica incompleta, se debe actuar con cautela. La innovación no debe avanzar sin evaluaciones previas, pruebas piloto y mecanismos de reversibilidad, especialmente en tecnologías emergentes como la inteligencia artificial, el monitoreo digital o el uso masivo de datos en salud.
          
          p(numero="F" titulo="Responsabilidad social y sostenibilidad") La innovación debe diseñarse con una visión de largo plazo, considerando su viabilidad social, económica y ambiental. Los actores innovadores deben asumir responsabilidad por las consecuencias no intencionadas, monitorear impactos y realizar ajustes que garanticen la sostenibilidad y pertinencia de las soluciones.

          p(numero="G" titulo="Inclusividad y participación comunitaria") La sociedad civil debe ser reconocida como cocreadora de la innovación y no solo como beneficiaria. La participación de comunidades y organizaciones sociales fortalece la pertinencia cultural, la apropiación local y la legitimidad de los procesos innovadores.
          
          p(numero="H" titulo="Evaluación ética continua y flexibilidad") La innovación es un proceso dinámico e iterativo, por lo que requiere mecanismos permanentes de seguimiento y evaluación ética. Estos permiten identificar efectos adversos, corregir desviaciones y, si es necesario, ajustar o retirar intervenciones que no cumplan con los principios éticos establecidos.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Propiedad intelectual
    
    .row.mb-5.justify-content-center.align-items-center
      .col-auto.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg
        p.mb-0(data-aos="fade-right") La propiedad intelectual (PI) constituye uno de los pilares fundamentales de la innovación, ya que ofrece mecanismos legales que reconocen y protegen los derechos derivados de la creación del conocimiento. En el ámbito de la salud pública, la PI cumple una función dual, incentivar la investigación y el desarrollo (I+D) al otorgar reconocimiento y protección a los innovadores, y, al mismo tiempo, garantizar que los resultados de la innovación estén disponibles de forma equitativa para la sociedad. Este equilibrio entre protección y acceso es particularmente relevante en sectores como el farmacéutico, biotecnológico y digital, donde las innovaciones tienen un impacto directo sobre la vida y el bienestar de las personas.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-center.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El sistema de propiedad intelectual constituye un componente estratégico de la innovación en salud pública, ya que define los mecanismos mediante los cuales se protegen, gestionan y comparten los resultados del conocimiento generado.
        p.mb-0 Estas figuras de protección varían según la naturaleza del producto o proceso innovador y permiten equilibrar la protección de los derechos de los innovadores con el interés público, el acceso al conocimiento y la sostenibilidad de los sistemas de salud. En el ámbito sanitario, la propiedad intelectual no solo incentiva la investigación y el desarrollo, sino que también influye en la transferencia tecnológica, la escalabilidad de las soluciones y su impacto social.
    
    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/8.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4 Patentes
              p.mb-0 Protegen invenciones técnicas que aportan una solución novedosa, útil y aplicable a un problema específico. En salud pública, incluyen nuevos medicamentos, dispositivos médicos, reactivos de diagnóstico, procesos biotecnológicos o algoritmos avanzados de análisis clínico y genético.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/9.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4 Derechos de autor
              p.mb-0 Amparan obras originales de carácter intelectual, como software en salud, bases de datos, plataformas digitales, materiales educativos, guías clínicas y protocolos metodológicos, protegiendo la forma de expresión del conocimiento.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/10.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4 Secretos industriales (<em>know-how</em>)
              p.mb-0 Comprenden conocimientos técnicos, procedimientos o prácticas no divulgadas que son esenciales para el funcionamiento o reproducción de una tecnología. Son especialmente relevantes en procesos industriales, farmacéuticos o de laboratorio.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/11.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4 Licencias de acceso abierto
              p.mb-0 Mecanismos que permiten compartir conocimientos, datos o desarrollos tecnológicos bajo condiciones específicas, favoreciendo la colaboración, la equidad en el acceso y el impacto social de la innovación en salud pública.
    
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
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-4.p-5
              p.mb-0(data-aos="fade-right") Organismos internacionales como la Organización Mundial de la Propiedad Intelectual (OMPI), la Organización Mundial de la Salud (OMS) y la Organización Panamericana de la Salud (OPS) promueven políticas que armonizan la protección de la propiedad intelectual con el acceso equitativo a los productos sanitarios esenciales. 
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La Estrategia Global y Plan de Acción sobre Salud Pública, Innovación y Propiedad Intelectual (OMS, 2011b) constituye un referente central en este sentido, ya que busca incentivar la investigación y la innovación orientadas a las enfermedades desatendidas, promover la producción local de tecnologías sanitarias y fortalecer las capacidades de los países en desarrollo para gestionar su propia propiedad intelectual.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la regulación de la propiedad intelectual se encuentra enmarcada en la Decisión 486 de 2000 sobre Régimen Común sobre Propiedad Industrial, y las disposiciones de la Superintendencia de Industria y Comercio (SIC). A nivel institucional, los organismos públicos de investigación, como el Instituto Nacional de Salud, cuentan con políticas internas de gestión de propiedad intelectual y transferencia tecnológica, que regulan la titularidad, protección y uso social de los resultados de investigación. Estas políticas son esenciales para evitar la pérdida de derechos, garantizar el reconocimiento de los investigadores y promover la generación de impacto social a partir del conocimiento.

    p Finalmente, el enfoque contemporáneo de la propiedad intelectual en salud pública se orienta hacia modelos más abiertos, colaborativos y solidarios. Iniciativas como el licenciamiento abierto (<em>open licensing</em>), los bancos de patentes compartidas, o los acuerdos de acceso a medicamentos esenciales, promueven la democratización del conocimiento científico y tecnológico. Estos mecanismos permiten que innovaciones clave, por ejemplo, pruebas diagnósticas, vacunas o plataformas de datos genómicos, puedan ser utilizadas y adaptadas por diferentes actores, ampliando su impacto social. En este sentido, la propiedad intelectual deja de ser una barrera para convertirse en una herramienta estratégica para la innovación inclusiva y sostenible, alineada con los principios éticos y los objetivos de salud pública global.

  
        

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
