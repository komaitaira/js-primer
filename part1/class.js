class MyClass {

}
const myClass = new MyClass(); //インスタンス化
const myClassAnother = new MyClass(); //MyClassから新しいインスタンスを作成
console.log(myClass === myClassAnother); //false
console.log(myClass instanceof MyClass); //true
console.log(myClassAnother instanceof MyClass); //true

class Point {
  constructor(x, y) { //コンストラクタ関数の仮引数としてxとyを定義
    //コンストラクタ関数におけるthisはインスタンスを示すオブジェクト
    this.x = x; //xプロパティにxと言う値を代入
    this.y = y;
    //constructor関数ではreturn文で値を返すべきではありません
  }
}
const point = new Point(3, 4); //new演算子の引数はconstructorメソッドの仮引数に渡される　
console.log(point.x); //3
console.log(point.y); //4