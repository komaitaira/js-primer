export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    formElement.addEventListener('submit', (event) => {
      // submitイベントの本来の動作を止める。フォームの内容を指定したURLへ送信するという動作をキャンセルする
      event.preventDefault();
      console.log(`入力値の値: ${inputElement.value}`);
    });
  }
}