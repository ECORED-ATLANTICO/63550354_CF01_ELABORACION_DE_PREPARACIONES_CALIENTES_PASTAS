<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 El componente formativo, Fundamentos del #[em mise en place] y elaboración de pastas, proporciona las bases conceptuales y procedimentales para que el aprendiz desarrolle la capacidad de organizar, planificar y ejecutar el alistamiento profesional en cocina, así como elaborar pastas bajo estándares técnicos de calidad, higiene y seguridad. 
      
        .bg-color-02.p-3.br-15.mb-0
         p.mb-0 Su recorrido formativo inicia con el concepto y la importancia del #[em mise en place] como pilar de la organización en cocina, se adentra en las operaciones básicas de alistamiento (técnicas de corte, pesaje, preparación de fondos), continuando con la receta estándar como herramienta de control de costos y consistencia. Luego aborda el marco normativo colombiano, las enfermedades transmitidas por alimentos, las Buenas Prácticas de Manufactura y los procedimientos de limpieza y desinfección. 

    
    p.mb-2 A su vez se abordan las normas de seguridad y salud ocupacional aplicadas a la elaboración de pastas, conformando un sistema de conocimiento integral que integra la organización, la técnica, la higiene y la seguridad. Su apropiación es el cimiento sobre el cual se construye la aplicación práctica de los estándares gastronómicos para garantizar la calidad, la inocuidad y la seguridad como pilares fundamentales de la cocina profesional. 

    p.mb-4 Finalmente, el componente se orienta hacia la pasta, explorando su origen, definición, clasificación, formulación de pasta fresca casera y técnicas de cocción, con énfasis en el concepto de “al dente”y la terminología gastronómica.

  
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo, Fundamentos del mise en place y elaboración de pastas, proporciona las bases conceptuales y procedimentales para que el aprendiz desarrolle la capacidad de organizar, planificar y ejecutar el alistamiento profesional en cocina, así como elaborar pastas bajo estándares técnicos de calidad, higiene y seguridad. Su recorrido formativo inicia con el concepto y la importancia del mise en place como pilar de la organización en cocina, se adentra en las operaciones básicas de alistamiento (técnicas de corte, pesaje, preparación de fondos), continuando con la receta estándar como herramienta de control de costos y consistencia. Luego aborda el marco normativo colombiano, las enfermedades transmitidas por alimentos, las Buenas Prácticas de Manufactura y los procedimientos de limpieza y desinfección. A su vez se abordan las normas de seguridad y salud ocupacional aplicadas a la elaboración de pastas, conformando un sistema de conocimiento integral que integra la organización, la técnica, la higiene y la seguridad. Su apropiación es el cimiento sobre el cual se construye la aplicación práctica de los estándares gastronómicos para garantizar la calidad, la inocuidad y la seguridad como pilares fundamentales de la cocina profesional. Finalmente, el componente se orienta hacia la pasta, explorando su origen, definición, clasificación, formulación de pasta fresca casera y técnicas de cocción, con énfasis en el concepto de “al dente”y la terminología gastronómica.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
