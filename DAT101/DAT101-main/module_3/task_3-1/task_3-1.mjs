"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime ==7) {
  printOut("I can take the bus to school.");

} else if (wakeUpTime == 8){
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const integer=-10.3;
if (integer<0){
  printOut("Negative.");
} else if (integer ===0) {
  printOut("Zero.");
} else {
  printOut("Positive.")
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const photoSize =Math.floor(Math.random()*8)+1;
if (photoSize>=4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//const photoSize =Math.floor(Math.random()*8)+1;
if (photoSize<4) {
  printOut("The image is too small");
} else if (photoSize >=6) {
  printOut("Image is too large");
} else {
  printOut("Thank you");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//const monthList =["January", "February", "March", "April", "May",
//  "June", "July", "August", "September", "October", "November", "December"];
//  const noOfMonth = monthList.length;
//  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
let days=0;
const monthList30 = ["April","June","September","November"]
if (monthList30.includes(monthName)) {
  printOut(monthName + " has 30 days.");
} else if (monthName == "February") {
  printOut(monthName + " has 28 days.");
} else{
  printOut(monthName + " has 31 days.");
} 
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthListClosed = ["March","May"]
if (monthListClosed.includes(monthName)) {
  printOut("The Art gallery is closed in " + monthName+" due to renovations.");
} else if (monthName=="April") {
  printOut("The art gallery has temporary premises in the building next door in April due to renovations, welcome");
} 
else {
  printOut("The art gallery is open in "+ monthName+", Welcome")
}
