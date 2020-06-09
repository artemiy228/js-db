"use strict";
// let minAge = 18;
// let age = prompt("Сколько вам лет", "");
// (age >= 18) ? alert(true) : alert(false)

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

const eNumOfFilms = +prompt('Сколько фильмов уже посмотрели? ', '');
let numberOfFilms = eNumOfFilms;
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	gentres: [],
	privat: false
};
for (let i = 1; i <= 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов? ', ''),
		b = prompt('На сколько вы его оцените? ', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		console.log('error');
		i--;
	}
}


if (personalMovieDB.count != null && personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман!');
} else {
	console.log('Вы лох!');

}


console.log(personalMovieDB);