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

// or

type User = {
  id: number
  name: string
}

const user1: User = {
  id: 1,
  name: 'Jordan',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
// implicit arguments and return
const addNum = (x: number, y: number): number => {
  return x + y
}

// void if no return value
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
// Type can be used with primitives or unions, Interfaces cannot
type Point = number | string
const p1: Point = 1

interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

// question mark means optional
// readonly means property cannot be reassigned

const user2: UserInterface = {
  id: 1,
  name: 'Jordan',
}

// Interface within a function
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
  id: number
  name: string
  age?: number
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

// public: default
// private: property can only be accessed from the class
// protected: property can only be accessed from the class or extensions/subclasses
// can only be used in classes without an interface (interface define public contracts)

const jordan = new Person(1, 'Jordan Brasko')
console.log(jordan.register())

// Sublasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Jimbo Jenkins', 'Developer')

console.log(emp.register())
