<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 4
      h1 Técnicas de cocción de pastas

    img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text La cocción de la pasta es una operación aparentemente simple pero que requiere precisión y conocimiento de los parámetros fundamentales. Como señala el libro Italia al dente (Corporación Favorita, 2018, p. 12), el principal consejo es comprar una pasta de buena calidad para asegurar una cocción adecuada y excelente textura. La tradición italiana enseña a ser generosos con la comida.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Parámetros fundamentales para la cocción de pastas

    p.mb-2 Según Bernasconi y Teubner (2004, p. 109), para cocinar pasta solo basta con seguir una serie de reglas básicas. 
    p.mb-4 Las reglas o aspectos fundamentales son:


    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in")
      .col-lg-7.order-1.order-lg-1
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Cantidad de agua") La forma más recomendable para cocinar las pastas es con abundante cantidad de agua y un poco de sal. Aproximadamente se requiere un litro de agua por cada 120 gramos de pasta. Si se usa más agua es mejor, porque así es más fácil mantener la temperatura constante durante la cocción (Corporación Favorita, 2018, p. 12).
          p(numero="2" titulo="Sal") Calcular 10 g de sal (una cucharadita rasa) por cada litro de agua. La sal se añade cuando el agua ya está hirviendo, antes de incorporar la pasta.
          p(numero="3" titulo="Aceite de oliva") El aceite solo se agrega al agua en ciertos casos, por ejemplo, en láminas de pasta grandes (como las de lasaña) o en pastas frescas y delgadas que de otro modo se apelmazarían. Generalmente se usa con las pastas largas y planas como la lasaña porque tienden a pegarse. Se añade un poco de aceite en el agua de la cocción y se colocan las placas una a una (Corporación Favorita, 2018, p. 12).
          p(numero="4" titulo="Temperatura inicial") Antes de poner la pasta en la cacerola, el agua debe estar hirviendo a borbotones (100 °C al nivel del mar).
          p(numero="5" titulo="Técnica de incorporación") Las pastas largas (como los espaguetis) se sumergen en el agua y, a medida que se ablandan, se empujan hacia abajo con un tenedor de madera. Las pastas cortas se echan directamente en el agua hirviendo.
          p(numero="6" titulo="Remoción") Se revuelve la pasta durante los primeros segundos de cocción para evitar que se pegue. Luego, se remueve ocasionalmente hasta el final de la cocción.
        

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de cocción según la variedad de pasta

      
    img(src="@/assets/curso/tema4/img03.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text El comportamiento hidrodinámico de la pasta durante su preparación térmica está directamente ligado a su geometría, grosor y estado de conservación (fresca o seca). Lograr el punto óptimo de gelatinización del almidón y desnaturalización de las proteínas —comúnmente denominado al dente— requiere que el operario o cocinero adapte los tiempos de exposición, las temperaturas y la relación agua-sal a las especificaciones físicas de la masa. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10 
        .bg-color-09.p-4.br-15
          p.mb-0 A continuación, se detallan los tiempos de cocción según la variedad de pasta, estableciendo las pautas técnicas necesarias para garantizar la consistencia, textura y retención de salsa óptimas en pastas largas, cortas, rellenas y artesanales.


    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 9.
          span Tiempos de cocción orientativos según tipo de pasta
        .tabla-a.tb-custom.mb-3
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004); Corporación Favorita (2018) y La Moderna (2005).
            thead
              tr
                th Tipo de pasta
                th Tiempo de cocción (agua hirviendo)
                th Observaciones
            tbody
              tr
                td Pasta fresca al huevo (<em>fettuccine</em>, <em>tagliatelle</em>)
                td 2-4 minutos
                td Cocción muy rápida, vigilar constantemente
              tr
                td Pasta fresca rellena (<em>ravioli</em>, <em>tortellini</em>)
                td 3-5 minutos (desde que suben a la superficie)
                td Retirar con espumadera
              tr
                td Pasta seca larga (<em>spaghetti</em>, <em>linguine</em>)
                td 8-12 minutos
                td Seguir indicaciones del empaque
              tr
                td Pasta seca corta (<em>penne</em>, <em>fusilli</em>)
                td 9-13 minutos
                td Verificar <em>al dente</em> probando
              tr
                td Lasaña seca (para horneado)
                td 3-5 minutos (escaldado previo)
                td O usar sin precocción si el fabricante lo indica


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-0 Para lograr una cocción óptima según la variedad de pasta, es fundamental adaptar la técnica culinaria a sus características específicas: las pastas frescas requieren un tiempo significativamente menor, por lo que se debe contar con el colador y los platos listos antes de retirarlas del fuego siguiendo las instrucciones del empaque; por su parte, la lasaña y los canelones deben cocinarse inicialmente solo durante las tres cuartas partes del tiempo sugerido, ya que finalizan su preparación e hidratación en el horno junto con los demás ingredientes; finalmente, las pastas rellenas como los ravioli exigen máxima precaución al introducirse en el agua para evitar rupturas, siendo recomendable cocinarlas en pequeñas cantidades y removerlas suavemente con una cuchara de madera para que no se adhieran entre sí (Corporación Favorita, 2018, p. 12).

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Términos de cocción: al dente y sus implicaciones


    .bloque-texto-g.bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término <em>al dente</em> ("al diente" en italiano) describe el punto de cocción ideal de la pasta, en el que esta está cocida pero aún conserva cierta firmeza y resistencia al morderla. Según el libro <em>Italia al dente</em> (Corporación Favorita, 2018, p. 12), el término <em>al dente</em> significa que la pasta debe estar tierna pero con una textura firme. El tiempo que tarda en adquirir este estado depende de los ingredientes de la pasta, de su forma y grosor.

    .bg-color-14.p-4.br-15.text-center.mb-5
      p.mb-0 Bernasconi y Teubner (2004, p. 109) señalan que únicamente probando la pasta se puede comprobar cuándo está <em>al dente</em>.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-06")
      .row(titulo="Características de la pasta al dente")
        .col-lg-7.mb-4.mb-lg-0
          ul.lista-ul--color.mb-0.ms-0.ms-lg-5
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 Al morderla, ofrece una resistencia suave pero perceptible.
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 El centro de la pasta puede presentar un punto diminuto más claro (el "núcleo").
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 La pasta mantiene su forma y no se deshace.
            li.d-flex.mb-0
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 Al cortarla, no se desmorona.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/img06.png", data-aos="zoom-in")

      .row(titulo="Beneficios de cocinar la pasta al dente")
        .col-lg-7.mb-4.mb-lg-0
          ul.lista-ul--color.mb-0.ms-0.ms-lg-5
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 <b>Mejor digestibilidad:</b> el almidón está parcialmente gelatinizado pero no sobre gelatinizado.
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 <b>Índice glucémico más bajo:</b> la digestión y absorción son más lentas.
            li.d-flex.mb-2
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 <b>Mejor textura en platos.</b>
            li.d-flex.mb-0
              i.fas.fa-circle(style="color: #89A068; font-size: 10px;")
              p.mb-0 <b>La pasta no se vuelve pastosa ni pegajosa.</b>
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in")

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Errores comunes en la cocción y su corrección

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img08.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3 El éxito en la preparación de pastas a nivel profesional no solo depende de seguir una receta, sino de dominar variables físicas y químicas críticas como la temperatura, el volumen de agua y la dosificación exacta de sal.
        .bg-color-09.p-4.br-15
          p.mb-0 Durante el proceso de cocción, es común enfrentarse a desviaciones técnicas que afectan negativamente la textura, el sabor y la presentación del producto final. Con el fin de estandarizar los criterios de control de calidad en la cocina, en la siguiente tabla se analizan los fallos más recurrentes cometidos por los operarios, identificando sus causas raíz y las acciones preventivas o correctivas obligatorias para garantizar un servicio impecable y conforme a los estándares de la industria.

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 10.
          span Errores comunes en la cocción y su corrección
        .tabla-a.tb-custom.mb-3
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004); Corporación Favorita (2018) y La Moderna (2005).
            thead
              tr
                th Error
                th Causa
                th Corrección
            tbody
              tr
                td.fw-bold Pasta pegada
                td Poca agua en la cacerola, no se revolvió al inicio.
                td Usar mínimo 1 L de agua por 100 g de pasta; revolver inmediatamente después de incorporar la pasta.
              tr
                td.fw-bold Pasta blanda y pastosa
                td Exceso de cocción.
                td Probar la pasta 1-2 minutos antes del tiempo indicado; retirar cuando esté <em>al dente</em>.
              tr
                td.fw-bold Pasta con sabor deslavado
                td Poca sal en el agua de cocción o sal añadida después de escurrir.
                td Salar el agua de cocción con 10 g de sal por litro; no salar la pasta ya escurrida.
              tr
                td.fw-bold Pasta fría rápidamente
                td No se precalentaron los platos.
                td Calentar los platos de servicio en el horno a baja temperatura o con agua caliente.


</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
