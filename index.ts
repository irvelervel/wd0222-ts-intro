console.log('Hello TypeScript!')
console.log('does it work?')

// VARIABLES & PRIMITIVES
let student: string = 'Stefano'
let anotherStudent: string
anotherStudent = 'Riccardo'
anotherStudent = '100'

let myNumber: number = 500

let truthiness: boolean = true
let myUndefined: undefined = undefined
let myNull: null = null

console.log(truthiness)

student = 'Ganesh'

console.log(student.length)
console.log(myNumber.toString().length)

let epicodeTeacher = 'Stefano'
console.log(epicodeTeacher.length)
let specialNumber = 0

// the ability of TS to automatically figure out the type of the data,
// like in these simple examples, is called TYPE INFERENCE

let iDontKnowWhatThisIs: any = 'Agris'
// console.log(iDontKnowWhatThisIs.toFixed(10)) // <-- this crashes the browser!
// I'm allowed to write it because I specified a data type of 'any', which
// effectively shuts down the TS type checking :\

// FUNCTIONS

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(4, 5))
// 9!

console.log(addition('4', '5'))
// 45...?

const additionWithCheck = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return "you didn't pass 2 numbers!"
  }
}

console.log(additionWithCheck(2, 3))
console.log(additionWithCheck('2', '3'))
// additionWithCheck is preventing a wrong result

const additionInTypeScript = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionInTypeScript(6, 7))
// console.log(additionInTypeScript('6', '7')) // <-- this does not compile anymore!

let mixedVariable: string | number // the | is called TYPE UNION
mixedVariable = 'Stefano'
mixedVariable = 100

// console.log(mixedVariable)

type StringOrNumber = string | number // typically custom types start with an uppercase letter
let x: StringOrNumber = '50'
// StringOrNumber is a custom type (also knows as an ALIAS)
// you can create your custom types combining existing ones

const sayHello = (name: string, prefix?: string) => {
  return (prefix || 'Hello') + ' ' + name
}

console.log(sayHello('Stefano', 'Good morning'))
console.log(sayHello('Naveen', 'Good evening'))
console.log(sayHello('Agris')) // the question mark on the second argument
// allow us to invoke sayHello with just one argument if we want so

// ARRAYS

let arrayOfStrings = ['Stefano', 'Riccardo', 'Naveen', 'Agris']
arrayOfStrings.push('Diego')

let myArray: number[] = []
myArray.push(1, 2, 3)

console.log(
  arrayOfStrings
    .map((name) => name.toUpperCase())
    .filter((name) => name[0] === 'S')
)

let anotherWayOfDefiningAnArrayOfNumbers: Array<number> = [] // the <> are specifying a TYPE ARGUMENT

let mixedArray: StringOrNumber[] = [] // or : Array<StringOrNumber>
mixedArray.push('Stefano')
mixedArray.push(100)

// TUPLE
let verySpecificArray: [string, number] = ['Agris', 100]

// OBJECTS

// an interface defines the shape of an object in TS
interface Teacher {
  firstName: string
  lastName: string
  age: StringOrNumber
  country: string
  mainSkill?: string
}

let epicodeTeacher2: Teacher = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  age: 35,
  country: 'Italy',
}

epicodeTeacher2.firstName = 'Agris'
// epicodeTeacher2.skills = ['react'] // skills was not part of the original object
console.log(epicodeTeacher2.lastName.substring(0, 4))
epicodeTeacher2.age = 'thirtyfive'

let epicodeTeacher3: Teacher = {
  firstName: 'Riccardo',
  lastName: 'Gulin',
  age: 36,
  country: 'Italy',
  mainSkill: 'Backend',
}

// let bigArrayOfTeachers: Array<Teacher> = []
let bigArrayOfTeachers: Teacher[] = []

bigArrayOfTeachers.push(epicodeTeacher2)
bigArrayOfTeachers.push(epicodeTeacher3)

bigArrayOfTeachers.forEach((t) => console.log(t.lastName))

bigArrayOfTeachers.push({
  firstName: 'Diego',
  lastName: 'Banovaz',
  age: 'onemillion',
  country: 'earth',
})

interface HumanBeing {
  name: string
  gender: string
  height: number
}

interface TennisPlayer extends HumanBeing {
  favouriteHand: string
}

let topTennisPlayer: TennisPlayer = {
  name: 'Rafael Nadal',
  gender: 'male',
  height: 1.85,
  favouriteHand: 'left',
}

// GENERICS
// generics are type arguments for interfaces! Array<string>
// generics make your interfaces more FLEXIBLE

interface EpicodeUnit<T> {
  unitNumber: number
  teacher: T // the type of the teacher property is now dynamic!
  topics: string[]
}

let unit2: EpicodeUnit<string> = {
  unitNumber: 2,
  teacher: 'Stefano Miceli',
  topics: ['bootstrap', 'advanced JS'],
}

let unit3: EpicodeUnit<string[]> = {
  unitNumber: 3,
  teacher: ['Riccardo Gulin', 'Stefano Casasola'],
  topics: ['react', 'redux', 'ts'],
}

// let unit4: EpicodeUnit<{ name: string; surname: string }> = {
//   unitNumber: 4,
//   topics: ['unknown'],
//   teacher: {
//     name: 'Dan',
//     surname: 'Abramov',
//   },
// }
