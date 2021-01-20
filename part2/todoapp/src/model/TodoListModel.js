import { EventEmitter } from '../EventEmitter.js';

export class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  // TodoItemの合計個数を返す
  getTotalCount() {
    return this.items.length;
  }

  // 表示できるTodoItemの配列を返す
  getTodoItems() {
    return this.items;
  }

  // TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
  onChange(listener) {
    this.addEventListener('change', listener);
  }

  // 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
  emitChange() {
    this.emit('change');
  }

  // TodoItemを追加する
  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }

  // 指定したidのTodoItemのcompletedを更新する
  updateTodo({ id, completed }) {
    const todoItem = this.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }

  deleteTodo({ id }) {
    this.items = this.items.filter(todo => {
      return todo.id !== id;
    });
    this.emitChange();
  }
}