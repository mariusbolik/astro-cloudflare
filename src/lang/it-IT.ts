export default {
  /*Schermata della fotocamera*/
  camera: {
    description: 'Tutti e 4 gli angoli visibili?',
    left_foot: 'Piede Sinistro',
    right_foot: 'Piede Destro',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemi con la misurazione? Chiamaci!',
    loadingMessage: 'Valutazione dell\'immagine',
    error: {
      title: {
        "0": "Ops, il foglio non è stato riconosciuto...",
        "10": "Ops, non tutti gli angoli sono stati riconosciuti...",
        "11": "Ops, la superficie non è ottimale per il riconoscimento del foglio...",
        "20": "Ops, il foglio non è stato riconosciuto...",
    },
      text: {
        "0": 'Per favore, assicurati che'
      },
      list: {
        "0": "siano visibili tutti e quattro gli angoli",
        "1": "la foto sia ben illuminata",
        "2": "lo sfondo sia distinguibile dal foglio"
      },
      button: 'Compreso'
    },
    /* ?-Schermata popup Fotocamera */
    modal: {
      buttons: {
        continue: 'Continua',
        close: 'Chiudi',
      },
      buttonSecondary: {
        headline: 'Hai problemi con la misurazione?',
        text: 'Chiamaci: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**Foglio DIN A4** (nessun blocco per appunti o simile) su una superficie piana',
              icon: 'documento'
            },
            {
              text: 'Siediti sul **bordo anteriore di una sedia**',
              icon: 'seduto'
            },
            {
              text: '**Togli le calze** e arrotola i pantaloni',
              icon: 'calzino'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Posiziona il piede sul foglio',
              icon: 'piede'
            },
            {
              text: 'Tieni il telefono tra le ginocchia e puntalo sul piede',
              icon: 'telefono'
            },
            {
              text: 'Scatta la foto :-)',
              icon: 'fotocamera'
            }
          ],
        },
      ]
    },
  },
  /*Schermata di correzione*/
  review: {
    title: "Correzione",
    loadingMessage: 'Calcolo delle dimensioni del piede...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemi con la misurazione? Chiamaci!',
    alert0: 'La tua scansione non è più disponibile. Per favore, esegui una nuova scansione :-)',
    alert1: "Ops, qualcosa è andato storto. Dacci un 'altra possibilità e riprova :-)",
    /*Schermata delle istruzioni*/
    modal: {
      buttons: {
        continue: 'Continua',
        close: 'Chiudi',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'Assicurati che i **punti di misurazione siano esattamente al punto di transizione dal piede al foglio**',
              icon: 'bersaglio'
            },
            {
              text: 'Puoi semplicemente toccare e **spostare** i **punti di misurazione**',
              icon: 'tocco'
            }
          ],
        }
      ]
    },
    acceptButton: 'Fatto'
  },
  /*Pagina dei risultati*/
  result: {
    headline: 'Taglia consigliata per le scarpe',
    alert0: 'Nessuna scansione disponibile',
    alert1: 'Per favore, inserisci il tuo nome e indirizzo email',
    alert2: 'Errore durante la creazione dell\'account',
    alert3: 'Nessuna scarpa selezionata',
    for: 'per',
    length: 'Lunghezza',
    width: 'Larghezza',
    back_to_shop_button: 'Torna al negozio',
    back_to_shop_no_reg_button: "Continua a fare acquisti senza salvare l'ID",
    manage_scans_text: 'Gestisci le tue scansioni precedenti',
    manage_scans_button: 'Gestisci scansioni',
    model: 'Modello',
    brand: 'Marca',
    no_value: 'Nessuna Informazione',
    no_matching_size: 'Sembra che la scarpa non sia disponibile nella tua taglia.',
    registration: {
      id: "Salva il tuo ID mySF per la prossima volta e ricevi notifiche riguardo ai nuovi negozi partner.",
      email: 'Inserisci l\'indirizzo email',
      name: 'Crea il tuo ID personale',
      description: ' ',
      button: 'Salva ID mySF'
    }
  },
  footer: {
    legal_notice: 'Avviso Legale',
    privacy_policy: 'Informativa sulla Privacy'
  },
  faq: {
    title_tag: 'FAQ',
    headline: 'Dove stringe la scarpa?',
    description: 'Qui troverai risposte alle tue domande più comuni.',
    items: [
      {
        question: 'Che tipo di applicazione è mySHOEFITTER?',
        content: 'Scansiona il tuo piede una volta e ordina sempre la taglia perfetta per le scarpe - mySHOEFITTER è l\'applicazione perfetta per la determinazione automatizzata della taglia delle scarpe. Con la nostra applicazione, puoi trovare la taglia delle scarpe perfettamente adatta per il modello di scarpe desiderato.'
      },
      {
        question: 'Come funziona il consiglio sulla taglia delle scarpe digitale?',
        content: "Per trovare la tua taglia di scarpe perfetta, abbiamo solo bisogno di una foto del tuo piede. Utilizzando la nostra intelligenza artificiale, misuriamo il tuo piede e determiniamo la taglia di scarpe perfetta in base alle dimensioni del tuo piede e alle dimensioni interne delle scarpe corrispondenti. Le taglie delle scarpe non sono standardizzate, motivo per cui le scarpe variano sempre di dimensione. La cosa più cool è che devi fare solo una scansione una volta. Dopo di che, puoi sempre ordinare direttamente le scarpe nella giusta taglia utilizzando l'ID generato."
      },
      {
        question: 'Quanto tempo impiega la misurazione?',
        content: 'L\'intero processo richiede circa 2 minuti.'
      },
      {
        question: 'Cosa devo prestare attenzione quando misuro il mio piede?',
        content: 'La nostra IA ha bisogno di una foto del tuo piede nudo su un foglio A4 bianco. È importante che il foglio sia su una superficie piana (nessun tappeto o simile) e che tutti e quattro gli angoli siano piatti a terra (nessun foglio piegato o angoli sporgenti). Durante la misurazione, tutti e quattro gli angoli devono essere visibili. Assicurati che l\'intero piede, compreso il tallone, sia visibile. Ti consigliamo di misurare mentre sei seduto, poiché è più comodo. Metti peso sul tuo piede mentre fai la scansione, poiché i piedi sono sempre leggermente più grandi quando sopportano il peso.'
      },
      {
        question: 'Come devo tenere il mio smartphone durante la misurazione?',
        content: 'Quando sei seduto, tieni il tuo smartphone tra le ginocchia leggermente inclinato, inclinandolo verso il piede. In questo modo, insieme a tutto il piede (compreso il tallone), dovrebbero essere visibili tutti e quattro gli angoli del foglio.'
      },
      {
        question: 'Quali vantaggi ottengo da mySHOEFITTER?',
        content: 'Ordinando direttamente le scarpe nella taglia giusta, puoi evitare eventuali costi di reso. Inoltre, per ogni reso evitato, risparmi circa 30 minuti del tuo prezioso tempo se non devi riportare le scarpe all\'ufficio postale. Previeni anche emissioni di CO2 inutili (500g per ogni reso) e una grande quantità di rifiuti di imballaggio. Non da ultimo, supporti il tuo negozio preferito, perché i costi elevati dei resi danneggiano davvero i negozi.'
      },
      {
        question: 'Il mio piede è più grande del foglio, cosa posso fare?',
        content: 'Nessun problema. Il tuo piede può sporgere davanti al foglio; possiamo comunque misurare il tuo piede. Assicurati solo che il piede non si sovrapponga nella parte posteriore.'
      },
      {
        question: 'Ho due piedi di dimensioni diverse, quale dovrei misurare?',
        content: 'Per leggere differenze, puoi misurare il piede più grande. Se i tuoi piedi sono davvero molto diversi per dimensioni, misura entrambi i piedi. Per differenze significative, è meglio parlare con il tuo ortopedico.'
      },
      {
        question: 'Ho deformità ai piedi, posso comunque usare mySHOEFITTER?',
        content: 'Puoi utilizzare la nostra applicazione nonostante le deformità ai piedi. Tuttavia, raccomandiamo sempre di consultare un ortopedico per problemi gravi e indossare scarpe e/o solette speciali su misura per te.'
      },
      {
        question: 'La misurazione non funziona, cosa posso fare?',
        content: 'Nella maggior parte dei casi, il problema è dovuto al riconoscimento scorretto del foglio (non sono visibili tutti e quattro gli angoli o c\'è basso contrasto rispetto allo sfondo). È importante che il foglio sia ben illuminato e non sia in una zona buia. Assicurati che l\'intero piede sia visibile. Se non funziona ancora, non esitare a contattarci e inviarci uno screenshot o un video di registrazione dello schermo del tuo problema.'
      },
    ]
  }
}
