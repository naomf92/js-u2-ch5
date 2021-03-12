import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = ja;
  }

  /*現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。*/
  setup() {
    // = は「代入」という意味なので「等しい」と言う意味の演算子を使うと良いですね
    if (this.currentLocale = ja) {
      polyglot.extend({
        'hello': 'こんにちは、世界'
      });
    } else {// 今回は日本語と英語のみなのでelseでもOKですが、他の言語が増えた時に対処しやすくするにはどうしたら良いでしょうか？
      polyglot.extend({
        'hello': 'Hello World'
      });
    }
  }

  /*ボタンにセットされたdata-localeを元に現在のlocaleを変更します。*/
  updateLocale(e) {
  }

  /*mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。*/
  showMessage() {
    const main = document.getElementById('main');
    main.innerHTML = polyglot.t('hello');
  }

}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}