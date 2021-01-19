// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
// コマンドライン引数をパースする
program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);

// process.argv配列にnodeコマンドのコマンドライン引数が格納されていることを確認した
// npmを使ってパッケージをインストールする方法を理解した
// require関数を使ってパッケージのモジュールを読み込めることを確認した
// commanderを使ってコマンドライン引数をパースできることを確認した
// コマンドライン引数で渡されたファイルパスを取得してコンソールに出力できた