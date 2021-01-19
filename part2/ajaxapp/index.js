// エントリーポイント ===================================================================================
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

// ===================================================================================

// HTTP通信 Fetch API ===================================================================================
// ウェブブラウザ上でJavaScriptからHTTP通信するために、Fetch APIという機能を使います。

function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`) // fetchメソッドはPromiseを返す
    .then(response => {
      console.log(response.status); // => 200
      if (!response.ok) {
        console.error("エラーレスポンス", response);
      } else {
        return response.json().then(userInfo => {
          const view = escapeHTML`
          <h4>${userInfo.name} (@${userInfo.login})</h4>
          <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
          <dl>
              <dt>Location</dt>
              <dd>${userInfo.location}</dd>
              <dt>Repositories</dt>
              <dd>${userInfo.public_repos}</dd>
          </dl>
          `

          const result = document.getElementById('result');
          result.innerHTML = view;
        });
      }
    }).catch(error => {
      console.log(error);
    });
}

// Fetch APIを使ってHTTPリクエストを送った
// GitHubのAPIから取得したユーザー情報のJSONオブジェクトをコンソールに出力した
// Fetch APIの呼び出しに対するエラーハンドリングを行った
// fetchUserInfo関数を宣言し、ボタンのクリックイベントで呼び出した

// データを表示する ===================================================================================

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if(typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}