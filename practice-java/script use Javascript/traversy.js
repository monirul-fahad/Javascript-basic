var companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  /*
//   for loop 

// for (var i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }


//   for Each

// companies.forEach(function(company) {
//     console.log(company.name)
// })


// filter    for loop

// get 21 or older 

// var mature = [];
// for (var i = 0; i < ages.length; i++) {
//  if(ages[i] >= 21){
//      mature.push(ages[i])
//  }
// }

var mature = ages.filter(function(age){
    if (age >= 21) {
        return true
    }
});
// console.log(mature)

// retail companies
/*
var retailCompanies = companies.filter(function(company){
    if (company.category === 'Retail') {
        return true;
    }
});

console.log(retailCompanies)

// finance companies
var financeCompanies = companies.filter(function (company) {
    if (company.category === 'Finance') {
        return true
    }
});
console.log(financeCompanies)


// get 80s companies
var eightiesCompanies = companies.filter(function (company) {
    if (company.start >= 1980 && company.start < 1990) {
        return true
    }
});
// console.log(eightiesCompanies)

// companies lasted 10 years or more 
var lastedTenYears = companies.filter(function (company){
    if (company.end - company.start >= 10){
        return true
    }
});
// simple way
var lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears)


// map function


// create array of companies name.

var companyNames = companies.map(function (company) {
    return company.name
});
// console.log(companyNames)

var testMap = companies.map(function(company) {
  return `${company.name} (${company.start} - ${company.end})`;
});
// simple way 
var testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

var agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare)

var agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo)

var agesMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(agesMap)


     // sort function 

    // sort companies by start years 

// var sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1
//     } else {
//         return -1
//     }
// })   
var sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1 ))
console.log(sortedCompanies)

var sortAges = ages.sort ((a,b) => a - b )
console.log(sortAges)

// Reduce

// for loop way 

// var ageSum = 0
// for (var i = 0; i < ages.length; i++) {
//      ageSum += ages[i]
// }

// .reduce way 
var ageSum = ages.reduce(function (total, age) {
    return total + age
}, 0 )
// console.log(ageSum)

// simple way 
var ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum);

// total year of all companies 
var totalYear = companies.reduce (function (total, company) {
    return total + (company.end - company.start)
}, 0 )
console.log(totalYear)

// simple way 
var totalYear = companies.reduce((total, company) => total + (company.end - company.start ), 0)
console.log(totalYear) */

// var combained = ages
// .map(age => age * 2)
// .filter( age => age >= 40)
// .sort( (a, b) => b - a)
// .reduce((a, b) => a + b , 0 );

// console.log(combained);


// var sortAges = ages.sort ((a,b) => a - b )
// console.log(sortAges)


// var sortAges = ages.sort (function (uhggh, ugh) {
//     return ugh - uhggh
// })
// console.log(sortAges)
