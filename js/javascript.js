"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы посмотрели за свою жизнь?", "");

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы посмотрели за свою жизнь?", "");
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
   const a = prompt("Один из просмотреннх фильмов?", "");
   const b = prompt("На скольок вы его оцените?", "");

   personalMovieDB.movies[a] = b;
   
   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
   } else {
      i--;
   }
 }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count <= 10) {
   console.log("Просмотреннно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
   console.log("Вы начинающий киноман");
} else if (personalMovieDB.count >= 30) {
   console.log("Вы прожжёный киноман");
} else {
   console.log("Error");
 }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genre;
   }
}

writeYourGenres();
