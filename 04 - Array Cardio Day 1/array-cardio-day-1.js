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
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
  "1. Filter the list of inventors for those who were born in the 1500's",
  inventors.filter(({ year }) => 1500 <= year && year < 1600),
)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log(
  '2. Array of the inventors first and last names:',
  inventors.map(({ first, last }) => `${first} ${last}`),
)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log(
  '3. Sorted inventors by birthdate, oldest to youngest:',
  inventors.toSorted((a, b) => a.year - b.year),
)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log(
  '4. Total years all inventors lived together:',
  inventors
    .map(({ year, passed }) => passed - year)
    .reduce((accumulator, value) => accumulator + value, 0),
)

console.log(
  '4. Total years all inventors lived together:',
  inventors.reduce(
    (accumulator, { passed, year }) => accumulator + (passed - year),
    0,
  ),
)

// 5. Sort the inventors by years lived
console.log(
  '5. Sort the inventors by years lived:',
  inventors
    .map(inventor => ({
      ...inventor,
      age: inventor.passed - inventor.year,
    }))
    .toSorted((a, b) => a.age - b.age),
)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(
  '7. Sort the people alphabetically by last name:',
  people.toSorted((a, b) => {
    const [lastA] = a.split(', ')
    const [lastB] = b.split(', ')
    return lastA < lastB ? -1 : 1
  }),
)

// 8. Reduce Exercise
// Sum up the instances of each vehicle
const vehicle = [
  'bike',
  'bike',
  'car',
  'car',
  'car',
  'car',
  'car',
  'truck',
  'truck',
  'truck',
  'van',
  'van',
  'walk',
  'walk',
]

console.log(
  '8. Sum up the instances of each vehicle:',
  vehicle.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    {},
  ),
)
