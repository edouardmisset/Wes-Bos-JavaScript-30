// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
]

const comments = [
  { text: "Love this!", id: 523_423 },
  { text: "Super good", id: 823_423 },
  { text: "You are the best", id: 2_039_842 },
  { text: "Ramen is my fav food ever", id: 123_523 },
  { text: "Nice Nice Nice!", id: 542_328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const thisYear = new Date().getFullYear()

console.log("Some Checks: is at least one person 19 or older?", people.some(({ year }) => 19 < thisYear - year))

// Display those who are 19 or older
console.log(
  "People who are 19 or older:",
  people.filter(({ year }) => 19 < thisYear - year).map(({ name }) => name)
)

// Array.prototype.every() // is everyone 19 or older?
console.log("Every Check: is everyone 19 or older?", people.every(({ year }) => 19 < thisYear - year))

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823_423
const selectedId = comments.find(({ id }) => id === 823_423)
console.log("Comment with id of 823_423: ", selectedId?.text)

// Array.prototype.findIndex()
// Find the comment with this ID
const selectedIndex = comments.findIndex(({ id }) => id === 823_423)
console.log("Find the index of comment with ID 823_423:", selectedIndex)

// delete the comment with the ID of 823_423
const spliced = [
  ...comments.slice(0, selectedIndex),
  ...comments.slice(selectedIndex + 1),
]
console.log("Updated comments after deletion:", spliced)
console.log("Original comments:", comments)
