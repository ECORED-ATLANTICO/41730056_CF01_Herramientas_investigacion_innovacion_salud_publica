<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Herramientas y normativa de innovación en salud pública',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar el grado de apropiación de los contenidos del Componente Formativo 1',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Los desafíos que enfrenta hoy en día la salud en cuanto a la innovación son:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inequidad y acceso', esCorrecta: false },
            { id: 'b', texto: 'Sostenibilidad financiera', esCorrecta: false },
            {
              id: 'c',
              texto: 'Respuesta a crisis sanitarias',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una necesidad clara y urgente',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 2,
          texto:
            'Según el Reglamento Sanitario Internacional (RSI) de 2005 de la Organización Mundial de la Salud (OMS), ¿cuál de las siguientes afirmaciones describe correctamente una de las obligaciones de los Estados Miembros en materia de salud pública?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los Estados Miembros solo deben notificar los brotes de enfermedades transmisibles que superen las fronteras nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los Estados Miembros únicamente deben invertir en innovación tecnológica cuando la OMS lo solicite formalmente a cada una de las entidades territoriales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los Estados Miembros deben desarrollar, fortalecer y mantener capacidades para prevenir, detectar y responder a eventos que puedan constituir una emergencia de salud pública',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los Estados Miembros pueden decidir libremente si implementan o no medidas de vigilancia epidemiológica según su contexto político.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 3,
          texto:
            'Tras identificar los diferentes marcos normativos que regulan el sistema colombiano, ¿cuál de ellos constituye uno de los pilares que sustentan la innovación en salud pública?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 2162 de 2021', esCorrecta: true },
            { id: 'b', texto: 'Ley 100 de 1993', esCorrecta: false },
            { id: 'c', texto: 'Resolución 4747 de 2007', esCorrecta: false },
            { id: 'd', texto: 'Resolución 839 de 2017', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función esencial de la academia y los centros de investigación en el fortalecimiento de la salud pública, dentro del modelo de colaboración con el gobierno y las entidades territoriales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitarse a realizar investigaciones teóricas sin aplicación práctica en políticas de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la investigación aplicada y garantizar la transferencia de sus resultados hacia productos, procesos y políticas que contribuyan al bienestar social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Competir de manera independiente con las instituciones gubernamentales por los recursos de investigación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Centrarse exclusivamente en la formación académica sin participar en la definición de agendas de investigación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 5,
          texto:
            'El ecosistema puede estructurarse en torno a cuatro ejes o hélices estratégicas. ¿A cuál de estas hélices corresponde el motor de generación de conocimiento, orientado a fortalecer la investigación aplicada dirigida a las prioridades nacionales de salud pública?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hélice académica', esCorrecta: true },
            { id: 'b', texto: 'Hélice gubernamental', esCorrecta: false },
            { id: 'c', texto: 'Hélice empresarial', esCorrecta: false },
            { id: 'd', texto: 'Hélice social', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 6,
          texto:
            'Entre los principios fundamentales aplicables a la innovación en salud pública se encuentra el siguiente: ‘Los procesos de innovación deben ser abiertos en sus objetivos, metodologías, riesgos y resultados’, el cual hace referencia a…',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación ética continua y flexibilidad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responsabilidad social y sostenibilidad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Respeto por la autonomía y participación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transparencia y rendición de cuentas',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 7,
          texto:
            'Cuando decimos que la innovación debe buscar promover el bien para la población, mejorar resultados de salud, eficiencia, cobertura, mientras se minimizan riesgos y daños. Nos referimos al principio de:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Precaución', esCorrecta: false },
            {
              id: 'b',
              texto: 'Beneficencia y no maleficencia',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Justicia y equidad', esCorrecta: false },
            {
              id: 'd',
              texto: 'Responsabilidad social y sostenibilidad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 8,
          texto:
            'La Innovación basada en la implementación de un nuevo o mejorado método de producción, logística o distribución se conoce como:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Innovación de Marketing', esCorrecta: false },
            { id: 'b', texto: 'Innovación de Proceso', esCorrecta: true },
            {
              id: 'c',
              texto: 'Innovación de Investigación',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Innovación de Servicio', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 9,
          texto:
            'Corresponde al tipo de Innovación que genera la utilización de un nuevo método de comercialización realizando importantes cambios en la promoción, presentación o diseño del producto.',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Innovación Disruptiva', esCorrecta: false },
            { id: 'b', texto: 'Innovación Organizacional', esCorrecta: false },
            { id: 'c', texto: 'Innovación de Producto', esCorrecta: false },
            { id: 'd', texto: 'Innovación de Marketing', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 10,
          texto:
            'Es la Innovación que introduce un nuevo servicio o bien con mejoras a nivel técnico de componentes o funcionales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Innovación de Producto', esCorrecta: true },
            { id: 'b', texto: 'Innovación Disruptiva', esCorrecta: false },
            { id: 'c', texto: 'Innovación Organizacional', esCorrecta: false },
            {
              id: 'd',
              texto: 'Innovación de Investigación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 11,
          texto: 'La Innovación Incremental pertenece al grupo de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Innovación según su grado de novedad',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Innovación según su ámbito de aplicación',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Innovación de servicio', esCorrecta: false },
            {
              id: 'd',
              texto: 'Innovación según el producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 12,
          texto:
            'El sistema de propiedad intelectual abarca diferentes figuras de protección como las patentes, los derechos de autor, los secretos industriales (know-how) y las licencias de acceso abierto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 13,
          texto:
            'Organismos internacionales como la Organización Mundial de la Propiedad Intelectual (OMPI), la Organización Mundial de la Salud (OMS) y la Organización Panamericana de la Salud (OPS) promueven políticas que armonizan la protección de la propiedad intelectual con el acceso equitativo a los productos sanitarios esenciales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 14,
          texto:
            'En Colombia, la regulación de la propiedad intelectual se encuentra enmarcada en la Decisión Andina 486 de 2000, el Decreto 1873 de 2022 (que reglamenta la transferencia de resultados de investigación financiados con recursos públicos).',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 15,
          texto:
            'La innovación en salud pública implica la creación o adaptación de soluciones orientadas a disminuir las condiciones de vida de las comunidades, apoyando la equidad y la sostenibilidad de las intervenciones.',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 16,
          texto:
            'La innovación disruptiva rompe con el modelo tradicional de la atención presencial, generando un novedoso sistema de atención apoyado en la interoperabilidad, conectividad y descentralización del conocimiento médico',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 17,
          texto:
            'El objetivo principal del modelo de la Cuádruple Hélice, es superar la fragmentación del conocimiento, los recursos y la gestión, asegurando que la innovación se implemente, escale y se mantenga para generar transformaciones reales en la salud y el bienestar de la población.',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 18,
          texto:
            'Los principios éticos que orientan la innovación en salud pública tienen su raíz en la ética de la investigación biomédica y social, desarrollada a partir de documentos fundacionales como la Carta de Ottawa.',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 19,
          texto:
            'El sistema de propiedad intelectual para la salud pública abarca diferentes figuras de protección, entre las que se encuentran las patentes, los derechos de autor, los secretos industriales (know-how) y las licencias de acceso abierto.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 20,
          texto:
            'El CONPES 4144 de 2025 se refiere a la Política Nacional de Inteligencia Artificial, reconoce tanto las oportunidades como los riesgos asociados al uso de esta en el sector salud.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
