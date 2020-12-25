const multiline = `1行目\n2行目\n3行目`;
console.log(multiline);
console.log("¯\\_(ツ)_/¯"); 

const str1 = "赤・青・緑".split("・").join("、");
console.log(str1); // => "赤、青、緑"

// "A"と"B"のCode Unitは65と66
console.log("A".charCodeAt(0)); // => 65
console.log("B".charCodeAt(0)); // => 66
// "A"（65）は"B"（66）よりCode Unitの値が小さい
console.log("A" > "B"); // => false
// 先頭から順番に比較し C > D が falseであるため
console.log("ABC" > "ABD"); // => false

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
console.log(indexOfQuery);
const queryString = url.slice(indexOfQuery);
console.log(queryString); // => "?param=1"

// String#indexOfメソッドとString#lastIndexOfメソッドは、指定した文字列で検索し、その文字列が最初に現れたインデックスを返す
// 一致するものがない場合は-1を返す
const str = "JavaScript";
const searchWord = "Script";
const index = str.indexOf(searchWord);
if (index !== -1) {
    console.log(`${searchWord}が見つかりました`);
} else {
    console.log(`${searchWord}は見つかりませんでした`);
}

// 正規表現は2種類の方法で作成できます。
// ①スラッシュで囲まれたパターンからなる正規表現リテラル
// ⇨正規表現が一定の場合、この方法を使うと良いパフォーマンスが得られます
var re = /ab+c/;
// ②RegExpオブジェクトのコンストラクタ関数を呼び出す方法
// コンストラクタ関数を使用すると、実行時にその正規表現をコンパイルする
// 正規表現パターンが変わることがわかっている場合や、パターンがわからない場合、ユーザが入力するなど別のソースからパターンを取得する場合は、コンストラクタ関数を使用してください
var re = new RegExp('ab+c');

// マッチする範囲を決めるパターン
// 正規表現の検索モードを指定するフラグ
// 正規表現リテラルで正規表現オブジェクトを作成
// const patternA = /パターン/フラグ;
// `RegExp`コンストラクタで正規表現オブジェクトを作成
// const patternB = new RegExp("パターン文字列", "フラグ");

const spaceCount = 3;
// `/\s{3}/`の正規表現を文字列から作成する
// "\"がエスケープ文字であるため、"\"自身を文字列をして書くには、"\\"のように2つ書く
// const pattern = new RegExp(`\\s{${spaceCount}}`);
// console.log(pattern);

let pattern = /^\d{3}-?\d{4}$/g;
let postcode = '121-4444';
let result = postcode.match(pattern);
console.log(result);