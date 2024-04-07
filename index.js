// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntil = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`$(firstName) retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//   // const scoreOneAvg = (score1 + score1 + score1) / 3;
//   // const scoreTwoAvg = (score2 + score2 + score2) / 3;
//   // const scoreThreeAvg = (score3 + score3 + score3) / 3;
//   console.log(score1, score2, score3);
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
//   } else {
//     return "No team wins...";
//   }
// };

// checkWinner(scoreKoalas, scoreDolphins);

// const ages = [calcAge(years[0]), calcAge(years[1])]
// const new ength = friends.push("Jay")

/* Write your code below. Good luck! 🙂 */

// const calcTip = (value) => {
//     const tip15 = (15 / 100);
//     const tip20 = (20 / 100);

// return bill >= 50 && bill <= 300 ? bill * tip15 : bill * tip20
// }

//   const bills = [125, 555, 44]
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ]

// object
// when I prompt job = teacher
// const jonas = {
//   job: "teacher",
// };

// const interested = prompt("some text");

// if (jonas[interested]) {
//   console.log(jonas[interested]);
// } else {
//   console.log("try again");
// }

// calcAge: function() {
//     this.age = 2037 - this.birthYeah
//     return this.age
// }

// getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} years old ${jonas.teacher} and he has a ${this.driverLicense ? 'a' : 'no'} Driver license`
// }

/* Write your code below. Good luck!  */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})
//   `);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})
//       `);
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   const sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     return sum / arr.length;
//   }
// }

// calcAverage(totals);

// WINDOWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnClose = document.querySelector('close-model');

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);

//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });
