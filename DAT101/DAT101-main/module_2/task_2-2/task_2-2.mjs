"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*the answer should be -34*/
/*2 + 3 * 2 - 4 * 6*/
let answer1= 2+(3*(2-4)*6);
answer1=answer1.toString();
printOut("The answer is "+answer1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer).*/
const inch=25.4*10**-3; /*in meters*/
const value1=25.34; /*meters*/
let answer2=value1/inch;
answer2=answer2.toFixed(2);
answer2=answer2.toString();
printOut("The answer is "+answer2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 3 days, 12 hours, 14 minutes,
and 45 seconds to minutes. (Not allowed to use date objects). 
The task must be solved with primitives. */
let answer3=3*24*60+12*60+14+45/60;
answer3= answer3.toString();
printOut("The answer is "+answer3+" minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
let number4=6322.52, days,hours,minutes,seconds;
days=number4/(24*60)
days=Math.trunc(days);

number4=number4%(24*60);
hours=number4/60;
hours=Math.trunc(hours);

number4=number4%60;
minutes=number4;
minutes=Math.trunc(minutes);

number4=number4%1;
seconds=number4*60;
seconds=Math.trunc(seconds);

days=days.toString(),hours=hours.toString(),minutes=minutes.toString(),seconds=seconds.toString();
days+=" days, ";
hours+="hours, ";
minutes+="minutes and ";
seconds+="seconds.";
printOut("formated time is " +days+hours+minutes+seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
const nok =76/8.6;
let usd=54;
let kr=nok*usd;
usd=usd.toString();
kr=Math.trunc(kr);
kr=kr.toString();
printOut("nok "+kr +", usd "+usd+".");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text*/
let text6="There is much between heaven and earth that we do not understand.";
printOut(text6)
let length6 =text6.length;
length6=length6.toString
printOut(length6);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);