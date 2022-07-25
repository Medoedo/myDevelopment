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
        a = prompt("What was last film u watched?", "").trim();
        b = prompt("How can u mark it?", "").trim();

        while (a === null || b === null || a === "" || b === "" || a.length > 50 || b.length > 50) {
            a = prompt("What was last film u watched?", "").trim();
            b = prompt("How can u mark it?", "").trim(); 
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
        personalMovieDB.genres[i] = prompt(`Your favorite genres under number ${i + 1}`).trim();
    }
}

writeYourGenres();

console.log(personalMovieDB);


function getCoupeNumber(a) {

    if (typeof(a) === typeof("s") || a < 0 || a != Math.round(a)) {
        return "Ошибка. Проверьте правильность введеного номера места";
    } else if (a === 0 || a > 36) {
        return "Таких мест в вагоне не существует";
    } else if (a >= 1 && a <= 4) {
        return 1;
    } else if (a >= 5 && a <= 8) {
        return 2;
    } else if (a >= 9 && a <= 12) {
        return 3;
    } else if (a >= 13 && a <= 16) {
        return 4;
    } else if (a >= 17 && a <= 20) {
        return 5;
    } else if (a >= 21 && a <= 24) {
        return 6;
    } else if (a >= 25 && a <= 28) {
        return 7;
    } else if (a >= 29 && a <= 32) {
        return 8;
    } else if (a >= 33 && a <= 36) {
        return 9;
    } 
}

console.log(getCoupeNumber(35.6));



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs (plan) {
        const {programmingLangs} = plan.skills,
              {age} = plan;  

        let str = `Мне ${age} и я владею языками:`;

        for (let key in programmingLangs) {
            str += ` ${programmingLangs.toUpperCase() }`;
        }
        return str;
    }
};

// console.log(showExperience(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;

    let str = "";
    for (let key in programmingLangs) {
        if (key === null) {
            return str;
        } else {
            str += `Язык ${key} изучен на ${programmingLangs[key]}`;
        }
        str += "\n";
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));