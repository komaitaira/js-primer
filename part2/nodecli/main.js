// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
const fs = require("fs");


// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, {encoding: "utf8"}, (err, file) => {
  if (err) {
    console.error(err.message);
    // 終了ステータス1(一般的なエラー)としてプロセスを終了する
    process.exit(1);
    return;
  }
  console.log(file);
});

// process.argv配列にnodeコマンドのコマンドライン引数が格納されていることを確認した
// npmを使ってパッケージをインストールする方法を理解した
// require関数を使ってパッケージのモジュールを読み込めることを確認した
// commanderを使ってコマンドライン引数をパースできることを確認した
// コマンドライン引数で渡されたファイルパスを取得してコンソールに出力できた


// fsモジュールのreadFile関数を使ってファイルを読み込んだ
// UTF-8形式のファイルの中身をコンソールに出力した
// readFile関数の呼び出しにエラーハンドリング処理を記述した