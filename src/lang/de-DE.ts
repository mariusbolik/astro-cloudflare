export default {
  /*Kamera-Screen*/
  camera: {
    description: 'Alle 4 Ecken sichtbar?\nTipp: Handy schräg hinter deine Wade',
    left_foot: 'Linker Fuß',
    right_foot: 'Rechter Fuß',
    loadingMessage: 'Bild auswerten',
    error: {
      title: {
        "0": "Opps, das Blatt wurde nicht erkannt...",
        "10": "Opps, es wurden nicht alle Ecken erkannt...",
        "11": "Opps, der Untergrund ist suboptimal für die Blatterkennung ...",
        "20": "Opps, das Blatt wurde nicht erkannt...",
    },
      text: {
        "0": 'Bitte achte darauf, dass'
      },
      list: {
        "0": "**alle vier Ecken sichtbar** sind - *Tipp: Halte dein Handy schräg hinter deine Wade*",
        "1": "das Foto **gut ausgeleuchtet** ist",
        "2": "der **Hintergrund** sich vom Blatt abhebt"
      },
      button: 'Verstanden'
    },
    /*?-Pop-Up-Screen Kamera*/
    modal: {
      buttons: {
        continue: 'Weiter',
        close: 'Schließen',
      },
      buttonSecondary: {
        headline: 'Probleme bei der Messung?',
        text: 'Ruf uns an: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-de.mp4',
          items: [
            {
              text: '**DIN A4 Blatt** (kein Collegeblock o.Ä.) auf ebenen Untergrund',
              icon: 'document'
            },
            {
              text: 'An die **vordere Kante eines Stuhls** setzen',
              icon: 'sitting'
            },
            {
              text: '**Socken ausziehen** & Hose hochkrempeln',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-de.mp4',
          items: [
            {
              text: 'Fuß auf das Blatt stellen',
              icon: 'foot'
            },
            {
              text: 'Handy zwischen die Oberschenkel schräg hinter deine Wade halten',
              icon: 'phone'
            },
            {
              text: '**Alle 4 Ecken sichtbar?** Foto auslösen :)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*Korrektur-Screen*/
  review: {
    title: "Korrektur",
    loadingMessage: 'Berechne Fußmaße...',
    alert0: 'Dein Scan ist leider nicht mehr verfügbar. Bitte mache einen neuen Scan :-)',
    alert1: 'Hoppla, da ist etwas schief gelaufen. Gib uns noch eine Chance und versuche es erneut :-)',
    acceptButton: 'Fertig',
    /*Instructions-Screen*/
    modal: {
      buttons: {
        continue: 'Weiter',
        close: 'Schließen',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'Sitzen die **Messpunkte exakt am Übergang vom Fuß zum Blatt**?',
              icon: 'target'
            },
            {
              text: 'Du kannst die **Messpunkte einfach antippen** und verschieben.',
              icon: 'touch'
            }
          ],
        }
      ]
    },
  },
  /*Ergebnis-Seite*/
  result: {
    headline: 'Empfohlene Schuhgröße',
    alert0: 'Kein Scan vorhanden',
    alert1: 'Bitte gib eine ID und deine E-Mail-Adresse ein',
    alert2: 'Fehler beim Erstellen des Accounts',
    alert3: 'Kein Schuh ausgewählt',
    for: 'für',
    length: 'Länge',
    width: 'Breite',
    back_to_shop_button: 'Zurück zum Shop',
    back_to_shop_no_reg_button: 'Weiter ohne ID speichern',
    manage_scans_text: 'Verwalte deine bisherigen Scans',
    manage_scans_button: 'Scans verwalten',
    model: 'Modell',
    brand: 'Hersteller',
    no_value: 'Keine Info',
    no_matching_size: 'Den Schuh scheint es nicht in deiner Größe zu geben.',
    registration: {
      heading: 'Trage deine E-Mail Adresse ein und speichere das Ergebnis',
      email: 'E-Mail Adresse',
      email_optional: 'E-Mail Adresse (optional)',
      name: 'Eigene ID erstellen',
      description: 'So findest du Shop übergreifend noch schneller die richtige Schuhgröße.',
      button: 'Account anlegen'
    }
  },
  footer: {
    legal_notice: 'Impressum',
    privacy_policy: 'Datenschutz'
  },
  faq: {
    title_tag: 'FAQ',
    headline: 'Wo drückt der Schuh?',
    description: 'Hier findest du die gängigen Antworten auf deine Fragen.',
    items: [
      {
        question: 'Was für eine Anwendung ist mySHOEFITTER?',
        content: 'Einmal den Fuß scannen und immer die perfekte Schuhgröße bestellen - mySHOEFITTER ist die perfekte Anwendung zur automatisierten Schuhgrößen-Bestimmung. Mit unserer Anwendung kannst du die perfekt passende Schuhgröße für dein gewünschtes Schuh-Modell herausfinden.'
      },
      {
        question: 'Wie funktioniert die digitale Schuhgrößen-Beratung?',
        content: 'Um deine perfekte Schuhgröße herauszufinden, brauchen wir nur ein Foto von deinem Fuß. Mit Hilfe unserer künstlichen Intelligenz vermessen wir deinen Fuß und schauen anhand deiner Fußmaße und der jeweiligen inneren Schuhmaße, welcher Schuh perfekt zu dir passt. Schuhgrößen sind nämlich nicht genormt, weswegen Schuhe immer unterschiedlich ausfallen. Das Coolste ist, du musst nur ein einziges Mal einen Scan durchführen, danach kannst du mit der generierten ID immer direkt Schuhe in der richtigen Größe bestellen.'
      },
      {
        question: 'Wie lange dauert die Messung?',
        content: 'Der gesamte Prozess dauert circa 2 Minuten.'
      },
      {
        question: 'Worauf muss ich bei der Fußvermessung achten?',
        content: 'Unsere KI braucht ein Bild von deinem nackten Fuß auf einem weißen DIN A4 Blatt. Wichtig ist, dass das Blatt auf einem geraden Untergrund liegt (kein Teppich oder Ähnliches) und alle vier Ecken auf dem Boden aufliegen (kein verknicktes Blatt oder abstehende Ecken). Während der Messung müssen außerdem alle vier Ecken sichtbar sind. Achte auch darauf, dass dein ganzer Fuß inklusive deiner Ferse sichtbar ist. Wir empfehlen die Messung im Sitzen durchzuführen, das geht so am bequemsten. Belaste während du den Scan machst deinen Fuß, da deine Füße unter Belastung (im Stehen) immer etwas größer sind.'
      },
      {
        question: 'Wie muss ich mein Smartphone bei der Messung halten?',
        content: 'Wenn du sitzt, halte dein Smartphone zwischen deinen Knien leicht schräg und neige es zu deinem Fuß. So sollten neben deinem ganzen Fuß (inkl. Ferse) auch alle vier Ecken des Blattes sichtbar sein.'
      },
      {
        question: 'Was sind meine Benefits von mySHOEFITTER?',
        content: 'Indem du deine Schuhe direkt in der passenden Größe bestellen kannst, vermeidest du mögliche Retouren-Kosten. Außerdem sparst du pro vermiedener Retoure 30 Minuten deiner kostbaren Lebenszeit, wenn du die Schuhe nicht zurück zur Post bringen musst. Dazu verhinderst du mit jeder Rücksendung unnötige CO2-Emissionen (500g pro Retoure) und jede Menge Verpackungsmüll. Zu guter Letzt unterstützt du damit deinen Lieblingsshop, weil die hohen Retouren-Kosten den Shops richtig weh tun.'
      },
      {
        question: 'Mein Fuß ist größer als das Blatt, was kann ich tun?',
        content: 'Kein Problem. Dein Fuß kann gerne vorne über das Blatt herausragen, wir können deinen Fuß dann trotzdem vermessen. Achte nur darauf, dass der Fuß nicht nach hinten übersteht.'
      },
      {
        question: 'Ich hab zwei unterschiedlich große Füße, welchen soll ich vermessen?',
        content: 'Bei nur minimalen Unterschieden kannst du deinen größeren Fuß vermessen. Wenn deine Füße wirklich sehr unterschiedlich groß sind, vermiss beide Füße. Bei größeren Abweichungen solltest du am besten mit deinem Orthopäden sprechen.'
      },
      {
        question: 'Ich habe Fußfehlstellungen, kann ich mySHOEFITTER trotzdem nutzen?',
        content: 'Du kannst trotz Fuß-Fehlstellung unsere Anwendung nutzen. Wir empfehlen aber generell bei ernsteren Problemen einen Orthopäden aufzusuchen und auf dich abgestimmte Schuhe und/oder spezielle Einlagen tu tragen.'
      },
      {
        question: 'Die Messung funktioniert nicht, was kann ich tun?',
        content: 'In fast allen Fällen liegt es daran, dass das Blatt nicht richtig erkannt wurde (nicht alle Ecken sichtbar oder wenig Kontrast zum Untergrund). Wichtig ist, dass das Blatt ordentlich ausgeleuchtet und es nicht dunkel ist. Achte auch darauf, dass dein ganzer Fuß sichtbar ist. Falls es immer noch nicht klappen sollte, kannst du dich auch gerne bei uns melden, schicke uns dazu gerne auch einen Screenshot oder ein Screen-Recording-Video von deinem Problem.'
      },
    ]
  }
}
