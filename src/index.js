import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('locale') || 'ja';//データの取得
    // ここに本来thisに参照して欲しい関数を、bindメソッドでthisが思うような値を参照してくれない挙動をbind（固定）してしまい、スコープを超えた関数がthisを使ってきちんと取得できるように調整します。
    // 3つの関数全てが関わっている関数がbindされると、thisの挙動を1つの記述だけで押さえられるかもしれません
  }

  /*現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。*/
  setup() {
    if (this.currentLocale === 'ja') {
      this.polyglot.extend({
        'hello': 'こんにちは、世界'
      });
    }
    if(this.currentLocale === 'en') {
      this.polyglot.extend({
        'hello': 'Hello World'
      });
    }

  }

  /*ボタンにセットされたdata-localeを元に現在のlocaleを変更します。*/
  updateLocale(e) {
    const locale = e.target.dataset.locale;
    this.currentLocale = locale;
    localStorage.setItem('locale', locale);//データの保存
    // ↓ 関数setupなどに付与されているthisにどんな値が格納されているか検証すると、クリックしたボタン要素が取得されてしまいます。本来thisが参照すべき値を参照していないかもしれません。
    console.log(this);
    this.setup();
    this.showMessage();
  }

  /*mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。*/
  showMessage() {
    const main = document.getElementById('main');
    main.innerHTML = this.polyglot.t('hello');
  }

}

const app = new TranslationApp();

{
  // ↓ TranslationAppクラスに格納されている値が関数を含め、全て表示されます。関数部分をどんどん開いていくと、「thisの参照する値を固定するメソッド、bind」が見つかります
  console.log(app);
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);

  app.setup();
  app.showMessage();
}