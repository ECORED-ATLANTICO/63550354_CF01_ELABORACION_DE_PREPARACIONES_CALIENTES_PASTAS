<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 3
      h1 Pastas: clases, formulación y características

    img(src="@/assets/curso/tema3/img01.png", alt="Banner pasta fresca")
    .row.justify-content-center.align-items-center.z-2.mb-4
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
          p.mb-0 Según el libro <em>Italia al dente</em> (Corporación Favorita, 2018, p. 5), la comida italiana es creativa y llena de personalidad. Está marcada por un fuerte carácter regional que encierra largas tradiciones en las que el tomate, pastas, diversos tipos de queso, albahaca y el aceite de oliva son algunos de los ingredientes esenciales. Es común que a la comida italiana se la identifique por la <em>pizza</em> y las pastas, pero en realidad es absolutamente variada y cada región tiene su propia tradición culinaria.
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
