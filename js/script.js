"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("How many films did u watch?", "");

    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many fils did u watch?", "");
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

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Cool");
    } else if (personalMovieDB.count > 30) {
        alert("Kinoman");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    let a, b;

    for (let i = 0; i < 2; i++) {
        a = prompt("What was last film u watched?", "");
        b = prompt("How can u mark it?", "");

        while (a === null || b === null || a === "" || b === "" || a.length > 50 || b.length > 50) {
            a = prompt("What was last film u watched?", "");
            b = prompt("How can u mark it?", ""); 
        }
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genres under number ${i + 1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);
