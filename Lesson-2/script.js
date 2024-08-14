//////////////////////////////////////////////////////////
// Основные типы данных в JavaScript:

// Примитивные типы данных:
// Number (Число): используется для представления как целых чисел, так и чисел с плавающей запятой.

//String (Строка): последовательность символов, используемая для хранения текста.

// Boolean (Логический тип): принимает два значения: true (истина) и false (ложь).
let isAdmin = true;
let isLoggedIn = false;

///Null (Нулевое значение): специальное значение, которое представляет "ничего" или "пусто".
let emptyValue = null;

///Undefined (Неопределенное значение): значение переменной, которая была объявлена, но не инициализирована.
let notAssigned;
console.log(notAssigned); // undefined

/// Symbol (Символ): уникальный и неизменяемый тип данных, часто используется как идентификатор для свойств объекта
let uniqueId = Symbol("id");

/// Составные типы данных:
// Object (Объект): используется для хранения коллекций данных и более сложных сущностей. Объекты могут содержать свойства и методы.

//////////////////////////////////////////////////////////

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

const greetExpression = function (name) {
  return `Hi, ${name}!`;
};

console.log(greetExpression("Bob"));

const greetArrow = (name) => `Hey, ${name}!`;

console.log(greetArrow("Charlie"));

//////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 8

function multiply(a, b = 2) {
  // b имеет значение по умолчанию
  return a * b;
}

console.log(multiply(4)); // 8 (4 * 2)
console.log(multiply(4, 3)); // 12 (4 * 3)

//////////////////////////////////////////////////////////

// Создание объекта
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Доступ к свойствам объекта
console.log(person.name); // John
console.log(person["age"]); // 30

// Вызов метода объекта
person.greet(); // Hello, my name is John
