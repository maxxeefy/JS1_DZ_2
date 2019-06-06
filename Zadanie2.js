'use strict'

//Задание №1. Объясните почему код даёт именно такие результаты?

let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c);
//ответ с = 2 получается, благодаря префиксному инкременту, стоящему перед значением переменной "а", соответственно увеличивая значение "а" на 1.

d = b++;
alert(d);
//ответ d = 1 получается из-за того, что посфиксный инкремент сначала возвращает результат 1 от переменной "b", а уже потом увеличивается на 1.

c = 2 + ++a;
alert(c);
//ответ с = 5. Значение "а" = 2 (после 1й итерации) становится равно 3 после увеличения префиксным инкрементом еще на 1, затем к этому значению прибавляется еще 2.

d = 2 + b++
alert(d);
//ответ d = 4. После 2й итерации значение "b" = 2, к этому значению добавляется еще 2 и возвращается результат 4. После этого значение "b" увеличивается на 1, благодаря постфиксному инкременту.

alert(a); //значение после всех итераций 3.
alert(b); //значение после всех итераций 3.

//Задание №2.Чему будут равны переменные x и a в примере ниже? Написать почему так произошло.

let a = 2;
let x = 1 + (a *= 2);
alert(x);
alert(a);
//значение "x" будет равно 5, значение "a" будет равно 4. Оператор присваивание с умножением a *= 2 имеет смысл a = a * 2, соответственно после перемножения 2 и 2 результатом становится 4. После этого прибавляется еще 1 и результатом для "x" становится 5.

//Задание №3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
//- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
//- если а и b отрицательные, вывести их произведение;

let a = -2,
    b = -5,
    z;
if (a >= 0 && b >= 0) {
    z = a * b;
    alert(z);
} else if (a < 0 && b < 0) {
    z = a / b;
    alert(z);
}

//Задание №4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.

'use strict'

//объявление переменных
let num1 = +prompt("Введите первое число"),
    num2 = +prompt("Введите второе число");
let sum, razn, proizv, chastn;

//функция суммы
function calculateSum(number1, number2) {
    return number1 + number2;
}

//функция разности
function calculateRazn(number1, number2) {
    return number1 - number2;
}

//функция произведения
function calculateProizv(number1, number2) {
    return number1 * number2;
}

//функция частного
function calculateChastn(number1, number2) {
    return number1 / number2;
}

//запуск арифметических функций
sum = calculateSum(num1, num2);
razn = calculateRazn(num1, num2);
proizv = calculateProizv(num1, num2);
chastn = calculateChastn(num1, num2);

//вывод результатов
alert("Сумма чисел = " + sum);
alert("Разность чисел = " + razn);
alert("Произведение чисел = " + proizv);
alert("Частное чисел = " + chastn);

//Задание №5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций (использовать функции из задания 4) и вернуть полученное значение.

let otvet;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Summa":
            otvet = calculateSum(arg1, arg2);
            break;
        case "Raznost":
            otvet = calculateRazn(arg1, arg2);
            break;
        case "Proizvedenie":
            otvet = calculateProizv(arg1, arg2);
            break;
        case "Chastnoe":
            otvet = calculateChastn(arg1, arg2);
            break;
    }
    return otvet;
}

sum = mathOperation(30, 20, "Summa");
alert("Сумма чисел = " + otvet);
razn = mathOperation(30, 20, "Raznost");
alert("Разность чисел = " + otvet);
proizv = mathOperation(30, 20, "Proizvedenie");
alert("Произведение чисел = " + otvet);
chastn = mathOperation(30, 20, "Chastnoe");
alert("Частное чисел = " + otvet);