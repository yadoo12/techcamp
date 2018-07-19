const hour = Number(process.argv[2]);
let message = "";

if(hour >= 5 && hour <= 10){
    message = "おはよう";
}else if(hour >= 11 && hour <= 17){
  message = "こんにちは";
}else if(hour >= 18 || hour <= 4){
    message = "こんばんわ";
}
console.log(message);
