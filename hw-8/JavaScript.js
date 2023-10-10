"use strict";

//Задание 1
function exerciseFirst() {
  const people = [
    { name: "Глеб", age: 29 },
    { name: "Анна", age: 17 },
    { name: "Олег", age: 7 },
    { name: "Оксана", age: 47 },
  ];

  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
  console.log(
    people.sort(function (a, b) {
      return a.age - b.age;
    })
  );

  // код выше должен вывеcти =>
  // [
  // { name: 'Олег', age: 7 },
  // { name: 'Анна', age: 17 },
  // { name: 'Глеб', age: 29 },
  // { name: 'Оксана', age: 47 }
  // ]
}

//Задание 2
function exerciseSecond() {
  function isPositive(number) {
    if (number > 0) {
      return number;
    }
  }

  function isMale(people) {
    if (people.gender === "male") {
      return people.gender;
    }
  }

  function filter(arr, callback) {
    const newArr = [];
    for (let item of arr) {
      if (callback(item)) {
        newArr.push(item);
      }
    }
    return newArr;
  }
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

  const people = [
    { name: "Глеб", gender: "male" },
    { name: "Анна", gender: "female" },
    { name: "Олег", gender: "male" },
    { name: "Оксана", gender: "female" },
  ];

  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]
}

//Задание 3
function exerciseThird() {
  let deadline = 30;

  const timer = (deadline) => {
    const interval = setInterval(() => {
      console.log(new Date());
    }, 3000);
    setTimeout(() => {
      clearInterval(interval);
      console.log("Время истекло!");
    }, deadline * 1000);
  };
  timer(deadline);
}

//Задание 4
function exerciseFourth() {
  function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
    //callback();
  }

  delayForSecond(function () {
    console.log("Привет, Глеб!");
  });
}

//Задание 5
function exerciseFifth() {
  // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
  // а затем вызывает переданный колбэк
  function delayForSecond(cb) {
    setTimeout(() => {
      console.log("Прошла одна секунда");
      if (cb) {
        cb();
      }
    }, 1000);
  }

  // Функция sayHi выводит в консоль приветствие для указанного имени
  function sayHi(name) {
    console.log(`Привет, ${name}!`);
  }

  // Код выше менять нельзя

  // Нужно изменить код ниже:
  delayForSecond(() => sayHi("Глеб"));
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
