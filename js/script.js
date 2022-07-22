"use strict"

let numberOfFilms = prompt("How many fils did u watch?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("What was last film u watched?", ""),
    b = prompt("How can u mark it?", ""),
    c = prompt("What was last film u watched?", ""),
    d = prompt("How can u mark it?", "");

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

console.log("just okay");
