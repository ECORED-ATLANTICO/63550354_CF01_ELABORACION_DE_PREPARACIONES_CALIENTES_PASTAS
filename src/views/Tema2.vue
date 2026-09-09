<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 2
      h1 Higiene, BPM y Seguridad Ocupacional


    img(src="@/assets/curso/tema2/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La inocuidad alimentaria es un aspecto fundamental en la elaboración de cualquier preparación culinaria. Este capítulo aborda los fundamentos de higiene en la manipulación de alimentos, las enfermedades transmitidas por alimentos (ETA), el marco normativo colombiano aplicable, las Buenas Prácticas de Manufactura (BPM), los procedimientos de limpieza y desinfección, a su vez describe la seguridad y la salud ocupacional, a través de la identificación de peligros en el área de cocina, el uso adecuado de equipos y utensilios, y las medidas de prevención de accidentes laborales durante la elaboración de pastas.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Fundamentos de higiene en la manipulación de alimentos

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La higiene de los alimentos es el conjunto de medidas y procedimientos necesarios para garantizar que los alimentos no representen un riesgo para la salud del consumidor. En el contexto de la cocina profesional, la higiene abarca la higiene personal del manipulador de alimentos, la higiene de las superficies, equipos y utensilios, la higiene en la manipulación, almacenamiento y transporte de materias primas y productos terminados, y el control de plagas.

        .bg-color-02.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") De acuerdo con el Decreto 3075 de 1997 del Ministerio de Salud de Colombia, todas las personas que manipulan alimentos deben recibir capacitación continua en prácticas higiénicas y contar con certificado de manipulación de alimentos vigente (Ministerio de Salud de Colombia, 1997, Artículo 10).

    
    .row.mb-3.mb-lg-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")

      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Lavado de manos con agua y jabón antibacterial durante al menos 20 segundos antes de iniciar labores, después de ir al baño, después de manipular alimentos crudos y después de toser o estornudar.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img05.svg", style="max-width: 90px").mx-auto

            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Uso de uniforme completo (gorro, chaqueta, delantal, pantalón y zapatos antideslizantes).
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img06.svg", style="max-width: 90px").mx-auto

            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Uso de malla para el cabello o gorro que cubra todo el cabello.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img07.svg", style="max-width: 90px").mx-auto

            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Uso de tapabocas durante la manipulación de alimentos listos para el consumo.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img08.svg", style="max-width: 90px").mx-auto

            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Uñas cortas, limpias y sin esmalte, ni joyas, relojes o accesorios durante la manipulación.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img05.svg", style="max-width: 90px").mx-auto

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2. Enfermedades transmitidas por alimentos (ETA)


    img(src="@/assets/curso/tema2/img09.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las enfermedades transmitidas por alimentos son aquellas que se adquieren por el consumo de agua o alimentos contaminados con microorganismos patógenos (bacterias, virus, parásitos), toxinas o sustancias químicas. Según la Organización Mundial de la Salud (OMS, 2023), cada año se registran millones de casos de ETA en el mundo, muchas de las cuales pueden prevenirse mediante la aplicación de buenas prácticas de higiene.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 4.
          span Principales microorganismos causantes de ETA en la cocina
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Microorganismo
                th Alimentos comúnmente asociados
                th Síntomas principales
                th Prevención
            tbody
              tr
                td.fw-bold.text-center <em>Salmonella spp.</em>
                td.text-center Huevos, pollo, mayonesa casera
                td.text-center Diarrea, fiebre, vómito
                td.text-center Cocción adecuada, refrigeración
              tr
                td.fw-bold.text-center <em>Escherichia coli</em>
                td.text-center Carnes crudas, vegetales contaminados
                td.text-center Diarrea sanguinolenta, cólicos
                td.text-center Cocción >70 °C, lavado de vegetales
              tr
                td.fw-bold.text-center <em>Staphylococcus aureus</em>
                td.text-center Ensaladas, salsas, productos de pastelería
                td.text-center Náuseas, vómitos, calambres
                td.text-center Refrigeración, higiene de manos
              tr
                td.fw-bold.text-center <em>Listeria monocytogenes</em>
                td.text-center Quesos blandos, embutidos
                td.text-center Fiebre, dolor muscular
                td.text-center Cocción, refrigeración adecuada

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Marco normativo colombiano


    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-8.col-md-12.mb-4.mb-lg-0
        p.mb-3 El marco normativo colombiano para la manipulación de alimentos se centra en garantizar la inocuidad y proteger la salud pública a través de regulaciones clave.
        
        .p-4.br-15.mb-3(style="background-color: #E8F5D5;")
          p.mb-0 La <b>Resolución 2674 de 2013</b> es el reglamento sanitario vigente que establece los requisitos de higiene, capacitación obligatoria de 10 horas anuales para manipuladores, infraestructura y planes de saneamiento.

        p.mb-0 Como antecedente, el Decreto 3075 de 1997 introdujo las Buenas Prácticas de Manufactura (BPM), mientras que la Resolución 3168 de 2015 optimiza los trámites automáticos de registros sanitarios ante el Invima.

      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in")

    .p-4.br-15(style="background-color: #E0ECF9;")
      p.mb-0 Finalmente, la Ley 9 de 1979 funciona como el Código Sanitario Nacional que otorga la potestad de inspección, vigilancia y sanción en salud pública.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Buenas Prácticas de Manufactura (BPM)

    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Buenas Prácticas de Manufactura son los principios básicos y procedimientos generales de higiene que se aplican en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para garantizar su inocuidad. Existe una serie de principios aplicados a la cocina:

    .row.align-items-center.justify-content-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-06")
          div(titulo="Materias primas inocuas")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Adquirir insumos de proveedores autorizados y verificar su estado al momento de la recepción (temperatura, empaque, fechas de vencimiento).
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in")

          div(titulo="Almacenamiento seguro")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Mantener los alimentos perecederos a temperaturas adecuadas (refrigeración: 0-4 °C; congelación: -18 °C o inferior). Aplicar el método PEPS (Primero en Entrar, Primero en Salir).
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")

          div(titulo="Separación de alimentos crudos y cocidos")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Utilizar tablas de cortar, utensilios y superficies diferentes para prevenir la contaminación cruzada.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in")

          div(titulo="Cocción adecuada")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Asegurar que los alimentos alcancen temperaturas internas que eliminen microorganismos patógenos.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")

          div(titulo="Refrigeración oportuna")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Enfriar rápidamente los alimentos cocidos que no se consumirán de inmediato y mantenerlos a temperaturas seguras.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in")

          div(titulo="Agua potable y hielo seguro")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Utilizar únicamente agua potable para la preparación de alimentos y para la elaboración de hielo.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in")

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Limpieza y desinfección en la cocina

    img(src="@/assets/curso/tema2/img18.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La limpieza y la desinfección son dos procesos complementarios pero diferentes que deben ejecutarse de manera secuencial en todas las áreas, equipos y utensilios de la cocina.

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img19.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        .bg-color-09.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") La limpieza consiste en la eliminación de residuos orgánicos visibles e invisibles, como grasas, proteínas y carbohidratos, mediante el uso de detergentes, agua caliente y fricción mecánica. Este primer paso es fundamental porque los residuos orgánicos pueden albergar microorganismos y reducir la eficacia de los desinfectantes.

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-color-03.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") La desinfección, por su parte, reduce la carga microbiana a niveles seguros utilizando agentes químicos (cloro, amonio cuaternario) o métodos físicos (calor). Es importante destacar que la desinfección solo es efectiva si las superficies han sido previamente limpiadas, ya que la suciedad residual puede inactivar los desinfectantes. Por esta razón, ambos procesos deben aplicarse de forma secuencial y sistemática siguiendo los procedimientos operativos estandarizados de saneamiento (POES).


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Procedimiento estándar para limpieza y desinfección de superficies y utensilios

    p.mb-5 La limpieza y desinfección son procesos complementarios pero distintos, ambos esenciales para garantizar la inocuidad de los alimentos. La limpieza elimina los residuos orgánicos (grasas, proteínas, carbohidratos) mediante detergentes, agua y fricción mecánica. La desinfección reduce la carga microbiana a niveles seguros utilizando agentes químicos (cloro, amonio cuaternario) o físicos (calor). A continuación se presenta el procedimiento estándar de seis pasos que debe aplicarse de manera sistemática en toda cocina profesional.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in")
      .col-lg-7.order-1.order-lg-1
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Prelavado") Eliminar residuos sólidos con agua y cepillo.
          p(numero="2" titulo="Lavado") Aplicar detergente con agua caliente (>40 °C), frotar con esponja o cepillo.
          p(numero="3" titulo="Enjuague") Retirar completamente el detergente con agua potable.
          p(numero="4" titulo="Desinfección") Aplicar solución clorada (50-100 ppm de cloro activo) durante 1-2 minutos.
          p(numero="5" titulo="Enjuague final") Enjuagar con agua potable para eliminar residuos de cloro (excepto si el fabricante indica lo contrario).
          p(numero="6" titulo="Secado") Secar al aire o con papel desechable (no usar paños reutilizables).
        
    p.mb-4.mt-4 Una vez definida la secuencia higiénica de seis pasos, el éxito operativo del plan POES radica en aplicar las concentraciones químicas correctas según la criticidad de cada área. A continuación, se presenta un consolidado técnico que detalla las soluciones desinfectantes obligatorias, los niveles específicos de partes por millón (ppm) y los tiempos mínimos de exposición estipulados para resguardar la inocuidad en cada elemento de la planta.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 5.
          span Concentraciones de desinfectantes para diferentes aplicaciones
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Superficie o utensilio
                th Agente desinfectante
                th Concentración
                th Tiempo de contacto
            tbody
              tr
                td Tablas de cortar
                td Cloro
                td 100 ppm
                td 2 minutos
              tr
                td Mesones de acero inoxidable
                td Cloro o amonio cuaternario
                td 100 ppm / 200 ppm
                td 2-3 minutos
              tr
                td Utensilios (cuchillos, espátulas)
                td Cloro
                td 100 ppm
                td 1 minuto
              tr
                td Verduras y frutas (desinfección)
                td Cloro
                td 50 ppm
                td 15-20 minutos
              tr
                td Pisos y paredes
                td Cloro
                td 200 ppm
                td 5-10 minutos


    .bg-color-10.p-4.br-15.mb-4
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El estricto cumplimiento de los parámetros de dosificación y tiempos de contacto detallados en esta matriz constituye la barrera definitiva contra la proliferación microbiana. La alteración arbitraria de estos valores —ya sea por defecto en la concentración o por reducción del tiempo de exposición— anula la eficacia de la desinfección, exponiendo al establecimiento a fallas críticas en los controles microbiológicos y a severas sanciones por parte de las autoridades de vigilancia sanitaria.

    separador

    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Identificación de peligros en el área de cocina

    .bloque-texto-g.bg-color-08.p-4.p-sm-3.p-md-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El área de cocina presenta múltiples peligros que pueden generar accidentes laborales. Los principales peligros en la elaboración de pastas incluyen:

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Tipos de peligros en la cocina

    p.mb-4 Los tipos de peligro que se presentan en una cocina se clasifican en familias de riesgos enfocadas principalmente en la seguridad del trabajador (salud ocupacional) y la inocuidad alimentaria.

    .bg-full-width.bg-fondo-01.p-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img24.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Peligros biológicos
              p.mb-2 Son el riesgo principal para la inocuidad de los alimentos y la salud del consumidor:
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.icon-list-color.fa-circle
                  span <b>Microbiológicos:</b> presencia de bacterias patógenas (<em>Salmonella</em>, <em>E. coli</em>, <em>Listeria monocytogenes</em>), virus (<em>Hepatitis A</em>, <em>Rotavirus</em>) y hongos debido a malas prácticas de higiene o fallas en la cocción.
                li.d-flex.mb-1
                  i.fas.icon-list-color.fa-circle
                  span <b>Parasitarios:</b> vectores por lavado deficiente de vegetales o carnes mal cocidas (<em>Toxoplasma</em>, <em>Anisakis</em>).
                li.d-flex.mb-0
                  i.fas.icon-list-color.fa-circle
                  span <b>Vectores biológicos externos:</b> contaminación por presencia de plagas (roedores, cucarachas, insectos) en las zonas de almacenamiento.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img25.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Peligros físicos (Mecánicos / Térmicos)
              p.mb-2 Enfocados en accidentes directos por contacto térmico (hornos, ollas), cortes (cuchillos, cortadores) y caídas (pisos resbaladizos).
              p.mb-0 En la manipulación de alimentos, los peligros físicos en el producto incluyen objetos extraños que puedan causar atragantamiento o heridas al comensal, tales como fragmentos de vidrio (de luminarias sin protección), astillas de metal (de esponjillas de brillo o mantenimiento de equipos), plásticos, piedras en granos, joyas, botones, cabellos o uñas del manipulador.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img26.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Peligros ergonómicos
              p.mb-0 Identifica adecuadamente la carga física por posturas forzadas en el amasado y el sobreesfuerzo por levantamiento de ollas pesadas.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img27.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              h4 Peligros químicos
              p.mb-3 Destaca el contacto cutáneo con desinfectantes y el riesgo por inhalación de material particulado (harina), el cual es un causante típico de asma ocupacional ("asma del panadero").
              p.mb-0 También la presencia de alérgenos no declarados en el etiquetado (maní, lácteos, gluten), micotoxinas en harinas mal almacenadas, o acumulación de metales pesados.
    separador

    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Uso adecuado de equipos y utensilios

    p.mb-4 Para mitigar los riesgos de accidentes en el entorno de producción, es fundamental adoptar medidas preventivas específicas durante la operación de los utensilios y equipos más críticos de la cocina. A continuación, se detallan las pautas de seguridad obligatorias para el uso de máquinas de pasta, herramientas de corte y equipos térmicos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img28.png", data-aos="zoom-in")

      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              p.mb-0 <b>Máquinas de pasta:</b> las máquinas de pasta manuales o eléctricas son herramientas de gran utilidad pero requieren precauciones específicas: no introducir los dedos cerca de los rodillos mientras la máquina está en funcionamiento; usar siempre el protector de seguridad si la máquina lo incluye; limpiar la máquina solo después de desconectarla (en modelos eléctricos); no forzar el paso de masas demasiado gruesas; ajustar gradualmente la abertura de los rodillos (Bernasconi & Teubner, 2004).
            .tarjeta.p-4.h-100
              p.mb-0 <b>Herramientas de corte (cuchillos y cortadores):</b> mantener las hojas perfectamente afiladas para evitar resbalones y sobreesfuerzos; emplear siempre tablas de picar estables sobre bases antideslizantes; utilizar la técnica de la "garra" para proteger las yemas de los dedos al cortar; no dejar cuchillos sumergidos en fregaderos con agua jabonosa donde no sean visibles.
            .tarjeta.p-4.h-100
              p.mb-0 <b>Equipos térmicos (estufas y marmitas):</b> comprobar el correcto funcionamiento de los quemadores y las válvulas de gas antes de encender; manipular recipientes pesados con agua caliente usando asas térmicas y apoyo auxiliar; incorporar alimentos e ingredientes suavemente en agua hirviendo para prevenir salpicaduras de agua o vapor.
            .tarjeta.p-4.h-100
              p.mb-0 <b>Mantenimiento e higiene de equipos:</b> realizar revisiones periódicas del estado eléctrico y mecánico de las amasadoras y sobadoras; verificar que los sistemas de parada de emergencia funcionen correctamente antes de iniciar cualquier jornada de producción.
            .tarjeta.p-4.h-100
              p.mb-0 <b>Protección personal en operación:</b> hacer uso obligatorio de delantales resistentes al calor, guantes de malla metálica para cortes de alta intensidad y calzado antideslizante impermeable en la zona de cocción y fregado.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 La seguridad del personal en las áreas de producción gastronómica depende de la correcta identificación de los peligros inherentes a cada labor operativa. En la elaboración de pastas, los operarios se enfrentan a una combinación de riesgos ergonómicos, mecánicos y térmicos que requieren la adopción inmediata de barreras de protección técnica y conductual.
        .bg-color-02.p-4.br-15
          p.mb-0 A continuación, en la siguiente tabla, se consolida la matriz de prevención de accidentes laborales, asociando las tareas más críticas del proceso con sus riesgos principales y las medidas preventivas obligatorias que deben integrarse a los manuales de procedimientos y programas de salud en el trabajo.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema2/img29.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 6.
          span Medidas preventivas para tareas específicas en la elaboración de pastas
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Tarea
                th Riesgo principal
                th Medida preventiva
            tbody
              tr
                td.fw-bold Amasado manual
                td Fatiga muscular, lesiones de muñeca
                td Realizar pausas cada 15-20 minutos; alternar con otras tareas.
              tr
                td.fw-bold Corte de pasta con cuchillo
                td Corte en dedos
                td Usar técnica de "garra"; mantener cuchillo afilado (Corporación Favorita, 2018).
              tr
                td.fw-bold Cocción en agua hirviendo
                td Quemaduras por salpicaduras
                td Incorporar la pasta suavemente, no "lanzarla"; usar pinzas largas.
              tr
                td.fw-bold Escurrido de pasta
                td Quemaduras por vapor
                td Usar colador metálico con mango largo; protegerse la mano con agarradera.
              tr
                td.fw-bold Limpieza de equipos
                td Cortes (hojas de máquina), contacto con químicos
                td Desconectar equipos antes de limpiar; usar guantes de protección química.
              tr
                td.fw-bold Transporte de ollas grandes
                td Quemaduras, lesiones lumbares
                td Usar ambas manos; doblar rodillas al levantar; no transportar ollas llenas a más de 50 % de capacidad.

    .row.mb-3.justify-content-center
      .col-lg-10
        .bg-color-12.p-4.br-15
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img30.svg", style="max-width: 90px;").mx-auto
            .col-lg
              h4 Caso práctico. Accidente laboral
              p.mb-0 A manera de ejemplo práctico, le compartimos el siguiente caso en el cual se aplica el protocolo a seguir en un accidente laboral.
            .col-lg-auto.mt-3.mt-lg-0
              a.boton.color-acento-botones(:href="obtenerLink('#')", target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
