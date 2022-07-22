"use strict";

let numberOfFilms = prompt("How many fils did u watch?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Malo");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Cool");
} else if (personalMovieDB.count > 30) {
    alert("Kinoman");
}

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

<<<<<<< HEAD
    console.log(personalMovieDB);

console.log("just okay");
=======
console.log(personalMovieDB);


    
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

//     for (let k = 0; k < lines - i; k++) {
//         result += " ";
//     }
//     for (let j = 0; j < 1 + i * 2; j++) {
//         result += "*";
//     }

//     result += "\n";
// }
// console.log(result);
>>>>>>> 8ee176c (new commit in new branch just for check)
