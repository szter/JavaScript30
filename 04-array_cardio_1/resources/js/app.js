// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn = inventors.filter(item => item.year >= 1500 && item.year < 1600);
console.table(bornIn);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(item => `${item.first} ${item.last}`);
console.log('2. Map results', fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year); // works for numbers
console.table(ordered);
// const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.table(ordered2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log('4. Reduce results', totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1; // to sort from more to less, otherwise it will sort from less to more
});
console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// to run in the console:

/* const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // the conventional way to create an Array from a NodeList
const links = [...category.querySelectorAll('a')]; // spread operator to create an Array from a NodeList
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de')); */


// 7. Sort Exercise
// Sort the people alphabetically by last name
/* // inventors:
const alphabetically = inventors.sort((a, b) => {
    const nameA = a.last.toLowerCase();
    const nameB = b.last.toLowerCase();
    if (a.last < b.last) return -1;
    if (a.last > b.last) return 1;
    return 0;
});
console.table(alphabetically); */

const alpha = people.sort((a, b) => {
    // use [last, first] to put each value on a separated variable
    const [aLast, aFirst] = a.split(', '); // a comma and a space
    const [bLast, bFirst] = b.split(', ');
    return (aLast > bLast) ? 1 : -1;
})
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
];

const sum = data.reduce((obj, item) => {
    obj[item] = (obj[item] + 1) || 1;
    return obj;
}, {});
console.log('8. Reduce results', sum);

const anotherSum = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
}, {});
console.log('8. Reduce results', anotherSum);

