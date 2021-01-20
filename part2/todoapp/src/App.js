import { element } from './view/html-util.js';

export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');
    // Todoアイテム数
    let todoItemCount = 0;
    formElement.addEventListener('submit', (event) => {
      // submitイベントの本来の動作を止める。フォームの内容を指定したURLへ送信するという動作をキャンセルする
      event.preventDefault();
      // 追加するtodoアイテムの要素を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      // todoアイテムをcontainerに追加する
      containerElement.appendChild(todoItemElement);
      // todoアイテム数を+1し、表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      // 入力欄を空文字列にしてリセットする
      inputElement.value = '';
    });
  }
}