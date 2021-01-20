import { element } from './html-util.js';

export class TodoItemView {
  // `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    const todoItemElement = todoItem.completed
      ? element`<li><input type='checkbox' class='checkbox' checked><s>${todoItem.title}</s><button class='delete'>x</button></li>`
      : element`<li><input type='checkbox' class='checkbox'>${todoItem.title}<button class='delete'>x</button></li>`;
    // チェックボックスがトグルしたときのイベントにリスナー関数を登録
    const inputCheckBoxElement = todoItemElement.querySelector('.checkbox');
    inputCheckBoxElement.addEventListener('change', () => {
      // 指定したTodoアイテムの完了状態を反転させる
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed
      });
    });
    const deleteButtonElement = todoItemElement.querySelector('.delete');
    deleteButtonElement.addEventListener('click', () => {
      onDeleteTodo({
        id: todoItem.id
      });
    });
    return todoItemElement;
  }
}