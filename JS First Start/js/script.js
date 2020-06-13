"use strict";


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.gentres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`, '');
		if (personalMovieDB.gentres == null || personalMovieDB.gentres == '') {
			return writeYourGenres;
		} else {
			personalMovieDB.gentres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`, '');
		}
	}
}
writeYourGenres();





function sasaity() {
	const person = {
		health: 100,
		age: 20
	};
	const personTho = {
		health: 240,
		age: 30
	};
	const personThree = {
		health: 300,
		age: 40
	};
}
let personalMovieDB = Object.create(sasaity);
// personalMovieDB = {
// 	movies: {},
// 	actors: {},
// 	gentres: [],
// 	privat: false
// };

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);
// toggleVisibleMyDB(personalMovieDB.privat);

// function toggleVisibleMyDB(hiddenPrivate) {
// 	if (hiddenPrivate == true) {
// 		personalMovieDB.private = false;
// 	} else {
// 		personalMovieDB.private = true;
// 	}
// }


// console.log(personalMovieDB.person);
// console.log(personalMovieDB.personTho);
// console.log(personalMovieDB.personThree);



// function firstObj(mainObj) {
// 	let ObjCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		ObjCopy[key] = mainObj[key];
// 	}
// 	return ObjCopy;
// }

// function HelloWorld() {
// 	const obj = {
// 		a: 10,
// 		b: 120
// 	}
// }

// let numbers = {
// 	a: 5,
// 	b: 10,
// 	c: {
// 		d: 15,
// 		i: 20
// 	}
// };
// let ObjNumbers = firstObj(numbers);

// ObjNumbers.a = 10;
// ObjNumbers.c.d = 1;



// const clone = Object.assign({}, numbers);
// clone.a = 30;
// console.log(numbers);
// console.log(clone);

// // console.log(ObjNumbers);
// // console.log(numbers);


// const Arr = [1, 2, 3];
// const newArr = Arr.slice();

// newArr[1] = 10;
// console.log(Arr);
// console.log(newArr);



// function foo(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// const num = [1, 2, 3];
// foo(...num);


// const objectC = {
// 	q: 1,
// 	s: 10
// };

// const copyObjC = {
// 	...objectC
// };




// let arr = [10, 4, 12, 57, 13];
// arr.sort(test);
// console.log(arr);

// function test(a, b) {
// 	return a - b;
// }


// let str = prompt('', '');
// const products = str.split(', ');
// products.sort();

// console.log(products.join('; '));


// let arr = [1, 2, 3, 4, 5];


// arr.forEach(function (num, index, arr) {
// 	console.log(`${index} в ${num} внутри массива ${arr}`);
// });
// for (let value of arr) {
// 	console.log(value);
// }
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }









// const site = {
// 	name: "Puls",
// 	age: 20,
// 	width: 1024,
// 	height: 1024,
// 	book: {
// 		color: "green",
// 		bg: "red",
// 		cars: {
// 			color: "black",
// 			marc: "mers",
// 			country: "Russia"
// 		}
// 	},
// 	makeTest: function () {
// 		console.log('test');
// 	}
// };

// site.makeTest();
// console.log(Object.keys(site).length);


// const {
// 	color,
// 	bg,
// 	cars
// } = site.book;
// console.log(color);


// for (let key in site) {
// 	if (typeof (site[key]) === 'object') {
// 		for (let i in site[key]) {
// 			console.log(`Свойство: ${i} имеет значение ${site[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство: ${key} имеет значение ${site[key]}`);
// 	}
// }





// ////////////////////////////////////////////////////////////////////////////////////
// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов уже посмотрели? ', '');
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов уже посмотрели? ', '');
// 	}
// }
// start();


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	gentres: [],
// 	privat: false
// };


// function rememberMyFilms() {
// 	for (let i = 1; i <= 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов? ', ''),
// 			b = prompt('На сколько вы его оцените? ', '');
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }
// rememberMyFilms();

// function dtectPersonalLevel() {
// 	if (personalMovieDB.count != null && personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMovieDB.count > 30) {
// 		console.log('Вы киноман!');
// 	} else {
// 		console.log('Вы лох!');
// 	}
// }
// dtectPersonalLevel();


// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }
// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.gentres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`, '');
// 	}
// }

// function test(age, callback) {
// 	console.log(`Мне - ${age}`);
// 	callback();
// }

// function call() {
// 	console.log(`Я лох`);
// }
// test("28", call);
// ////////////////////////////////////////////////////////////////////////////////////







// test("28", function () {
// 	console.log(`Я лох`);
// });



// const logger = "12.21212";
// console.log(logger.slice(0, 7) + logger.slice(7, 13));
// alert(logger.slice(0, 7) + logger.slice(7, 13));
// console.log(parseInt(logger)); // Number just logger = string
// console.log(parseFloat(logger));
// console.log(typeof parseFloat(logger));
// console.log(typeof (logger));


// function enterFirstMassage(name, surname) {
// 	name = prompt('Введите имя: ', '');
// 	surname = prompt('Введите фамилию: ', '');
// 	console.log(`Добро пожаловать, ${name} ${surname}!`);
// }

// function statsMan(a, b) {
// 	return (a + b);
// }

// console.log(statsMan(5, 5));
// console.log(statsMan(5, 6));
// console.log(statsMan(5, 7));
// console.log(statsMan(5, 8));

// enterFirstMassage();

// let minAge = 18;
// let age = prompt("Сколько вам лет", "");
// (age >= 18) ? alert(true): alert(false)

// const answer = [];
// answer[0] = prompt('Введите ваше имя: ', '');
// answer[1] = +prompt('Введите сколько вам лет: ', '');
// answer[2] = prompt('Введите вашу фамилию: ', '');

// console.log(answer[0]);
// console.log(answer[1]);
// console.log(answer[2]);
// const user = prompt('Введите своё имя: ', '');
// alert(`Ваше имя, ${user} !`);
// alert("Ваше имя: " + user + " !");

// const eNumOfFilms = +prompt('Сколько фильмов уже посмотрели? ', '');
// let numberOfFilms = eNumOfFilms;
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	gentres: [],
// 	privat: false
// };


// console.log(personalMovieDB);