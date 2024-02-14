export default {
  /*Ekran kamery*/
  camera: {
    description: 'Widoczne wszystkie 4 rogi?',
    left_foot: 'Lewe stopa',
    right_foot: 'Prawa stopa',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemy z pomiarami? Zadzwoń do nas!',
    loadingMessage: 'Ocena obrazu',
    error: {
      title: {
        "0": "Ups, arkusz nie został rozpoznany...",
        "10": "Ups, nie wszystkie rogi zostały rozpoznane...",
        "11": "Ups, powierzchnia nie jest optymalna do rozpoznawania arkuszy...",
        "20": "Ups, arkusz nie został rozpoznany...",
    },
      text: {
        '0': 'Upewnij się, że'
      },
      list: {
        '0': 'wszystkie cztery rogi są widoczne',
        '1': 'zdjęcie jest dobrze oświetlone',
        '2': 'tło różni się od arkusza'
      },
      button: 'Zrozumiane'
    },
    /*Ekran Popup kamery*/
    modal: {
      buttons: {
        continue: 'Kontynuuj',
        close: 'Zamknij',
      },
      buttonSecondary: {
        headline: 'Masz problem z pomiarem?',
        text: 'Zadzwoń do nas: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**Arkusz DIN A4** (bez notatnika ani czegoś podobnego) na płaskiej powierzchni',
              icon: 'document'
            },
            {
              text: 'Usiądź na **przednim brzegu krzesła**',
              icon: 'sitting'
            },
            {
              text: '**Zdejmij skarpetki** i podwij spodnie',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Umieść stopę na arkuszu',
              icon: 'foot'
            },
            {
              text: 'Trzymaj telefon między kolanami i skieruj go na stopę',
              icon: 'phone'
            },
            {
              text: 'Zrób zdjęcie :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*Ekran korekty*/
  review: {
    title: 'Korekta',
    loadingMessage: 'Obliczanie wymiarów stopy...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Problemy z pomiarami? Zadzwoń do nas!',
    alert0: 'Twój skan nie jest już dostępny. Zrób nowy skan :-)',
    alert1: 'Ups, coś poszło nie tak. Daj nam jeszcze jedną szansę i spróbuj ponownie :-)',
    /*Ekran instrukcji*/
    modal: {
      buttons: {
        continue: 'Kontynuuj',
        close: 'Zamknij',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'Upewnij się, że **punkty pomiarowe są dokładnie na przejściu od stopy do arkusza**',
              icon: 'target'
            },
            {
              text: 'Możesz po prostu **kliknąć i przesunąć** **punkty pomiarowe**',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'Gotowe'
  },
  /*Strona wyników*/
  result: {
    headline: 'Zalecany rozmiar obuwia',
    alert0: 'Brak dostępnego skanu',
    alert1: 'Proszę podać swoje imię i adres e-mail',
    alert2: 'Błąd podczas tworzenia konta',
    for: 'dla',
    length: 'Długość',
    width: 'Szerokość',
    back_to_shop_button: 'Powrót do sklepu',
    back_to_shop_no_reg_button: "Kontynuuj zakupy bez zapisywania ID",
    manage_scans_text: 'Zarządzaj swoimi poprzednimi skanami',
    manage_scans_button: 'Zarządzaj skanami',
    model: 'Model',
    brand: 'Marka',
    no_value: 'Brak informacji',
    no_matching_size: 'Wygląda na to, że obuwie nie jest dostępne w Twoim rozmiarze.',
    registration: {
      id: 'Zapisz swoje ID mySF na przyszłość i otrzymuj powiadomienia o nowych sklepach partnerskich.',
      email: 'Wprowadź adres e-mail',
      name: 'Stwórz swoje własne ID',
      description: ' ',
      button: 'Zapisz moje ID mySF'
    }
  },
  footer: {
    legal_notice: 'Informacje prawne',
    privacy_policy: 'Polityka prywatności'
  },
  faq: {
    title_tag: 'FAQ',
    headline: 'Gdzie uciska but?',
    description: 'Tutaj znajdziesz odpowiedzi na często zadawane pytania.',
    items: [
      {
        question: 'Jaki to rodzaj aplikacji mySHOEFITTER?',
        content: 'Skanuj swoją stopę raz, a zawsze zamawiaj idealny rozmiar obuwia - mySHOEFITTER to idealna aplikacja do automatycznego określania rozmiaru obuwia. Dzięki naszej aplikacji możesz znaleźć idealnie dopasowany rozmiar obuwia dla wybranego modelu obuwia.'
      },
      {
        question: 'Jak działa cyfrowa porada dotycząca rozmiaru obuwia?',
        content: 'Aby znaleźć swój idealny rozmiar obuwia, potrzebujemy tylko zdjęcia Twojej stopy. Za pomocą naszej sztucznej inteligencji mierzymy Twoją stopę i określamy idealny rozmiar obuwia na podstawie jej wymiarów i odpowiednich wymiarów wnętrza obuwia. Rozmiary obuwia nie są standaryzowane, dlatego rozmiary butów zawsze się różnią. Najfajniejsze jest to, że musisz zrobić tylko jeden skan. Po tym możesz zawsze zamawiać buty w odpowiednim rozmiarze, korzystając z wygenerowanego identyfikatora.'
      },
      {
        question: 'Jak długo trwa pomiar?',
        content: 'Cały proces zajmuje około 2 minut.'
      },
      {
        question: 'Na co zwracać uwagę podczas pomiaru stopy?',
        content: 'Nasza sztuczna inteligencja potrzebuje zdjęcia Twojej gołej stopy na białym arkuszu DIN A4. Ważne jest, aby arkusz znajdował się na płaskiej powierzchni (bez dywanu ani czegoś podobnego) i wszystkie cztery rogi były płaskie na ziemi (bez zagięć arkusza ani wystających rogów). Podczas pomiaru wszystkie cztery rogi muszą być widoczne. Upewnij się, że widoczna jest cała stopa, włączając w to piętę. Zalecamy mierzenie w pozycji siedzącej, ponieważ jest najwygodniejsza. Staw nacisk na stopę podczas skanowania, ponieważ stopy zawsze są nieco większe pod obciążeniem.'
      },
      {
        question: 'Jak trzymać smartfona podczas pomiaru?',
        content: 'Siedząc, trzymaj smartfona między kolanami pod lekkim kątem, nachylając go w kierunku stopy. W ten sposób, razem z całą stopą (włącznie z piętą), wszystkie cztery rogi arkusza powinny być widoczne.'
      },
      {
        question: 'Jakie są korzyści z korzystania z mySHOEFITTER?',
        content: 'Zamawiając buty bezpośrednio w odpowiednim rozmiarze, możesz uniknąć ewentualnych kosztów zwrotu. Dodatkowo, za każdy uniknięty zwrot oszczędzasz około 30 minut swojego cennego czasu, jeśli nie musisz oddać butów na pocztę. Ponadto zapobiegasz niepotrzebnym emisjom CO2 (500 g na każdy zwrot) i dużej ilości odpadów opakowaniowych. I na koniec, wspierasz swój ulubiony sklep, ponieważ wysokie koszty zwrotów naprawdę zaszkodzą sklepom.'
      },
      {
        question: 'Moja stopa jest większa od arkusza, co mogę zrobić?',
        content: 'Nie ma problemu. Twoja stopa może wystawać poza przód arkusza; nadal możemy zmierzyć Twoją stopę. Upewnij się jednak, że stopa nie zachodzi na tył.'
      },
      {
        question: 'Mam dwie różne wielkości stóp, którą mam zmierzyć?',
        content: 'Dla niewielkich różnic możesz zmierzyć większą stopę. Jeśli Twoje stopy są naprawdę bardzo różnej wielkości, zmierz obie stopy. W przypadku znacznych różnic najlepiej porozmawiać z ortopedą.'
      },
      {
        question: 'Mam zniekształcenia stopy, czy i tak mogę korzystać z mySHOEFITTER?',
        content: 'Możesz korzystać z naszej aplikacji pomimo zniekształceń stopy. Jednak ogólnie zalecamy skonsultowanie się z ortopedą w przypadku poważnych problemów i noszenie butów i/lub specjalnych wkładek dostosowanych do Twoich potrzeb.'
      },
      {
        question: 'Pomiar nie działa, co mogę zrobić?',
        content: 'W prawie wszystkich przypadkach wynika to z nierozpoznania arkusza (nie wszystkie rogi są widoczne lub kontrast z tłem jest niski). Ważne jest, aby arkusz był dobrze oświetlony i nie był w ciemności. Upewnij się, że widoczna jest cała stopa. Jeśli nadal nie działa, skontaktuj się z nami i prześlij nam zrzut ekranu lub nagranie wideo z problemem.'
      },
    ]
  }
}
