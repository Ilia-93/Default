"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели за свою жизнь?", "");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt("Один из просмотреннх фильмов?", ""),
   b = prompt("На скольок вы его оцените?", ""),
   c = prompt("Один из просмотреннх фильмов?", ""),
   d = prompt("На скольок вы его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);