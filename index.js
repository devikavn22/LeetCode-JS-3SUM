
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/ 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the input array.
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i];
  
        while (left < right) {
          if (nums[left] + nums[right] === target) {
            result.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates from left.
            while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates from right.
            left++;
            right--;
          } else if (nums[left] + nums[right] < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  };
  
  // Example usage:
  const nums1 = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums1)); // Output: [[-1,-1,2],[-1,0,1]]
  
  const nums2 = [0, 1, 1];
  console.log(threeSum(nums2)); // Output: []
  
  const nums3 = [0, 0, 0];
  console.log(threeSum(nums3)); // Output: [[0,0,0]]


  /* 
  This solution sorts the array and then uses three pointers (i, left, and right) to traverse 
  the array while avoiding duplicates. It maintains the property 
  that i < left < right and ensures that the result is unique. 
  The time complexity of this solution is O(n^2), and the space complexity is O(1).
  */