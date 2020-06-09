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
const a = prompt('Один из последних просмотренных фильмов? ', ''),
	b = prompt('На сколько вы его оцените? ', ''),
	c = prompt('Один из последних просмотренных фильмов? ', ''),
	d = prompt('На сколько вы его оцените? ', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);