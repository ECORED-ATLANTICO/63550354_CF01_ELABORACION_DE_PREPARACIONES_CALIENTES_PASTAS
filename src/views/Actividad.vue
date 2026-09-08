<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del <em>mise en place</em> y elaboración de pastas',
      titulo: 'Cuestionario Didáctico',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos adquiridos sobre <em>mise en place</em>, interpretación de receta estándar, normas de higiene, clasificación de pastas, técnicas de cocción, terminología gastronómica y normas de seguridad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué significa la expresión francesa "<em>mise en place</em>" en el contexto de la cocina profesional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso de cocción de los alimentos a temperatura controlada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La limpieza del área de trabajo después de finalizar el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La organización meticulosa de todos los elementos necesarios antes de comenzar a cocinar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La técnica de decoración de platos con salsas y vegetales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La "<em>mise en place</em>" significa literalmente "poner en su lugar" y se refiere a la organización previa de ingredientes, utensilios y equipos antes de iniciar la preparación de alimentos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes no es un beneficio de implementar un riguroso <em>mise en place</em> en la cocina profesional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estandarización de la calidad de los platos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del tiempo de respuesta durante el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento del desperdicio de alimentos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control preciso de los costos por porción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El <em>mise en place</em> reduce el desperdicio de alimentos, no lo aumenta, ya que permite planificar las cantidades exactas necesarias para cada servicio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es el tamaño aproximado del corte en brunoise?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5 mm x 5 mm x 5 mm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2 mm x 2 mm x 2 mm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3-4 cm x 1-2 mm x 1-2 mm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1-2 cm x 1-2 cm x 1-2 cm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. El corte brunoise es de 2 mm x 2 mm x 2 mm y se utiliza para guarniciones finas, salsas y sopas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué establece el Decreto 3075 de 1997 del Ministerio de Salud de Colombia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las normas para la certificación de negocios gastronómicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las condiciones básicas de saneamiento en establecimientos fabricantes de alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El código de colores para la separación de residuos sólidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los requisitos para la exportación de alimentos procesados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El Decreto 3075 de 1997 reglamenta las condiciones básicas de saneamiento en establecimientos fabricantes de alimentos, incluyendo las Buenas Prácticas de Manufactura (BPM).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de microorganismo está comúnmente asociado a alimentos como huevos, pollo y mayonesa casera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escherichia coli.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Listeria monocytogenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salmonella spp.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Staphylococcus aureus.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La Salmonella spp. se encuentra comúnmente en huevos, pollo y mayonesa casera, y sus síntomas incluyen diarrea, fiebre y vómito.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la concentración recomendada de cloro para la desinfección de mesones de acero inoxidable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50 ppm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '100 ppm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '200 ppm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '500 ppm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. La concentración recomendada de cloro para mesones de acero inoxidable es de 100 ppm, con un tiempo de contacto de 2-3 minutos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de pasta se caracteriza por ser larga, plana y muy ancha (15-20 mm), y se utiliza idealmente para salsas de caza y ragús contundentes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Spaghetti.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fettuccine.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pappardelle.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Linguine.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La pappardelle es una pasta larga, plana y muy ancha (15-20 mm), ideal para salsas de caza y ragús contundentes como el pappardelle al cinghiale.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué significa el término italiano "al dente" en la cocción de la pasta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la pasta está completamente blanda y pastosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la pasta está cocida pero ofrece cierta resistencia al morderla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que la pasta se ha cocido en exceso y se ha deshecho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la pasta se ha cocinado con abundante aceite de oliva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. "al dente" significa "al diente" en italiano y describe el punto de cocción ideal donde la pasta está cocida pero aún firme al morderla.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la cantidad mínima de agua recomendada por cada 120 gramos de pasta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0.5 litros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1 litro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '1.5 litros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2 litros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La cantidad mínima recomendada es de 1 litro de agua por cada 120 gramos de pasta. Usar más agua ayuda a mantener la temperatura constante durante la cocción.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función principal del gluten en la masa de la pasta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportar color amarillo a la pasta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brindar elasticidad y estructura a la masa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Endulzar la masa de forma natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acelerar el proceso de secado de la pasta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. El gluten es una proteína que brinda elasticidad, resistencia y estructura a la masa de la pasta, permitiendo que se estire sin romperse.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué tipo de riesgo previene el uso de calzado antideslizante en una cocina profesional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo biológico (contaminación por bacterias).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo químico (contacto con desinfectantes).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo físico (caídas por pisos resbaladizos).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Riesgo ergonómico (posturas inadecuadas).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El calzado antideslizante previene riesgos físicos, específicamente caídas causadas por pisos resbaladizos, que son comunes en áreas de cocina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál de los siguientes es un tipo de pasta rellena?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fusilli.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Penne.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ravioli.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Stelline.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Los ravioli son una pasta rellena, generalmente en forma de cuadrados, que pueden contener queso, carne, espinacas u otros ingredientes.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué establece la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social de Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las normas para la elaboración de pastas artesanales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El reglamento técnico sobre los requisitos sanitarios que deben cumplir las empresas de alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los requisitos para la importación de harinas y sémolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las normas para la certificación de chefs profesionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La Resolución 2674 de 2013 establece el reglamento técnico sobre los requisitos sanitarios que deben cumplir las empresas de alimentos, incluyendo la obligatoriedad de implementar POES.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué son los POES (Procedimientos Operativos Estandarizados de Saneamiento)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Equipos de refrigeración para enfriar rápidamente los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un tipo de boquilla para decoración de pastas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Protocolos escritos que describen cómo realizar las tareas de limpieza y desinfección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un método de rotación de inventarios (Primero en Entrar, Primero en Salir).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. Los POES son protocolos escritos que describen paso a paso las actividades de limpieza y desinfección de equipos, utensilios y superficies.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de pasta se elabora con sémola de trigo duro y agua, se somete a un proceso de secado controlado y tiene una cocción más larga (8-12 minutos)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: "Pasta fresca casera (pasta fresca all'uovo).",
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasta fresca industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasta seca (pasta secca).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pasta de colores (con espinacas).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La pasta seca (pasta secca) se elabora con sémola de trigo duro y agua, se seca controladamente y tiene una cocción más larga (8-12 minutos).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el sistema de colores recomendado para las tablas de cortar con el fin de prevenir la contaminación cruzada en la cocina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rojo: carnes rojas; marrón: productos cocinados; verde: frutas y verduras; blanco: pastas, quesos (lácteos) y pan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Rojo: carnes rojas; marrón: productos cocinados; amarillo: carnes blancas; azul: pescados y mariscos; verde: frutas y verduras; blanco: pastas, quesos (lácteos) y pan.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Verde: frutas y verduras; blanco: pastas, quesos (lácteos) y pan; marrón: productos cocinados; amarillo: carnes blancas;',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Azul: pescados y mariscos; verde: frutas y verduras; blanco: pastas, quesos (lácteos) y pan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El sistema completo de colores para tablas de cortar es: rojo: carnes rojas; marrón: productos cocinados; amarillo: carnes blancas; azul: pescados y mariscos; verde: frutas y verduras; blanco: pastas, quesos (lácteos) y pan.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el corte de verduras que se utiliza específicamente para fondos, caldos y estofados, con un tamaño aproximado de 1-2 cm x 1-2 cm x 1-2 cm?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brunoise.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Juliana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mirepoix.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Chiffonade.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. El corte mirepoix (1-2 cm x 1-2 cm x 1-2 cm) se utiliza específicamente para fondos, caldos y estofados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué significa el término italiano "sfoglia" en el contexto de la elaboración de pasta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso de cocción de la pasta en agua hirviendo con sal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La lámina de masa estirada que se utiliza para cortar pastas o como base para pastas rellenas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La salsa de carne de cocción lenta típica para pastas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El utensilio de madera utilizado para amasar la pasta a mano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La sfoglia es la lámina de masa estirada que se obtiene después del laminado y que se utiliza para cortar diferentes tipos de pasta o como base para pastas rellenas como ravioli o tortellini.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la técnica de cocción recomendada para las pastas rellenas como los ravioli o tortellini?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cocerlas en agua hirviendo sin remover para que no se rompan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Colocarlas en el agua con cuidado y cocinarlas de dos en dos para que no se peguen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Freírlas directamente en aceite caliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cocerlas en el horno sin precocción previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Las pastas rellenas deben colocarse en el agua con cuidado para que no se abran ni se rompan, y es mejor cocinarlas de dos en dos para que no se peguen entre sí.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de los siguientes es un tipo de pasta para sopa según la clasificación del componente formativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Farfalle.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pappardelle.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Stelline.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Penne.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las Stelline son pastas en forma de estrellitas, clasificadas dentro de las "pastas para sopa" junto con los Ditalini, y se utilizan en sopas de verduras, caldos y minestrone.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
