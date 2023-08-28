"use strict";

//Задание 1
function exerciseFirst() {
  alert(
    "Задание 1: Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). Затем запишите в нее значение 20, выведите его на экран."
  );
  let a = Number(10);
  alert(a);
  a = Number(20);
  alert(a);
}

//Задание 2
function exerciseSecond() {
  alert(
    "Задание 2: Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран."
  );
  const year = Number(2007);
  alert(`Год выпуска первого iPhone: ${year}`);
}

//Задание 3
function exerciseThird() {
  alert(
    "Задание 3: Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран."
  );
  const creator = "Brendan ";
  alert(`Имя создателя языка JavaScript: ${creator}`);
}

//Задание 4
function exerciseFourth() {
  alert(
    "Задание 4: Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления)."
  );
  let numberX = Number(10);
  let numberY = Number(2);

  alert(
    `Даны две переменны ${numberX} и ${numberY}:\nСумма: ${
      numberX + numberY
    }\nРазность: ${numberX - numberY}\nПроизведение: ${
      numberX * numberY
    }\nЧастное (результат деления): ${numberX / numberY}\n`
  );
}

//Задание 5
function exerciseFifth() {
  alert(
    "Задание 5: Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert()"
  );
  let numberX = Number(2);
  let numberY = Number(5);
  let result = numberX ** numberY;
  alert(`${numberX} в ${numberY} степени = ${result}`);
}

//Задание 6
function exerciseSixth() {
  alert(
    "Задание 6: Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert()."
  );
  let a = Number(9);
  let b = Number(2);
  alert(`Остаток от деления ${a} на ${b} = ${a % b}`);
}

//Задание 7
function exerciseSeventh() {
  alert(
    "Задание 7: Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):"
  );

  let num = Number(1);
  num += 5;
  num -= 3;
  num *= 7;
  num /= 3;
  num += 1;
  num -= 1;
  alert(num);
}

//Задание 8
function exerciseEighth() {
  alert(
    "Задание 8: Создайте переменную age, присвойте значение с помощью метода prompt() Сколько вам лет?. Результат вывести с помощью alert()."
  );
  let age = Number(prompt("Сколько вам лет?"));
  alert(`Вам ${age} лет.`);
}

//Задание 9
function exercisEninth() {
  alert(
    "Задание 9: Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные.Обратите внимание, что для свойства name значение должно быть строковым, для age – числовым, а для isAdmin – булевым."
  );

  let user = {
    name: String("Шарик"),
    age: Number(32),
    isAdmin: Boolean(true),
  };

  console.log(
    `name = ${typeof user.name}\nage = ${typeof user.age}\nisAdmin = ${typeof user.isAdmin}`
  );
}

//Задание 9.1
function exercisEninthFirst() {
  alert(
    "Задание 9.1: Добавьте объекту user свойство city of residence. Обратите внимание на то, как правильно добавлять такие методы: через точку или с помощью квадратных скобок."
  );

  let user = {
    name: String("Шарик"),
    age: Number(32),
    isAdmin: Boolean(true),
  };

  user["city of residence"] = "Moscow";
  console.log(user);
}

//Задание 9.2
function exercisEninthSecond() {
  alert(
    "Задание 9.2: Измените у объекта user свойство age на любое другое новое значение."
  );

  let user = {
    name: String("Шарик"),
    age: Number(32),
    isAdmin: Boolean(true),
  };
  console.log(`Старое значение ${user.age}`);
  user.age = 25;
  console.log(`Новое значение ${user.age}`);
}

//Задание 9.3
function exercisEninthThird() {
  alert("Задание 9.3: Удалите у объекта user свойство city of residence.");

  let user = {
    name: String("Шарик"),
    age: Number(32),
    isAdmin: Boolean(true),
  };

  user["city of residence"] = "Moscow";

  console.log(user);
  delete user["city of residence"];
  console.log(user);
}

//Задание 9.4
function exercisEninthFourth() {
  alert(
    "Задание 9.4: Создайте переменную info, присвойте ей значение с помощью метода prompt() Какую информацию хотите узнать о пользователе?.Далее обращайтесь к свойствам объекта user через переменную info. Выведите результат с помощью alert."
  );

  let user = {
    name: String("Шарик"),
    age: Number(32),
    isAdmin: Boolean(true),
  };

  let info = prompt("Какую информацию хотите узнать о пользователе?");

  console.log(user[info]);
}

//Задание 10
function exercistenth() {
  alert(
    "Задание 10: С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert() выведите на экран шаблонную строку: Привет, ИМЯ!"
  );
  let name = String(prompt("Как вас зовут?"));
  alert(`Привет, ${name}!`);
}
//Задание 1: Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). Затем запишите в нее значение 20, выведите его на экран.
//exerciseFirst();

//Задание 2: Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.
//exerciseSecond();

//Задание 3: Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.
//exerciseThird();

//Задание 4: Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).
//exerciseFourth();

//Задание 5: Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert()
//exerciseFifth();

//Задание 6: Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert().
//exerciseSixth();

//Задание 7: Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):
// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);
//exerciseSeventh();

//Задание 8: Создайте переменную age, присвойте значение с помощью метода prompt() "Сколько вам лет?". Результат вывести с помощью alert().
//exerciseEighth();

//Задание 9: Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные.
//Обратите внимание, что для свойства name значение должно быть строковым, для age – числовым, а для isAdmin – булевым.
//exercisEninth();

//Задание 9.1: Добавьте объекту user свойство city of residence. Обратите внимание на то, как правильно добавлять такие методы: через точку или с помощью квадратных скобок.
//exercisEninthFirst();

//Задание 9.2: Измените у объекта user свойство age на любое другое новое значение.
//exercisEninthSecond();

//Задание 9.3: Удалите у объекта user свойство "city of residence".
//exercisEninthThird();

//Задание 9.4: Создайте переменную info, присвойте ей значение с помощью метода prompt() "Какую информацию хотите узнать о пользователе?".Далее обращайтесь к свойствам объекта user через переменную info. Выведите результат с помощью alert.".
//exercisEninthFourth();

//Задание 10: С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert() выведите на экран шаблонную строку: Привет, ИМЯ!".
exercistenth();
