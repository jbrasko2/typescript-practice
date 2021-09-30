"use strict";
let id = 5;
let company = 'Jordan';
let isPublished = true;
let x = 'Hello';
let age;
x = true;
age = 30;
// Array
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Jordan', true];
// Tuple Array
let employee;
employee = [
    [1, 'Jordan'],
    [2, 'Jack'],
    [3, 'Jill'],
];
// Union - more than one type
let pid = 22;
pid = 'twenty-two';
// Enum - named constants, numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Up);
// Objects
const user = {
    id: 1,
    name: 'Jordan',
};
const user1 = {
    id: 1,
    name: 'Jordan',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
// implicit arguments and return
const addNum = (x, y) => {
    return x + y;
};
// void if no return value
function log(message) {
    console.log(message);
}
const p1 = 1;
// question mark means optional
// readonly means property cannot be reassigned
const user2 = {
    id: 1,
    name: 'Jordan',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// public: default
// private: property can only be accessed from the class
// protected: property can only be accessed from the class or extensions/subclasses
// can only be used in classes without an interface (interface define public contracts)
const jordan = new Person(1, 'Jordan Brasko');
console.log(jordan.register());
