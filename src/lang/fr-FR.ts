export default {
  /* Écran de la caméra */
  camera: {
    description: "Les 4 coins sont-ils visibles ?",
    left_foot: "Pied gauche",
    right_foot: "Pied droit",
    serviceHotline: "+49 176 14831775",
    serviceDescription: "Problèmes avec la mesure ? Appelez-nous !",
    loadingMessage: "Évaluation de l'image",
    error: {
      title: {
        "0": "Oups, la feuille n'a pas été reconnue...",
        "10": "Oups, tous les coins n'ont pas été reconnus...",
        "11": "Oups, la surface n'est pas optimale pour la reconnaissance de feuille...",
        "20": "Oups, la feuille n'a pas été reconnue...",
    },
      text: {
        "0": "Veuillez vous assurer que"
      },
      list: {
        "0": "les quatre coins sont visibles",
        "1": "la photo est bien éclairée",
        "2": "l'arrière-plan est distinct de la feuille"
      },
      button: "Compris"
    },
    /* Fenêtre contextuelle ?-de l'écran de la caméra */
    modal: {
      buttons: {
        continue: "Continuer",
        close: "Fermer",
      },
      buttonSecondary: {
        headline: "Des problèmes avec la mesure ?",
        text: "Appelez-nous au : +49 176 14831775",
        link: "tel:+4917614831775"
      },
      slides: [
        {
          video: "/videos/camera-intro-1-en.mp4",
          items: [
            {
              text: "**Feuille DIN A4** (pas de bloc-notes ou similaire) sur une surface plane",
              icon: "document"
            },
            {
              text: "Asseyez-vous sur le **bord avant d'une chaise**",
              icon: "sitting"
            },
            {
              text: "**Retirez vos chaussettes** et remontez votre pantalon",
              icon: "sock"
            }
          ],
        },
        {
          video: "/videos/camera-intro-2-en.mp4",
          items: [
            {
              text: "Placez votre pied sur la feuille",
              icon: "foot"
            },
            {
              text: "Tenez votre téléphone entre vos genoux et visez le pied",
              icon: "phone"
            },
            {
              text: "**Les 4 coins sont-ils visibles ?** Prenez la photo :-)",
              icon: "camera"
            }
          ],
        },
      ]
    },
  },
  /* Écran de correction */
  review: {
    title: "Correction",
    loadingMessage: "Calcul des dimensions du pied...",
    serviceHotline: "+49 176 14831775",
    serviceDescription: "Problèmes avec la mesure ? Appelez-nous !",
    alert0: "Votre scan n'est plus disponible. Veuillez refaire un scan :-)",
    alert1: "Oups, quelque chose s'est mal passé. Donnez-nous une autre chance et essayez à nouveau :-)",
    /* Écran d'instructions */
    modal: {
      buttons: {
        continue: "Continuer",
        close: "Fermer",
      },
      slides: [
        {
          video: "/videos/review-intro-en.mp4",
          items: [
            {
              text: "Les **marques de mesure sont-elles exactement à la transition entre le pied et la feuille** ?",
              icon: "target"
            },
            {
              text: "Vous pouvez **toucher et déplacer facilement les marques de mesure**.",
              icon: "touch"
            }
          ],
        }
      ]
    },
    acceptButton: "Terminé"
  },
  /* Page de résultats */
  result: {
    headline: "Taille de chaussure recommandée",
    alert0: "Aucun scan disponible",
    alert1: "Veuillez entrer votre nom et votre adresse e-mail",
    alert2: "Erreur lors de la création du compte",
    for: "pour",
    length: "Longueur",
    width: "Largeur",
    back_to_shop_button: "Retour à la boutique",
    back_to_shop_no_reg_button: "Continuer les achats sans enregistrer l'ID",
    manage_scans_text: "Gérez vos scans précédents",
    manage_scans_button: "Gérer les scans",
    model: "Modèle",
    brand: "Marque",
    no_value: "Aucune information",
    no_matching_size: "Il semble que la chaussure ne soit pas disponible dans votre taille.",
    registration: {
      id: "Enregistrez votre ID pour la prochaine fois",
      email: "Saisissez votre adresse e-mail",
      name: "Créez votre propre ID",
      description: " ",
      button: "Enregistrer les données"
    }
  },
  footer: {
    legal_notice: "Mentions légales",
    privacy_policy: "Politique de confidentialité"
  },
  faq: {
    title_tag: "FAQ",
    headline: "Où la chaussure serre-t-elle ?",
    description: "Vous trouverez ici des réponses aux questions les plus fréquentes.",
    items: [
      {
        question: "Quel type d'application est mySHOEFITTER ?",
        content: "Scannez votre pied une fois et commandez toujours la taille de chaussure parfaite - mySHOEFITTER est l'application parfaite pour déterminer automatiquement la taille de chaussure. Avec notre application, vous pouvez trouver la taille de chaussure parfaitement adaptée à votre modèle de chaussure souhaité."
      },
      {
        question: "Comment fonctionne le conseil de taille de chaussure numérique ?",
        content: "Pour trouver votre taille de chaussure parfaite, nous avons seulement besoin d'une photo de votre pied. En utilisant notre intelligence artificielle, nous mesurons votre pied et déterminons la taille de chaussure parfaite en fonction de vos dimensions de pied et des dimensions intérieures du chaussure respectives. Les tailles de chaussure ne sont pas normalisées, c'est pourquoi les chaussures varient toujours en taille. Le meilleur, c'est que vous n'avez à faire qu'un seul scan. Après cela, vous pouvez toujours commander directement des chaussures à la bonne taille en utilisant l'ID généré."
      },
      {
        question: "Combien de temps dure la mesure ?",
        content: "Le processus entier prend environ 2 minutes."
      },
      {
        question: "Que faut-il prendre en compte lors de la mesure de mon pied ?",
        content: "Notre IA a besoin d'une photo de votre pied nu sur une feuille DIN A4 blanche. Il est important que la feuille soit sur une surface plane (pas de tapis ou similaire) et que les quatre coins soient à plat sur le sol (pas de feuille pliée ou de coins saillants). Pendant la mesure, les quatre coins doivent également être visibles. Assurez-vous que votre pied entier, y compris votre talon, soit visible. Nous recommandons de mesurer assis, car c'est plus confortable. Mettez du poids sur votre pied pendant la numérisation, car vos pieds sont toujours légèrement plus grands lorsqu'ils supportent du poids."
      },
      {
        question: "Comment dois-je tenir mon smartphone pendant la mesure ?",
        content: "Lorsque vous êtes assis, tenez votre smartphone entre vos genoux légèrement incliné et inclinez-le vers votre pied. De cette manière, avec votre pied entier (y compris le talon), tous les coins de la feuille devraient être visibles."
      },
      {
        question: "Quels sont les avantages de mySHOEFITTER ?",
        content: "En commandant directement vos chaussures à la bonne taille, vous pouvez éviter les frais de retour éventuels. De plus, pour chaque retour évité, vous économisez environ 30 minutes de votre temps précieux si vous n'avez pas à rapporter les chaussures au bureau de poste. Vous évitez également des émissions de CO2 inutiles (500 g par retour) et beaucoup de déchets d'emballage. Enfin, vous soutenez votre boutique préférée car les frais de retour élevés font vraiment mal aux boutiques."
      },
      {
        question: "Mon pied est plus grand que la feuille, que puis-je faire ?",
        content: "Pas de problème. Votre pied peut dépasser à l'avant de la feuille ; nous pouvons toujours mesurer votre pied. Assurez-vous simplement que le pied ne se chevauche pas à l'arrière."
      },
      {
        question: "J'ai deux pieds de tailles différentes, lequel dois-je mesurer ?",
        content: "Pour de légères différences, vous pouvez mesurer le pied le plus grand. Si vos pieds sont vraiment très différents en taille, mesurez les deux pieds. Pour des différences importantes, il est préférable de consulter votre orthopédiste."
      },
      {
        question: "J'ai des déformations aux pieds, puis-je toujours utiliser mySHOEFITTER ?",
        content: "Vous pouvez utiliser notre application malgré des déformations aux pieds. Cependant, nous recommandons généralement de consulter un orthopédiste pour des problèmes graves et de porter des chaussures et/ou des semelles spéciales adaptées à vous."
      },
      {
        question: "La mesure ne fonctionne pas, que puis-je faire ?",
        content: "Dans presque tous les cas, cela est dû au fait que la feuille n'a pas été correctement reconnue (tous les coins ne sont pas visibles ou il y a peu de contraste avec l'arrière-plan). Il est important que la feuille soit bien éclairée et non dans l'obscurité. Assurez-vous que votre pied entier soit visible. Si cela ne fonctionne toujours pas, n'hésitez pas à nous contacter et à nous envoyer une capture d'écran ou une vidéo d'enregistrement d'écran de votre problème."
      },
    ]
  }
}
