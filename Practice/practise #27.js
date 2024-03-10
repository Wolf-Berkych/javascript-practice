/* Practice: Create a very helpful function, use it couple of times */

/* Завдання 1

Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, 
тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат */

// write below code for global scope

// const globalName = "Global Mike";

// function greetings() {
//   console.log(`Hello ${globalName} !`);
// }

// greetings();

// write below code for function scope

// function greetings() {
//   const localName = "Local Mike";
//   console.log(`Hello ${localName} !`);
// }

// greetings();

// write below code for block scope

// function greetings() {
//   if (true) {
//     const blockName = "Block Mike";
//     console.log(`Hello ${blockName} !`);
//   }
// }

// greetings();

/* Завдання 2
В функції showCarInfo вивести в консоль name та model об'єкту car використовуючи контекст через this, викликати функцію showCarInfo використовуючи bind. */

// const car = {
//   name: "Tesla",
//   model: "X",
// };

// function showCarInfo() {
//   console.log(`The name of car ${this.name} and the model is ${this.model}`);
// }

// const showCarInfoPublic = showCarInfo.bind(car);
// showCarInfoPublic();

/* Завдання 3
Дано: код в якому необхідно знайти помилку і виправити її
Результат: вивести в консоль “meow” */

// const cat = {
//   sound: "meow",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.sound);
//     }, 0);
//   },
// };
// cat.greet();

// const cat1 = {
//   sound: "meow",
//   greet: function () {
//     setTimeout(
//       function () {
//         console.log(this.sound);
//       }.bind(this),
//       0
//     );
//   },
// };
// cat1.greet();

// const cat2 = {
//   sound: "meow",
//   greet: function () {
//     const _this = this;
//     setTimeout(() => {
//       console.log(_this.sound);
//     }, 0);
//   },
// };
// cat2.greet();

/* Завдання 4
Дано: об'єкт у якому необхідно переписати існуючу функція на стрілочну, щоб він почав виконуватись коректно
Результат: вивести у консоль “bark” */

// const dog = {
//   sound: "bark",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.sound);
//     }, 0);
//   },
// };

// dog.greet();

/* Завдання 5

Дано: написати Анонімну функцію та присвоїти її значення змінній convert, функція має приймати число, яке є кількістю байтів та повертати стрічку із переведеними байтами в мб, 
з двома знаками після коми в форматі "100.00 Mb" та викликати цю функцію використовуючи call

Результат: функція приймає число (байти) та перетворює у стрічку у форматі Мб наприклад:
10000 -> 0.01 Mb */

// let convert = (number) => {
//   const total = number / 1048576;
//   const totalFixed = total.toFixed(2);
//   const totalString = totalFixed.toString();
//   return console.log(totalString);
// };

// convert.call(this, 32000);

// let convert = (number) => {
//   const total = (number / 1048576).toFixed(2);
//   console.log(`${total}`);
// };

// convert.call(this, 32000);

// obj1 = {
//   data: 40000,
// };

// obj2 = {
//   data: 10000,
// };

// convert.call(obj1, obj1.data);

/* Завдання 6
Дано: написати функцію logPersonNameAndInterests яка прийматиме довільну кількість аргументів стрічок та виводитиме в консоль повне ім'я Person використовуючи виклик getFullName 
з контекстом Person, а також перелік усіх його інтересів які приходять аргументами цієї функції.

Результат: виклик logPersonNameAndInterests з контекстом Person та переліком інтересів ['sushi', 'hiking'] -> в консолі 'John Doe loves: sushi, hiking' */

// const Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
// };

// const testArgs = ["sushi", "hiking"];

// let logPersonNameAndInterests = function () {
//   const fullName = this.getFullName();
//   const interest = Array.from(arguments).join(", ");
//   console.log(`${fullName} loves ${interest}`);
// };

// logPersonNameAndInterests.apply(Person, testArgs);

/* Завдання
Дано: Написати функцію вищого порядку compose яка прийматиме довільну кількість функцій як аргумент і створюватиме з них композицію.
Написати карі функцію (modifyArray) яка прийматиме спочатку як аргумент функцію (modifyCondition), а далі прийматиме як аргумент масив стрічок (data), 
карі функція повинна повертати модифікований масив згідно умови (modifyCondition) яка прийшла на початку карі функції 

Написати композиції allToLower та capitalizeAllFirst використовуючи власний compose та modifyArray які прийматимуть масив стрічок та повертатимуть наступний результат:
const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

1) allToLower - приймає testArray -> перетворює стрічки так що усі символи приводяться до нижнього регістру 'Result: custom - web - and - mobile - platforms length: 39'
2) capitalizeAllFirst - приймає testArray -> перетворює стрічки так що лише перший символ у верхньому регістрі, 
інші у нижньому, об'єднує їх в одну стрічку з символом'-' -> виводить в консоль 'Result: Custom-Web-And-Mobile-Platforms length: 31' */

// const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

// const compose =
//   (...fncs) =>
//   (val) =>
//     fncs.reduceRight((acc, fnc) => fnc(acc), val);

// const modifyArray = (ModifyCondition) => (data) => ModifyCondition(data);

// let capitalizeAllFirst = modifyArray(
//   compose(
//     (result) => `Result: ${result} length: ${result.length}`,
//     (arr) => arr.join("-"),
//     (arr) =>
//       arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
//   )
// );

// let allToLower = modifyArray(
//   compose(
//     (result) => `Result: ${result} length: ${result.length}`,
//     (arr) => arr.join(" - "),
//     (arr) => arr.map((str) => str.toLowerCase())
//   )
// );

// console.log(capitalizeAllFirst(testArray));
// console.log(allToLower(testArray));

/* Practice: Create some classes, inherit them from some parent class...

// Завдання 1
// 1) Створити ф-ію конструктор Calculator та до її прототипу добавити два методи sum(a,b) та subtract(a,b) */

// function Calculator() {}

// Calculator.prototype.sum = function (a, b) {
//   return a + b;
// };

// Calculator.prototype.subtract = function (a, b) {
//   return a - b;
// };

// console.dir(Calculator);

// // 2) Створити ф-ію конструктор AdvancedCalculator (наслідує методи від Calculator) та до її прототипу добавити два методи multiply(a,b) та divide(a,b)

// function AdvancedCalculator() {}

// AdvancedCalculator.prototype = Object.create(Calculator.prototype);

// AdvancedCalculator.prototype.multiply = function (a, b) {
//   return a * b;
// };
// AdvancedCalculator.prototype.divide = function (a, b) {
//   if (b === 0) {
//     return "Cannot be divided by 0";
//   }
//   return a / b;
// };

// console.dir(AdvancedCalculator);

/* Завдання 2
Дано: Функція для генерації ID
1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false). 
Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)
2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).
Добавити наступні методи:
addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
removeItemById - метод який видаляє елемент з масиву по id
getItemById - метод який повертає елемент TodoItem з масиву по id
3) Створити екземпляр класу TodoList;
4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem) */

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// class TodoItem {
//   constructor(name) {
//     this.name = name;
//     this.id = generateId();
//     this._checked = false;
//   }

//   get checked() {
//     return this._checked;
//   }

//   set checked(value) {
//     if (typeof value === Boolean) {
//       this._checked = value;
//     } else {
//       console.error("Invalid value for checked. Must be a boolean.");
//     }
//   }
// }

// class TodoList {
//   constructor(name) {
//     this.name = name;
//     this.id = generateId();
//     this.items = [];
//   }

//   addItem(item) {
//     if (item instanceof TodoItem) {
//       this.items.push(item);
//     } else {
//       console.error("Invalid item type. Must be an instance of TodoItem.");
//     }
//   }

//   removeItemById(itemid) {
//     this.items = this.items.filter((item) => item.id !== itemid);
//   }

//   getItemById(itemId) {
//     return this.items.filter((item) => item.id === itemId);
//   }
// }

// const firstToDoList = new TodoList("My first Todo List");

// const item1 = new TodoItem("Task 1");
// const item2 = new TodoItem("Task 2");
// const item3 = new TodoItem("Task 3");
// const item4 = new TodoItem("Task 4");

// firstToDoList.addItem(item1);
// firstToDoList.addItem(item2);
// firstToDoList.addItem(item3);
// firstToDoList.addItem(item4);

// console.log(firstToDoList);

// item1._checked = true;

// console.log(firstToDoList);

// firstToDoList.removeItemById(item2.id);
// firstToDoList.removeItemById(item3.id);

// console.log(firstToDoList);

/* Завдання 1
Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення. 
Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням або виводить помилку в консоль якщо це не стрічка або колбек не є функцією */

// function isString(callback, value) {
//   if (typeof value !== "string") {
//     console.error(`${value} should be a string`);
//     return;
//   }

//   if (typeof callback !== "function") {
//     console.error(`${callback} should be a function`);
//     return;
//   }

//   callback(value);
// }

// function wordToUpperCase(value) {
//   console.log(value);
// }

// const xaz = [1, 2, 3];

// function clock() {
//   setInterval(() => {
//     const curentDate = new Date();
//     const hours = curentDate.getHours().toString().padStart(2, "0");
//     const minutes = curentDate.getMinutes().toString().padStart(2, "0");
//     const seconds = curentDate.getSeconds().toString().padStart(2, "0");

//     console.log(`${hours}:${minutes}:${seconds}`);
//   }, 1000);
// }

// function timer(seconds) {
//   let remainingTime = seconds;

//   const intervalId = setInterval(() => {
//     console.log(`Remaining timer is ${remainingTime}`);

//     remainingTime--;

//     if (remainingTime < 0) {
//       clearInterval(intervalId);
//       console.log("Timer is complited");
//     }
//   }, 1000);
// }

// timer(10);

// class MyClass {
//   constructor(name) {
//     this.name = name;
//     this.timerId = setTimeout(() => {
//       this.name = null;
//       console.log("Name has been set to null automatically.");
//     }, 5000);
//   }

//   stopAutoNull() {
//     clearInterval(this.timerId);
//     console.log("Auto null has been stopped.");
//   }
// }

// const myObject = new MyClass("Example");
// console.log(myObject.name);

// setTimeout(() => {
//   myObject.stopAutoNull();
// }, 6000);
