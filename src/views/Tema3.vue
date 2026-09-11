<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 3
      h1 Pastas: clases, formulación y características

    img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text La pasta es uno de los productos gastronómicos más universales y versátiles de la cocina mundial. Su origen, aunque tradicionalmente asociado a Italia, tiene raíces que se extienden a diversas culturas milenarias. Este capítulo explora la historia de la pasta, su definición, clasificación, formulación de la pasta fresca casera y sus características sensoriales.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Historia de la pasta italiana

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.bg-color-08.p-3.p-sm-3.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Respecto al origen o invento de la pasta, el debate y la discusión han existido desde hace siglos. Algunos dicen que la historia que Marco Polo, el famoso explorador e hijo de ricos comerciantes venecianos, fue quien introdujo en la Península Itálica la manera de hacer y comer la pasta, no deja de ser una anécdota (La Moderna, 2005, p. 11).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-0.mb-lg-0.order-2.order-lg-1
        p.mb-4 En algunas tumbas etruscas los arqueólogos han logrado identificar algo parecido a la pasta; y los árabes, descubridores de los beneficios del trigo duro mucho antes que los italianos, cocían finas láminas de pasta hace siglos. Ellos enrollaban la pasta, la exponían al sol para que se secara y, de esa manera, conservarla por más tiempo.
        .bg-color-02.p-4.br-15
          p.mb-0 Según el libro <em>Italia al dente</em> (Corporación Favorita, 2018, p. 5), la comida italiana es creativa y llena de personalidad. Está marcada por un fuerte carácter regional que encierra largas tradiciones en las que el tomate, pastas, diversos tipos de queso, albahaca y el aceite de oliva son algunos de los ingredientes esenciales. Es común que a la comida italiana se la identifique por la pizza las pastas, pero en realidad es absolutamente variada y cada región tiene su propia tradición culinaria.
      .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 Bernasconi y Teubner (2004, p. 6) señalan que existen indicios de que las raíces de la cultura culinaria italiana tienen su origen en la época romana. El libro de <em>Re coquinaria</em> de Apicio, una colección de recetas romanas señala el origen de muchos platos que aún se consumen en la actualidad.
        .bg-color-10.p-4.br-15.mb-0
          p.mb-0 Sin embargo, el verdadero impulso a la cocina italiana, y particularmente a la pasta, llegó con la influencia árabe. Los árabes, establecidos en Sicilia en el siglo IX, revitalizaron la cocina italiana e introdujeron técnicas de secado de masa que permitían conservar la pasta por largos períodos.

    p.mb-4 La pasta era cocinada frecuentemente con leche o caldo y se servía con azúcar, queso, mantequilla y especias dulzonas. No fue hasta el siglo XVIII que se empezó a establecer algún orden en relación a los hábitos culinarios, empezando a dividir los platillos dulces de los condimentados. Desde esa época se empezó a servir la pasta más o menos como se hace ahora, con salsas basadas en tomates, carne y verduras (La Moderna, 2005, p. 12).

    .bg-color-14.p-4.br-15.text-center.mb-5
      p.mb-0 A continuación, se ilustra con una línea de tiempo, los orígenes y evolución de la pasta:

    .tarjeta.bg-color-09.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center.justify-content-center(titulo="Era Antigua y Orígenes Año 2000 a. C. (Aprox.)")
          .col-lg-7.mb-4.mb-lg-0
            h4 Era Antigua y Orígenes Año 2000 a. C. (Aprox.)
            p.mb-0 Se registran los primeros indicios arqueológicos de fideos de mijo en las cercanías del río Amarillo en China, estableciendo el antecedente más remoto de masas filamentosas en Asia.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img05.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Siglo IV a. C.")
          .col-lg-7.mb-4.mb-lg-0
            h4 Siglo IV a. C.
            p.mb-0 En tumbas etruscas se observan bajorrelieves que representan utensilios (rodillos, cortadores) empleados en la elaboración de masas láminas cocidas conocidas como <em>lagana</em>.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img06.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Siglo I a. C. - Siglo I d. C.")
          .col-lg-7.mb-4.mb-lg-0
            h4 Siglo I a. C. - Siglo I d. C.
            p.mb-0 En la época romana, Horacio y el gastrónomo Marco Gavio Apicio (autor del célebre recetario <em>Re Coquinaria</em>) documentan el consumo frecuente de láminas de pasta en guisados y sopas.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img07.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Edad Media e Intercambio Cultural Siglo IX")
          .col-lg-7.mb-4.mb-lg-0
            h4 Edad Media e Intercambio Cultural Siglo IX
            p.mb-0 Durante la dominación árabe en Sicilia, se perfeccionan e intensifican las técnicas de secado al sol de tiras de masa de trigo duro, facilitando la conservación y el transporte marino a larga distancia.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img08.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Año 1154")
          .col-lg-7.mb-4.mb-lg-0
            h4 Año 1154
            p.mb-0 El geógrafo árabe Al-Idrisi documenta por primera vez la producción manufacturera y exportación a gran escala de <em>itriyya</em> (tiras secas de masa) desde Trabia, Sicilia, hacia todo el Mediterráneo.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img09.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Siglo XIV")
          .col-lg-7.mb-4.mb-lg-0
            h4 Siglo XIV
            p.mb-0 Se fundan los primeros gremios de fabricantes de pasta (<em>pastaie</em>) en Nápoles, Génova y Florencia, estableciendo normas de calidad y técnicas artesanales de amasado y estirado.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Consolidación y Adopción Social (Edad Moderna) Siglo XVI")
          .col-lg-7.mb-4.mb-lg-0
            h4 Consolidación y Adopción Social (Edad Moderna) Siglo XVI
            p.mb-0 La pasta se populariza en toda Italia como alimento básico de consumo cotidiano. Aparecen las primeras prensas mecánicas para extrusión de tiras y tubos de pasta.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img11.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Siglo XVII")
          .col-lg-7.mb-4.mb-lg-0
            h4 Siglo XVII
            p.mb-0 La invención de la maza de madera accionada por pedales y el desarrollo de prensas mecánicas facilitan la producción en masa en la región napolitana.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img12.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Industrialización y Globalización (Edad Contemporánea) Siglo XVIII")
          .col-lg-7.mb-4.mb-lg-0
            h4 Industrialización y Globalización (Edad Contemporánea) Siglo XVIII
            p.mb-0 Se introduce la incorporación del tomate americano en la elaboración de salsas condimentadas y se diferencian definitivamente los platos salados de los dulces en la gastronomía europea.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img13.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Año 1891")
          .col-lg-7.mb-4.mb-lg-0
            h4 Año 1891
            p.mb-0 Pellegrino Artusi publica su célebre libro <em>La ciencia en la cocina y el arte de comer bien</em>, unificando y estandarizando las recetas tradicionales de pastas italianas.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img14.png', alt='')

        .row.align-items-center.justify-content-center(titulo="Siglo XX en adelante")
          .col-lg-7.mb-4.mb-lg-0
            h4 Siglo XX en adelante
            p.mb-0 Se industrializa la producción de pastas secas con tecnología de secado continuo a baja temperatura, expandiendo su consumo a nivel global y consolidando las normas de inocuidad alimentaria.
          .col-lg-5.col-md-9
            figure
              img(src='@/assets/curso/tema3/img15.png', alt='')
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Definición y composición

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4.mb-lg-2 La pasta es una preparación alimenticia hecha con base en harina y agua, cuya versatilidad la ha convertido en uno de los productos gastronómicos más consumidos en todo el mundo. La harina que se utiliza específicamente en la elaboración de la pasta se prepara con sémola, un producto de textura granular que se obtiene del endospermo de un tipo de trigo llamado <em>durum</em> (<em>Triticum durum</em>).
        .bg-color-02.p-4.br-15
          p.mb-0 Este grano de trigo contiene una alta proporción de gluten, una proteína compleja responsable de brindar elasticidad, resistencia y estructura a la masa de la pasta (La Moderna, 2005, p. 9). El gluten actúa como una red que atrapa el agua y los almidones, permitiendo que la masa se estire sin romperse y mantenga su forma durante el amasado, el estirado y la cocción. Sin una cantidad suficiente de gluten, la masa sería quebradiza, se agrietaría fácilmente y no podría soportar los procesos mecánicos de la elaboración artesanal o industrial.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.order-2.order-lg-1.mb-0
        figure
          img(src="@/assets/curso/tema3/img17.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-4 La selección de la materia prima marca la diferencia fundamental en la consistencia y comportamiento culinario de la pasta terminada.
        .bg-color-01.p-4.br-15
          p.mb-0 La pasta no puede hacerse con cualquier harina de trigo, como la que se usa comúnmente para hacer pasteles o galletas, ya que estos tipos de trigo contienen una gran cantidad de almidón pero poca proteína, lo que ocasionaría que la pasta se pegue entre sí durante la cocción, se deforme fácilmente y no tenga la firmeza adecuada.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-3 Al agregar sémola de trigo duro se obtiene una pasta de mejor color amarillo ámbar, más sabor y de una textura elástica, que además brinda los beneficios alimenticios de las harinas de trigo duro, incluyendo vitaminas del complejo B y un índice glucémico más bajo (La Moderna, 2005, p. 9).
        p.mb-0 Por estas razones, la sémola de trigo duro es el ingrediente base insustituible para una pasta de calidad profesional, ya que garantiza que el producto final mantenga su forma, textura y propiedades nutricionales incluso después de cocciones prolongadas o al ser utilizado en preparaciones horneadas como lasañas o canelones.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center
      .col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img19.svg' alt='')
          .tarjeta.bg-color-03
            .p-4
              p.mb-0 #[b 1. Endospermo:] es la parte central y más voluminosa del grano (aproximadamente el 83 % de su peso). Es rico en almidón y proteínas (como la gliadina y la glutenina, que al hidratarse forman el gluten). De esta sección se extrae la harina blanca común.
      .col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img19.svg' alt='')
          .tarjeta.bg-color-03
            .p-4
              p.mb-0 #[b 2. Capa de salvado (Pericarpio y aleurona):] es la cubierta exterior protectora del grano (cerca del 14 % de su peso). Está compuesta principalmente por fibra dietética, vitaminas del complejo B y minerales. Se elimina en la refinación y se conserva en los productos integrales.
      .col-md-12.col-lg-4.mb-0.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img19.svg' alt='')
          .tarjeta.bg-color-03
            .p-4
              p.mb-0 #[b 3. Germen (o Embrión):] es el núcleo reproductivo del grano ubicado en la base (alrededor del 2.5 % a 3 % de su peso). Es rico en grasas saludables (aceites esenciales), vitamina E, proteínas de alta calidad y enzimas. Al contener grasas, suele retirarse en las harinas refinadas para evitar que se rancien rápidamente.

    .separador-container.m-0
      .separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Clasificación de las pastas

    p.mb-4 Según el libro <em>Italia al dente</em> (Corporación Favorita, 2018, p. 11), las pastas son las reinas de la gastronomía italiana. Se clasifican en cortas, largas, rellenas; secas y frescas. Existen varias clases de pastas que varían de acuerdo a su grosor o figura.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img20.png' alt='' data-aos="zoom-in")
      .col-lg-8
        .bg-color-12.p-3.br-15.mb-4.mb-lg-3
          p.mb-0 <b>Pasta fresca casera (<em>pasta fresca all'uovo</em>):</b> elaborada con harina de trigo de baja fuerza (tipo 405) y huevos. Tiene un sabor más suave y una textura tierna. Su tiempo de cocción es corto (2-4 minutos). Debe consumirse en el día de su elaboración o refrigerarse por máximo 2 días (Bernasconi & Teubner, 2004).
        .bg-color-12.p-3.br-15.mb-4.mb-lg-3
          p.mb-0 <b>Pasta seca (<em>pasta secca</em>):</b> elaborada industrialmente con sémola de trigo duro y agua. Se somete a un proceso de secado lento que reduce la humedad a menos del 12.5 %. Tiene una vida útil prolongada y requiere un mayor tiempo de cocción (8-12 minutos) manteniendo la textura <em>al dente</em>.
        .bg-color-12.p-3.br-15
          p.mb-0 <b>Pasta rellena (<em>pasta ripiena</em>):</b> láminas de pasta fresca o seca que envuelven un relleno a base de carnes, quesos, verduras o pescados (como <em>ravioli</em>, <em>tortellini</em>, <em>cannelloni</em>). Requiere sellado hermético en los bordes para evitar la fuga del relleno durante la cocción.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 8.
          span Principales formas de pasta y sus aplicaciones
        .tabla-a.tb-custom.mb-3
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004); Corporación Favorita (2018) y La Moderna (2005).
            thead
              tr
                th Denominación italiana
                th Forma
                th Aplicación sugerida
            tbody
              tr
                td.fw-bold(colspan="3") Pastas largas
              tr
                td(style="font-weight: normal;") <em>Spaghetti</em>
                td Larga, redonda, fina
                td Salsas de tomate, aceite
              tr
                td(style="font-weight: normal;") <em>Fettuccine / Tagliatelle</em>
                td Larga, plana, ancha (5-8 mm)
                td Salsas cremosas
              tr
                td(style="font-weight: normal;") <em>Linguine</em>
                td Larga, plana, estrecha (3-4 mm)
                td Salsas de mariscos
              tr
                td(style="font-weight: normal;") <em>Pappardelle</em>
                td Larga, plana, muy ancha (15-20 mm)
                td Salsas de caza, ragús contundentes
              tr
                td(style="font-weight: normal;") <em>Lasagne</em>
                td Láminas rectangulares
                td Horneados en capas (lasaña)
              tr
                td.fw-bold(colspan="3") Pastas cortas
              tr
                td(style="font-weight: normal;") <em>Penne</em>
                td Tubo corto, corte oblicuo
                td Salsas espesas
              tr
                td(style="font-weight: normal;") <em>Rigatoni</em>
                td Tubo corto, ranurado
                td Salsas contundentes
              tr
                td(style="font-weight: normal;") <em>Fusilli</em>
                td Espiral o tirabuzón
                td Ensaladas de pasta
              tr
                td(style="font-weight: normal;") <em>Farfalle</em>
                td Lazo o mariposa
                td Ensaladas, salsas ligeras
              tr
                td(style="font-weight: normal;") <em>Orecchiette</em>
                td Pequeña oreja
                td Salsas de vegetales
              tr
                td.fw-bold(colspan="3") Pastas rellenas
              tr
                td(style="font-weight: normal;") <em>Ravioli</em>
                td Cuadrados de masa rellenos
                td Caldo, mantequilla y salvia
              tr
                td(style="font-weight: normal;") <em>Tortellini</em>
                td Anillos pequeños rellenos
                td Caldo de carne
              tr
                td(style="font-weight: normal;") <em>Cannelloni</em>
                td Tubos de masa rellenos
                td Gratinados al horno
              tr
                td.fw-bold(colspan="3") Pastas para sopa
              tr
                td(style="font-weight: normal;") <em>Stelline</em>
                td Estrellitas
                td Sopas de verduras, caldos
              tr
                td(style="font-weight: normal;") <em>Ditalini</em>
                td Tubitos cortos
                td <em>Minestrone</em>, sopas de legumbres

    .bg-full-width.bg-fondo-01.p-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img21.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Spaghetti</em> (pastas largas):</b> forma larga, redonda y fina, de sección circular.
              p.mb-2 <b>Aplicación:</b> salsas de tomate, aceite de oliva, ajo y mariscos.
              p.mb-2 <b>Platillo típico:</b> <em>spaghetti alla carbonara</em> (huevo, queso, panceta, pimienta negra).
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img22.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Fettuccine / Tagliatelle</em> (pastas largas):</b> forma larga, plana y ancha (5-8 mm de ancho).
              p.mb-2 <b>Aplicación:</b> salsas cremosas, carbonara y ragú boloñesa.
              p.mb-2 <b>Platillo típico:</b> <em>fettuccine Alfredo</em> (crema de leche, queso parmesano, mantequilla).
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img23.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Linguine</em> (pastas largas):</b> forma larga, plana y estrecha (3-4 mm de ancho).
              p.mb-2 <b>Aplicación:</b> salsas de mariscos, pesto y salsas ligeras.
              p.mb-2 <b>Platillo típico:</b> <em>linguine alle vongole</em> (almejas, ajo, perejil, vino blanco).
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img24.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Pappardelle</em> (pastas largas):</b> forma larga, plana y muy ancha (15-20 mm).
              p.mb-2 <b>Aplicación:</b> salsas de caza, ragús contundentes y setas.
              p.mb-2 <b>Platillo típico:</b> <em>pappardelle al cinghiale</em> (ragú de jabalí, vino tinto, romero).
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img25.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Lasagne</em> (pastas largas):</b> láminas rectangulares grandes.
              p.mb-2 <b>Aplicación:</b> horneados en capas (lasaña) intercalando salsas y quesos.
              p.mb-2 <b>Platillo típico:</b> <em>lasagne alla bolognese</em> (ragú de carne, salsa bechamel, queso).
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema3/img26.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <b><em>Penne</em> (pastas cortas):</b> tubo corto con corte oblicuo (como una pluma de ave).
              p.mb-2 <b>Aplicación:</b> salsas espesas que entran dentro del tubo.
              p.mb-2 <b>Platillo típico:</b> <em>penne all'arrabbiata</em> (tomate, ajo, perejil, <em>peperoncino</em>).
      

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Formulación de la pasta fresca casera

    p.mb-5 La elaboración de pasta fresca casera es un proceso sencillo que requiere pocos ingredientes pero una técnica precisa. La receta básica de pasta fresca al huevo es la más utilizada en la cocina profesional y doméstica.

    
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Receta básica de pasta fresca al huevo (para 4 porciones, aproximadamente 400 g de pasta)

    .bg-color-14.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema3/img19.svg", style="max-width: 75px").mx-auto
        .col-lg.order-1
          p.mb-0 Ingredientes: 200 g de harina de trigo tipo 405 (harina de baja fuerza, rica en almidón), 2 huevos grandes (aproximadamente 100 g de huevo sin cáscara), 1 pizca de sal fina. Opcional: 1 cucharada de aceite de oliva (para masas más manejables) (Bernasconi & Teubner, 2004).


    .row.justify-content-center.mb-5
      .col-lg-12.col-xl-10
        PasosA.color-primario.mb-0(tipo="n")
          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-2.mb-lg-0
              h3 Volcán de harina
              p.mb-0 Tamizar 200 g de harina, formar una corona. Romper 2 huevos en el centro.
            .col-md-8.col-lg-4
              figure
                img(src='@/assets/curso/tema3/img27.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-4.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema3/img28.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.order-1.order-lg-2
              h3 Mezcla inicial
              p.mb-0 Batir los huevos con un tenedor, incorporando gradualmente la harina desde los bordes internos.

          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-0.mb-lg-0
              h3 Amasado
              p.mb-0 Una vez integrada la mayor parte de la harina, comenzar a amasar con las manos. Amasar durante 8-10 minutos hasta obtener una masa lisa, elástica y homogénea.
            .col-md-8.col-lg-4
              figure
                img(src='@/assets/curso/tema3/img29.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-4.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema3/img30.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.order-1.order-lg-2
              h3 Reposo
              p.mb-0 Envolver en film transparente y dejar reposar 30 minutos a temperatura ambiente.

          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-0.mb-lg-0
              h3 Estirado con rodillo
              p.mb-0 Aplanar la masa con rodillo, girando 90 grados después de cada pasada, hasta alcanzar 1-2 mm de espesor. O utilizar máquina de pasta ajustando gradualmente la abertura de los rodillos.
            .col-md-8.col-lg-4
              figure
                img(src='@/assets/curso/tema3/img31.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-4.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema3/img32.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Corte para <em>fettuccine</em>
              p.mb-0 Doblar la lámina sobre sí misma, cortar tiras de 6-8 mm de ancho. Desdoblar y dejar secar sobre superficie enharinada por 15-20 minutos antes de cocer.

    .bg-color-01.p-4.br-15.mb-4
      .row.align-items-center.mb-0
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema3/img19.svg", style="max-width: 75px").mx-auto
        .col-lg.order-1
          p.mb-0 Nota: para elaborar pastas de color verde, se reemplaza parte del huevo por un "fondo de espinacas". Según Bernasconi y Teubner (2004, p. 108), no se trata de incorporar a la masa una crema de espinacas sin más, pues la masa estaría demasiado húmeda. En su lugar, se prepara una pasta de espinacas blanqueadas, bien escurridas y trituradas, que se incorpora junto con los huevos.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Características sensoriales de la pasta

    p.mb-4 Las características sensoriales de la pasta —apariencia, aroma, textura y sabor— son el resultado de la calidad de los ingredientes, la correcta formulación y la adecuada técnica de cocción.

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img33.png", data-aos="zoom-in")

      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-5
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              h4 Apariencia
              p.mb-0 La pasta fresca debe tener un color amarillo pálido uniforme (o verde, si se elaboró con espinacas). La superficie debe ser lisa, sin grietas ni irregularidades. Las pastas cortadas a mano o con máquina deben presentar bordes definidos y uniformes (La Moderna, 2005).
            .tarjeta.p-4.h-100
              h4 Aroma
              p.mb-0 La pasta fresca cruda tiene un aroma suave a harina y huevo fresco. Una vez cocida, adquiere un aroma limpio y ligeramente dulce.
            .tarjeta.p-4.h-100
              h4 Textura
              p.mb-0 La textura ideal de la pasta cocida es <em>al dente</em> ("al diente" en italiano), es decir, firme pero flexible, que ofrece cierta resistencia al morderla. La pasta no debe estar blanda ni pastosa (Corporación Favorita, 2018, p. 12).
            .tarjeta.p-4.h-100
              h4 Sabor
              p.mb-0 La pasta bien elaborada tiene un sabor neutro y ligeramente dulce. Los defectos comunes incluyen sabor a harina cruda (indicativo de cocción insuficiente) o sabor deslavado (cocción excesiva).


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
