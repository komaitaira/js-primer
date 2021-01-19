console.log("index.js: loaded");

const heading = document.querySelector("h2");
const headingText = heading.textContent;

const button = document.createElement("button");
button.textContent = "Push Me";

// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);


// 実行コマンド
// npx @js-primer/local-server

// このセクションでは、エントリーポイントとなるHTMLを作成し、JavaScriptモジュールのエントリーポイントとなるJavaScriptファイルを読み込むところまでを実装しました。

// ajaxappという名前のプロジェクトディレクトリを作成した
// エントリーポイントとなるindex.htmlを作成した
// JavaScriptのエントリーポイントとなるindex.jsを作成しindex.htmlから読み込んだ
// ローカルサーバーを使ってブラウザでindex.htmlを表示した
// index.jsからコンソールに出力されたログを確認した
// JavaScriptからHTMLドキュメントを操作するDOMについて学んだ