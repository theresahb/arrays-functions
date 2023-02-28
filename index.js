// Question 1

// Mutating array methods modify the original array that they are called on. They change the array in place, and the original array is no longer the same after the method is called.

// 5 examples of mutating array methods are:
// push() - adds one or more elements to the end of an array
// pop() - removes the last element from an array
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// shift() - removes the first element from an array
// unshift() - adds one or more elements to the beginning of an array


// Non-mutating array methods do not modify the original array, but instead return a new array with the desired changes. The original array is unchanged after the method is called.

// 5 examples of non-mutating array methods are:
// slice() - returns a new array containing a portion of the original array (specified by its start and end indices)
// concat() - returns a new array that combines two or more arrays
// map() - returns a new array with the result of calling a function on each element of the original array
// filter() - returns a new array with all elements that pass a certain test implemented by a function
// reduce() - applies a function to each element of the array, and returns a single value that is the result of combining all of the outputs.




// Question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

1.
let kotlin = languages.push('Kotlin');
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]


2.
let java = languages.splice(3, 0, 'Java');
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


3.
let firstItem = languages.shift();
console.log(languages);
// [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


4.
let scalaSwift = languages.unshift('Scala', 'Swift');
console.log(languages);
// [
//   'Scala',      'Swift',
//   'JavaScript', 'Ruby',
//   'Java',       'PHP',
//   'Python',     'Kotlin'
// ]


5.
let goRust = languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);
// [
//     'Scala',      'Swift',
//     'JavaScript', 'Ruby',
//     'Java',       'Go',
//     'Rust',       'Python',
//     'Kotlin'
// ]


// Question 3
fruit = [ 'apple', 'mango', 'orange' ]


// Question 4

function max(arrayItems) {
    let maxValue = arrayItems[0]

    for (let i = 1; i < arrayItems.length; i++) {
        if (arrayItems[i] > maxValue) {
            maxValue = arrayItems[i];
        }
    }

    return maxValue
}

let numbers = [4, 5, 10, -2];
let maxNumber = max(numbers); 
console.log(maxNumber);
// 10


// Question 5
function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
}

console.log(valTimesIndex([15,20,35, 50, 65]));
// [ 0, 20, 70, 150, 260 ]