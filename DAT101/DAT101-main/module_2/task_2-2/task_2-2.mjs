"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut(
  "--- Part 1 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*the answer should be -34*/
/*2 + 3 * 2 - 4 * 6*/
let answer1 = 2 + 3 * (2 - 4) * 6;
answer1 = answer1.toString();
printOut("2+3*(2-4)*6=" + answer1);
printOut(newLine);

printOut(
  "--- Part 2 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer).*/
const inch = 25.4 * 10 ** -3; /*in meters*/
const value1 = 25.34; /*meters*/
let answer2 = value1 / inch;
answer2 = answer2.toFixed(2);
answer2 = answer2.toString();
printOut("25 meters and 34 centimeters = " + answer2+" inches.");
printOut(newLine);

printOut(
  "--- Part 3 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Convert 3 days, 12 hours, 14 minutes,
and 45 seconds to minutes. (Not allowed to use date objects). 
The task must be solved with primitives. */
let answer3 = 3 * 24 * 60 + 12 * 60 + 14 + 45 / 60;
answer3 = answer3.toString();
printOut("3 days, 12 hours, 14 minutes, 45 seconds = " + answer3 + " minutes.");
printOut(newLine);

printOut(
  "--- Part 4 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
let number4 = 6322.52,
  days,
  hours,
  minutes,
  seconds;
days = number4 / (24 * 60);
days = Math.trunc(days);

number4 = number4 % (24 * 60);
hours = number4 / 60;
hours = Math.trunc(hours);

number4 = number4 % 60;
minutes = number4;
minutes = Math.trunc(minutes);

number4 = number4 % 1;
seconds = number4 * 60;
seconds = Math.trunc(seconds);

(days = days.toString()),
  (hours = hours.toString()),
  (minutes = minutes.toString()),
  (seconds = seconds.toString());
days += " days, ";
hours += "hours, ";
minutes += "minutes and ";
seconds += "seconds.";
printOut("6322.52 minutes is: " + days + hours + minutes + seconds);
printOut(newLine);

printOut(
  "--- Part 5 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
const nok = 76 / 8.6;
let usd = 54;
let kr = nok * usd;
usd = usd.toString();
kr = Math.trunc(kr);
kr = kr.toString();
printOut("54 USD = " + kr + " NOK");
printOut(kr+" NOK = " + usd + " USD");
printOut(newLine);

printOut(
  "--- Part 6 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text*/
let text6 = "There is much between heaven and earth that we do not understand.";
printOut(text6);
let length6 = text6.length;
length6 = length6.toString();
printOut("The text has "+length6+" characters");
printOut("The character at position 19 is: "+text6.charAt(19));
let part6_3 = "The characters between position number 35 and the 8 following are: ";
for (let i = -1; i < 9; i++) {
  part6_3 += text6.charAt(35 + i);
}
printOut(part6_3);
let part6index = "the position that earth starts is: ";
part6index += "34";
printOut(part6index);
printOut(newLine);
printOut(
  "--- Part 7 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?*/
let part7=(5>3);
printOut("5 > 3 is "+part7.toString());
part7=(7>=7);
printOut("7 >= 7 is "+part7.toString());
part7=("a">"b");
printOut("\"a\" > \"b\" is "+part7.toString());
part7=("1"<"a");
printOut("\"1\" < \"a\" is "+part7.toString()); /* wrong*/
part7=("2500"<"abcd");
printOut("\"2500\" < \"abcd\" is "+part7.toString());
part7=("arne"!=="thomas");
printOut("\"arne\" !== \"thomas\" is "+part7.toString());
part7=(2==5);
printOut("(2 === 5) === true is "+part7.toString());
part7=!("abcd">"bcd");
printOut("(\"abcd\" > \"bcd\") === false is "+part7.toString());
printOut(newLine);

printOut(
  "--- Part 8 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!*/
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number */
let str1 ="254", str2="57.23", str3="25 kroner";

let num1=parseInt(str1);
printOut("\"254\" = "+num1.toString());
let num2=parseFloat(str2);
printOut("\"57.23\" = "+num2.toString());
str3=str3.slice(0,-7);
let num3=parseInt(str3);
printOut("\"25 kroner\" = "+num3.toString());
printOut(newLine);

printOut(
  "--- Part 9 ----------------------------------------------------------------------------------------------"
);
/* Put your code below here!
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/
const r= Math.floor(Math.random()*360)+1;
printOut("const r= Math.floor(Math.random()*360)+1 = "+r.toString());
printOut(newLine);

/* Task 10*/
printOut(
  "--- Part 10 ---------------------------------------------------------------------------------------------"
);
/* Put your code below here!
Use modulus (%) to calculate how many weeks and days are in 131 days.*/
let totaldays=131, part10weeks=0,part10days=0;
part10days=totaldays%7;
part10weeks=totaldays/7

printOut("There are "+Math.trunc(part10weeks)+" weeks and "+part10days+" days in 131 days!");
printOut(newLine);
