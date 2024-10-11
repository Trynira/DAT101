"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut(
  "--- Part 1 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
let lineOne=[];
let lineTwo=[];
for (let i=1; i<11; i++) {
    lineOne += i+",";
    lineTwo = i+","+lineTwo;
}
//lineOne.splice(-1,1);
//lineTwo.splice(-1,1);
printOut(lineOne);
printOut(lineTwo);
printOut(newLine);

printOut(
  "--- Part 2 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
const numberToGuess=42;
let number=0, guesses=0;
while (number != numberToGuess) {
    number=Math.floor(Math.random()*60)+1;
    guesses++;
}
printOut("The number is "+number+". It took "+guesses+" to guess.")
printOut(newLine);

printOut(
  "--- Part 3 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
let then= Date.now();
number=0, guesses=0;
while (number != numberToGuess) {
    number=Math.floor(Math.random()*1000000)+1;
    guesses++;
}
let time= Date.now()-then;
printOut("The number is "+number+". It took "+guesses+" to guess. It took "+time+"ms.")
printOut(newLine);

printOut(
  "--- Part 4 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/* let primes = [1], i=1, x=0;
number=0;

while (1<11) {
    Testing:
    for (x=0;x<=primes.length();x++){
        number=primes(x)/x;
        if (number%x==0){
            primes+=number;
            break Testing;
        }
    }
    i++;
}

printOut(primes);
*/
printOut(newLine);

printOut(
  "--- Part 5 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
let K=0, R=0, arr=[];
for (R=1;R<8;R++) {
  for (K=1;K<10;K++) {
    arr+= "K"+K+"R"+R+" ";
  }
  printOut(arr);
  arr=[];
  K=1;
}
printOut(newLine);

printOut(
  "--- Part 6 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/* 
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
*/
let Student=Math.floor(Math.random()*236)+1;
printOut(Student.toString());

printOut(newLine);

printOut(
  "--- Part 7 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
