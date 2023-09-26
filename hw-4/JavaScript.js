"use strict";

//Задание 1
function exerciseFirst() {
  let i = 0;
  const n = 2;

  do {
    console.log("Привет");
    i++;
  } while (i < n);
}

//Задание 2
function exerciseSecond() {
  console.log("Задание 2\nВыведите в консоль цифры от 1 до 5.");
  let count = 5;
  for (let index = 1; index <= count; index++) {
    console.log(index);
  }
}

//Задание 3
function exerciseThird() {
  console.log("Задание 3\nВыведите в консоль цифры от 7 до 22.");
  let count = 22;
  for (let index = 7; index <= count; index++) {
    console.log(index);
  }
}

//Задание 4
function exerciseFourth() {
  const salary = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
  };

  for (const key in salary) {
    if (salary[key]) {
      alert(`${key} — зарплата ${salary[key]} долларов.`);
    }
  }
}
//Задание 5
function exerciseFifth() {
  let n = 1000;

  //num счетчик
  let num = 0;

  while (n > 50) {
    //n == n / 2;
    n /= 2;
    num++;
  }

  alert(`n = ${n}\nnum = ${num}`);
}

//Задание 6
function exerciseSixth() {
  let firstFriday = 4;

  for (firstFriday; firstFriday <= 31; firstFriday += 7) {
    alert(
      `Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`
    );
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

//Задание 6:
exerciseSixth();
