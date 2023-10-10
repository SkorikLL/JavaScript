"use strict";

//Задание 1
function exerciseFirst() {
  let arr = [1, 5, 4, 10, 0, 3];
  for (let item of arr) {
    if (item === 10) {
      console.log(item);
      break;
    }

    console.log(item);
  }
}

//Задание 2
function exerciseSecond() {
  let arr = [1, 5, 4, 10, 0, 3];
  let x = 10;
  console.log(`индекс числа ${x} равна ${arr.indexOf(x)}`);
}

//Задание 3
function exerciseThird() {
  let arr = [1, 3, 5, 10, 20];
  console.log(arr.join(" "));
}

//Задание 4
function exerciseFourth() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
      arr[i].push(1);
    }
  }
  console.log(arr);
}

//Задание 5
function exerciseFifth() {
  let arr = [1, 1, 1];
  arr.push(2, 2, 2);
  console.log(arr);
}

//Задание 6
function exerciseSixth() {
  let arr = [9, 8, 7, "a", 6, 5];
  arr.sort((a, b) => a - b);
  arr.pop();
  console.log(arr);
}

//Задание 7
function exerciseSeventh() {
  let arr = [9, 8, 7, 6, 5];
  let getUser = Number(prompt("Угадайте число: "));

  arr.includes(getUser) ? alert("Угадал") : alert("Не угадал");
}

//Задание 8
function exerciseEighth() {
  let text = "abcdef";
  let arrText = [...text];
  arrText.reverse();
  console.log(arrText.join(""));
}

//Задание 9
function exercisNinth() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  let newArr = arr.flat();
  console.log(newArr);
}

//Задание 10
function exercisTenth() {
  let arr = [5, 1, 4, 9];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i === arr.length - 1) {
      console.log(`Сумма текущего итерации ${sum}, следующего элемента нет!`);
    } else {
      console.log(
        `Сумма текущего итерации ${sum}, следующий элемент ${arr[i + 1]}`
      );
    }
  }
}

function exercisEleventh() {
  let arr = [5, 1, 4, 9, 10];
  console.log(arr);

  const result = arr.map((el) => el * el);
  console.log(result);
}

function exercisTwelfth() {
  let getLengthWords = ["слово", "", "слог", "длинное предложение", "буква"]; // [5, 0, 4, 19, 5]
  let newArr = [];
  for (let item of getLengthWords) {
    newArr.push(item.length);
  }
  console.log(newArr);
}
function exercisThirteenth() {
  function filterPositive(array) {
    return array.filter((el) => el < 0);
  }

  console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]
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

//Задание 8
//exerciseEighth();

//Задание 9:
//exercisNinth();

//Задание 10:
//exercisTenth();

//Задание 11:
//exercisEleventh();

//Задание 12:
//exercisTwelfth();

//Задание 13:
//exercisThirteenth();
