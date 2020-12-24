// 第一部　基本文法　配列

// =====================配列の作成とアクセス=====================
const emptyArray = [];
const numbers = [1, 2, 3];
// 2次元配列（配列の配列）
const matrix = [
  ['a', 'b'],
  ['c', 'd']
];

const array = ['one', 'two', 'three'];
console.log(array[array.length - 1]); // threeにアクセス
console.log(array[100]); // 存在しないindexにアクセスするとundefinedが返る

const obj = {
  '0': 'one',
  '1': 'two',
  '2': 'three',
  'length': 3
};
console.log(obj[100]); // 定義されていないため、undefinedが返る

// 未定義の箇所が1つ含まれる疎な配列
// インデックスが1の値を省略しているので、カンマが2つ続いていることに注意
const sparseArray = [1,, 3];
console.log(sparseArray.length); // => 3
// 1番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined

// =====================オブジェクトが配列かどうかを判定する=====================
const obj1 = {};
const array2 = [];
console.log(Array.isArray(obj1)); // => false
console.log(Array.isArray(array2)); // => true

const array3 = [];
console.log(typeof array3); // => typeof演算子では配列かどうかを判定できず、配列もobjextの一種であるため"object"と返る

// ===================[ES2015] 配列と分割代入=====================
const [first, second, third] = array;
console.log(first);
console.log(second);
console.log(third);

// ===================インデックスを取得=====================
// Array.prototype.indexOf()は最初のパラメータとして値を期待する。
// これはプリミティブ型の配列でインデックスを探すのに適している
const languageArray = ['Java', 'JavaScript', 'Ruby'];
const indexOfJS = languageArray.indexOf('JavaScript');
console.log(`JSのindex番号は${indexOfJS}`);
console.log(languageArray[indexOfJS]);

// Array.prototype.findIndex()は最初のパラメータとしてコールバックを期待する。
// これは非プリミティブ型（オブジェクトなど）の配列のインデックスが必要な場合、または検索条件が単なる値よりも複雑な場合は、これを使用してください。
const colors = [
  { 'color': 'red' },
  { 'color': 'green' },
  { 'color': 'blue' }
];
const indexOfBlue = colors.findIndex((current) => {
  return current.color === 'blue';
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]);

// ===================条件に一致する要素を取得=======================
// 以下は明確に要素が欲しい時のfindメソッドを使っている
const blueColor = colors.find((obj) => {
  return obj.color === 'blue';
});
console.log(blueColor);

const whiteColor = colors.find((obj) => {
  return obj.color === 'white';
});
console.log(whiteColor); // 要素が存在しない場合はundefinedを返す

// ================指定範囲の要素を取得===================
// slice() メソッドは、start と end が配列の中の項目のインデックスを表している場合、
// start から end まで(end は含まれない) で選択された配列の一部の浅いコピーを新しい配列オブジェクトに作成して返します。
// 元の配列は変更されません。
const alphabet = ['a', 'b', 'c', 'd', 'e'];
// インデックス1から4の範囲を取り出す
console.log(alphabet.slice(1, 4)); // => ["B", "C", "D"]
// 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
console.log(alphabet.slice(1)); // => ["B", "C", "D", "E"]
// マイナスを指定すると後ろからの数えた位置となる
console.log(alphabet.slice(-1)); // => ["E"]
// 第一引数と第二引数が同じ場合は、空の配列を返す
console.log(alphabet.slice(1, 1)); // => []
// 第一引数 > 第二引数の場合、常に空配列を返す
console.log(alphabet.slice(4, 1)); // => []

// =================真偽値を取得====================
// 配列に指定要素が含まれているかを判定するだけならば、includesメソッドを使うと良い。
if (languageArray.includes('JavaScript')) {
  console.log('配列にJavaScriptが含まれている');
}

// テストするコールバック関数を利用して審議値を得るにはArray#someメソッドを利用する
const isIncludedBlueColor = colors.some((obj) => {
  return obj.color === 'blue';
});
console.log(isIncludedBlueColor);

// =================追加と削除====================
const countries = ['Japan', 'USA', 'UK'];
countries.push('china');
console.log(countries);
const poppedItem = countries.pop();
console.log(poppedItem);
console.log(countries);

// 要素を先頭に追加
countries.unshift('italy');
console.log(countries);
// 要素の先頭を削除
const shiftedItem = countries.shift();
console.log(shiftedItem);
console.log(countries);

// =================配列同士を結合====================
const concatCountries = countries.concat(['Itely', 'China']);
console.log(concatCountries); // 既存の配列の変更ではなく、新しい配列を作成する

// spread構文を使うことで、配列の展開もできる
euro = ['France', 'Spain']
const newCountries = ['Japan', 'USA', 'UK', ...euro];
console.log(newCountries);

// ==============配列の任意の値を削除================
// 任意の値を削除する場合、spliceメソッドを使うと良い
// const array = [];
// array.splice(インデックス, 削除する要素数);
// // 削除と同時に要素の追加もできる
// array.splice(インデックス, 削除する要素数, ...追加する要素);
array.splice(1, 1);
console.log(array);
console.log(array.length);
// 全て削除
array.splice(0, array.length);
console.log(array.length);

// ===============破壊的メソッドと非破壊的メソッド==================
// 破壊的メソッドの例
const myArray = ['a', 'b', 'c'];
const result = myArray.push('d');
console.log(result); // pushの返り値は配列ではなく、追加後の配列のlength
console.log(myArray); // myArrayの中身そのものが変更されている

// 非破壊的メソッドの例
const newArray = myArray.concat('e');
console.log(newArray); // concatの返り値は結合済みの新しい配列
console.log(myArray); // myArrayは変更されていない
console.log(myArray === newArray);


// =================配列を反復処理するメソッド=================
// forEachメソッド
const array4 = [1, 2, 3, 4];
array4.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array);
});

// mapメソッド
const mapArray = array4.map((currentValue, index, array) => {
  return currentValue * 10;
});
console.log(mapArray);
console.log(array4);
console.log(array4 !== mapArray);

// filterメソッド
// コールバック関数がtrueを返したものだけを集めた新しい配列を返す非破壊的メソッド
const filterArray = array4.filter((currentValue, index, array) => {
  return currentValue % 2 === 1;
});
console.log(filterArray);
console.log(array4 !== filterArray);

// reduceメソッド
const totalValue = array4.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
// 0 + 1 + 2 + 3 + 4という式の結果が返り値になる
console.log(totalValue); // => 10