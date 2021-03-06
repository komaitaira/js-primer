// TEN_NUMBERという変数は常に10という値を示す
const TEN_NUMBER = 10;

// `const`でオブジェクトを定義している
const object = {
  key: "値"
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";

`複数行の
文字列を
入れたい`; // => "複数行の\n文字列を\n入れたい"

// テンプレートリテラル内で${変数名}と書いた場合に、その変数の値を埋め込むことができる。
const str = "文字列";
console.log(`これは${str}です`); 

// オブジェクトリテラル
const obj = {
  "key": "value"
};

// ドット記法での参照
console.log(obj.key); // => "value"
// ブラケット記法での参照
console.log(obj["key"]); // => "value"