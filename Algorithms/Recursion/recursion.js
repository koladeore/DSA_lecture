let counter = 0;
function inception(){
    console.log('counter',counter)
    if(counter > 3 ){
        return 'done!';
    }
    counter++
    return inception();
}
console.log('inc',inception())

// identify the base case
// identify the recursive case
// get closer and closer and return when needed
// and usually you have two return the base case and the recursive case