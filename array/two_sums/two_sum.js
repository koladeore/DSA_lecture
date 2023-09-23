// two sums
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
const twoSum = (nums, target) =>{
   const map = new Map();
   for (let i = 0; i < nums.length; i++) {
     let num1 = nums[i];
     let num2 = target - num1;
     if (map.has(num2)) {
       return [map.get(num2), i];
     }
     map.set(num1, i);
   }
}
console.log(twoSum([2, 7, 11, 15], 9));

// // var twoSum = function(nums, target) {
//     for(let i = 0; i< nums.length -1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };