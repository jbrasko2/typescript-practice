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
