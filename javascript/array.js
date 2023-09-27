'use strict';

//Array

const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['🍊', '🍌'];

for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));

//push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍓', '🍍');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍎', '🍉');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍏', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//searching
console.clear();
console.log(fruits);

//indexOf
console.log(fruits.indexOf('🍊'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

//includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//lastIndexOf
console.clear('🍊');
fruits.push('🍊');
console.log(fruits);
console.log(fruits.indexOf('🍊'));
console.log(fruits.lastIndexOf('🍊'));

console.clear();

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const string = fruits.toString();
    console.log(string);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arr = fruits.split(',');
    console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const reverse = array.reverse();
    console.log(reverse);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    array.splice(0,2);
    console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const student = students.find(student => student.score === 90);
    console.log(student);
}

// Q6. make an array of enrolled students
{
    const enrolledStudents = students.filter(student => student.enrolled === true);
    console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const scores = students.map(student => student.score);
    console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
    const check = students.every((student) => student.score > 50);
    console.log(check);
}

// Q9. compute students' average score
{
    // const total = students.reduce((a, b) => a.score + b.score)
    // console.log(averageScore);????
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const string = students.map(student => student.score).join(',');
    console.log(string);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const sortStudents = students.sort((a, b) => a.score - b.score);
    console.log(sortStudents);
}