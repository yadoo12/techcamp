// ターミナルに「こんにちは」と表示するプログラムをかく
console.log("こんにちは"); //文字を表示する

const x = 1;
const y = 2;
const z = x + y;

console.log(z); //変数の展開/表示

const hour = 8;
let message = "";

if(hour === 8){
message = "おはよう"
}else{
  message = "こんにちは";
}
console.log(message);

const hour = process.argv[2];
let message = "";

if(hour === "8"){
message = "おはよう"
}else{
  message = "こんにちは";
}
console.log(message);
