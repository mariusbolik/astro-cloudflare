export default {
  /* Pantalla de la cámara */
  camera: {
    description: '¿Los 4 vértices son visibles?',
    left_foot: 'Pie izquierdo',
    right_foot: 'Pie derecho',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '¿Problemas con la medición? ¡Llámanos!',
    loadingMessage: 'Evaluando la imagen',
    error: {
      title: {
        "0": "Vaya, no se reconoció la hoja...",
        "10": "Vaya, no se reconocieron todas las esquinas...",
        "11": "Vaya, la superficie no es óptima para el reconocimiento de hojas...",
        "20": "Vaya, no se reconoció la hoja...",
    },
      text: {
        "0": 'Por favor, asegúrate de que'
      },
      list: {
        "0": "los 4 vértices sean visibles",
        "1": "la foto tenga buena iluminación",
        "2": "el fondo sea distinguible de la hoja"
      },
      button: 'Entendido'
    },
    /* Pantalla emergente de la cámara */
    modal: {
      buttons: {
        continue: 'Continuar',
        close: 'Cerrar',
      },
      buttonSecondary: {
        headline: '¿Tienes problemas con la medición?',
        text: 'Llámanos al: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**Hoja DIN A4** (no una libreta u objeto similar) sobre una superficie plana',
              icon: 'document'
            },
            {
              text: 'Siéntate en el **borde frontal de una silla**',
              icon: 'sitting'
            },
            {
              text: '**Quítate los calcetines** y sube los pantalones',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Coloca tu pie sobre la hoja',
              icon: 'foot'
            },
            {
              text: 'Sujeta tu teléfono entre las rodillas y apunta al pie',
              icon: 'phone'
            },
            {
              text: '**¿Los 4 vértices son visibles?** Toma la foto :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /* Pantalla de corrección */
  review: {
    title: "Corrección",
    loadingMessage: 'Calculando las dimensiones del pie...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '¿Problemas con la medición? ¡Llámanos!',
    alert0: 'Tu escaneo ya no está disponible. ¡Por favor, haz un nuevo escaneo! :-)',
    alert1: '¡Ups, algo salió mal! Danos otra oportunidad e inténtalo de nuevo :-)',
    /* Pantalla de instrucciones */
    modal: {
      buttons: {
        continue: 'Continuar',
        close: 'Cerrar',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: '¿Las **marcas de medición están exactamente en la transición entre el pie y la hoja**?',
              icon: 'target'
            },
            {
              text: 'Puedes **tocar y arrastrar las marcas de medición** fácilmente.',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'Listo'
  },
  /* Página de resultados */
  result: {
    headline: 'Talla de zapato recomendada',
    alert0: 'No hay un escaneo disponible',
    alert1: 'Por favor, ingresa tu nombre y dirección de correo electrónico',
    alert2: 'Error al crear la cuenta',
    for: 'para',
    length: 'Largo',
    width: 'Ancho',
    back_to_shop_button: 'Volver a la tienda',
    back_to_shop_no_reg_button: "Continuar comprando sin guardar ID",
    manage_scans_text: 'Administra tus escaneos anteriores',
    manage_scans_button: 'Administrar escaneos',
    model: 'Modelo',
    brand: 'Marca',
    no_value: 'Sin información',
    no_matching_size: 'Parece que el zapato no está disponible en tu talla.',
    registration: {
      id: 'Guardar ID para la próxima vez',
      email: 'Ingresa el correo electrónico',
      name: 'Crea tu propio ID',
      description: ' ',
      button: 'Guardar datos'
    }
  },
  footer: {
    legal_notice: 'Aviso legal',
    privacy_policy: 'Política de privacidad'
  },
  faq: {
    title_tag: 'Preguntas frecuentes',
    headline: '¿Dónde aprieta el zapato?',
    description: 'Aquí encontrarás respuestas a las preguntas más comunes.',
    items: [
      {
        question: '¿Qué tipo de aplicación es mySHOEFITTER?',
        content: 'Escanea tu pie una vez y siempre ordena la talla de zapato perfecta: mySHOEFITTER es la aplicación perfecta para determinar automáticamente la talla de zapato. Con nuestra aplicación, puedes encontrar la talla de zapato que mejor se ajuste a tu modelo de zapato deseado.'
      },
      {
        question: '¿Cómo funciona el asesoramiento digital de tallas de zapato?',
        content: 'Para encontrar tu talla de zapato perfecta, solo necesitamos una foto de tu pie. Usando nuestra inteligencia artificial, medimos tu pie y determinamos la talla de zapato perfecta en función de las dimensiones de tu pie y las dimensiones internas respectivas del zapato. Las tallas de zapato no están estandarizadas, por lo que los zapatos siempre varían en tamaño. Lo mejor de todo es que solo tienes que hacer un escaneo una vez. Después de eso, siempre puedes ordenar zapatos directamente en la talla correcta utilizando la ID generada.'
      },
      {
        question: '¿Cuánto tiempo dura la medición?',
        content: 'Todo el proceso dura aproximadamente 2 minutos.'
      },
      {
        question: '¿A qué debo prestar atención al medir mi pie?',
        content: 'Nuestra IA necesita una imagen de tu pie descalzo en una hoja DIN A4 blanca. Es importante que la hoja esté en una superficie plana (sin alfombras ni cosas similares) y que los cuatro vértices estén en contacto con el suelo (sin hojas dobladas ni vértices sobresalientes). Durante la medición, los cuatro vértices también deben ser visibles. Asegúrate de que todo tu pie, incluido el talón, sea visible. Recomendamos hacer la medición sentado, ya que es más cómodo. Ejerce presión sobre tu pie mientras escaneas, ya que los pies siempre son un poco más grandes cuando están bajo presión.'
      },
      {
        question: '¿Cómo debo sostener mi teléfono inteligente durante la medición?',
        content: 'Cuando estés sentado, sostén tu teléfono entre las rodillas ligeramente inclinado y apuntando hacia el pie. De esta manera, junto con todo tu pie (incluido el talón), deberían ser visibles los cuatro vértices de la hoja.'
      },
      {
        question: '¿Cuáles son los beneficios de mySHOEFITTER?',
        content: 'Al ordenar tus zapatos directamente en la talla correcta, puedes evitar posibles costos de devolución. Además, por cada devolución evitada, ahorras aproximadamente 30 minutos de tu valioso tiempo si no tienes que llevar los zapatos de vuelta a la oficina de correos. También evitas emisiones de CO2 innecesarias (500 gramos por devolución) y una gran cantidad de desperdicio de embalajes. Por último, pero no menos importante, apoyas a tu tienda favorita porque los altos costos de devolución realmente afectan a las tiendas.'
      },
      {
        question: 'Mi pie es más grande que la hoja, ¿qué puedo hacer?',
        content: 'No hay problema. Tu pie puede sobresalir en la parte frontal de la hoja; aún podemos medir tu pie. Solo asegúrate de que el pie no se superponga en la parte posterior.'
      },
      {
        question: 'Tengo dos pies de tamaños diferentes, ¿cuál debo medir?',
        content: 'Para diferencias leves, puedes medir el pie más grande. Si tus pies son realmente muy diferentes en tamaño, mide ambos pies. Para diferencias significativas, lo mejor es hablar con tu ortopedista.'
      },
      {
        question: 'Tengo deformidades en los pies, ¿puedo seguir utilizando mySHOEFITTER?',
        content: 'Puedes utilizar nuestra aplicación a pesar de las deformidades en los pies. Sin embargo, generalmente recomendamos consultar a un ortopedista para problemas graves y usar zapatos y/o plantillas especiales adaptadas a ti.'
      },
      {
        question: 'La medición no funciona, ¿qué puedo hacer?',
        content: 'En casi todos los casos, se debe a que la hoja no se reconoció correctamente (no se ven todos los vértices o hay poco contraste con el fondo). Es importante que la hoja esté bien iluminada y no en la oscuridad. Asegúrate de que todo tu pie sea visible. Si aún no funciona, no dudes en contactarnos y envíanos una captura de pantalla o un video de grabación de pantalla de tu problema.'
      },
    ]
  }
}
