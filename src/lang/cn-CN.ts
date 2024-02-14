export default {
  /*相机屏幕*/
  camera: {
    description: '四个角都可见吗？',
    left_foot: '左脚',
    right_foot: '右脚',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '测量有问题？请致电我们！',
    loadingMessage: '正在评估图像',
    error: {
      title: {
        "0": "哎呀，未识别到纸张...",
        "10": "哎呀，未识别到所有的角落...",
        "11": "哎呀，这个表面不适合纸张识别...",
        "20": "哎呀，未识别到纸张...",
    },
      text: {
        "0": '请确保'
      },
      list: {
        "0": "四个角都可见",
        "1": "照片光线充足",
        "2": "背景与纸张有区分度"
      },
      button: '知道了'
    },
    /* ?-弹出屏幕相机 */
    modal: {
      buttons: {
        continue: '继续',
        close: '关闭',
      },
      buttonSecondary: {
        headline: '测量有问题吗？',
        text: '请致电我们：+49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '将**DIN A4纸**（不是记事本或类似物品）放在平坦表面上',
              icon: 'document'
            },
            {
              text: '坐在椅子的**前沿**',
              icon: 'sitting'
            },
            {
              text: '脱掉袜子，卷起裤腿',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: '将脚放在纸上',
              icon: 'foot'
            },
            {
              text: '将手机夹在膝盖之间，瞄准脚',
              icon: 'phone'
            },
            {
              text: '拍照 :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*校正屏幕*/
  review: {
    title: "校正",
    loadingMessage: '计算脚尺寸...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '测量有问题？请致电我们！',
    alert0: '您的扫描已不再可用。请重新扫描 :-)',
    alert1: '哎呀，出了点问题。再给我们一次机会，再试一次 :-)',
    /*说明屏幕*/
    modal: {
      buttons: {
        continue: '继续',
        close: '关闭',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: '测量点是否精确位于从脚到纸的过渡处？',
              icon: 'target'
            },
            {
              text: '您可以轻松点击并移动测量点。',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: '完成'
  },
  /*结果页面*/
  result: {
    headline: '推荐的鞋码',
    alert0: '无可用扫描',
    alert1: '请输入您的姓名和电子邮件地址',
    alert2: '创建帐户时出错',
    for: '对于',
    length: '长度',
    width: '宽度',
    back_to_shop_button: '返回商店',
    back_to_shop_no_reg_button: "不保存ID返回商店",
    manage_scans_text: '管理以前的扫描',
    manage_scans_button: '管理扫描',
    model: '型号',
    brand: '品牌',
    no_value: '没有信息',
    no_matching_size: '似乎没有您尺码的鞋子。',
    registration: {
      id: '保存ID以备下次使用',
      email: '输入电子邮件',
      name: '创建您自己的ID',
      description: ' ',
      button: '保存条目'
    }
  },
  footer: {
    legal_notice: '法律声明',
    privacy_policy: '隐私政策'
  },
  faq: {
    title_tag: '常见问题解答',
    headline: '鞋子夹哪里了？',
    description: '在这里，您将找到对常见问题的答案。',
    items: [
      {
        question: 'mySHOEFITTER是什么样的应用程序？',
        content: '只需扫描一次您的脚，就可以随时随地订购合适的鞋码 - mySHOEFITTER是自动鞋码确定的理想应用程序。通过我们的应用程序，您可以找到适合您所需鞋型的完美鞋码。'
      },
      {
        question: '数字鞋码建议是如何工作的？',
        content: '要找到您的完美鞋码，我们只需一张您脚的照片。使用我们的人工智能，我们测量您的脚并根据您脚的尺寸和相应的内部鞋尺寸确定完美的鞋码。鞋码没有标准化，这就是为什么鞋子的尺寸总是不同的原因。最酷的是，您只需要扫描一次。之后，您可以始终使用生成的ID直接订购合适尺码的鞋子。'
      },
      {
        question: '测量需要多长时间？',
        content: '整个过程大约需要2分钟。'
      },
      {
        question: '在测量脚的时候需要注意什么？',
        content: '我们的人工智能需要一张您光脚放在白色DIN A4纸上的照片。重要的是，纸张在平直的表面上（没有地毯或类似物品），所有四个角都平放在地上（没有折叠的纸张或突出的角落）。在测量期间，所有四个角也必须可见。确保您整个脚，包括脚后跟，都可见。我们建议坐着测量，因为这样最舒服。在扫描时施加压力，因为站立时您的脚总是稍微大一点。'
      },
      {
        question: '在测量时我应该如何拿着手机？',
        content: '坐下时，将手机夹在膝盖之间，稍微倾斜，将其倾斜到脚上。这样，除了您整个脚（包括脚后跟）外，纸张的四个角也应可见。'
      },
      {
        question: 'mySHOEFITTER能带来哪些好处？',
        content: '通过直接订购合适尺码的鞋子，您可以避免可能的退货费用。此外，每次避免退货，您都可以节省约30分钟的宝贵时间，无需将鞋子送回邮局。您还可以防止不必要的二氧化碳排放（每次退货500克）和大量的包装垃圾。最后但并非最不重要的是，您支持您喜爱的商店，因为高昂的退货费用确实会伤害商店。'
      },
      {
        question: '我的脚比纸大，我该怎么办？',
        content: '没有问题。您的脚可以突出在纸的前端，我们仍然可以测量您的脚。只需确保脚不从后面突出。'
      },
      {
        question: '我的两只脚大小不同，应该测量哪只脚？',
        content: '对于只有轻微差异的情况，您可以测量较大的脚。如果您的两只脚确实非常不同，测量两只脚。对于较大的差异，最好与您的骨科医生讨论。'
      },
      {
        question: '我有脚部畸形，我仍然可以使用mySHOEFITTER吗？',
        content: '尽管存在脚部畸形，您仍然可以使用我们的应用程序。然而，我们通常建议对于严重问题咨询骨科医生，并佩戴适合您的鞋子和/或特制鞋垫。'
      },
      {
        question: '测量不起作用，我可以怎么办？',
        content: '在几乎所有情况下，原因是纸张未正确识别（不是所有角都可见或与背景对比度低）。重要的是，纸张要充分照亮，不要在黑暗中。确保您的整个脚都可见。如果仍然无法解决问题，请随时与我们联系，并向我们发送问题的屏幕截图或屏幕录制视频。'
      },
    ]
  }
}
