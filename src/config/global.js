export default {
  global: {
    Name: 'Gestión y evaluación en ganadería de leche',
    Description:
      'La capacitación tiene como objetivo fortalecer las competencias para supervisar la implementación de BPG en sistemas de producción de bovinos de leche, asegurando el cumplimiento de la normativa vigente y promoviendo la sostenibilidad productiva. Se enfoca en la evaluación y monitoreo continuo de procesos clave como manejo animal, sanidad, alimentación, bienestar y gestión ambiental, con el fin de garantizar prácticas responsables, eficientes y trazables en toda la cadena productiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Trazabilidad de la producción de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos para su desarrollo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y niveles de trazabilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazabilidad individual y por lotes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas y sistemas de soporte',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Importancia estratégica de la trazabilidad',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Sistemas y plataformas para la trazabilidad',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Aplicación en predios lecheros',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Herramientas y registros asociados',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Evaluación, normativa y recomendaciones',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de personal en lechería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas para la gestión del personal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Capacitación del personal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Asignación de funciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación del desempeño',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Evaluación del ICA en la gestión de personal',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Beneficios de una buena gestión del personal en lechería',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Evaluación de Buenas Prácticas Ganaderas (BPG) en producción de leche bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivo de la evaluación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de la evaluación según distintos criterios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas utilizadas en la evaluación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Metodología de evaluación de BPG en producción de leche',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias y acciones correctivas en la lechería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Proceso de subsanación de hallazgos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de acciones correctivas y preventivas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de acciones: inmediatas y preventivas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Metodología para el plan de mejora',
            hash: 't_4_4',
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
        download: 'downloads/72312185_CF02_DU.zip',
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
      tema:
        'Evaluación de Buenas Prácticas Ganaderas (BPG) en producción de leche bovina',
      referencia:
        'Ortegón, E., Pacheco, J. y Prieto, A. (2015). Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectos y programas. CEPAL.',
      tipo: 'Manual',
      link:
        'https://repositorio.cepal.org/server/api/core/bitstreams/2d86ecfb-f922-49d3-a919-e4fd4d463bd7/content',
    },
    {
      tema:
        'Evaluación de Buenas Prácticas Ganaderas (BPG) en producción de leche bovina',
      referencia: 'Mideplan Costa Rica. (2015). Seguimiento y Evaluación.',
      tipo: 'Página web',
      link: 'https://www.mideplan.go.cr/evaluci%C3%B3n-seguimiento',
    },
    {
      tema: 'Evaluación, normativa y recomendaciones',
      referencia:
        'Ministerio de Salud y Protección Social. (2020, 8 de mayo). <em>Resolución 067449 de 2020, por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción de leche</em>. Diario Oficial No. 51342',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf?utm_source=chatgpt.com',
    },
    {
      tema: 'Evaluación, normativa y recomendaciones',
      referencia:
        'Ministerio de Salud y Protección Social. (2007, 4 de mayo). <em>Decreto 1500 de 2007 por el cual se establece el reglamento técnico que crea el Sistema Oficial de Inspección, Vigilancia y Control de la carne y derivados cárnicos destinados al consumo humano y los requisitos sanitarios e inocuidad en su producción primaria, beneficio, procesamiento, transporte y comercialización.</em>',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38923',
    },
    {
      tema: 'Evaluación, normativa y recomendaciones',
      referencia:
        'Ministerio de Salud y Protección Social. (2013, 22 de julio). <em>Resolución 2674 de 2013 por la cual se reglamenta el artículo 126 del Decreto‑ley 019 de 2012 y se dictan disposiciones sobre requisitos sanitarios para fabricación, procesamiento, preparación, envasado, transporte, distribución y comercialización de alimentos.</em>',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf?utm_source=chatgpt.com',
    },
  ],
  glosario: [
    {
      termino: 'Aplicar a escala',
      significado:
        'conseguir que un proyecto pase de tratar con un reducido número de beneficiarios a un número más amplio. (CIVICUS, 2001)',
    },
    {
      termino: 'Calidad',
      significado:
        'es el grado en el que un conjunto de características inherentes cumple con unos requisitos. (López, 2014)',
    },
    {
      termino: 'Capacitación',
      significado:
        'es toda actividad realizada en una organización, respondiendo a sus necesidades, que busca mejorar la actitud, conocimiento, habilidades o conductas de su personal. (López, 2014)',
    },
    {
      termino: 'Consumidor final',
      significado:
        'es el último consumidor de un producto alimenticio que no empleará dicho alimento como parte de ninguna operación o actividad mercantil. (López, 2014)',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis, lo más sistemático y objetivo posible, de un proyecto en curso o ya terminado, de su formulación, ejecución y resultados. El propósito es determinar el cumplimiento de los objetivos y las prestaciones del proyecto (pertinencia, eficiencia, eficacia, impacto y sostenibilidad). (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Impacto',
      significado:
        'efecto de un proyecto sobre los beneficiarios directos, así como sobre su entorno más amplio, al interior de un sector o en un área geográfica, en términos de factores técnicos, económicos, socioculturales e institucionales. Evidencia la relación entre objetivos generales y objetivos específicos. (Castulina y Martínez, 2013).',
    },
    {
      termino: 'Indicadores',
      significado:
        'son señales concretas que se pueden medir. Son el reflejo de que algo ha ocurrido. Por ejemplo, un aumento del número de estudiantes aprobados es un indicador de la mejora de la cultura de enseñanza y aprendizaje. El medio de verificación (la prueba) es la lista oficial de aprobados. (CIVICUS, 2001)',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Métodos cualitativos',
      significado:
        'pertenecen a la tradición de las ciencias sociales y se basan en la observación de las personas en su mismo territorio, en la interacción con ellas en su propio idioma, posiblemente en sus propios términos. Enfatizan la comprensión de la manera como las personas estudiadas construyen la realidad. La mayoría de estudios cualitativos cuentan con análisis descriptivos más que estadísticos. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Métodos cuantitativos',
      significado:
        'se apoyan en instrumentos estructurados para recolectar información estandarizada de una muestra cuidadosamente seleccionada de individuos, unidades o eventos. La información es analizada a través de una comparación estadística entre grupos o de un análisis multivariado. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Monitoreo o seguimiento',
      significado:
        'actividad sistemática y permanente de recolección y análisis de datos para proveer, al equipo de gestión y a las principales partes interesadas, indicaciones sobre el avance y el logro de los objetivos, así como sobre la utilización de los fondos disponibles. Es muy importante para retroalimentar la gestión y la toma de decisiones. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el conjunto de procedimientos preestablecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de unas herramientas determinadas. (López, 2014)',
    },
  ],
  referencias: [
    {
      referencia:
        'Alianza Mundial para la Participación Ciudadana [CIVICUS]. (2001). Seguimiento y evaluación.',
      link:
        'https://www.civicus.org/view/media/Seguimiento%20y%20evaluacion.pdf',
    },
    {
      referencia:
        'Castulina, N. y Martínez, C. (2013). Guía para el Seguimiento y Evaluación de Proyectos Sociales. Project Concern International.',
      link: '',
    },
    {
      referencia:
        'Da Silva, D. (2021). ¿Qué son los indicadores de gestión y cómo impactan en la atención al cliente? Blog de Zendesk.',
      link:
        'https://www.zendesk.com.mx/blog/indicadores-gestion/#:~:text=Los%20indicadores%20de%20gesti%C3%B3n%20son,o%20preventivas%20seg%C3%BAn%20el%20caso',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP], Dirección de Inversiones y Finanzas Públicas [DIFP], Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública [GAPI], Programa de las Naciones Unidas para el Desarrollo [PNUD] y Proyecto de Modernización de la Administración Financiera del Sector Público [MASFP]. Metodología de Seguimiento de programas y proyectos de inversión. Versión oficial. (2004). Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/Metodolo_Seguimiento_progr_proys_inv.pdf',
    },
    {
      referencia:
        'Estrategia Internacional para la Reducción de Desastres de las Naciones Unidas. [UNISDR]. (2009). Terminología sobre Reducción del Riesgo de Desastres. Naciones Unidas.',
      link: 'https://www.unisdr.org/files/7817_UNISDRTerminologySpanish.pdf',
    },
    {
      referencia:
        'Keyence. (s. f.). ¿Qué es la trazabilidad? Principios de trazabilidad. ',
      link:
        'https://www.keyence.com.mx/ss/products/marking/traceability/basic_about.jsp',
    },
    {
      referencia:
        'Kurmen, R. (s. f.). Formulación y Evaluación de Proyectos. Universidad Manuela Beltrán.',
      link: '',
    },
    {
      referencia:
        'López, M. (2014). Elaboración del sistema de trazabilidad en la planta de producción de la empresa El Horno de Mikaela. Corporación Universitaria Lasallista.',
      link:
        'https://repository.unilasallista.edu.co/items/2aad44d5-f684-48ad-97df-394c1a025735',
    },
    {
      referencia:
        'Toro Galvis, C. A., Bedoya Henao, G., Rodríguez Espinosa, H., Palacio Baena, L. G. &amp; Silva Pérez, M. L. (2012). Manual para la certificación en buenas prácticas ganaderas en producción de leche. Universidad de Antioquia. Facultad de Ciencias Agrarias.',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/326139/20783422',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torre',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
