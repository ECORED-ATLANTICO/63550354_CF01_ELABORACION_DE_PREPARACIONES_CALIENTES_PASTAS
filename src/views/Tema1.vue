<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 1
      h1 <em>Mise en place</em> y receta estandar

    img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El éxito de una preparación culinaria no depende únicamente de la técnica empleada durante la cocción, sino también —y de manera fundamental— de la organización previa al servicio. El término francés <em>mise en place</em>, que literalmente significa "poner en su lugar", describe el conjunto de operaciones de alistamiento que preceden a la elaboración de cualquier plato en una cocina profesional. 

    .row.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema1/img02.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Por otro lado la receta estándar es un documento técnico fundamental en la gestión de cocinas profesionales. Su correcta interpretación permite estandarizar preparaciones, controlar costos y garantizar la consistencia de los productos ofrecidos al cliente. Este capítulo explora el concepto, la importancia y las operaciones básicas que constituyen el <em>mise en place</em>, así como las herramientas, utensilios esenciales, la estructura de la receta estándar, los factores de conversión para escalar recetas y la estandarización de porciones.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto y origen del <em>mise en place</em>


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 El <em>mise en place</em> es, en esencia, la organización meticulosa de todos los elementos necesarios para la preparación de alimentos antes de que comience el servicio. 

        .bg-color-01.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") Esta práctica incluye la selección, pesaje y previsión de ingredientes en las cantidades exactas requeridas por la receta estándar; la preparación de fondos y bases líquidas; la limpieza, desinfección y corte de verduras según técnicas establecidas; el alistamiento de utensilios, menaje y equipos verificando su correcto funcionamiento; y la organización del puesto de trabajo para que cada herramienta tenga un lugar designado y accesible. 

        p.mb-0 Un <em>mise en place</em> riguroso permite al cocinero concentrarse en la cocción y el emplatado durante el servicio, reduciendo errores, tiempos de respuesta y riesgos de accidentes.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Estructura del <em>mise en place</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img05.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img06.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Organización del puesto de trabajo
            p.text-center.mb-0 Limpieza, orden y disposición de utensilios y equipos.

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img07.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Preparación de ingredientes
            p.text-center.mb-0 pesaje, lavado, pelado, corte y porcionado de materias primas.

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img08.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Alistamiento de fondos
            p.text-center.mb-0 elaboración previa de bases líquidas (fondos de verduras, carnes o pescados).

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img09.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Verificación de equipos
            p.text-center.mb-0  comprobación del correcto funcionamiento de hornos, ollas, sartenes y demás equipos de cocción.

    .container
      .row.align-items-center.bg-color-02.p-4.mb-4.br-15
        .col-lg-auto.d-none.d-lg-block.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.svg", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 El origen del término se remonta a la cocina francesa del siglo XIX, cuando el célebre chef Auguste Escoffier sistematizó la organización de la cocina profesional mediante el sistema de <em>brigade de cuisine</em>. Este sistema establecía roles y responsabilidades claras para cada estación de trabajo, y el <em>mise en place</em> se convirtió en la práctica fundamental que permitía a cada chef contar con todos los elementos necesarios para ejecutar sus preparaciones de manera eficiente durante el servicio (Bernasconi & Teubner, 2004).

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Importancia del <em>mise en place</em> 

    img(src="@/assets/curso/tema1/img11.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El <em>mise en place</em> no es una actividad accesoria o decorativa; es una necesidad operativa que impacta directamente en la calidad del producto final, la eficiencia del servicio, la rentabilidad del negocio y la seguridad del personal. A continuación se enumeran los beneficios fundamentales de implementar un riguroso <em>mise en place</em>:

    .row.mb-4.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Estandarización de la calidad").align-content-center
            p.mb-0 Al tener todos los ingredientes pesados y preparados previamente, se garantiza que cada plato se elabore con las mismas cantidades y especificaciones, asegurando uniformidad en sabor, textura y presentación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reducción del tiempo de respuesta").align-content-center
            p.mb-0 Durante el servicio, el tiempo es un recurso crítico. Un <em>mise en place</em> bien ejecutado permite que el cocinero se concentre únicamente en la cocción y el emplatado, sin interrupciones para buscar, pesar o preparar ingredientes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Minimización del desperdicio de alimentos").align-content-center
            p.mb-0 Al planificar las cantidades necesarias para cada servicio, se reduce el excedente de ingredientes preparados que podrían deteriorarse y desperdiciarse.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control de costos").align-content-center
            p.mb-0 El pesaje previo de ingredientes permite un control preciso de los costos por porción y facilita la gestión de inventarios.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad laboral").align-content-center
            p.mb-0 Un puesto de trabajo ordenado reduce significativamente el riesgo de accidentes, como cortes por manipulación apresurada de cuchillos o quemaduras por falta de organización alrededor de superficies calientes.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Procedimientos básicos en la cocina

    p.mb-4 Las procedimientos básicos en la cocina son los procedimientos fundamentales que todo profesional gastronómico debe dominar para ejecutar un mise en place eficiente. Estas operaciones incluyen:

    
    .bg-color-03.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 <b>Técnicas de corte de verduras y hortalizas:</b> el dominio de las técnicas de corte es esencial para garantizar una cocción uniforme, una presentación atractiva y un aprovechamiento óptimo de los ingredientes. La siguiente tabla presenta los cortes más utilizados en la cocina profesional.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 1.
          span Cortes básicos en cocina profesional
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Denominación
                th Tamaño aproximado
                th Aplicación principal
            tbody
              tr
                td.fw-bold.text-center <em>Brunoise</em>
                td.text-center 2 x 2 x 2 mm
                td.text-center Guarniciones finas, salsas, sopas
              tr
                td.fw-bold.text-center <em>Juliana</em>
                td.text-center 3-4 cm x 1-2 mm x 1-2 mm
                td.text-center Guarniciones, salteados
              tr
                td.fw-bold.text-center <em>Mirepoix</em>
                td.text-center 1-2 cm x 1-2 cm x 1-2 cm
                td.text-center Fondos, caldos, estofados
              tr
                td.fw-bold.text-center <em>Chiffonade</em>
                td.text-center Tiras finas de hojas
                td.text-center Ensaladas, decoración
              tr
                td.fw-bold.text-center <em>Paysanne</em>
                td.text-center 1-2 cm de diámetro x 2-3 mm de espesor
                td.text-center Sopas, cocciones largas
              tr
                td.fw-bold.text-center <em>Macedoine</em>
                td.text-center 5 mm x 5 mm x 5 mm
                td.text-center Guarniciones, sopas espesas


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img14.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0

        .bg-color-02.p-4.br-15.mb-3
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 <b>Pesaje y medición de ingredientes:</b> en la cocina profesional, la precisión en las cantidades es fundamental para garantizar la reproducibilidad de las recetas. Por esta razón, se recomienda utilizar balanzas digitales con precisión de 1 gramo para ingredientes secos y sólidos, emplear medidores de volumen graduados para líquidos, conocer las equivalencias entre unidades de peso y volumen, y pesar siempre los ingredientes antes de comenzar la preparación, no durante el proceso.

        .bg-color-04.p-4.br-15.mb-0
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 <b>Preparación de fondos y bases líquidas:</b> los fondos son preparaciones líquidas que sirven como base para sopas y estofados. Su elaboración requiere tiempo y debe realizarse con anticipación al servicio. El fondo de verduras es uno de los más utilizados en la cocina de pastas.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo de receta aplicado

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img15.png", data-aos="zoom-in")
      .col-lg-7
        .br-15.overflow-hidden.shadow-sm
          .p-2.text-center.fw-bold(style="background-color: #FED57B;") Preparación de fondo de verduras (para 2 litros)
          .p-4(style="background-color: #FEF6E4;").mb-0
            .row.align-items-start
              .col-lg-4.mb-4.mb-lg-0
                p.fw-bold.mb-1 Ingredientes
                p.mb-0 200 g de cebolla.
                p.mb-0 150 g de zanahoria.
                p.mb-0 100 g de apio.
                p.mb-0 1 puerro.
                p.mb-0 2 dientes de ajo.
                p.mb-0 1 ramita de tomillo.
                p.mb-0 1 hoja de laurel.
                p.mb-0 5 granos de pimienta negra.
                p.mb-0 2.5 litros de agua fría.
              .col-lg-8
                .p-4.br-15(style="background-color: #E8F5D5;")
                  p.fw-bold.mb-1 Procedimiento
                  p.mb-0 Lavar, pelar y cortar las verduras en trozos grandes (<em>paysanne</em>). Colocar las verduras en una olla grande y cubrir con agua fría. Agregar las hierbas y la pimienta. Llevar a ebullición, luego reducir el fuego y mantener a fuego lento (sin hervir) durante 45 minutos. Retirar del fuego, colar con un colador chino fino y dejar enfriar. Almacenar en refrigeración por máximo 3 días o congelar.

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Herramientas y utensilios esenciales
      
    img(src="@/assets/curso/tema1/img16.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El <em>mise en place</em> requiere de herramientas específicas que facilitan las operaciones de alistamiento. Entre las más importantes se encuentran: cuchillos profesionales (<em>chef</em> de 20-30 cm, puntilla de 10-15 cm, deshuesador), tablas de cortar codificadas por colores (verde para verduras, rojo para carnes, amarillo para aves, azul para pescados, blanco para lácteos y pan), balanzas digitales y medidores volumétricos, <em>bowls</em> y recipientes de diferentes tamaños, peladores, mandolinas y ralladores, moldes y cortadores de pasta, y termómetros de cocina (Corporación Favorita, 2018).

    .row.align-items-center.justify-content-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-06")
          div(titulo="Cuchillos")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Herramienta versátil para picar, cortar y deshuesar. Hoja de acero inoxidable de 20 a 30 cm. Mantenimiento: afilar semanalmente y afilar diariamente con chaira.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in")
          div(titulo="Tablas de corte codificadas")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Sistema de colores para prevenir contaminación cruzada:
                p.mb-0.ms-0.ms-lg-5 Rojo: carnes rojas.
                p.mb-0.ms-0.ms-lg-5 Marrón: productos cocinados.
                p.mb-0.ms-0.ms-lg-5 Amarillo: carnes blancas.
                p.mb-0.ms-0.ms-lg-5 Azul: pescados y mariscos.
                p.mb-0.ms-0.ms-lg-5 Verde: frutas y verduras.
                p.mb-0.ms-0.ms-lg-5 Blanco: pastas, quesos (lácteos) y pan.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in")
          div(titulo="Mandolina")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0 Utensilio para cortes uniformes de verduras (<em>juliana</em>, <em>brunoise</em>, rodajas). Ajuste de espesor regulable. Usar siempre con guante de malla de seguridad.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img19.png", data-aos="zoom-in")
          div(titulo="Termómetro digital")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0 Medición precisa de temperaturas internas y externas. Rango de -50 °C a 300 °C. Calibrar antes de cada uso con agua con hielo (0 °C) y agua hirviendo (100 °C).
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in")

    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Estructura de la receta estándar

  
    .bg-color-07.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema1/img21.png", style="max-width: 150px").mx-auto
        .col-lg.order-1
          p.mb-0 En ese orden una receta estándar es un documento que contiene información detallada y precisa sobre los ingredientes, cantidades, procedimientos, tiempos de cocción, temperaturas, rendimiento y costos de una preparación específica. Su propósito es garantizar que cualquier miembro del equipo de cocina pueda reproducir el plato con idénticas características sensoriales y de calidad.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 2.
          span Componentes de una receta estándar
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Componente
                th Descripción
                th Ejemplo
            tbody
              tr
                td.fw-bold.text-center Nombre del plato
                td.text-center Denominación comercial de la preparación
                td.text-center <em>Tagliatelle</em> frescos
              tr
                td.fw-bold.text-center Número de porciones
                td.text-center Cantidad de porciones que produce la receta
                td.text-center 4 porciones
              tr
                td.fw-bold.text-center Tamaño de la porción
                td.text-center Peso o volumen de cada porción
                td.text-center 250 g por porción
              tr
                td.fw-bold.text-center Ingredientes
                td.text-center Lista completa de materias primas
                td.text-center Harina de trigo, huevos, sal
              tr
                td.fw-bold.text-center Cantidades
                td.text-center Peso (gramos) o volumen (mililitros) exacto
                td.text-center 200 g de harina, 2 huevos
              tr
                td.fw-bold.text-center Procedimiento
                td.text-center Pasos secuenciales para la elaboración
                td.text-center 1. Amasar... 2. Dejar reposar...
              tr
                td.fw-bold.text-center Tiempo de cocción
                td.text-center Duración de cada etapa
                td.text-center 2-4 minutos
              tr
                td.fw-bold.text-center Rendimiento
                td.text-center Cantidad total producida
                td.text-center 400 g de pasta fresca
              tr
                td.fw-bold.text-center Costo por porción
                td.text-center Sumatoria de costos de ingredientes por porción
                td.text-center $1.500 COP

    separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Factores de conversión y escalado de recetas


    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la operación diaria de una cocina, es frecuente que se requiera ajustar las cantidades de una receta para atender un mayor o menor número de comensales. Este ajuste se realiza mediante un factor de conversión (FC), que se calcula dividiendo el número de porciones deseadas entre el número de porciones originales de la receta.


    .bg-color-03.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema1/img13.svg", style="max-width: 150px").mx-auto
        .col-lg.order-1
          p.mb-0 <b>Fórmula del factor de conversión:</b> fc = porciones deseadas/porciones originales de la receta. Una vez obtenido el factor de conversión, se multiplica cada cantidad de ingrediente por dicho factor para obtener la nueva cantidad requerida.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo práctico de conversión y escalado

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in")
      .col-lg-7
        .br-15.overflow-hidden.shadow-sm
          .p-2.text-center.fw-bold(style="background-color: #FED57B;") Conversión y escalado de 4 a 10 porciones
          .p-4(style="background-color: #FEF6E4;").mb-0
            .p-4.br-15(style="background-color: #E8F5D5;")
              p.mb-3 Si una receta está diseñada para 4 porciones y se necesitan 10 porciones, siga el siguiente proceso para hacer la conversión:
              p.mb-0 <b>FC = 10/4 = 2,5.</b> Cada ingrediente de la receta original debe multiplicarse por 2,5. Es decir, si la receta original requiere 200 g de harina, la nueva cantidad será 200 g x 2,5 = 500 g de harina.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Advertencia sobre el escalado de recetas

    .bg-color-03.p-4.br-15.mb-5
      .row.align-items-center
        .col-lg
          p.mb-0 No todos los ingredientes escalan de manera lineal. Se debe tener presente que los tiempos de cocción no se multiplican por el factor de conversión, los recipientes más grandes requieren ajustes de tiempo y temperatura y las especias y condimentos fuertes pueden escalarse en menor proporción para evitar sabores excesivamente intensos. Siempre validar la receta escalada con una prueba piloto antes de utilizarla en producción comercial.
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto

    separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Estandarización de porciones y costos

    p.mb-4 La estandarización de porciones es el proceso mediante el cual se define el peso o volumen exacto de cada preparación que se servirá al cliente. Este proceso tiene implicaciones directas en tres áreas fundamentales:



    .row.mb-5.align-items-stretch
      .col-lg-4.mb-4.mb-lg-0
        .p-4.br-15.h-100(style="background-color: #FEF6E4;")
          p.mb-3 <b>Control de costos:</b> al conocer el costo exacto de los ingredientes por porción, se puede establecer un precio de venta que garantice la rentabilidad del plato. La fórmula básica para el cálculo del precio de venta es:
          p.mb-0.fw-bold <b>Precio de venta = (Costo por porción) / (Porcentaje de costo de alimentos deseado) x 100.</b>

      .col-lg-4.mb-4.mb-lg-0
        .p-4.br-15.h-100(style="background-color: #FEF6E4;")
          p.mb-3 <b>Consistencia en la presentación:</b> una porción estandarizada garantiza que cada cliente reciba la misma cantidad de alimento, lo que se traduce en uniformidad en la presentación y en la experiencia de consumo.

      .col-lg-4.mb-0.mb-lg-0
        .p-4.br-15.h-100(style="background-color: #FEF6E4;")
          p.mb-0 <b>Gestión de inventarios:</b> conocer las porciones exactas permite calcular con precisión las cantidades de materia prima necesarias para un servicio determinado, reduciendo el desperdicio y optimizando las compras.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 3.
          span Ejemplo de ficha técnica de costos para pasta fresca
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Ingrediente
                th Cantidad por 4 porciones
                th Costo unitario
                th Costo total
            tbody
              tr
                td.fw-bold.text-center Harina de trigo tipo 405
                td.text-center 200 g
                td.text-center $2.000/kg
                td.text-center $400
              tr
                td.fw-bold.text-center Huevos
                td.text-center 2 unidades
                td.text-center $500/unidad
                td.text-center $1.000
              tr
                td.fw-bold.text-center Sal
                td.text-center 5 g
                td.text-center $1.000/kg
                td.text-center $5
              tr
                td.fw-bold.text-center Costo total
                td.text-center -
                td.text-center -
                td.text-center $1.405
              tr
                td.fw-bold.text-center Costo por porción
                td.text-center -
                td.text-center -
                td.text-center $351

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
