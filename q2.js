// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let largest = 0;
    for (let num of array) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console
console.log(findLargest(testArray2));