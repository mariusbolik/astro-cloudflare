export default {
  /*Tela da Câmera*/
  camera: {
    description: 'Todos os 4 cantos visíveis?',
    left_foot: 'Pé esquerdo',
    right_foot: 'Pé direito',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemas com a medição? Ligue para nós!',
    loadingMessage: 'Avaliando imagem',
    error: {
      title: {
        "0": "Ops, a folha não foi reconhecida...",
        "10": "Ops, nem todos os cantos foram reconhecidos...",
        "11": "Ops, a superfície não é ótima para reconhecimento de folha...",
        "20": "Ops, a folha não foi reconhecida...",
    },
      text: {
        '0': 'Certifique-se de que'
      },
      list: {
        '0': 'todos os quatro cantos estão visíveis',
        '1': 'a foto está bem iluminada',
        '2': 'o fundo é distinguível da folha'
      },
      button: 'Entendido'
    },
    /*Tela Pop-up da Câmera*/
    modal: {
      buttons: {
        continue: 'Continuar',
        close: 'Fechar',
      },
      buttonSecondary: {
        headline: 'Está com problemas na medição?',
        text: 'Ligue para nós: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**Folha tamanho DIN A4** (sem bloco de notas ou similar) em uma superfície plana',
              icon: 'document'
            },
            {
              text: 'Sente-se na **borda frontal de uma cadeira**',
              icon: 'sitting'
            },
            {
              text: '**Tire suas meias** e suba as calças',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Coloque seu pé na folha',
              icon: 'foot'
            },
            {
              text: 'Segure seu telefone entre os joelhos e aponte para o pé',
              icon: 'phone'
            },
            {
              text: 'Tire a foto :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*Tela de Correção*/
  review: {
    title: 'Correção',
    loadingMessage: 'Calculando dimensões do pé...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemas com a medição? Ligue para nós!',
    alert0: 'Seu escaneamento não está mais disponível. Por favor, faça um novo escaneamento :-)',
    alert1: 'Ops, algo deu errado. Nos dê outra chance e tente novamente :-)',
    /*Tela de Instruções*/
    modal: {
      buttons: {
        continue: 'Continuar',
        close: 'Fechar',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'Certifique-se de que os **pontos de medição estão exatamente na transição do pé para a folha**',
              icon: 'target'
            },
            {
              text: 'Você pode simplesmente tocar e **mover** os **pontos de medição**',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'Concluído'
  },
  /*Página de Resultados*/
  result: {
    headline: 'Tamanho de sapato recomendado',
    alert0: 'Nenhum escaneamento disponível',
    alert1: 'Por favor, insira seu nome e endereço de e-mail',
    alert2: 'Erro ao criar a conta',
    for: 'para',
    length: 'Comprimento',
    width: 'Largura',
    back_to_shop_button: 'Voltar para a loja',
    back_to_shop_no_reg_button: "Continue comprando sem salvar ID",
    manage_scans_text: 'Gerencie seus escaneamentos anteriores',
    manage_scans_button: 'Gerenciar escaneamentos',
    model: 'Modelo',
    brand: 'Marca',
    no_value: 'Sem Informação',
    no_matching_size: 'O sapato parece não estar disponível no seu tamanho.',
    registration: {
      id: 'Salve seu ID mySF para a próxima vez e receba notificações sobre novas lojas parceiras.',
      email: 'Digite o E-mail',
      name: 'Crie seu próprio ID',
      description: ' ',
      button: 'Salvar meu ID mySF'
    }
  },
  footer: {
    legal_notice: 'Aviso Legal',
    privacy_policy: 'Política de Privacidade'
  },
  faq: {
    title_tag: 'Perguntas Frequentes',
    headline: 'Onde o sapato está apertando?',
    description: 'Aqui você encontrará respostas comuns para suas perguntas.',
    items: [
      {
        question: 'Que tipo de aplicativo é o mySHOEFITTER?',
        content: 'Escaneie seu pé uma vez e sempre peça o tamanho de sapato perfeito - o mySHOEFITTER é o aplicativo perfeito para determinação automatizada do tamanho do sapato. Com nosso aplicativo, você pode encontrar o tamanho de sapato perfeito para o modelo de sapato desejado.'
      },
      {
        question: 'Como funciona o aconselhamento digital sobre o tamanho do sapato?',
        content: 'Para encontrar o tamanho de sapato perfeito, só precisamos de uma foto do seu pé. Usando nossa inteligência artificial, medimos seu pé e determinamos o tamanho de sapato perfeito com base nas dimensões do seu pé e nas dimensões internas do sapato correspondente. Os tamanhos de sapato não são padronizados, por isso os sapatos sempre variam de tamanho. A melhor parte é que você só precisa fazer um escaneamento uma vez. Depois disso, você sempre pode pedir sapatos no tamanho certo usando o ID gerado.'
      },
      {
        question: 'Quanto tempo leva a medição?',
        content: 'O processo inteiro leva cerca de 2 minutos.'
      },
      {
        question: 'O que devo observar ao medir meu pé?',
        content: 'Nossa IA precisa de uma foto do seu pé descalço em uma folha branca tamanho DIN A4. É importante que a folha esteja em uma superfície plana (sem carpete ou similar) e que todos os quatro cantos estejam planos no chão (sem cantos dobrados ou salientes). Durante a medição, todos os quatro cantos também devem estar visíveis. Certifique-se de que todo o seu pé, incluindo o calcanhar, esteja visível. Recomendamos medir enquanto estiver sentado, pois é mais confortável. Coloque peso no seu pé durante a digitalização, pois os pés estão sempre um pouco maiores quando suportam peso.'
      },
      {
        question: 'Como devo segurar meu smartphone durante a medição?',
        content: 'Ao sentar, segure seu smartphone entre os joelhos em um ângulo leve, inclinando-o em direção ao seu pé. Dessa forma, junto com todo o seu pé (incluindo o calcanhar), todos os quatro cantos da folha devem estar visíveis.'
      },
      {
        question: 'Quais são os benefícios do mySHOEFITTER?',
        content: 'Ao encomendar seus sapatos diretamente no tamanho certo, você pode evitar possíveis custos de devolução. Além disso, para cada devolução evitada, você economiza cerca de 30 minutos do seu precioso tempo, caso não precise levar os sapatos de volta ao correio. Você também evita emissões de CO2 desnecessárias (500g por devolução) e muitos resíduos de embalagens. Por último, mas não menos importante, você apoia sua loja favorita, pois os altos custos de devolução realmente prejudicam as lojas.'
      },
      {
        question: 'Meu pé é maior que a folha, o que posso fazer?',
        content: 'Sem problema. Seu pé pode se estender além da frente da folha; ainda podemos medir seu pé. Apenas certifique-se de que o pé não se sobreponha na parte de trás.'
      },
      {
        question: 'Tenho pés de tamanhos diferentes, qual devo medir?',
        content: 'Para diferenças pequenas, você pode medir o pé maior. Se seus pés forem realmente muito diferentes em tamanho, meça ambos os pés. Para diferenças significativas, é melhor falar com seu ortopedista.'
      },
      {
        question: 'Tenho deformidades nos pés, posso usar o mySHOEFITTER?',
        content: 'Você pode usar nosso aplicativo mesmo com deformidades nos pés. No entanto, geralmente recomendamos consultar um ortopedista para problemas graves e usar sapatos e/ou palmilhas especiais feitos sob medida para você.'
      },
      {
        question: 'A medição não está funcionando, o que posso fazer?',
        content: 'Na maioria dos casos, o problema ocorre porque a folha não foi reconhecida adequadamente (nem todos os cantos estão visíveis ou há baixo contraste com o fundo). É importante que a folha esteja bem iluminada e não esteja no escuro. Certifique-se de que todo o seu pé esteja visível. Se ainda não funcionar, não hesite em nos contatar e nos enviar uma captura de tela ou um vídeo de gravação da tela do seu problema.'
      },
    ]
  }
}
