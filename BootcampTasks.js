
// Task  5 - Find the Longest Word in a String Complete 
        function findLongestWord(str) {
            var words =str.split(' ');
            var bigString=words[0];
            for(var i=1;i<words.length;i++) {
                if(words[i].length>bigString.length){
                    bigString=words[i];
                }
            }
            str=bigString;
            return str.length;
        }

        console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
        console.log(findLongestWord("May the force be with you"));
        console.log(findLongestWord("Google do a barrel roll"));
        console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
        console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));

    //Task 6 - Title Case a Sentence

        function titleCase(str) {
            var words=str.split(' ');
            for(var i=0;i<words.length;i++){
               var string=words[i].toLowerCase().split('');
                string[0]=string[0].toUpperCase();
               words[i]=string.join('');
            }
            str=words.join(' ');
            return str;
        }

        console.log(titleCase("I'm a little tea pot"));
        console.log(titleCase("sHoRt AnD sToUt"));
        console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


// *************************************************



// Task 1. Reverse String

// function reverseString(str) { // пока что такой простой способ
//     var result='';
//     var len=str.length-1;
//     for(var i=len;i>=0;i--){
//         result+=str[i];
//     }
//     str=result;
//     return str;
// }


// console.log(reverseString("hello"));
// console.log(reverseString('Howdy'));
// console.log(reverseString("Greetings from Earth"));



// Task 2. Factorialize a Number

// function factorialize(num) { // пока что такой простой способ
//     var result=1;
//     for(var i=2;i<=num;i++){
//         result=result*i;
//     }
//     num=result;
//     return num;
// }

// console.log(factorialize(5));
// console.log(factorialize(10));
// console.log(factorialize(20));
// console.log(factorialize(0));

