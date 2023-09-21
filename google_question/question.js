// collection of number and matching pair that equal to the sum
// [1,2,3,9] sum = 8  // false
// [1,2,4,4] sum = 8 // true

// const findingMatchingPairSum = (arr, sum)=>{
//     for(let i = 0; i < arr.length-1; i++){
//         console.log('arrI',arr[i]);
//         for(let j = i+1; j < arr.length; j++){
//           console.log('arrJ',arr[j]);
//           console.log('addition',arr[i] + arr[j])
//           if(arr[i] + arr[j] === sum){
//               return true;
//           }
//         }
//     }
//     return false;
// }
// // findingMatchingPairSum([1, 2, 4, 4], 9);
// console.log(findingMatchingPairSum([6,4,3,2,1,2], 9));

// better
const findingMatchingPairSum = (arr, sum) =>{
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);
        
    }
    return false;
}
console.log(findingMatchingPairSum([6, 4, 3, 2, 1, 2], 9));