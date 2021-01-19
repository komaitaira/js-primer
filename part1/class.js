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
console.log(point);
console.log(point instanceof Point);
console.log(point.x); //3
console.log(point.y); //4

// ================クラスのプロトタイプメソッドの定義=================
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++; //thisはCounterのインスタンスを参照する
  }
}
const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
console.log(counterA.count); //1
console.log(counterB.count); //0
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment);

// インスタンスオブジェクトへのメソッド定義
'use strict';
class ArrowClass {
  constructor() {
    // コンストラクタでのthisは常にインスタンス
    this.method = () => {
      // Arrow Functionにおけるthisは静的に決まる
      // そのためthisは常にインスタンスを参照する
      return this;
    };
  }
}
const instance = new ArrowClass();
const method = instance.method;
// 呼び出し方法に依存しないため、thisがインスタンスを参照する
console.log(method());

// プロトタイプメソッドの定義
'use strict';
class PrototypeClass {
  method() {
    return this;
  };
}
const instance1 = new PrototypeClass();
const method1 = instance1.method;
// ベースオブジェクトはundefined
console.log(method1());

// クラスのアクセッサプロパティの定義
class NumberWrapper {
  constructor(value) {
    this._value = value;
  }
  // _valueプロパティの値を返すgetter
  get value() {
    console.log("getter");
    return this._value;
  }
  // _valueプロパティに値を代入するsetter
  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}
const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);