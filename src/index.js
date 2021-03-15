import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = ja;
  }

  /*現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。*/
  setup() {
    // if (this.currentLocale === ja) {
    //   polyglot.extend({
    //     'hello': 'こんにちは、世界'
    //   });
    // } else {
    //   polyglot.extend({
    //     'hello': 'Hello World'
    //   });
    // }

    let locale = ja;
    switch (locale) {
      case ja:
        polyglot.extend({
        'hello':'こんにちは、世界'
        });
        break;
      case en:
        polyglot.extend({
        'hello':'Hello World'
        });
        break;
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