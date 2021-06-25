// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

/**
 * inputs:
 * @param {*} arr: an unsorted array 
 * @param {*} target_sum: an integer 
 * output:
 * @returns the sum that close to the target and should be the smaller one
 * 
 * steps:
 *  - using three pointers the first pointer is to traverse all the elements inside the array and
 *    left pointer is i + 1, right pointer is length - 1
 *  - when the current sum is less than the target move the left and update the current sum, when it's greater than the ta
 *    target move right pointer and update the current sum
 *  - get the current sum the distance between target and currentsum find the smaller distance store in the result
 *  - compare the result and get smaller one
 * 
 * varialbes: left, right: pointers. currentSum: store the sum of current elements. result: store the final result
 *            minDistacnce: use to compare the minimum distance from the target by default is inifinity
 * 
 * sort the array
 * a for loop traverse all the element
 *    initialize left as i + 1 and right is length - 1
 *    a while loop runs when left is less of equal than the right
 *        addup the current sum with arr[i], arr[left], and arr[right]
 * 
 *        compare if the minDistance greater than the distance between target and currentSum
 *              store the smaller distance to minDistance
 *              store the current to the result
 * 
 *        compare the result to get the small one
 *      
 *        if the current sum is less than the targetsum
 *            update the currentsum 
 *            update the left pointer
 *        if the current sum is greater than the targetSUm
 *            update the currentSUm
 *            update the rightPointer
 *  return the result
 * 
 * edge cases: arr is [] => 0  
 */
const triplet_sum_close_to_target = function (arr, target_sum) {
  // TODO: Write your code here
  if(!arr.length) return 0;

  let currentSum = 0,
      result = Infinity;
  
  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length - 2; i++){
    let left = i + 1,
        right = arr.length - 1;
    
    while(left < right){
        currentSum = arr[i] + arr[left] + arr[right];

        if (Math.abs(currentSum - target_sum) === 0) return currentSum;
        if (Math.abs(currentSum - target_sum) < Math.abs(result - target_sum)) result = currentSum;

        if(currentSum < target_sum){
          left ++;
        }else{
          right --;
        }
    }
  }
  return result;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2)); // 1
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); // 0
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); // 3





















// Solution
// -----
// arr.sort((a, b) => a - b);
// let smallest_difference = Infinity;
// for (let i = 0; i < arr.length - 2; i++) {
//   let left = i + 1,
//     right = arr.length - 1;
//   while (left < right) {
//     const target_diff = targetSum - arr[i] - arr[left] - arr[right];
//     if (target_diff === 0) { // we've found a triplet with an exact sum
//       return targetSum - target_diff; // return sum of all the numbers
//     }

//     if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
//       smallest_difference = target_diff; // save the closest difference
//     }
//     // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
//     if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
//       (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
//       smallest_difference = target_diff; // save the closest and the biggest difference
//     }

//     if (target_diff > 0) {
//       left += 1; // we need a triplet with a bigger sum
//     } else {
//       right -= 1; // we need a triplet with a smaller sum
//     }
//   }
// }
// return targetSum - smallest_difference;

// -----

// Time complexity #
// Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// The above algorithm’s space complexity will be O(N), which is required for sorting.
