<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 La cocina profesional es un espacio donde la precisión, la organización y la técnica se conjugan para ofrecer preparaciones de alta calidad que satisfagan las expectativas del cliente. En este contexto, el #[em mise en place] —expresión francesa que significa "poner en su lugar"— constituye el pilar fundamental sobre el cual se construye una operación gastronómica eficiente, segura y rentable. 
    

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-color-01.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Este componente formativo, Fundamentos del #[em mise en place] y elaboración de pastas, ha sido diseñado para desarrollar en el aprendiz las competencias necesarias para realizar el alistamiento profesional de una cocina, interpretar correctamente recetas estándar y aplicar rigurosamente las normas de higiene y manipulación de alimentos, todo ello con miras a la elaboración de un producto tan versátil como universal: la pasta.


      
    .row.mb-4.mb-lg-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La pasta es uno de los productos gastronómicos más universales y versátiles de la cocina mundial. Como señala La Moderna (2005, p. 8), la pasta es una preparación hecha con base en harina y agua, elaborada con sémola de trigo duro, un producto que se obtiene del endospermo de un tipo de trigo llamado durum. Este grano de trigo contiene una gran proporción de gluten, la proteína del trigo responsable de brindar elasticidad a la pasta. 
        
        .bg-color-02.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") Gracias a que la sémola de trigo contiene proteína, la masa se mantiene unida durante todo el proceso de preparación, durante el amasado, secado y cocción. Adicionalmente, como indica el libro Italia al dente (Corporación Favorita, 2018, p. 11), las pastas son las reinas de la gastronomía italiana y se clasifican en cortas, largas, rellenas; secas y frescas. El término "al dente" significa que la pasta debe estar tierna pero con una textura firme.
        
        p.mb-0 Para alcanzar estos propósitos formativos, el componente se estructura en torno a siete ejes temáticos fundamentales que guían al aprendiz desde los conceptos más básicos hasta las técnicas específicas de cocción de pastas, todo ello enmarcado en el cumplimiento de la normativa sanitaria colombiana vigente, especialmente el Decreto 3075 de 1997 y la Resolución 2674 de 2013, que establecen las condiciones básicas de saneamiento en establecimientos de alimentos.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
