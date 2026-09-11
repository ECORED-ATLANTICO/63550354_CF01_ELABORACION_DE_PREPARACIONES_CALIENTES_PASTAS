<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 5
      h1 Terminología gastronómica aplicada a pastas

    img(src="@/assets/curso/tema5/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text El dominio de la terminología gastronómica es fundamental para la comunicación profesional en la cocina. Este capítulo presenta el vocabulario esencial relacionado con la preparación de pastas y la denominación de las pastas por su forma y tamaño.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Vocabulario esencial para la preparación de pastas

   
    .row.justify-content-center.mb-4
      .col-lg-12.col-xl-10
        p.mb-2 El dominio de la terminología técnica internacional es una competencia fundamental para cualquier profesional de la gastronomía, ya que unifica los criterios de comunicación dentro de la cocina y garantiza la correcta ejecución de las recetas tradicionales. 

        p.mb-0 En la elaboración de pastas, la mayoría de los conceptos operativos provienen del italiano, el idioma cuna de esta tradición culinaria. Con el fin de facilitar la apropiación conceptual, en la siguiente tabla se compila el vocabulario esencial para la preparación de pastas, detallando sus traducciones técnicas y sus significados específicos en el contexto gastronómico actual.

    .row.justify-content-center.mb-4
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 11.
          span Términos básicos de la pasta
        .tabla-a.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004).
            thead
              tr
                th Término italiano
                th Traducción
                th Significado en contexto gastronómico
            tbody
              tr
                td(style="font-weight: normal;") <em>Al dente</em>
                td Al diente
                td Punto de cocción en que la pasta ofrece resistencia al morderla.
              tr
                td(style="font-weight: normal;") <em>Sfoglia</em>
                td Lámina
                td Lámina de masa estirada para cortar pastas o rellenar.
              tr
                td(style="font-weight: normal;") <em>Mattarello</em>
                td Rodillo
                td Rodillo de madera para estirar masa.
              tr
                td(style="font-weight: normal;") <em>Chitarra</em>
                td Guitarra
                td Marco con cuerdas metálicas para cortar espaguetis de sección cuadrada.
              tr
                td(style="font-weight: normal;") <em>Mantecatura</em>
                td -
                td Técnica de mezclar la pasta recién cocida con la salsa incorporando agua de cocción.
              tr
                td(style="font-weight: normal;") <em>Ripieno</em>
                td Relleno
                td Mezcla que se coloca dentro de pastas rellenas (<em>ravioli</em>, <em>tortellini</em>).
              tr
                td(style="font-weight: normal;") <em>Pastificio</em>
                td Fábrica de pasta
                td Establecimiento donde se elabora pasta artesanal o industrial.
              tr
                td(style="font-weight: normal;") <em>Tirabusciò</em>
                td Sacacorchos
                td Utensilio para servir espaguetis.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Denominación de las pastas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-color-04.p-4.br-15.text-center
          p.mb-0 La terminología italiana para denominar las pastas suele hacer referencia a su forma, tamaño o a alguna característica particular (Corporación Favorita, 2018; La Moderna, 2005):

    .row.mb-5.justify-content-center.align-items-center
      .col-xl-4.col-lg-6.col-md-8.mb-4.mb-lg-4.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in")
      .col-xl-8.col-lg-12
        //- .bg-color-14.p-4.br-15
        .p-4(style="background-color: #FEF6E4;").mb-0
          .row.justify-content-center
            .col-lg-6.col-md-12.mb-4.mb-lg-0
              .bg-color-02.h-100.p-4.br-15
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Spaghetti</em> ("cordeles"): pastas largas y finas de sección circular.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Fettuccine</em> ("tiras"): pastas largas, planas y anchas.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Linguine</em> ("lengüitas"): pastas largas, planas y estrechas.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Penne</em> ("plumas"): pastas cortas, tubulares, con corte oblicuo.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Farfalle</em> ("mariposas"): pastas cortas con forma de lazo.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Orecchiette</em> ("orejitas"): pastas pequeñas con forma cóncava.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Ravioli</em> ("pequeños nabo"): pastas rellenas cuadradas.
            .col-lg-6.col-md-12.mb-0.mb-lg-0
              .bg-color-02.h-100.p-4.br-15
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Tortellini</em> ("tortellis"): pastas rellenas en forma de anillo.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Cannelloni</em> ("cañones"): tubos de masa rellenos que se hornean.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 <em>Lasagna</em> ("lasaña"): láminas de pasta rectangular que se intercalan con capas de salsa, queso y otros ingredientes para hornear.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 Fideo: pasta delgada utilizada tradicionalmente en sopas.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 Codo: pasta corta con forma de codo, muy utilizada en sopas y ensaladas.
                  li.d-flex.mb-0
                    i.fas.fa-circle(style="color: #5B0202; font-size: 10px;")
                    p.mb-0 Espiral: pasta con forma de tirabuzón, ideal para ensaladas y salsas espesas.

    .row.mb-3.justify-content-center.align-items-center
      .col-xl-8.col-lg-12.order-2.order-xl-1.mb-4.mb-lg-0.mb-xl-0
        p.mb-3 La apropiación integral de los fundamentos técnicos, la precisión en el <em>mise en place</em> y el respeto riguroso por los parámetros físicos y normativos de la producción constituyen la firma de excelencia de un profesional en la elaboración de pastas.
        .bg-color-09.p-3.br-15.mb-3
          p.mb-0 Desde la estricta dosificación de los agentes químicos en el plan POES y la correcta interpretación de la anatomía del grano de trigo, hasta el dominio del vocabulario técnico y el control riguroso del punto <em>al dente</em>, cada eslabón de la cadena operativa impacta de forma directa en la inocuidad, el rendimiento y la experiencia sensorial del comensal.
        p.mb-0 Al consolidar esta disciplina operativa y preventiva en la planta de proceso, el manipulador de alimentos no solo asegura el cumplimiento legal ante las autoridades sanitarias vigentes en Colombia, sino que eleva la cocina tradicional a un estándar industrial de alta calidad y seguridad laboral.
      .col-xl-4.col-lg-6.col-md-8.order-1.order-xl-2.mb-4.mb-lg-4.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
