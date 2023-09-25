"use strict";

//Задание 1
function exerciseFirst() {
  const getMaxNumber = (number1, number2) => {
    if (number1 < number2) {
      return number1;
    } else {
      return number2;
    }
  };
  console.log(`Наименьшее число из двух чисел: ${getMaxNumber(6, 4)}`);
}

//Задание 2
function exerciseSecond() {
  const printTextEven = (number) =>
    number % 2 === 0 ? alert("Число четное") : alert("Число нечетное");

  //Проверка четное число ввел пользователь или нет
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number === "") {
        number = prompt("Вы ввели не число! Пожалуйста, введите любое число");
      } else if (number === null) {
        alert("Пока!");
        flag = false;
      } else {
        printTextEven(number);
        flag = false;
      }
    }
  };

  let number = prompt("Пожалуйста, введите любое число");
  examinationNumber(number);
}

//Задание 3
function exerciseThird() {
  const alertSquareNumber = (number) =>
    console.log(`Квадрат числа ${number} = ${Math.pow(number, 2)}`);

  const returnSquareNumber = (number) => Math.pow(number, 2);

  //Проверка четное число ввел пользователь или нет
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number === "") {
        number = prompt("Вы ввели не число! Пожалуйста, введите любое число");
      } else if (number === null) {
        alert("Пока!");
        flag = false;
        return number;
      } else {
        flag = false;
        return number;
      }
    }
  };

  let getNumberUser = prompt("Пожалуйста, введите любое число");
  let trueNumber = examinationNumber(getNumberUser);
  if (trueNumber !== null) {
    alertSquareNumber(trueNumber);
    let result = returnSquareNumber(trueNumber);
    console.log(result);
  }
}

//Задание 4
function exerciseFourth() {
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number < 0 || number === "") {
        number = prompt("Вы ввели неправильное значение");
      } else if (number === null) {
        alert("Пока!");
        flag = false;
        return number;
      } else {
        flag = false;
        return number;
      }
    }
  };
  const alertWelcomeOrHello = (years) =>
    years >= 0 && years <= 12
      ? alert("Привет, друг!")
      : alert("Добро пожаловать!");

  let getYearsUser = prompt("Сколько вам лет?");
  let trueNumber = examinationNumber(getYearsUser);
  if (trueNumber !== null) {
    alertWelcomeOrHello(trueNumber);
  }
}

//Задание 5
function exerciseFifth() {
  const examinationNumber = (numberFirst, numberSecond) => {
    if (
      isNaN(numberFirst) ||
      isNaN(numberSecond) ||
      numberFirst === "" ||
      numberSecond === ""
    ) {
      alert("Одно или оба значения не являются числом");
    } else if (numberFirst === null || numberSecond === null) {
      alert("Пока!");
    } else {
      return alert(`Произведение данных чисел = ${numberFirst * numberSecond}`);
    }
  };

  let getYearsUserFirst = prompt("Введите первое число: ");
  let getYearsUserSecond = prompt("Введите второе число: ");
  examinationNumber(getYearsUserFirst, getYearsUserSecond);
}

//Задание 6
function exerciseSixth() {
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number === "") {
        number = prompt("Переданный параметр не является числом");
      } else if (number === null) {
        alert("Пока!");
        flag = false;
        return number;
      } else {
        flag = false;
        return number;
      }
    }
  };
  const alertSquareNumber = (number) =>
    alert(`${number} в кубе равняется ${Math.pow(number, 2)}`);

  let getYearsUser = prompt("Введите число: ");
  let trueNumber = examinationNumber(getYearsUser);
  if (trueNumber !== null) {
    alertSquareNumber(trueNumber);
  }
}

//Задание 7
function exerciseSeventh() {
  function getRectangleArea() {
    return `Площадь круга равна ${Math.round(
      Math.PI * (this.radius * this.radius)
    )} при радиусе ${this.radius}`;
  }

  function getRectanglePerimeter() {
    return `Периметр окружности равна ${Math.round(
      2 * Math.PI * this.radius
    )} при радиусе ${this.radius}`;
  }

  const square1 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };

  const square2 = {
    radius: 7,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };

  console.log(square1.getArea());
  console.log(square2.getArea());
  console.log(square1.getPerimeter());
  console.log(square2.getPerimeter());
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

//Задание 6:
exerciseSixth();

//Задание 7:
//exerciseSeventh();
