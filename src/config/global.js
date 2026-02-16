export default {
  global: {
    Name: 'Herramientas y normativa de innovación en salud pública',
    Description:
      'Este componente formativo aborda los fundamentos conceptuales, tipos y marcos normativos de la innovación en salud pública, destacando su relación con la investigación, la ética y la propiedad intelectual. Lo anterior, permite comprender la innovación en salud y su aplicación para fortalecer propuestas de investigación contextualizadas y sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Innovación en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de innovación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Innovación e I+D+i',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Innovación según el cambio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Innovación según el impacto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Innovación según el enfoque',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Innovación según nivel de apertura',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa y ecosistema de innovación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa internacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativo nacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ecosistema de innovación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ética y propiedad intelectual en innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios éticos en innovación en salud',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Propiedad intelectual',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_41730056__DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Innovación e I+D+i',
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos. (2015). <em>Manual de Frascati: Guía para la recopilación y presentación de información sobre investigación y desarrollo experimental</em>. OCDE.',
      tipo: 'Documento técnico internacional',
      link:
        'https://www.oecd.org/content/dam/oecd/es/publications/reports/2015/10/frascati-manual-2015_g1g57dcb/9789264310681-es.pdf',
    },
    {
      tema: 'Tipos de innovación',
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos & Eurostat. (2018). <em>Manual de Oslo: Guía para la recopilación e interpretación de datos sobre innovación</em> (4.ª ed.). OCDE.',
      tipo: 'Manual',
      link:
        'https://www.oecd.org/en/publications/oslo-manual-2018_9789264304604-en.html',
    },
    {
      tema: 'Propiedad intelectual',
      referencia:
        'Romero Calvo, D., & Cuesta Quintero, J. C. (2004). <em>Propiedad intelectual y salud pública</em>. Cuadernos Latinoamericanos de Administración, 1(1), 57–74.',
      tipo: 'Artículo académico',
      link: 'https://www.redalyc.org/pdf/4096/409634371010.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ecosistema de innovación',
      significado:
        'Conjunto de actores, instituciones y relaciones que facilitan generar, transferir y aplicar innovaciones.',
    },
    {
      termino: 'I+D+i',
      significado:
        'Ciclo de investigación, desarrollo e innovación que genera conocimiento aplicado y soluciones nuevas.',
    },
    {
      termino: 'Innovación',
      significado:
        'Introducción de algo nuevo o mejorado que genera valor y cambio en la práctica.',
    },
    {
      termino: 'Innovación abierta',
      significado:
        'Modelo donde se comparte conocimiento con actores externos para cocrear y aplicar soluciones.',
    },
    {
      termino: 'Innovación social',
      significado:
        'Innovación orientada a resolver problemas sociales, priorizando equidad, inclusión y bienestar colectivo.',
    },
    {
      termino: 'Innovación tecnológica',
      significado:
        'Uso de avances científicos o técnicos para crear o mejorar productos, servicios o procesos.',
    },
    {
      termino: 'Modelo de cuádruple hélice',
      significado:
        'Enfoque que integra Estado, academia, empresa y sociedad civil para impulsar innovación.',
    },
    {
      termino: 'Patente',
      significado:
        'Título que concede derecho exclusivo temporal sobre una invención técnica novedosa y útil.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'Conjunto de derechos que protegen creaciones intelectuales y regulan su uso y explotación.',
    },
    {
      termino: 'Salud pública',
      significado:
        'Campo que protege y mejora la salud poblacional mediante acciones colectivas organizadas.',
    },
    {
      termino: 'Telemedicina / Telesalud',
      significado:
        'Prestación de servicios de salud a distancia mediante tecnologías de información y comunicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Médica Mundial. (1964). <em>Declaración de Helsinki: Principios éticos para las investigaciones médicas con participantes humanos</em>.',
      link:
        'https://www.wma.net/es/policies-post/declaracion-de-helsinki-de-la-amm-principios-eticos-para-las-investigaciones-medicas-en-seres-humanos/',
    },
    {
      referencia:
        'Buttigieg, S. C. (2019). <em>Innovation strategies and health system guiding principles to address equity and sustainability in responsible innovation in health</em>. International Journal of Health Policy and Management, 8(9), 570–572.',
      link: 'https://doi.org/10.15171/ijhpm.2019.50',
    },
    {
      referencia:
        'Comisión de la Comunidad Andina. (2000). <em>Decisión 486: Régimen común sobre propiedad industrial</em>.',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-misionales/facilitacion-del-comercio-y-defensa-comercial/decisiones-de-la-comunidad-andina/decision-486-de-2000.aspx',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2010). <em>Ley 1419 de 2010: Por la cual se establecen los lineamientos para el desarrollo de la telesalud en Colombia</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=40937',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015: Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2024). <em>Ley 2386 de 2024: Política nacional de investigación científica, desarrollo tecnológico, innovación y producción de la industria farmacéutica para la autonomía sanitaria</em>.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=158637',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2021). <em>CONPES 4069: Política nacional de ciencia, tecnología e innovación 2022–2031</em>.',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Económicos/3582.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025). <em>CONPES 4145: Lineamientos de política para el marco de inversión en I+D</em>.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4145.pdf',
    },
    {
      referencia:
        'Equipo de Expertos en Ciencia y Tecnología. (2017). <em>Innovación: Tipos y características fundamentales</em>. Universidad Internacional de Valencia.',
      link:
        'https://www.universidadviu.com/es/actualidad/nuestros-expertos/tipos-de-innovacion-y-caracteristicas-fundamentales',
    },
    {
      referencia:
        'Ricciardelli, A., Mercurio, L., & Salvatore, C. (2025). <em>Advancing quadruple helix theory for health systems innovation</em>. BMC Health Services Research, 25, 1346.',
      link: 'https://doi.org/10.1186/s12913-025-13450-w',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Angélica Rocío Borbón Orjuela',
          cargo: 'Profesional Especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Leonor Cristina Cañón Uribe',
          cargo: 'Profesional Especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Maria Luz Gunturiz Albarracin',
          cargo: 'Profesional Especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Angela Navas Cáceres',
          cargo: 'Experta Técnica',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Gina Carol Villate Calderón',
          cargo: 'Experta Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
