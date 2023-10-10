"use strict";
function gameRememberWord() {
  const examinationString = (string) => {
    let flag = true;
    while (flag) {
      if (string === null) {
        string = false;
        return string;
      } else if (string.trim() === "") {
        string = prompt(
          "Вы нечего не ввели, введите данный! \nЕсли вы хотите выйти нажмите на кнопку 'Отмена'"
        );
      } else {
        flag = false;
        return string;
      }
    }
  };

  function win(count) {
    if (count === 2) {
      alert("Поздравляю!!!");
    } else if (count === 1) {
      alert("Вы были близки к победе!");
    } else {
      alert("Вы ответили не верно");
    }
  }

  function clickCancel(answerUser) {
    if (answerUser === false) {
      return false;
    } else {
      return true;
    }
  }

  let arr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  let count = Number(0);

  arr = arr.sort(() => Math.random() - 0.5);

  alert(arr.join("  "));

  let answerUserOne = prompt("Чему равнялся первый элемент массива?");
  answerUserOne = examinationString(answerUserOne);

  if (!clickCancel(answerUserOne)) {
    alert("Пока!");
  } else {
    if (answerUserOne.toLowerCase() === arr[0].toLowerCase()) {
      count++;
    }

    let answerUserTwo = prompt("Чему равнялся последний элемент массива?");
    answerUserTwo = examinationString(answerUserTwo);
    if (!clickCancel(answerUserTwo)) {
      alert("Пока!");
    } else {
      if (answerUserTwo.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        count++;
      }
    }
  }

  win(count);
}

function playInPuzzles() {
  const examinationNumber = (number) => {
    let flag = true;
    while (flag) {
      if (isNaN(number) || number === "") {
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

  let numberMonth = prompt("Введите номер месяца (от 1 до 12): ");
  numberMonth = examinationNumber(numberMonth);

  if (numberMonth !== null) {
    printSeason(Number(numberMonth));
  }
}
