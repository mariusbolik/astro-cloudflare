export default {
  /* شاشة الكاميرا */
  camera: {
    description: 'هل جميع الأركان الأربعة مرئية؟',
    left_foot: 'القدم اليسرى',
    right_foot: 'القدم اليمنى',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'مشاكل مع القياس؟ اتصل بنا!',
    loadingMessage: 'تقييم الصورة',
    error: {
      title: {
        "0": "عفوًا ، لم يتم التعرف على الورقة...",
        "10": "عفوًا ، لم يتم التعرف على جميع الزوايا...",
        "11": "عفوًا ، السطح غير مثالي لتعرف الورقة...",
        "20": "عفوًا ، لم يتم التعرف على الورقة...",
    },    
      text: {
        "0": 'يرجى التأكد من أن'
      },
      list: {
        "0": "جميع الأركان الأربعة مرئية",
        "1": "الصورة مُضاءة بشكل جيد",
        "2": "الخلفية متميزة عن الورقة"
      },
      button: 'فهمت'
    },
    /* ?-شاشة منبثقة للكاميرا */
    modal: {
      buttons: {
        continue: 'متابعة',
        close: 'إغلاق',
      },
      buttonSecondary: {
        headline: 'هل لديك مشكلة في القياس؟',
        text: 'اتصل بنا: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**ورقة DIN A4** (بدون دفتر مذكرات أو مماثل) على سطح مستوٍ',
              icon: 'document'
            },
            {
              text: 'اجلس على **حافة الكرسي الأمامية**',
              icon: 'sitting'
            },
            {
              text: '**خلع جواربك** وارفع سروالك',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'ضع قدمك على الورقة',
              icon: 'foot'
            },
            {
              text: 'امسك هاتفك بين ركبتيك وصوبه نحو قدمك',
              icon: 'phone'
            },
            {
              text: 'قم بالتقاط الصورة :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /* شاشة التصحيح */
  review: {
    title: "تصحيح",
    loadingMessage: 'حساب أبعاد القدم...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: 'مشاكل مع القياس؟ اتصل بنا!',
    alert0: 'المسح الضوئي الخاص بك غير متاح بعد. من فضلك قم بإجراء مسح جديد :-)',
    alert1: 'عذرًا، حدث خطأ ما. قدم لنا فرصة أخرى وحاول مرة أخرى :-)',
    /* شاشة التعليمات */
    modal: {
      buttons: {
        continue: 'متابعة',
        close: 'إغلاق',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'هل تقع نقاط القياس **بالضبط عند التحول من القدم إلى الورقة**؟',
              icon: 'target'
            },
            {
              text: 'يمكنك لمس **نقاط القياس ببساطة** وتحريكها.',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'تم'
  },
  /* صفحة النتائج */
  result: {
    headline: 'حجم الحذاء المُوصَى به',
    alert0: 'لا يتوفر مسح ضوئي',
    alert1: 'الرجاء إدخال اسمك وعنوان البريد الإلكتروني',
    alert2: 'حدث خطأ في إنشاء الحساب',
    for: 'لصالح',
    length: 'الطول',
    width: 'العرض',
    back_to_shop_button: 'العودة إلى المتجر',
    back_to_shop_no_reg_button: "العودة إلى المتجر بدون حفظ الهوية",
    manage_scans_text: 'إدارة المسح السابقة الخاصة بك',
    manage_scans_button: 'إدارة المسح',
    model: 'النموذج',
    brand: 'العلامة التجارية',
    no_value: 'بدون معلومات',
    no_matching_size: 'يبدو أن الحذاء غير متوفر بحجمك.',
    registration: {
      id: "احفظ هويتك للمرة القادمة",
      email: 'أدخل البريد الإلكتروني',
      name: 'قم بإنشاء هويتك الخاصة',
      description: ' ',
      button: 'حفظ الإدخالات'
    }
  },
  footer: {
    legal_notice: 'إشعار قانوني',
    privacy_policy: 'سياسة الخصوصية'
  },
  faq: {
    title_tag: 'أسئلة مكررة',
    headline: 'أين يضغط الحذاء؟',
    description: "هنا ستجد إجاباتٍ شائعة على أسئلتك.",
    items: [
      {
        question: 'ما نوع التطبيق هو mySHOEFITTER؟',
        content: 'قم بمسح قدمك مرة واحدة وقم بطلب الحذاء المثالي دائمًا - mySHOEFITTER هو التطبيق المثالي لتحديد حجم الحذاء تلقائيًا. باستخدام تطبيقنا، يمكنك العثور على حجم الحذاء المناسب تمامًا للطراز الذي ترغب فيه.'
      },
      {
        question: 'كيف يعمل توجيه حجم الحذاء الرقمي؟',
        content: 'للعثور على حجم الحذاء المثالي الخاص بك، نحتاج فقط إلى صورة لقدمك. باستخدام الذكاء الاصطناعي لدينا، نقيس قدمك ونحدد حجم الحذاء المثالي بناءً على أبعاد قدمك وأبعاد الحذاء الداخلي الخاص به. حجوم الأحذية غير موحدة، وهذا هو السبب في أن الأحذية تختلف دائمًا في الحجم. أما أروع شيء في الأمر، فأنت تحتاج فقط للقيام بمسح مرة واحدة. بعد ذلك، يمكنك دائمًا طلب الأحذية مباشرةً بالحجم الصحيح باستخدام الهوية المُولدة.'
      },
      {
        question: 'كم يستغرق القياس؟',
        content: 'يستغرق العملية بالكامل حوالي 2 دقيقة.'
      },
      {
        question: 'ما الذي يجب أن أنتبه إليه عند قياس قدمي؟',
        content: 'يحتاج الذكاء الاصطناعي لدينا إلى صورة لقدمك بدون أحذية على ورقة DIN A4 بيضاء. من المهم أن تكون الورقة على سطح مستوٍ (بدون سجادة أو مماثل) وأن تكون جميع الأركان الأربعة مسطحة على الأرض (بدون تجعيد في الورقة أو أركان تبرز). خلال القياس، يجب أن تكون جميع الأركان الأربعة مرئية أيضًا. تأكد من أن قدمك بأكملها، بما في ذلك الكعب، مرئية. نوصي بإجراء القياس أثناء الجلوس، حيث أنها الطريقة الأكثر راحة. ضع وزنك على قدمك أثناء عملية المسح حيث أن قدميك دائمًا أكبر قليلاً عندما تكون محملة.'
      },
      {
        question: 'كيف يجب أن أمسك هاتفي الذكي أثناء القياس؟',
        content: 'عند الجلوس، قم بوضع هاتفك الذكي بين ركبتيك بزاوية طفيفة وميله نحو قدمك. بهذه الطريقة، إلى جانب قدمك بأكملها (بما في ذلك الكعب)، يجب أن تكون جميع أركان الورقة مرئية.'
      },
      {
        question: 'ما هي فوائدي mySHOEFITTER؟',
        content: "من خلال طلب الأحذية مباشرةً بالحجم الصحيح، يمكنك تجنب تكاليف الإرجاع المحتملة. بالإضافة إلى ذلك، لكل إرجاع يمكن تجنبه، توفر حوالي 30 دقيقة من وقتك الثمين إذا لم تكن مضطرًا لإعادة الأحذية إلى مكتب البريد. أنت أيضًا تمنع انبعاثات ثاني أكسيد الكربون الزائدة (500 جم لكل إرجاع) والكثير من الفاقد. وأخيرًا وليس آخرًا، تدعم متجرك المفضل لأن تكاليف الإرجاع العالية تؤثر حقًا على المتاجر."
      },
      {
        question: 'قدمي أكبر من الورقة، ماذا يمكنني فعله؟',
        content: "لا مشكلة. يمكن أن تبرز قدمك إلى الأمام على الورقة. يمكننا ما زلنا قياس قدمك في هذه الحالة. فقط تأكد من أن القدم لا تتداخل من الخلف."
      },
      {
        question: 'لدي قدمين بأحجام مختلفة، أي واحدة يجب أن أقيس؟',
        content: "بالنسبة للفروق البسيطة فقط، يمكنك قياس قدمك الأكبر. إذا كانت قدميك مختلفة بشكل كبير فعليًا، قم بقياس كلا القدمين. بالنسبة للفروق الكبيرة، من الأفضل التحدث مع طبيب العظام الخاص بك."
      },
      {
        question: 'لدي تشوهات في القدم، هل يمكنني استخدام mySHOEFITTER على الرغم من ذلك؟',
        content: 'يمكنك استخدام تطبيقنا على الرغم من وجود تشوهات في القدم. ومع ذلك، نوصي عمومًا برؤية طبيب العظام للقضايا الجادة وارتداء أحذية و/أو نعال خاصة مصممة خصيصًا لك.'
      },
      {
        question: 'القياس لا يعمل، ماذا يمكنني فعله؟',
        content: "في معظم الحالات، يرجع السبب في ذلك إلى عدم التعرف الصحيح على الورقة (عدم رؤية جميع الأركان أربعة أركان أو تباين منخفض مع الخلفية). من المهم أن تكون الورقة مُضاءة جيدًا ولا تكون في الظلام. تأكد من رؤية قدمك بأكملها. إذا لم يعمل الأمر بعد ذلك، فلا تتردد في الاتصال بنا وإرسال لنا لقطة شاشة أو فيديو تسجيل شاشة لمشكلتك."
      },
    ]
  }
}