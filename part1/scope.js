function fn1(arg) {
  const x = 1;
  console.log(x); // fn関数のスコープ内なので参照できる
  console.log(arg);
}
fn1(2);
// console.log(x); // fn関数のスコープ外なので参照できない
// console.log(arg); // fn関数のスコープ外なので参照できない


function fn2(arg) {
  const x = 1; // fn1とはスコープが異なるので同じ変数名であってもconst x = 1は定義できる
  console.log(x);
  console.log(arg);
}
fn2(2);

const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}
// console.log(element); //ループの外からはブロックスコープ内の変数は参照できない

// 実行時間を計測したい関数をコールバック関数として引数に渡す
const measureTask = (taskFn) => {
  const startTime = Date.now();
  taskFn();
  const endTime = Date.now();
  console.log(`実行時間は${endTime - startTime}ミリ秒`);
};
function doHeavyTask() {
  // 計測したい処理
}
measureTask(doHeavyTask);

hello(); // => "Hello"

function hello(){
    
}