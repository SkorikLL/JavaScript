"use strict";

function playInPuzzles() {
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number <= 0 || number > 12) {
        number = Number(prompt("Вы ввели неправильное значение"));
      } else {
        flag = false;
        return number;
      }
    }
  };

  const printSeason = (monthNumber) => {
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
  };

  let numberMonth = Number(prompt("Введите номер месяца (от 1 до 12): "));
  numberMonth = examinationNumber(numberMonth);
  printSeason(numberMonth);
}
