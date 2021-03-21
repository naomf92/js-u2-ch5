import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('locale');//データの取得

    //データながければデフォルトでja
    if (locale === ない) {
      this.currentLocale = 'ja';
    }

    console.log(this.currentLocale);
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
    const locale = e.target.dataset.locale;
    this.currentLocale = locale;
    localStorage.setItem('locale', locale);//データの保存
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