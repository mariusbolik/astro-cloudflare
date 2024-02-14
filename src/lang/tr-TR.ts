export default {
  /*Kamera Ekranı*/
  camera: {
    description: 'Tüm 4 köşe görünüyor mu?',
    left_foot: 'Sol Ayak',
    right_foot: 'Sağ Ayak',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Ölçümle ilgili sorun mu yaşıyorsunuz? Bizi arayın!',
    loadingMessage: 'Görüntü değerlendiriliyor',
    error: {
      title: {
        "0": "Hata, sayfa tanınmadı...",
        "10": "Hata, tüm köşeler tanınmadı...",
        "11": "Hata, yüzey sayfa tanıma için uygun değil...",
        "20": "Hata, sayfa tanınmadı...",
    },
      text: {
        '0': 'Lütfen şunlara dikkat edin'
      },
      list: {
        '0': 'tüm dört köşenin görünür olduğundan emin olun',
        '1': 'fotoğrafın iyi aydınlatıldığından emin olun',
        '2': 'arka planın kağıttan ayırt edilebilir olduğundan emin olun'
      },
      button: 'Anladım'
    },
    /* ?-Popup-Ekran Kamera */
    modal: {
      buttons: {
        continue: 'Devam Et',
        close: 'Kapat',
      },
      buttonSecondary: {
        headline: 'Ölçümde sorun mu yaşıyorsunuz?',
        text: 'Bizi arayın: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**DIN A4 kağıdı** (defter veya benzeri değil) düz bir yüzeyde',
              icon: 'document'
            },
            {
              text: '**Bir sandalyenin ön kenarında** oturun',
              icon: 'sitting'
            },
            {
              text: '**Çoraplarınızı çıkarın** ve pantolon paçalarınızı kıvırın',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Ayağınızı kağıdın üzerine koyun',
              icon: 'foot'
            },
            {
              text: 'Telefonunuzu dizleriniz arasında tutun ve ayağa yönlendirin',
              icon: 'phone'
            },
            {
              text: 'Fotoğrafı çekin :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*Düzeltme Ekranı*/
  review: {
    title: 'Düzeltme',
    loadingMessage: 'Ayak ölçüleri hesaplanıyor...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'Ölçümle ilgili sorun mu yaşıyorsunuz? Bizi arayın!',
    alert0: 'Ölçümünüz artık kullanılabilir değil. Lütfen yeni bir ölçüm yapın :-)',
    alert1: 'Üzgünüz, bir şeyler ters gitti. Bize başka bir şans verin ve tekrar deneyin :-)',
    /*Talimatlar Ekranı*/
    modal: {
      buttons: {
        continue: 'Devam Et',
        close: 'Kapat',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: '**Ölçüm noktalarının ayak ile kağıt arasındaki geçişte tam olarak bulunduğundan** emin olun',
              icon: 'target'
            },
            {
              text: '**Ölçüm noktalarını dokunarak ve sürükleyerek** kolayca hareket ettirebilirsiniz',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'Tamam'
  },
  /*Sonuç Sayfası*/
  result: {
    headline: 'Tavsiye Edilen Ayakkabı Numarası',
    alert0: 'Kullanılabilir ölçüm yok',
    alert1: 'Lütfen adınızı ve e-posta adresinizi girin',
    alert2: 'Hesap oluşturma hatası',
    for: 'için',
    length: 'Uzunluk',
    width: 'Genişlik',
    back_to_shop_button: 'Mağazaya Geri Dön',
    back_to_shop_no_reg_button: "Kimliği kaydetmeden alışverişe devam et",
    manage_scans_text: 'Önceki ölçümlerinizi yönetin',
    manage_scans_button: 'Ölçümleri Yönet',
    model: 'Model',
    brand: 'Marka',
    no_value: 'Bilgi Yok',
    no_matching_size: 'Ayakkabı, görünüşe göre sizin için uygun değil gibi görünüyor.',
    registration: {
      id: 'Gelecek sefer için mySF Kimliğinizi kaydedin ve yeni ortak mağazalar hakkında bildirimler alın.',
      email: 'E-posta Adresi Girin',
      name: 'Kendi mySF Kimliğinizi Oluşturun',
      description: ' ',
      button: 'mySF Kimliğimi Kaydet'
    }
  },
  footer: {
    legal_notice: 'Hukuki Bildirim',
    privacy_policy: 'Gizlilik Politikası'
  },
  faq: {
    title_tag: 'SSS',
    headline: 'Ayakkabı nerede sıkıyor?',
    description: 'Sıkça sorulan sorularınıza verilen yaygın cevapları burada bulacaksınız.',
    items: [
      {
        question: 'mySHOEFITTER nedir?',
        content: 'Bir kere ayak ölçüsünü alın ve her zaman mükemmel ayakkabı numarasını sipariş edin - mySHOEFITTER, otomatik ayakkabı numarası belirleme için mükemmel bir uygulamadır. Uygulamamızı kullanarak istediğiniz ayakkabı modeliniz için mükemmel uygun ayakkabı numarasını bulabilirsiniz.'
      },
      {
        question: 'Dijital ayakkabı numarası danışmanlığı nasıl çalışır?',
        content: 'Mükemmel ayakkabı numaranızı bulmak için sadece ayak fotoğrafınıza ihtiyacımız var. Yapay zeka kullanarak ayak ölçüsünü alır ve ayak ölçüleriniz ve ilgili iç ayakkabı ölçülerine dayalı olarak mükemmel ayakkabı numarasını belirleriz. Ayakkabı numaraları standartlaştırılmadığı için ayakkabılar her zaman farklılık gösterir. En güzel şey, sadece bir kez tarama yapmanız gerektiğidir. Bundan sonra her zaman doğru numarada ayakkabıları doğrudan oluşturulan kimlik kullanarak sipariş edebilirsiniz.'
      },
      {
        question: 'Ölçüm ne kadar sürer?',
        content: 'Tüm süreç yaklaşık 2 dakika sürer.'
      },
      {
        question: 'Ayak ölçümü yaparken nelere dikkat etmeliyim?',
        content: 'Yapay zekamızın baret ayak fotoğrafına ihtiyacı vardır. Önemli olan, kağıdın düz bir yüzeyde (halı veya benzeri bir şey değil) olduğu ve dört köşesinin zeminde düz olduğu (katlanmış kağıt veya taşan köşeler olmadığı) bir şeydir. Ölçüm sırasında dört köşenin de görünür olması gerekmektedir. Tüm ayağınızı, topuğunuzu da içerecek şekilde görün. Ölçüm yaparken rahat olduğunuz bir pozisyonda ölçüm yapmanızı öneririz. Ayaklarınızı ağırlık taşıdığınızda ayaklarınız her zaman biraz daha büyük olur, bu nedenle ağırlık vermek önemlidir.'
      },
      {
        question: 'Ölçüm sırasında cep telefonumu nasıl tutmalıyım?',
        content: 'Otururken cep telefonunuzu dizleriniz arasında hafif bir açıyla tutun ve ayağınıza doğru eğin. Bu şekilde ayakla birlikte (topuk dahil) kağıdın dört köşesi de görünmelidir.'
      },
      {
        question: "mySHOEFITTER'dan hangi faydalarım var?",
        content: 'Ayakkabılarınızı doğrudan doğruya doğru numarada sipariş ederek olası iade maliyetlerini önleyebilirsiniz. Ayrıca her engellenen iade için postaneye geri götürmek zorunda kalmamanız durumunda değerli zamanınızdan yaklaşık 30 dakika tasarruf edersiniz. Ayrıca gereksiz CO2 emisyonlarını (her iade için 500g) ve çok sayıda ambalaj atığını önlersiniz. Son olarak, favori mağazanızı desteklersiniz çünkü yüksek iade maliyetleri gerçekten mağazaları etkiler.'
      },
      {
        question: 'Ayaklarım kağıttan büyük, ne yapmalıyım?',
        content: 'Sorun değil. Ayak ön kenarının önünde taşması sorun değil; yine de ayak ölçümünüzü alabiliriz. Tek yapmanız gereken, ayakların arkasında örtüşmemesini sağlamaktır.'
      },
      {
        question: 'Farklı büyüklükte iki farklı ayak tipim var, hangisini ölçmeliyim?',
        content: 'Küçük farklar için daha büyük ayağınızı ölçebilirsiniz. Ayaklarınız gerçekten çok farklı boyutlarda ise her iki ayağınızı da ölçmek en iyisi olacaktır. Büyük farklar için en iyisi bir ortopediste danışmaktır.'
      },
      {
        question: "Ayak deformitelerim var, yine de mySHOEFITTER'ı kullanabilir miyim?",
        content: 'Ciddi deformiteler olsa bile uygulamamızı kullanabilirsiniz. Bununla birlikte, ciddi sorunlar için genellikle bir ortopediste görünmenizi ve size özel ayakkabılar ve/veya tabanlıklar giymenizi öneririz.'
      },
      {
        question: 'Ölçüm çalışmıyor, ne yapabilirim?',
        content: 'Neredeyse her durumda, sorun kağıdın doğru şekilde tanımlanmamasından kaynaklanır (tüm köşeler görünmüyor veya arka planla düşük kontrast). Kağıdın iyi aydınlatıldığından ve karanlık olmadığından emin olmak önemlidir. Tüm ayaklığınızın görünür olduğundan emin olun. Hala çalışmıyorsa, lütfen bize başvurun ve sorununuzun ekran görüntüsünü veya ekran kaydı videosunu göndermekten çekinmeyin.'
      },
    ]
  }
}
