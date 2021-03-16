import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = 'ja';
  }

  /*現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。*/
  setup() {
    if (this.currentLocale === 'ja') {
      polyglot.extend({
        'hello': 'こんにちは、世界'
      });
    }
    if(this.currentLocale === 'en') {
      polyglot.extend({
        'hello': 'Hello World'
      });
    }

  }

  /*ボタンにセットされたdata-localeを元に現在のlocaleを変更します。*/
  updateLocale(e) {
    //console.log(e.target.dataset.locale);
    const locale = e.target.dataset.locale;

    // 日本語の時、英語の時と条件分岐をしなくても、「その時に選ばれたlocaledata属性の文字列取得がされた時」としておくと、どれだけ言語が増えても、関数updateLocaleはリファクタリングをしなくてもよくなります。（再利用性の高さ）
    if(locale === 'ja') {
      // this.currentLocaleに代入している値、'ja'は、定数localeでもありますね
      this.currentLocale = 'ja';
      console.log(this.currentLocale);
    }

    if(locale === 'en') {
      this.currentLocale = 'en';
      console.log(this.currentLocale);
    }
  }

  /*mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。*/
  showMessage() {
    const main = document.getElementById('main');
    main.innerHTML = polyglot.t('hello');
  }

}

const app = new TranslationApp();

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}