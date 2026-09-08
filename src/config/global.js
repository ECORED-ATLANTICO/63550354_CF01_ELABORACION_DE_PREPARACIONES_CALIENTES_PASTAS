export default {
  global: {
    Name: 'Fundamentos del <em>mise en place</em> y elaboración de pastas',
    Description:
      'Este componente formativo desarrolla los fundamentos del alistamiento profesional en cocina (<em>mise en place</em>), las operaciones básicas, la interpretación de recetas estándar y las normas de higiene y manipulación de alimentos. Así mismo, aborda la elaboración de pastas: clases, formulación, características y técnicas de cocción, con énfasis en la terminología gastronómica y la aplicación de normas de seguridad y salud ocupacional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-5.png',
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
        titulo: '<em>Mise en place</em> y receta estándar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y origen del <em>mise en place</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del <em>mise en place</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procedimientos básicos en la cocina',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas y utensilios esenciales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructura de una receta estándar',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Factores de conversión y escalado de recetas',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Estandarización de porciones y costos',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Higiene, BPM y Seguridad Ocupacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos de higiene en la manipulación de alimentos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Enfermedades transmitidas por alimentos (ETA)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Marco normativo colombiano',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Procedimientos de limpieza y desinfección (POES)',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Identificación de peligros en el área de cocina',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Uso adecuado de equipos y utensilios',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Prevención de accidentes laborales',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Pastas: clases, formulación y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Historia de la pasta italiana',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Definición y composición',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación de las pastas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Formulación de la pasta fresca casera',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Características sensoriales de la pasta',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de cocción de pastas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Parámetros fundamentales para la cocción de pastas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de cocción según la variedad de pasta',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Términos de cocción: al dente y sus implicaciones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Errores comunes en la cocción y su corrección',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Terminología gastronómica aplicada a pastas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Vocabulario esencial para la preparación de pastas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Denominación de las pastas',
            hash: 't_5_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63550354_CF01_DU.pdf',
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
  glosario: [
    {
      termino: 'Al dente',
      significado:
        'Punto de cocción de la pasta en que ofrece resistencia al morderla; del italiano "al diente".',
    },
    {
      termino: 'BPM',
      significado:
        'Buenas Prácticas de Manufactura; conjunto de normas y procedimientos para garantizar la inocuidad de los alimentos.',
    },
    {
      termino: 'Chitarra',
      significado:
        'Marco de madera con cuerdas metálicas tensadas utilizado para cortar espaguetis de sección cuadrada.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos de un alimento a otro, generalmente de crudos a cocidos, a través de superficies, utensilios o manos contaminadas.',
    },
    {
      termino: 'ETA',
      significado:
        'Enfermedades transmitidas por alimentos; afecciones causadas por el consumo de agua o alimentos contaminados con microorganismos patógenos, toxinas o sustancias químicas.',
    },
    {
      termino: 'Factor de conversión',
      significado:
        'Número que se obtiene al dividir las porciones deseadas entre las porciones originales de una receta, utilizado para escalar cantidades.',
    },
    {
      termino: 'Lasaña (lasagne)',
      significado:
        'Láminas de pasta rectangular que se intercalan con capas de salsa, queso y otros ingredientes para hornear.',
    },
    {
      termino: 'Mantecatura',
      significado:
        'Técnica de mezclar la pasta recién cocida con la salsa en la sartén, incorporando agua de cocción para lograr una textura cremosa y una integración perfecta de sabores.',
    },
    {
      termino: '<em>Mise en place</em>',
      significado:
        'Expresión francesa que significa "poner en su lugar"; conjunto de operaciones de alistamiento previas a la elaboración de alimentos.',
    },
    {
      termino: "Pasta fresca all'uovo",
      significado:
        'Pasta elaborada con harina de trigo de baja fuerza y huevos, de cocción rápida (2-4 minutos) y textura tierna.',
    },
    {
      termino: 'Pasta seca (pasta secca)',
      significado:
        'Pasta elaborada con sémola de trigo duro y agua, sometida a secado controlado, de cocción más larga (8-12 minutos).',
    },
    {
      termino: 'Penne',
      significado:
        'Pasta corta en forma de tubo con corte oblicuo; de la palabra italiana penna (pluma).',
    },
    {
      termino: 'POES',
      significado:
        'Procedimientos operativos estandarizados de saneamiento; documentos que describen paso a paso las actividades de limpieza y desinfección.',
    },
    {
      termino: 'Ragù',
      significado:
        'Salsa de carne de cocción lenta, típicamente utilizada para pastas; el más famoso es el ragù bolognese.',
    },
    {
      termino: 'Ravioli',
      significado:
        'Pasta rellena cuadrada, una de las formas más comunes de pasta ripiena (pasta rellena).',
    },
    {
      termino: 'Receta estándar',
      significado:
        'Documento técnico que contiene información detallada sobre ingredientes, cantidades, procedimientos, tiempos de cocción, rendimiento y costos de una preparación específica.',
    },
    {
      termino: 'Sfoglia',
      significado:
        'Lámina de masa estirada utilizada para cortar pastas o como base para pastas rellenas.',
    },
    {
      termino: 'Spaghetti',
      significado: 'Pasta larga, redonda y fina; del italiano spago (cordel).',
    },
    {
      termino: 'Tortellini',
      significado:
        'Pasta rellena en forma de anillo o pequeño sombrero, tradicional del servicio en caldo (tortellini in brodo).',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernasconi, y Teubner, C. (2002). <em>El Gran Libro de la Cocina Italiana</em>.',
      link: 'https://mayrasandy.wordpress.com/wp-content/uploads/2012/08/el-gran-libro-de-la-cocina-italiana.pdf',
    },
    {
      referencia:
        'Grupo Editorial Taquina Editaquina Cia. Ltda. (2013). <em>Italia al dente</em> (Grupo Editorial Taquina Editaquina Cia. Ltda., Ed.).',
      link: 'https://kookinglab.com/libros-cocina-gratis/italia-al-dente/',
    },
    {
      referencia:
        'Ministerio de Salud de Colombia. (31 de diciembre de 1997). <em>Decreto 3075 de 1997 - Gestor Normativo</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3337',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia. (22 de julio de 2013). <em>Resolución número 0002674 de 2013</em>.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (s. f.). <em>Inocuidad de los alimentos</em>.',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/food-safety',
    },
    {
      referencia:
        'Productos Alimenticios La Moderna, S. A. de C. V. (2005). <em>Pasta es salud: Tomo uno</em> (M. de la C. de la Fuente, Ed.).',
      link: 'https://kookinglab.com/libros-cocina-gratis/pasta-es-salud-1/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
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
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
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
