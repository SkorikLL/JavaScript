"use strict";

//Задание 1
function exerciseFirst() {
  let text = "js";
  console.log(text.toUpperCase());
}

//Задание 2
function exerciseSecond() {
  function searchStart(arr, word) {
    let arrTrue = [];
    let regexp = new RegExp(`^${word}`, "i"); // используя такую запись создания регулярного
    // выражения, мы получим то, что хотим. Например, при вводе 'Пункт' мы получим регулярное
    // выражение /Пункт/

    arr.forEach((el) => {
      if (regexp.test(el)) {
        // если есть совпадения с регулярным выражением,
        arrTrue.push(el);
      }
    });
    console.log(arrTrue);
  }

  searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"); // ['кошка', 'комар']
  searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"); // ['груша']
  searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"); // []
}

//Задание 3
function exerciseThird() {
  let number = 32.58884;
  console.log(
    `Число ${number} округлено до меньшего целого ${Math.floor(number)}`
  );
  console.log(
    `Число ${number} округлено до большего целого ${Math.ceil(number)}`
  );
  console.log(
    `Число ${number} округлено до ближайшего целого ${Math.round(number)}`
  );
}

//Задание 4
function exerciseFourth() {
  const arr = [52, 53, 49, 77, 21, 32];

  console.log(`Наименьшее число = ${Math.min(...arr)}`);

  console.log(`Наибольшее числа = ${Math.max(...arr)}`);
}

//Задание 5
function exerciseFifth() {
  function getRandomIntInclusive(numberOne, numberSecond) {
    let min = Math.ceil(Math.min(numberOne, numberSecond));
    let max = Math.floor(Math.max(numberOne, numberSecond));
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  console.log(getRandomIntInclusive(1, 2));
}

//Задание 6
function exerciseSixth() {
  function getRandomIntInclusive(numberOne, numberSecond) {
    let min = Math.ceil(Math.min(numberOne, numberSecond));
    let max = Math.floor(Math.max(numberOne, numberSecond));
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function getRandomArrNumber(lengthArr) {
    let newArr = [];
    for (let i = 0; i < Math.floor(lengthArr / 2); i++) {
      newArr.push(getRandomIntInclusive(0, lengthArr));
    }
    return newArr;
  }

  console.log(getRandomArrNumber(12)); // [6, 2, 7] - массив заполнен случайными числами
}

//Задание 7
function exerciseSeventh() {
  function getRandomIntInclusive(numberOne, numberSecond) {
    let min = Math.ceil(Math.min(numberOne, numberSecond));
    let max = Math.floor(Math.max(numberOne, numberSecond));
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  console.log(getRandomIntInclusive(8, 3));
}

//Задание 8
function exerciseEighth() {
  let nowDate = new Date();
  console.log(nowDate.getDate());
}

//Задание 9
function exercisNinth() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 73);
  console.log(currentDate);
}

//Задание 10
function exercisTenth() {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  let date = new Date(
    prompt(`Введите год (в форме ГГГГ)`),
    prompt(`Введите номер месяца (от 1 до 12)`) - 1,
    prompt(`Введите день месяца (от 1 до 31)`),
    prompt(`Введите час (от 1 до 24)`),
    prompt(`Введите минуты (от 1 до 60)`),
    prompt(`Введите секунды (от 1 до 60)`)
  );

  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (minute < 10) {
    // если минут будет меньше 10,
    minute = "0" + minute; // то перед ними поставим 0
  }
  if (second < 10) {
    // если секунд будет меньше 10,
    second = "0" + second; // то перед ними поставим 0
  }

  console.log(
    `Дата: ${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} - это  ${
      days[date.getDay()]
    }\nВремя: ${date.getHours()}:${minute}:${second}`
  );
}

function exercisEleventh() {
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

//Задание 1
exerciseFirst();

//Задание 2:
//exerciseSecond();

//Задание 3:
//exerciseThird();

//Задание 4:
//exerciseFourth();

//Задание 5:
//exerciseFifth();

//Задание 6:
//exerciseSixth();

//Задание 7:
//exerciseSeventh();

//Задание 8
//exerciseEighth();

//Задание 9:
//exercisNinth();

//Задание 10:
//exercisTenth();

//Задание 11:
//exercisEleventh();
