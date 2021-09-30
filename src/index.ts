let id: number = 5
let company: string = 'Jordan'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

x = true
age = 30

// Array
let ids: number[] = [1, 2, 3, 4]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Jordan', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Jordan'],
  [2, 'Jack'],
  [3, 'Jill'],
]

// Union - more than one type
let pid: string | number = 22
pid = 'twenty-two'

// Enum - named constants, numeric or string

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction1.Up)
console.log(Direction2.Up)

// Objects
const user: {
  id: number
  name: string
} = {
  id: 1,
  name: 'Jordan',
}

type User = {
  id: number
  name: string
}

const user1: User = {
  id: 1,
  name: 'Jordan',
}
