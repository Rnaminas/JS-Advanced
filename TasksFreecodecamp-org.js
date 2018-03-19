
// Task  5 FreecodeCamp - Find the Longest Word in a String Complete 
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

    //Task 6 FreecodeCamp - Title Case a Sentence

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






// Task 1 - Дан массив arr. Найдите среднее арифметическое его элементов. 
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.


function getAverageValue(Array){
  var average=0; var i;
    for(i =0;i<Array.length;i++){
      average+=Array[i];
    }
  return average/Array.length;
}

var arr =[12, 15, 20, 25, 59, 79];
console.log(getAverageValue(arr));


// Task 2 - Дан массив с числами. Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень из этих чисел 


function getPositivArray(Array){
	var PositivArray=[]; var j=0;
	for (var i=0;i<Array.length; i++) {
		if(Array[i]<0) continue; // если число меньше нуля переходим к следующей итерации
		else if(Array[i]>0){
			PositivArray[j]=Array[i];
			j++;
		}
	}
	return Array=PositivArray;	
	}

function getRoot(Array){ // берем корень для всего массива
	var result=0;
	for (var i=0;i<Array.length; i++) {
		Array[i]=Math.sqrt(Array[i]);
		}
	

	return Array;	
	}


var arr =[-12, 16, 25, -25, -59, 625];
// console.log(arr);
arr=getPositivArray(arr);
arr=getRoot(arr);	
// console.log(arr);


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

