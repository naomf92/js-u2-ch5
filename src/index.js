import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = ja;
  }

  /*現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。*/
  setup() {
    // どちらも共通のオブジェクトプロパティ名にしてしまって、if文条件分岐で値だけを入れ替えると、t()メソッド呼び出し記述が一度で済みます & Polyglotの構文上、オブジェクトのプロパティが文字列ですが、変数、定数、関数、引数のような役割をするので、"helo" もしくは"helloEn"などにしておくと、呼び出しの際にオブジェクトのプロパティだと視覚的にわかりやすいです
    polyglot.extend({
      "hello world": "こんにちは、世界",
      "こんにちは、世界":"hello world"
    });
  }

  /*ボタンにセットされたdata-localeを元に現在のlocaleを変更します。*/
  updateLocale(e) {
  }

  /*mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。*/
  showMessage() {
    const main = document.getElementById('main');
    // 翻訳文章データは、polyglot.extend()内にセットなので、英語のデータも、関数setup内で日本語と同じように用意をします
    // 上記のように修正しましょう
    main.innerHTML = polyglot.t("hello world");
  }

}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}