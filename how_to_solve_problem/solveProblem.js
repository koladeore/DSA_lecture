// Give 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common item
// for example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// should return false.
// ---------
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x'];
// should return true


// 2 parameters - array - no size limit
// return true or false

// brute solution
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x'];

// function containsCommonItem(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(containsCommonItem(array1, array2)); //0(a*b)
// spaceComplexity 0(1)  //because we not creating a any variable we using the input

// second solution

// array1 ==> obj{
    // a: true,
    // b: true,
    // c: true,
    // x: true
// }
// array2[index] === obj.properties
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];
function containsCommonItem2(arr1, arr2){
    // loop through the first array and create object
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i]; //add a
            map[item] = true; //map[a]: true
        }
    }
    // loop through the second array and check if the second array exist on created object
    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true
        }
    }
    return false;
}
console.log(containsCommonItem2(array1, array2));  //0(a + b)
// space complexity 0(a)  we are creating a new object & adding the first array into which  take memory


// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];
// function containsCommonItem3(arr1, arr2){
//    return arr1.some(item => arr2.includes(item))
// }
// console.log(containsCommonItem3(array1,array2))