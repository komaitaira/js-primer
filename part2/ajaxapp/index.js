// エントリーポイント ===================================================================================
// console.log("index.js: loaded");

// const heading = document.querySelector("h2");
// const headingText = heading.textContent;

// const button = document.createElement("button");
// button.textContent = "Push Me";

// // body要素の子要素としてbuttonを挿入する
// document.body.appendChild(button);


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

async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    console.log(userInfo);
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.error(`エラーが発生しました(${error})`);
  }
}

function fetchUserInfo(userId) {
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`) // fetchメソッドはPromiseを返す
      .then(response => {
        if (!response.ok) {
          // エラーレスポンスからRejectedなPromiseを作成して返す
          return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
        } else {
          return response.json();
        }
      });
}

function getUserId() {
  return document.getElementById("userId").value;
}

// Fetch APIを使ってHTTPリクエストを送った
// GitHubのAPIから取得したユーザー情報のJSONオブジェクトをコンソールに出力した
// Fetch APIの呼び出しに対するエラーハンドリングを行った
// fetchUserInfo関数を宣言し、ボタンのクリックイベントで呼び出した

// データを表示する ===================================================================================

function createView(userInfo) {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
      <dt>Location</dt>
      <dd>${userInfo.location}</dd>
      <dt>Repositories</dt>
      <dd>${userInfo.public_repos}</dd>
  </dl>
  `
}

function displayView(view) {
  const result = document.getElementById('result');
  result.innerHTML = view;
}


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


// Promiseの活用

// HTMLの組み立てと表示の処理をcreateView関数とdisplayView関数に分離した
// main関数を宣言し、fetchUserInfo関数が返すPromiseのエラーハンドリングを行った
// Promiseチェーンを使ってfetchUserInfo関数をリファクタリングした
// Async Function を使ってmain関数をリファクタリングした
// index.htmlに<input>タグを追加し、getUserId関数でユーザーIDを取得した