// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
const fs = require("fs");
// markedモジュールをmarkedオブジェクトとしてインポートする
const marked = require("marked");


// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
    gfm: false,
    ...program.opts(),
};


// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
      console.error(err.message);
      process.exit(1);
      return;
  }
  const html = marked(file, {
      // オプションの値を使用する
      gfm: cliOptions.gfm,
  });
  console.log(html);
});
// process.argv配列にnodeコマンドのコマンドライン引数が格納されていることを確認した
// npmを使ってパッケージをインストールする方法を理解した
// require関数を使ってパッケージのモジュールを読み込めることを確認した
// commanderを使ってコマンドライン引数をパースできることを確認した
// コマンドライン引数で渡されたファイルパスを取得してコンソールに出力できた


// fsモジュールのreadFile関数を使ってファイルを読み込んだ
// UTF-8形式のファイルの中身をコンソールに出力した
// readFile関数の呼び出しにエラーハンドリング処理を記述した


// markedパッケージを使ってMarkdown文字列をHTML文字列に変換した
// コマンドライン引数でmarkedの変換オプションを設定した
// デフォルトオプションを定義し、コマンドライン引数で上書きできるようにした