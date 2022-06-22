function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i]+ array[j] === target){
        return true
      }
    }
  }
return false
}

/* 
  Write the Big O time complexity of your function here:

  O(n^2)
*/

/* 
  Add your pseudocode here:

  find the sum of each pair of numbers in an array
  if the some of any pair is equal to the target number, return true
  I no pair's sum is equal to the target, return false

*/

/*
  Add written explanation of your solution here:

  My solution to this problem required nested loops inorder to find the sum of each possible pair in the array.  The solution grabs the first element in the array and then finds the sum of it with each other element.  if the sum of any pair equals the target number, the function returns true.  if the algorithm cycles through every possible pair and none equal the target number, the function returns false.
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 1, 5, 9, 3, 12], 10));
}

module.exports = hasTargetSum;
