// const strings = ["a", "b", "c", "d"];
// const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
// strings.push("e"); //add 0(1)

//pop
// strings.pop(); //remove last item 0(1)
// strings.pop();

//unshift
// strings.unshift("x"); // add to the first 0(n)

//splice
// strings.splice(2, 0, "alien"); // add to middle 0(n)

// console.log(strings);

// Create a function that reverse a string
// hi my name is emmanuel
// leunamme si eman ym ih

// const reverseString1=(str)=> {
//     if(typeof str !== 'string' || str.length < 2){
//         'please try another word'
//     }
//     const backwards = [];
//     const totalItem = str.length - 1;
//     for(let i=totalItem; i >=0; i--){
//         backwards.push(str[i])
//     }
//     console.log(backwards);
//     return backwards.join('');
// }

// const reverseString2= (str)=> {
//     if (typeof str !== "string" || str.length < 2) {
//       ("please try another word");
//     }
//     return str.split('').reverse().join('')
// }
// const reverseString3 = (str) => {
//   if (typeof str !== "string" || str.length < 2) {
//     ("please try another word");
//   }
//   return [...str].reverse().join("");
// };
// // console.log(reverseString1('hi my name is emmanuel'));
// console.log(reverseString2("hi my name is emmanuel"));
// console.log(reverseString3("hi my name is emmanuel"));

// mergeSortedArrays([0,3,4,31], [4,6,30])
// [0,3,4,31,4,6,30]
// let mergeSortedArrays = [[0,3,4,31], [4,6,30]]
// const merge = mergeSortedArrays.reduce((initial, current) => initial.concat(current), []);
// console.log(merge);

// or
// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));