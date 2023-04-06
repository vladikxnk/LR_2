
// Розробіть кальулятор, використовуючи prompt() та змінні. Розробіть программу, яка виконує наступне:
// 1. Запитує користувача про перший номер
// 2. Зберігає цей номер
// 3. Запитує користувача про другий номер
// 4. Зберігає другий номер та дає відповідь з сумою двох чисел за допомогою alert()
var firstNumber = prompt("Введіть перше число:");
var secondNumber = prompt("Введіть друге число:");
var sum = firstNumber + secondNumber;
alert("Сума двох чисел: " + sum);

// Додатково: Зробіть програму, яка може ділити, множити, та віднімати ці два номери
let num1 = 10;
let num2 = 5;
let result;

// Subtraction
result = num1 - num2;
console.log("Subtraction of " + num1 + " and " + num2 + " is " + result);

// Multiplication
result = num1 * num2;
console.log("Multiplication of " + num1 + " and " + num2 + " is " + result);

// Division
if (num2 === 0) {
    console.log("Cannot divide by zero");
} else {
    result = num1 / num2;
    console.log("Division of " + num1 + " and " + num2 + " is " + result);
}
