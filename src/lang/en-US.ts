export default {
  /*Camera-Screen*/
  camera: {
    description: 'All 4 corners visible?',
    left_foot: 'Left Foot',
    right_foot: 'Right Foot',
    serviceHotline:'+49 176 14831775',
    serviceDescription:'Problems with the measurement? Call us!',
    loadingMessage: 'Evaluating image',
    error: {
      title: {
        "0": "Oops, the sheet was not recognized...",
        "10": "Oops, not all corners were recognized...",
        "11": "Oops, the surface is suboptimal for sheet recognition...",
        "20": "Oops, the sheet was not recognized...",
    },
      text: {
        "0": 'Please make sure that'
      },
      list: {
        "0": "all four corners are visible - tip: hold your cell phone diagonally behind your calf ",
        "1": "the photo is well lit",
        "2": "the background is distinguishable from the sheet"
      },
      button: 'Understood'
    },
        /* ?-Popup-Screen Camera */
    modal: {
      buttons: {
        continue: 'Continue',
        close: 'Close',
      },
      buttonSecondary: {
        headline: 'Having trouble with the measurement?',
        text: 'Call us: +49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**DIN A4 sheet** (no notepad or similar) on a flat surface',
              icon: 'document'
            },
            {
              text: 'Sit at the **front edge of a chair**',
              icon: 'sitting'
            },
            {
              text: '**Take off your socks** & roll up your pants',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: 'Place your foot on the sheet',
              icon: 'foot'
            },
            {
              text: 'Hold your cell phone between your thighs at an angle behind your calf',
              icon: 'phone'
            },
            {
              text: 'Take the photo :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*Correction-Screen*/
  review: {
    title: "Correction",
    loadingMessage: 'Calculating foot dimensions...',
    serviceHotline:'+49 176 14831775',
    serviceDescription:'Problems with the measurement? Call us!',
    alert0: 'Your scan is no longer available. Please take a new scan :-)',
    alert1: 'Oops, something went wrong. Give us another chance and try again :-)',
    /*Instructions-Screen*/
    modal: {
      buttons: {
        continue: 'Continue',
        close: 'Close',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: 'Ensure the **measurement points are exactly at the transition from the foot to the sheet**',
              icon: 'target'
            },
            {
              text: 'You can simply tap and **move** the **measurement points**',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: 'Done'
  },
  /*Result-Page*/
  result: {
    headline: 'Recommended Shoe Size',
    alert0: 'No scan available',
    alert1: 'Please enter your name and email address',
    alert2: 'Error creating the account',
    alert3: 'No shoe selected',
    for: 'for',
    length: 'Length',
    width: 'Width',
    back_to_shop_button: 'Back to shop',
    back_to_shop_no_reg_button: "Continue to shop without saving ID",
    manage_scans_text: 'Manage your previous scans',
    manage_scans_button: 'Manage scans',
    model: 'Model',
    brand: 'Brand',
    no_value: 'No Info',
    no_matching_size: 'The shoe does not seem to be available in your size.',
    registration: {
      heading: 'Enter your e-mail address and save the result',
      email: 'Email address',
      email_optional: 'Email address (optional)',
      name: 'Create Your Own ID',
      description: 'So you can find the right shoe size even faster across all stores.',
      button: 'Sign up'
    }
  },
  footer: {
    legal_notice: 'Legal Notice',
    privacy_policy: 'Privacy Policy'
  },
  faq: {
    title_tag: 'FAQ',
    headline: 'Where is the shoe pinching?',
    description: "Here you'll find common answers to your questions.",
    items: [
      {
        question: 'What kind of application is mySHOEFITTER?',
        content: 'Scan your foot once and always order the perfect shoe size - mySHOEFITTER is the perfect application for automated shoe size determination. With our application, you can find the perfectly fitting shoe size for your desired shoe model.'
      },
      {
        question: 'How does digital shoe size advice work?',
        content: 'To find your perfect shoe size, we just need a photo of your foot. Using our artificial intelligence, we measure your foot and determine the perfect shoe size based on your foot dimensions and the respective inner shoe dimensions. Shoe sizes are not standardized, which is why shoes always vary in size. The coolest thing is, you only have to do a scan once. After that, you can always directly order shoes in the right size using the generated ID.'
      },
      {
        question: 'How long does the measurement take?',
        content: 'The entire process takes about 2 minutes.'
      },
      {
        question: 'What should I pay attention to when measuring my foot?',
        content: "Our AI needs a picture of your bare foot on a white A4 sheet. It's important that the sheet is on a straight surface (no carpet or similar) and all four corners are flat on the ground (no folded sheet or protruding corners). During the measurement, all four corners must also be visible. Make sure your whole foot, including your heel, is visible. We recommend measuring while sitting, as it's the most comfortable. Put weight on your foot while scanning since your feet are always slightly larger when bearing weight."
      },
      {
        question: 'How should I hold my smartphone during the measurement?',
        content: 'When sitting, hold your smartphone between your knees at a slight angle, tilting it towards your foot. This way, along with your entire foot (incl. heel), all four corners of the sheet should be visible.'
      },
      {
        question: 'What are my benefits from mySHOEFITTER?',
        content: "By ordering your shoes directly in the right size, you can avoid possible return costs. Additionally, for each prevented return, you save about 30 minutes of your precious time if you don't have to bring the shoes back to the post office. You also prevent unnecessary CO2 emissions (500g per return) and a lot of packaging waste. Last but not least, you support your favorite shop because high return costs really hurt the shops."
      },
      {
        question: 'My foot is larger than the sheet, what can I do?',
        content: "No problem. Your foot can protrude over the front of the sheet; we can still measure your foot. Just make sure the foot doesn't overlap at the back."
      },
      {
        question: 'I have two different sized feet, which one should I measure?',
        content: "For only slight differences, you can measure your larger foot. If your feet are really very different in size, measure both feet. For significant differences, it's best to talk to your orthopedist."
      },
      {
        question: 'I have foot deformities, can I still use mySHOEFITTER?',
        content: 'You can use our application despite foot deformities. However, we generally recommend seeing an orthopedist for serious issues and wearing shoes and/or special insoles tailored to you.'
      },
      {
        question: "The measurement doesn't work, what can I do?",
        content: "In almost all cases, it's because the sheet wasn't recognized properly (not all corners are visible or there's low contrast to the background). It's important that the sheet is well lit and not in the dark. Make sure your whole foot is visible. If it still doesn't work, please feel free to contact us and send us a screenshot or a screen recording video of your problem."
      },
    ]
  }
}
