// let user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function () {
//     console.log("ahhhhhh!");
//   },
// };

// user.age;
// user.spell = "abra kadabra";
// user.scream();

// const a = new Map()
// //Map --> Gives you some order
// //Set --> No duplicate keys

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     console.log(this.data.length);
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// myHashTable.keys();

//Google Question
// First recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
const firstRecurringCharacter = (input) =>{
  for(let i=0; i < input.length; i++){
    for(let j=i+1; j < input.length; j++){
      if(input[i] === input[j]){
        return input[i];
      }
    }
  }
  return undefined;
} //0(n^2)
// space 0(1)
// console.log(firstRecurringCharacter([2,5,5,2,3]));
function firstRecurringCharacter4(input) {
  const totalItems = input.length;
  let firstRC = null;
  for (let index = 0; index < totalItems; index++) {
    for (let j = index + 1; j < totalItems; j++) {
      if (input[index] === input[j]) {
        if (firstRC === null || firstRC > j) {
          firstRC = j;
          console.log('first', firstRC);
        }
      }
    }
  }
  if (firstRC) {
    return input[firstRC];
    // console.log(firstRC)
  }
  return undefined;
}
// console.log(firstRecurringCharacter4([2,6,5,5,4,1, 2, 3,7]));
function firstRecurringCharacter1i(input) {
  let index = input.length;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        if (index > j) {
          index = j;
        }
      }
    }
  }
  return input[index]
} // O(n^2)
console.log(firstRecurringCharacter1i([2,5,5,2]));

const firstRecurringCharacter2 = (input) =>{
  let map = {}
  for(let i=0; i < input.length; i++){
    if(map[input[i]] !== undefined){
      return input[i]
    }
    else{
      map[input[i]] = i; // if not add it to the map (key = value) for map
    }
    // console.log(map);
  }
  return undefined;
}
// console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])); //0(n)
// space 0(n)

const firstRecurringCharacter3 = (input) =>{
  let set = new Set();
  for(let i=0; i < input.length; i++){
    if(set.has(input[i])){
      return input[i];
    }
    set.add(input[i]) //just key
    console.log(set);
  }
  return undefined;
}
// console.log(firstRecurringCharacter3([2,5,5,2,3]));
