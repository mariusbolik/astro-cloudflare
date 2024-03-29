export default {
  /*カメラ画面*/
  camera: {
    description: '4つの角がすべて見えていますか？',
    left_foot: '左足',
    right_foot: '右足',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '測定に問題がありますか？お電話ください！',
    loadingMessage: '画像を評価中',
    error: {
      title: {
        "0": "おっと、シートが認識されませんでした...",
        "10": "おっと、すべての角が認識されませんでした...",
        "11": "おっと、シートの認識には表面が最適ではありません...",
        "20": "おっと、シートが認識されませんでした...",
    },
      text: {
        "0": '次のことを確認してください'
      },
      list: {
        "0": "すべての4つの角が見えていること",
        "1": "写真が明るくて",
        "2": "背景がシートと区別できること"
      },
      button: '了解しました'
    },
    /* ?-ポップアップ画面 カメラ */
    modal: {
      buttons: {
        continue: '続ける',
        close: '閉じる',
      },
      buttonSecondary: {
        headline: '測定に問題がありますか？',
        text: 'お電話ください：+49 176 14831775',
        link: 'tel:+4917614831775'
      },
      slides: [
        {
          video: '/videos/camera-intro-1-en.mp4',
          items: [
            {
              text: '**DIN A4のシート**（メモ帳やそれに類似するものではない）を平らな表面に置いてください',
              icon: 'document'
            },
            {
              text: '**椅子の前縁に座って**ください',
              icon: 'sitting'
            },
            {
              text: '**靴下を脱いで**ズボンをまくってください',
              icon: 'sock'
            }
          ],
        },
        {
          video: '/videos/camera-intro-2-en.mp4',
          items: [
            {
              text: '足をシートに乗せてください',
              icon: 'foot'
            },
            {
              text: '膝の間にスマートフォンを持ち、足に向けてください',
              icon: 'phone'
            },
            {
              text: '写真を撮ってください :-)',
              icon: 'camera'
            }
          ],
        },
      ]
    },
  },
  /*修正画面*/
  review: {
    title: "修正",
    loadingMessage: '足の寸法を計算中...',
    serviceHotline: '+49 176 14831775',
    serviceDescription: '測定に問題がありますか？お電話ください！',
    alert0: 'スキャンが利用できなくなりました。新しいスキャンを取ってください :-)',
    alert1: 'おっと、何か問題が発生しました。もう一度試してみてください :-)',
    /*インストラクション画面*/
    modal: {
      buttons: {
        continue: '続ける',
        close: '閉じる',
      },
      slides: [
        {
          video: '/videos/review-intro-en.mp4',
          items: [
            {
              text: '**足からシートへの移行点が正確であることを確認してください**',
              icon: 'target'
            },
            {
              text: '**測定ポイント**を簡単に**タップして移動**できます',
              icon: 'touch'
            }
          ],
        }
      ]
    },
    acceptButton: '完了'
  },
  /*結果ページ*/
  result: {
    headline: 'おすすめの靴のサイズ',
    alert0: 'スキャンがありません',
    alert1: 'お名前とメールアドレスを入力してください',
    alert2: 'アカウントの作成中にエラーが発生しました',
    alert3: '靴が選択されていません',
    for: '対して',
    length: '長さ',
    width: '幅',
    back_to_shop_button: 'ショップに戻る',
    back_to_shop_no_reg_button: "IDを保存せずにショップに戻る",
    manage_scans_text: '以前のスキャンを管理する',
    manage_scans_button: 'スキャンを管理',
    model: 'モデル',
    brand: 'ブランド',
    no_value: '情報なし',
    no_matching_size: '靴はあなたのサイズで利用できないようです。',
    registration: {
      id: "次回の利用のためにmySF IDを保存し、新しいパートナーショップに関する通知を受け取ります。",
      email: 'メールアドレスを入力',
      name: '独自のIDを作成',
      description: ' ',
      button: 'mySF IDを保存'
    }
  },
  footer: {
    legal_notice: '法的通知',
    privacy_policy: 'プライバシーポリシー'
  },
  faq: {
    title_tag: 'FAQ',
    headline: '靴がどこできついですか？',
    description: 'よくある質問への一般的な回答がこちらにあります。',
    items: [
      {
        question: 'mySHOEFITTERはどのようなアプリケーションですか？',
        content: '一度足をスキャンし、常に完璧な靴のサイズを注文できるようになります - mySHOEFITTERは自動靴サイズ決定のための完璧なアプリケーションです。当社のアプリケーションを使用すると、希望の靴モデルに対して完璧に合った靴のサイズを見つけることができます。'
      },
      {
        question: 'デジタル靴サイズアドバイスはどのように機能しますか？',
        content: '完璧な靴のサイズを見つけるために、あなたの足の写真が必要です。人工知能を使用して、あなたの足の寸法と該当する靴の内部寸法に基づいて完璧な靴のサイズを決定します。靴のサイズは標準化されていないため、靴のサイズは常に異なります。最もクールなことは、一度だけスキャンを行う必要があることです。それ以降は、生成されたIDを使用して常に正しいサイズの靴を直接注文できます。'
      },
      {
        question: '測定にかかる時間はどのくらいですか？',
        content: '全プロセスに約2分かかります。'
      },
      {
        question: '足を測定する際に注意すべきことは何ですか？',
        content: '当社のAIは、裸足の足の写真が必要です。白いA4用紙の上に足全体が見えるように配置されていることが重要です（カーペットなどの斜めな表面ではなく、4つの角がすべて地面に平らになっていること、折りたたまれた用紙や突き出た角がないこと）。測定中、4つの角すべてが見える必要があります。かかとを含む足全体が見えるようにしてください。最も快適なのは座って測定することなので、座って測定することをお勧めします。足に重みをかけてスキャンを行ってください。足は常に重みを支えているときにわずかに大きくなります。'
      },
      {
        question: '測定中にスマートフォンをどのように持つべきですか？',
        content: '座っているときに、スマートフォンをひざの間に持ち、足に向かって傾けてください。このようにして、足全体（かかとを含む）および用紙の4つの角がすべて見えるはずです。'
      },
      {
        question: 'mySHOEFITTERからどのような利益を得られますか？',
        content: '正しいサイズで靴を直接注文することで、返品にかかる可能性のあるコストを回避できます。さらに、回避された返品ごとに、郵便局に靴を持ち帰る手間を約30分節約できます。また、不必要なCO2排出（1回の返品ごとに約500g）や多くの包装廃棄物を防ぎます。そして、高額な返品コストは実際には店舗に大きな打撃を与えるため、お気に入りの店舗をサポートできます。'
      },
      {
        question: '私の足は用紙よりも大きいです、どうすればいいですか？',
        content: '問題ありません。足が用紙の前に出ていても、私たちはあなたの足を測定できます。ただし、足が後ろで重ならないようにしてください。'
      },
      {
        question: '私は2つの異なるサイズの足を持っています、どちらを測定すべきですか？',
        content: 'わずかな違いの場合、大きな足を測定できます。足のサイズに本当に大きな違いがある場合は、両方の足を測定することをお勧めします。大きな違いがある場合は、整形外科医と相談することが最善です。'
      },
      {
        question: '足の形が異常です、mySHOEFITTERを使用できますか？',
        content: '足の異常があっても当社のアプリケーションを使用できます。ただし、重篤な問題の場合は通常、整形外科医の診察をお勧めし、あなたに合った靴や特別な中敷を使用することをお勧めします。'
      },
      {
        question: '測定が機能しない場合、どうすればいいですか？',
        content: 'ほとんどの場合、シートが正しく認識されていないためです（すべての角が見えていないか、背景とのコントラストが低いか）。シートが十分に照明され、暗い場所にないことが重要です。足全体が見えるようにしてください。それでも機能しない場合は、お気軽にお問い合わせいただき、問題のスクリーンショットまたはスクリーンレコーディングビデオをお送りいただければと思います。'
      },
    ]
  }
}
