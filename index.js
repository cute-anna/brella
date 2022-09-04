// "якийсь текст" - string
// 5 5.6 = number
// true false = boolean
// undefined = undefined
// null = null

// let count = 5
// alert(`кількість користувачів: ${count}`);
// let count = 1, countTwo = 2;
// alert(count + countTwo);
// - * / + % 
// alert(`ділення ${10/3}`)
// alert(`остача від ділення ${10 % 3}`)
// let text = prompt("text", "aaaaaaaaaaaaaaaaaaa");
// let text = +"125t"
// alert(text);
// let bool = confirm("text?");
// alert(bool);
// let count = 1, countTwo = 2;
// alert(count != countTwo);
// let count = 20;
// if(count < 10){
//   count += 10; ============ count = count + 10
//   alert("ваше число менше десяти");
// }
// // else if(count == 11){
// //   alert("count = 11")
// // }

// else{
//   count = count - 10;
//   alert("ваше число більше десяти");
// }
// alert(count);
// let count = 5;
// let countString = String(count);
// let countNumber = +countString; Number(countString)
// let countBoolean = Boolean(count);
// alert(typeof count);
// alert(typeof countString);
// alert(typeof countNumber);
// alert(typeof countBoolean);
// 0 "" null undefined false
// let r = "0";
// alert(Boolean(r));

// let A = prompt('?');
// if (A == 'Anya'){
//   alert('true');
// }
// else{
//   alert('false');
// }

// if(a == "anya" || a == "yana"){

// }
// if(a == "anya" && b =="yana"){

// }
// if(!true){
//   alert(true);
// }
// else{
//   alert("else");
// }

// homework:
// let A = prompt('введіть число');
// if (A > 0){
//   alert('1');
// }
// else if (A < 0){
//   alert('-1')
// }
// else{
//   alert('0');
// }

// homework 2:
// let a = prompt ("Перше число", "1");
// let b = prompt ("Друге число", "2");
// alert(Number(a) + Number(b));

// if(true){
//   alert(true)
// }
// else{
//   alert("else");
// }
// alert("b");
// alert("c");
// function sum(numberOne, numberTwo){
//   let result = numberTwo + numberOne; //локальні змінні
//   alert(result);
// }

// let = result 5; //глобальні змінні
// alert(result);
// let a = 5, b = 7;
// sum(1, 2);
// sum(a, 2);
// sum(4, 5);

// function multi( numberOne, numberTwo){
//   return numberOne * numberTwo;
// }
// let result = multi(1, 2);
// alert(result);
// let i = 0;
// while(i < 5){
//     alert (i);
//     i += 1;
// }
// 1 += 1;
// 1++
// 1--

// 1 цикл : i = 0 alert(0)
// 2 цикл : i = 1 alert(1)
// 3 цикл : i = 2 alert(2)
// 4 цикл : i = 3 alert(3)
// 5 цикл : i = 4 alert(4)

// let i = 0;
// while(i < 4){
//     alert("звичайний вайл");
//     i++;
// }
// do{
//     alert("ду вайл");
//     i++;
// }
// while(i < 4);

// while(true){
//     alert('a');
// }

// for(let i = 0; i < 5; i++){
//   alert(i);
// }

// let i = 5;
// 0 "" false undefined null
// if(0){
//   alert(0)
// }
// let i = 0;
// let res = i++;
// i++ - постфіксне, ++i - префіксне

// for(let i = 11; i <= 21; i+=2){
//     alert(i);
// }

// for (let i = 0; i < 3; i++){
//   alert( `number ${i}!`);
// }

// let i = 0;
// while (i < 3){
//   alert( `number ${i}!`);
//   i++;
// }

// homework 3:
// for (let i = 1; i <= 100; i++){
//   alert( `number ${i}!`);
// }

// for (let i = 100; i >= 1; i--){
//   alert( `number ${i}!`);
// }

// for (let i = 2; i <= 100; i+=2){
//   alert( `number ${i}!`);
// }

// for(let i = 0; i < 100; i++){
//   console.log(i);
// }

// let number = Number(prompt("???", 0));
// if (number < 50){
//   while (number){
//     console.log(number);
//     number--;
//   }
// }

// let number = +prompt("???", 0);

// if(number > 10 && number < 30){
//   alert("число більше десяти i менше тридцяти");
// }

// if(number < 10 || number > 30){
//   alert("число, більше 30 АБО менше 10");
// }
// if( number > 10 || number == 3 && number < 30){
//     console.log(true);
// }

// let usual = 0;
// let object = {
//     drawerFirst: 3,
//     drawerSecond: 2,
//     drawerThird: true,
//     add(){
//       return this.drawerFirst + this.drawerSecond;
//     }
// }

// object.drawerSecond += 2;
// console.log(object.drawerSecond);
// let result = object.add();
// console.log(result);

// let a = prompt("??");
// function prompt(){
//   //....
//   return str;
// }
// function add(a, b){
//     let result = a + b;
//     return result;
// }
// let object = {
//     drawerFirst: 3,
//     drawerSecond: 2,
//     drawerThird: true,
//     add(){
//       return this.drawerFirst + this.drawerSecond;
//     }
// }

// for(let temp in object){
//   console.log(temp);
// }

// let user ={
//   name: "John",
//   surname: "Smith",

// }
// user.name = "Pete";
// delete object.name;
// object.name = null

// let number = 5;
// let user = {
//   name: "Max",
//   surname: "Johnson",
//   age: "17",
//   click(){
//     alert("me");
//   }
// }

// let user={
//   "a, i": 3,
// };
// user.widthScreen = "600px";
// // user["widthScreen"]; ======== user.widthScreen
// delete user.widthScreen;

// function a(){
//   let sum = one + two;
//   return {
//       age: 32,
//       name: "tolya",
//   };
// }
// let temp = a(4, 6);
// alert(temp.age);

// let user ={
//     one: 332,
//     two: 12,
//     three: 34,
// }
// for(let temp in user){
//     alert(temp);
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(object){
//     for(let temp in object)return false;
//     return true;
// }

// масиви:
// let array = [];
// let arrayTwo = ["John", "Smith", 120];
// alert(arrayTwo[2]);
// for(let i = 0; i< arrayTwo.length; i++){
//     alert(arrayTwo[i]);
// }
// for(let temp of arrayTwo) alert(temp);

// for(let temp of arrayTwo){
//     if(temp > 100) alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// }


// a(...[3, 4, 5])
// function a(arr, a, b){

// }


// let array =["john", 12];
// array.push("smith"); // додає вказанне значення в кінець
// alert(array[2]); 
// array.pop(); // видаляє останнє значення
// alert(array[2]);
// array.unshift("smith"); // додає вказанне значення на початок
// alert(array[0]);
// array.shift(); // видаляє перше значення
// alert(array[0]);
// alert(array.length) // повертає довжину масиву

// let array = ["john"];
// let a = array;

// let styles =["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor(styles.length-1) / 2] = "Класика"; // додає вказане значення в середину
// alert(styles.shift());
// styles.unshift("Реп", "Регги");

// function sumInput(){
//     let array =[];

//     let value;
//     do{
//         value = prompt("sdfhewuwisf");
//         array.push(+value);
//     }
//     while(value === "" || value === null);
//     let result;
//     for(let temp of array) result += temp;
//     return result;
// }

// arr[2]();
// let arr = [2, 3, 4, "red"];
// arr.push("blue");