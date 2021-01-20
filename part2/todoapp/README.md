# js-primer TodoApp

# 起動
```
npx @js-primer/local-server
```

# ポイント
Todoアプリでは、ユーザーが次のような操作した場合に、Todoアイテムを追加します。

- 入力欄にTodoアイテムのタイトルを入力する
- 入力欄でEnterキーを押して送信する
- TodoリストにTodoアイテムが追加される

これをJavaScriptで実現するには次のことが必要です。

- Todoアイテムのタイトルを取得するために、input要素（入力欄）から内容を取得する
- Enterキーで送信されたことを知るために、form要素のsubmitイベント（送信）を監視する
- 入力内容をタイトルにしたTodoアイテムを作成し、Todoリスト（#js-todo-list）にTodoアイテム要素を追加する
