let sym = Symbol("key01")
const JsUSer = {
    name : "Muddassir",
    "full name" : "Qazi Ahmed Muddassir",
    age : 27,
    isLogin : "true",
    email : "qazi@gtmcanada.com",
    [sym] : "myKey02",
    
}
//  JsUSer.email = "qazi@google.com"
//  Object.freeze(JsUSer)
//  JsUSer.name = "ahmed"
// console.log(JsUSer.email);
// console.log(JsUSer.name);
// console.log(JsUSer["full name"]);
// console.log(JsUSer["isLogin"]);
// console.log(JsUSer.email);
//console.log(JsUSer[sym]);
JsUSer.greeting = function(){
    return("hello "+ this.name)
}
JsUSer.hello = function(){
    console.log(`Hello dear Your name is ${this["full name"]} and your age is ${this.age}`)
}
console.log(JsUSer.greeting());
// console.log(JsUSer.hello());



