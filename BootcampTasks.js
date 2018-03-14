
// Task 1. Reverse String

function reverseString(str) {
    var result='';
    var len=str.length-1;
    for(var i=len;i>=0;i--){
        result+=str[i];
    }
    str=result;
    return str;
}


console.log(reverseString("hello"));
console.log(reverseString('Howdy'));
console.log(reverseString("Greetings from Earth"));



// Task 2. Factorialize a Number

function factorialize(num) {
    var result=1;
    for(var i=2;i<=num;i++){
        result=result*i;
    }
    num=result;
    return num;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));

