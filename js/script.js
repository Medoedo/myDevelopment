// "use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt("How many films did u watch?", "");
    
//         while (personalMovieDB.count === "" || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt("How many fils did u watch?", "");
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             alert("Malo");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             alert("Cool");
//         } else if (personalMovieDB.count > 30) {
//             alert("Kinoman");
//         }
//     },
//     rememberMyFilms: function() {
//         let a, b;
    
//         for (let i = 0; i < 2; i++) {
//             a = prompt("What was last film u watched?", "");
//             b = prompt("How can u mark it?", "");
    
//             while (a === null || b === null || a === "" || b === "" || a.length > 50 || b.length > 50 || isNaN(b)) {
//                 a = prompt("What was last film u watched?", "");
//                 b = prompt("How can u mark it?", ""); 
//             }
//             personalMovieDB.movies[a] = b;
//         }
//     },
//     showMyDB: function() {
//         if (personalMovieDB.privat === false) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 0; i < 3; i++) {
//             let a = prompt(`Your favorite genres under number ${i + 1}`, "");
//             if (a == null || a === "") {
//                 i--;
//             } else {
//                 personalMovieDB.genres[i] = a;
//             }
//         }
    
//         personalMovieDB.genres.forEach((key, index) => {
//             console.log(`Людимый жанр #${index + 1} - это ${key}`);
//         });
//     },
//     toggleVisibleMyDB: function() {
//         personalMovieDB.privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false;
//     }
// };

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// *****

// function getCoupeNumber(a) {

//     if (typeof(a) === typeof("s") || a < 0 || a != Math.round(a)) {
//         return "Ошибка. Проверьте правильность введеного номера места";
//     } else if (a === 0 || a > 36) {
//         return "Таких мест в вагоне не существует";
//     } else if (a >= 1 && a <= 4) {
//         return 1;
//     } else if (a >= 5 && a <= 8) {
//         return 2;
//     } else if (a >= 9 && a <= 12) {
//         return 3;
//     } else if (a >= 13 && a <= 16) {
//         return 4;
//     } else if (a >= 17 && a <= 20) {
//         return 5;
//     } else if (a >= 21 && a <= 24) {
//         return 6;
//     } else if (a >= 25 && a <= 28) {
//         return 7;
//     } else if (a >= 29 && a <= 32) {
//         return 8;
//     } else if (a >= 33 && a <= 36) {
//         return 9;
//     } 
// }

// console.log(getCoupeNumber(35.6));



// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs (plan) {
//         const {programmingLangs} = plan.skills,
//               {age} = plan;  

//         let str = `Мне ${age} и я владею языками:`;

//         for (let key in programmingLangs) {
//             str += ` ${programmingLangs.toUpperCase() }`;
//         }
//         return str;
//     }
// };

// console.log(showExperience(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;

//     let str = "";
//     for (let key in programmingLangs) {
//         if (key === null) {
//             return str;
//         } else {
//             str += `Язык ${key} изучен на ${programmingLangs[key]}`;
//         }
//         str += "\n";
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));



// const someString = 'This is some strange string';
// console.log(someString.length);
// function reverse(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         let j = str.length - 1 - i;
//         newStr += str[j];
//     }
//     return newStr;
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     arr = [...baseCurrencies, ...additionalCurrencies];
//     let str = 'Доступные валюты:\n';

//     if (arr.length === 0) {
//         return "Нет доступных валют";
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== missingCurr) {
//             str += arr[i];
//         }
//         if (i != arr.length - 1) {
//             str += '\n';
//         }
//     }
//     return str;
// }



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = data.shops.map((item) => item.width * item.length),
//         sum = 0;

//     for (let i = 0; i < square.length; i++) {
//         sum += square[i];
//     }
//     sum *= data.moneyPer1m3 * data.height;
    
//     if (sum < data.budget) {
//         return "Бюджета достаточно";
//     } else {
//         return "Бюджета недостаточно";
//     }
// }

// isBudgetEnough(shoppingMallData);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     let newArr = [],
//         empty = [];
//     arr.sort();
//     console.log(arr);
    
//     for (let i = 0; i < 3; i++) {
//         let k = 0;
//         for (let j = i * 3; j < (3 + i * 3); j++) {
//             empty[k] = arr[j];
//             k++;
//         }
//         newArr[i] = [...empty];
//     }

//     newArr[3] = "Оставшиеся студенты:";
//     if (arr.length < 10) {
//         newArr[3] = "Оставшиеся студенты: -";
//     } else {
//         for (let i = 9; i < arr.length; i++) {
//             newArr[3] += ` ${arr[i]}`;
//             if (i != arr.length - 1) {
//                 newArr[3] += `,`;
//             } 
//         }
//     }
//     return newArr;
// }

// sortStudentsByGroups(students);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = prop ? 'Открыто' : 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);