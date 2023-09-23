"use strict";

//Задание 1
function exerciseFirst() {
  let password = "пароль";
  let user = prompt("Введите пароль");
  user === password
    ? alert("Пароль введен верно")
    : alert("Пароль введен неправильно");
}

//Задание 2
function exerciseSecond() {
  let c = 2;
  c > 0 && c < 10 ? alert("Верно") : alert("Неверно");
}

//Задание 3
function exerciseThird() {
  let d = 150;
  let e = 20;
  d > 100 || e > 100 ? alert("Верно") : alert("Неверно");
}

//Задание 4
function exerciseFourth() {
  let a = "2";
  let b = "3";
  // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
  alert(Number(a) + Number(b));
}

//Задание 5
function exerciseFifth() {
  let monthNumber = Number(prompt("Введите номер месяца"));

  switch (monthNumber) {
    case 1:
    case 2:
      alert("Зима");
      break;

    case 3:
    case 4:
    case 5:
      alert("Весна");
      break;

    case 6:
    case 7:
    case 8:
      alert("Лето");
      break;

    case 9:
    case 10:
    case 11:
      alert("Осень");
      break;

    case 12:
      alert("Зима");
      break;

    default:
      alert("Нужно было вести число от 1 до 12");
      break;
  }
}

//Задание 7
function exerciseSeventh() {
  console.log("Задание 7");
  let number = Number(prompt("Пожалуйста, введите любое число"));

  if (isNaN(number)) {
    alert("Вы ввели не число!!!!");
  } else if (number % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
}

//Задание 1
//exerciseFirst();

//Задание 2:
//exerciseSecond();

//Задание 3:
//exerciseThird();

//Задание 4:
//exerciseFourth();

//Задание 5:
//exerciseFifth();

//Задание 7:
exerciseSeventh();
