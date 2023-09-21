// // const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat'];
// const large = new Array(100).fill('nemo');
// function findNemo(array){
//     // let t0 = performance.now(); //calculate before the loop
//     // console.log('t0', t0);
//     for(let i = 0; i < array.length; i++){
//         if(array[0] === 'nemo'){
//             console.log('Found Nemo!');
//         }
//     }
//     let t1 = performance.now(); // after the loop
//     // console.log('Call to find Nemo took' + (t1-t0) + 'milliseconds');
//     // console.log("t1", t1);
// }
// // findNemo(nemo);
// // findNemo(everyone); 
// findNemo(large); // 0(n)

// function findNemo(array){
//   for(let i=0; i < array.length; i++){
//     if (array[i] === 'nemo'){
//       console.log('Found Nemo!');
//     }
//   }
// }
// findNemo(everyone);
// const findNemo2 = array => {
//   array.forEach(fish => {
//     if(fish === 'nemo'){
//       console.log('Found NEMO');
//     }
//   })
// }
// findNemo2(everyone);
// const findNemo3 = array => {
//   for(let fish of array){
//     if(fish === 'nemo'){
//       console.log('Found Nemo');
//     }
//   }
// }
// findNemo3(everyone);
// const boxes = [0,1,2,3,4,5];
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]); // 0(1)
//     console.log(boxes[1]); // 0(1)
// }

// logFirstTwoBoxes(boxes) // 0(2) 


// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //0(1)
//   a = 50 + 3; //0(1)

//   for (let i = 0; i < input.length; i++) { //0(n)
//     anotherFunction(); //0(n)
//     let stranger = true; //0(n)
//     a++; //0(n)
//   }
//   return a; //0(1)
// }
// Big0(3+4n)  //3 + n+ n + n+ n

// implies
// Big0(n)


// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; //0(1)
//   let b = 10; //0(1)
//   let c = 50; //0(1)
//   for (let i = 0; i < input; i++) { //0(n)
//     let x = i + 1; //0(n)
//     let y = i + 2; //0(n)
//     let z = i + 3; //0(n)

//   }
//   for (let j = 0; j < input; j++) { //0(n)
//     let p = j * 2; //0(n)
//     let q = j * 2;  //0(n)
//   }
//   let whoAmI = "I don't know"; //0(1)
// }

// Big0(4+7n) or 0(n)

// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat'];
// const large = new Array(100).fill('nemo');
// function findNemo(array){
//   for(let i = 0; i < array.length; i++){
//       console.log('running') //with out the break it run through
//       if(array[0] === 'nemo'){
//         console.log('Found Nemo!');
//         break; // with break it stop when it found nemo,, so instead of running 6 is run 4 times
//       }
//   }
// }
// findNemo(large); // 0(n)

// // log all pairs of array
// const boxes = ['a','b','c','d','e']
// function logAllPairsOfArray(array){
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//       console.log(array[i], array[j]);
//     }
//   }
// }
// logAllPairsOfArray(boxes); //0(n^2)

// function printAllNumbersThenAllPairSums(numbers){
//   console.log('these are the numbers:');
//   numbers.forEach(function (number) {
//     console.log(number);
//   });
//   console.log('these are there sums')
//   numbers.forEach(function (firstNumber) {
//     numbers.forEach(function (secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5]); //0(n^2);

// //#5 Space complexity O(1)
// function boooo(n){
//   for (let i = 0; i < n; i++){
//     console.log('boooo')
//   }
// }
// boooo([1,2,3,4,5,6])

// #6 Space complexity 0(n)
// function arrayOfHiNTimes(n){
//    var hiArray = [];
//    for (let i = 0; i < n; i++) {
//      hiArray[i] = "hi";
//    }
//    return hiArray;
// }

// console.log(arrayOfHiNTimes(6))


//find 1st and last tweet
const array = ['hi', 'my', 'teddy'];
console.log(array[0]) //first item 0(1)
console.log(array[array.length - 1]) //last item  3-1=2 arr[2]  0(1)

